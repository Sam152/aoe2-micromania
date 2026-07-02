import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTrpc } from "../../../hooks/useTrpc.ts";
import { GameCanvas } from "../../../components/GameCanvas.tsx";
import type { Bot } from "../../../../common/ai/training/infra/repo/getAllTourneyBots.ts";
import { useBotVsBotStateManager } from "./hooks/useBotVsBotStateManager.ts";
import { useBlackboardOverlay } from "./hooks/useBlackboardOverlay.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "../../../../common/ai/training/evolution/candidates/generateCandidateTree.ts";
import { params } from "../../../../common/ai/training/params.ts";
import { UnitType } from "../../../../common/units/UnitType.ts";
import { overlayItems } from "./overlay/blackboardValues.ts";
import { BehaviourTreeView } from "./BehaviourTreeView.tsx";

// One checkbox per overlay item: keys with an enum param expand to one entry
// per enum value (e.g. `key[ARCHER]`), each toggleable independently.
const overlayCheckboxes = overlayItems();

export function TrainedBots() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [borrowBots, setBorrowBots] = useState<Bot[]>([]);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [homeBot, setHomeBot] = useState<Bot | null>(null);
  const [awayBot, setAwayBot] = useState<Bot | null>(null);
  const [tickInterval, setTickInterval] = useState(500);
  const [countText, setCountText] = useState(String(params.NEXT_GENERATION_RANDOM_MUTATIONS));
  const count = Math.max(1, Number(countText) || 1);
  const [mutationSeed, setMutationSeed] = useState(0);
  const [swapSeed, setSwapSeed] = useState(0);
  const [inspectBot, setInspectBot] = useState<Bot | null>(null);
  const [viewMode, setViewMode] = useState<"generation" | "skill">("generation");
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayMenuOpen, setOverlayMenuOpen] = useState(false);
  // Empty set means "show all"; checking values narrows the overlay to those.
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  const trpc = useTrpc();
  useEffect(() => {
    trpc.getAllBots.query().then(setBots);
    trpc.getAllBorrowBots.query().then(setBorrowBots);
  }, [trpc]);

  // One leader per group: the highest-rated bot in each group. Groups are
  // ordered by their leader's elo ascending so the strongest sits at the end
  // (and gets scrolled into view on load).
  const groupLeaders = useMemo(() => {
    const byGroup = new Map<string, Bot>();
    for (const bot of bots) {
      const current = byGroup.get(bot.groupName);
      if (!current || bot.elo > current.elo) { byGroup.set(bot.groupName, bot); }
    }
    return [...byGroup.values()].sort((a, b) => a.elo - b.elo);
  }, [bots]);

  // On first load, default the matchup to the latest two generations in the
  // currently active group (the one still being trained): the newest
  // generation vs the one before it (or itself if there's only one).
  // Slot colours: home is blue, away is red (see styles.css .drop-slot--home
  // / .drop-slot--away), so the later generation goes in away to show red.
  const defaultedRef = useRef(false);
  useEffect(() => {
    if (defaultedRef.current || bots.length === 0) { return; }
    const { home, away } = defaultGenerationMatchup(bots);
    if (!home && !away) { return; }
    defaultedRef.current = true;
    setHomeBot(home); // blue
    setAwayBot(away); // red
  }, [bots]);

  // Bot skill view: the 30 highest-rated bots across all groups, generations
  // ignored entirely. Sorted ascending so the strongest sits on the right (and
  // gets scrolled into view), matching the generation view's leader strip.
  const topBots = useMemo(
    () => [...bots].sort((a, b) => b.elo - a.elo).slice(0, 30).reverse(),
    [bots],
  );

  // Switching views also swaps in that view's canonical matchup: skill view
  // pits the two highest-rated bots (highest in red/away, next in blue/home),
  // generation view restores the default latest-vs-previous matchup.
  const selectView = (mode: "generation" | "skill") => {
    if (mode === viewMode) { return; }
    setViewMode(mode);
    if (mode === "skill") {
      const ranked = [...bots].sort((a, b) => b.elo - a.elo);
      if (ranked.length > 0) {
        setAwayBot(ranked[0]); // red = highest
        setHomeBot(ranked[1] ?? ranked[0]); // blue = next highest
      }
    } else {
      const { home, away } = defaultGenerationMatchup(bots);
      setHomeBot(home);
      setAwayBot(away);
    }
  };

  const expandedGroupBots = useMemo(
    () =>
      expandedGroup !== null
        ? [...bots.filter((b) => b.groupName === expandedGroup)].sort((a, b) => a.generation - b.generation)
        : [],
    [expandedGroup, bots],
  );

  const gameKey = `${homeBot?.id}-${awayBot?.id}-${tickInterval}-${mutationSeed}-${swapSeed}`;
  const { manager: stateManager, botInstances } = useBotVsBotStateManager(
    homeBot ?? undefined,
    awayBot ?? undefined,
    tickInterval,
    gameKey,
  );
  useBlackboardOverlay(stateManager, botInstances, showOverlay, selectedKeys);

  const toggleKey = (key: string) =>
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) { next.delete(key); }
      else { next.add(key); }
      return next;
    });

  const championTilesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (championTilesRef.current) {
      championTilesRef.current.scrollLeft = championTilesRef.current.scrollWidth;
    }
  }, [groupLeaders]);

  const scrollToEnd = useCallback((el: HTMLDivElement | null) => {
    if (el) { el.scrollLeft = el.scrollWidth; }
  }, []);

  const handleDragStart = (e: React.DragEvent, bot: Bot) => {
    e.dataTransfer.setData("botId", String(bot.id));
  };

  const handleDrop = (e: React.DragEvent, slot: "home" | "away") => {
    e.preventDefault();
    const botId = Number(e.dataTransfer.getData("botId"));
    const bot = bots.find((b) => b.id === botId);
    if (!bot) { return; }
    if (slot === "home") { setHomeBot(bot); }
    else { setAwayBot(bot); }
  };

  const handleMutate = (slot: "home" | "away") => {
    const bot = slot === "home" ? homeBot : awayBot;
    if (!bot) { return; }
    // Always mutate the original bot's tree, never an already-mutated one, so
    // repeated rolls produce fresh single mutations rather than compounding.
    const original = bots.find((b) => b.id === bot.id) ?? bot;
    const tree = randomlyMutateUnitAwareBehaviourTree({ tree: original.tree, count, borrowBots });
    const letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const mutated: Bot = { ...original, tree, botName: `${original.botName}-${letter}${count}` };
    if (slot === "home") { setHomeBot(mutated); }
    else { setAwayBot(mutated); }
    setMutationSeed((s) => s + 1);
  };

  const handleRevert = (slot: "home" | "away") => {
    const bot = slot === "home" ? homeBot : awayBot;
    if (!bot) { return; }
    const original = bots.find((b) => b.id === bot.id) ?? bot;
    if (slot === "home") { setHomeBot(original); }
    else { setAwayBot(original); }
    setMutationSeed((s) => s + 1);
  };

  return (
    <>
      <GameCanvas
        key={gameKey}
        startAs="SPECTATOR"
        stateManager={stateManager}
        canvasStyle={{ width: "100vw", height: "calc(100vh - 52px)" }}
        // Allow browser controls like find to work.
        preventDefaultOnInput={false}
      />

      <div className="speed-controls">
        <div className="view-toggle">
          <button
            className={`speed-btn${viewMode === "generation" ? " speed-btn--active" : ""}`}
            onClick={() => selectView("generation")}
            title="Generation view"
          >
            ⑂
          </button>
          <button
            className={`speed-btn${viewMode === "skill" ? " speed-btn--active" : ""}`}
            onClick={() => selectView("skill")}
            title="Bot skill view"
          >
            ★
          </button>
        </div>
        {([["1x", 1000], ["2x", 500], ["4x", 250], ["max", 1]] as const).map(([label, ms]) => (
          <button
            key={label}
            className={`speed-btn${tickInterval === ms ? " speed-btn--active" : ""}`}
            onClick={() => setTickInterval(ms)}
          >
            {label}
          </button>
        ))}
        <label className="count-control">
          mutation count
          <input
            type="number"
            min={1}
            value={countText}
            onChange={(e) => setCountText(e.target.value)}
          />
        </label>
        <button
          className={`speed-btn speed-btn--standalone${showOverlay ? " speed-btn--active" : ""}`}
          onClick={() => setShowOverlay((v) => !v)}
          title="Toggle blackboard overlay"
        >
          blackboard
        </button>
        <div className="bb-menu">
          <button
            className={`speed-btn${overlayMenuOpen ? " speed-btn--active" : ""}`}
            onClick={() => setOverlayMenuOpen((v) => !v)}
            title="Choose which blackboard values to show"
          >
            ☰
          </button>
          {overlayMenuOpen && (
            <div className="bb-menu__dropdown">
              {overlayCheckboxes.map(({ label }) => (
                <label key={label} className="bb-menu__item">
                  <input
                    type="checkbox"
                    checked={selectedKeys.has(label)}
                    onChange={() => toggleKey(label)}
                  />
                  {label}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="matchup-bar">
        <div className="matchup-tiles-col">
          {viewMode === "generation"
            ? (
              <>
                <div className="generation-tiles" ref={championTilesRef}>
                  {groupLeaders.map((bot) => {
                    const slot = slotForGroup(bot.groupName, homeBot, awayBot);
                    return (
                      <BotTile
                        key={bot.id}
                        label={String(bot.elo)}
                        value={initials(bot.groupName)}
                        title={bot.groupName}
                        expanded={expandedGroup === bot.groupName}
                        slot={slot}
                        onClick={() => setExpandedGroup(expandedGroup === bot.groupName ? null : bot.groupName)}
                        onDragStart={(e) => handleDragStart(e, bot)}
                      />
                    );
                  })}
                </div>

                {expandedGroup !== null && expandedGroupBots.length > 0 && (
                  <div className="generation-tiles generation-tiles--secondary" ref={scrollToEnd}>
                    {expandedGroupBots.map((bot) => (
                      <BotTile
                        key={bot.id}
                        label={String(bot.elo)}
                        value={initials(bot.botName)}
                        title={bot.botName}
                        small
                        slot={slotForBot(bot, homeBot, awayBot)}
                        onDragStart={(e) => handleDragStart(e, bot)}
                      />
                    ))}
                  </div>
                )}
              </>
            )
            : (
              <div className="generation-tiles" ref={scrollToEnd}>
                {topBots.map((bot) => (
                  <BotTile
                    key={bot.id}
                    label={String(bot.elo)}
                    value={initials(bot.botName)}
                    title={bot.botName}
                    expanded={inspectBot?.id === bot.id}
                    slot={slotForBot(bot, homeBot, awayBot)}
                    onClick={() => setInspectBot(bot)}
                    onDragStart={(e) => handleDragStart(e, bot)}
                  />
                ))}
              </div>
            )}
        </div>

        <div className="matchup-slots">
          <DropSlot
            color="home"
            bot={homeBot}
            onDrop={(e) => handleDrop(e, "home")}
            onClear={() => setHomeBot(null)}
            onMutate={() => handleMutate("home")}
            onRevert={() => handleRevert("home")}
            onInspect={() => setInspectBot(homeBot)}
          />
          <div className="matchup-vs-group">
            <span className="matchup-vs">VS</span>
            <button
              className="matchup-swap"
              onClick={() => {
                setHomeBot(awayBot);
                setAwayBot(homeBot);
                setSwapSeed((s) => s + 1);
              }}
              title="Swap"
            >
              ⇄
            </button>
          </div>
          <DropSlot
            color="away"
            bot={awayBot}
            onDrop={(e) => handleDrop(e, "away")}
            onClear={() => setAwayBot(null)}
            onMutate={() => handleMutate("away")}
            onRevert={() => handleRevert("away")}
            onInspect={() => setInspectBot(awayBot)}
          />
        </div>
      </div>

      {inspectBot && (
        <TreeModal
          bot={inspectBot}
          baseBot={bots.find((b) => b.id === inspectBot.id) ?? inspectBot}
          onClose={() => setInspectBot(null)}
        />
      )}

    </>
  );
}

// The default generation-view matchup: within the currently active group (the
// one still being trained), the newest generation vs the one before it (or
// itself if there's only one). Home is blue, away is red, so the later
// generation goes in away to show red.
function defaultGenerationMatchup(bots: Bot[]): { home: Bot | null; away: Bot | null } {
  const activeBots = bots
    .filter((b) => b.isActive)
    .sort((a, b) => b.generation - a.generation);
  if (activeBots.length === 0) { return { home: null, away: null }; }
  const latest = activeBots[0];
  const previous = activeBots[1] ?? latest;
  return { home: previous, away: latest };
}

// Resolve the highlight for a group's leader tile based on which slots hold a
// bot from this group. Both slots from this group stripes the tile (red away /
// blue home); a single slot colours it solid in that slot's colour.
function slotForGroup(
  groupName: string,
  homeBot: Bot | null,
  awayBot: Bot | null,
): "home" | "away" | "both" | undefined {
  const homeInGroup = homeBot?.groupName === groupName;
  const awayInGroup = awayBot?.groupName === groupName;
  if (homeInGroup && awayInGroup) { return "both"; }
  if (homeInGroup) { return "home"; }
  if (awayInGroup) { return "away"; }
  return undefined;
}

// The highlight for a single bot's tile based on which slots hold that exact
// bot (by id): both slots stripes it, a single slot colours it solid.
function slotForBot(
  bot: Bot,
  homeBot: Bot | null,
  awayBot: Bot | null,
): "home" | "away" | "both" | undefined {
  const home = homeBot?.id === bot.id;
  const away = awayBot?.id === bot.id;
  if (home && away) { return "both"; }
  if (home) { return "home"; }
  if (away) { return "away"; }
  return undefined;
}

// The initials of a hyphen/underscore separated name, e.g. "foo-bar" -> "fb".
function initials(name: string): string {
  return name.split(/[-_]/).map((part) => part[0] ?? "").join("");
}

function BotTile({
  label,
  value,
  title,
  expanded,
  small,
  slot,
  onClick,
  onDragStart,
}: {
  label: string;
  value: string | number;
  title?: string;
  expanded?: boolean;
  small?: boolean;
  slot?: "home" | "away" | "both";
  onClick?: () => void;
  onDragStart: (e: React.DragEvent) => void;
}) {
  const classes = [
    "gen-tile",
    expanded && "gen-tile--expanded",
    small && "gen-tile--small",
    slot === "home" && "gen-tile--slotted-home",
    slot === "away" && "gen-tile--slotted-away",
    slot === "both" && "gen-tile--slotted-both",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      draggable
      onDragStart={onDragStart}
      onClick={onClick}
      title={title}
    >
      <span className="gen-tile__gen">{label}</span>
      <span className="gen-tile__elo">{value}</span>
    </div>
  );
}

function DropSlot({
  color,
  bot,
  onDrop,
  onClear,
  onMutate,
  onRevert,
  onInspect,
}: {
  color: "home" | "away";
  bot: Bot | null;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
  onMutate: () => void;
  onRevert: () => void;
  onInspect: () => void;
}) {
  const [dragOver, setDragOver] = useState(false);

  const classes = [
    "drop-slot",
    `drop-slot--${color}`,
    dragOver && "drop-slot--over",
    bot && "drop-slot--filled",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        setDragOver(false);
        onDrop(e);
      }}
    >
      {bot
        ? (
          <>
            <span className="drop-slot__name">{bot.botName}</span>
            <button className="drop-slot__inspect" onClick={onInspect} title="Inspect tree">{"{}"}</button>
            <button className="drop-slot__revert" onClick={onRevert} title="Revert to original tree">↺</button>
            <button className="drop-slot__dice" onClick={onMutate} title="Mutate tree">⚅</button>
            <button className="drop-slot__clear" onClick={onClear}>✕</button>
          </>
        )
        : <span className="drop-slot__empty">drag a bot here</span>}
    </div>
  );
}

// Close a modal when Escape is pressed.
function useEscape(onClose: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
}

function TreeModal({ bot, baseBot, onClose }: { bot: Bot; baseBot: Bot; onClose: () => void }) {
  useEscape(onClose);
  const unitTypes = [UnitType.Archer, UnitType.Mangonel, UnitType.Monk];
  const [activeUnit, setActiveUnit] = useState<UnitType>(unitTypes[0]);

  return (
    <div className="tree-modal__backdrop" onClick={onClose}>
      <div className="tree-modal" onClick={(e) => e.stopPropagation()}>
        <div className="tree-modal__header">
          <span className="tree-modal__title">{bot.botName} · {bot.groupName}</span>
          <button className="tree-modal__close" onClick={onClose}>✕</button>
        </div>
        <div className="tree-modal__tabs">
          {unitTypes.map((unit) => (
            <button
              key={unit}
              className={`tree-modal__tab${activeUnit === unit ? " tree-modal__tab--active" : ""}`}
              onClick={() => setActiveUnit(unit)}
            >
              {UnitType[unit]}
            </button>
          ))}
        </div>
        <BehaviourTreeView node={bot.tree[activeUnit]} base={baseBot.tree[activeUnit]} />
      </div>
    </div>
  );
}


import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTrpc } from "../../../hooks/useTrpc.ts";
import { GameCanvas } from "../../../components/GameCanvas.tsx";
import type { Bot } from "../../../../common/ai/training/infra/repo/getAllTourneyBots.ts";
import { useBotVsBotStateManager } from "./hooks/useBotVsBotStateManager.ts";
import { useBlackboardOverlay } from "./hooks/useBlackboardOverlay.ts";
import { randomlyMutateUnitAwareBehaviourTreeAllUnits } from "../../../../common/ai/mutation/randomlyMutateUnitAwareBehaviourTreeAllUnits.ts";
import { UnitType } from "../../../../common/units/UnitType.ts";
import { overlayItems } from "./overlay/blackboardValues.ts";
import { BehaviourTreeView, NodeSelection } from "./BehaviourTreeView.tsx";
import { mutateAllUnitsWithLog, MutationLogEntry } from "./mutateWithLog.ts";

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
  const [countText, setCountText] = useState("1");
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
    // A fresh empty bot when dragged from the empty-bot button, otherwise the
    // dragged bot looked up by id.
    const bot = e.dataTransfer.getData("emptyBot")
      ? makeEmptyBot()
      : bots.find((b) => b.id === Number(e.dataTransfer.getData("botId")));
    if (!bot) { return; }
    if (slot === "home") { setHomeBot(bot); }
    else { setAwayBot(bot); }
  };

  const handleMutate = (slot: "home" | "away") => {
    const bot = slot === "home" ? homeBot : awayBot;
    if (!bot) { return; }
    // Cumulative: mutate the current (possibly already-mutated) tree so rolls
    // compound, bumping the -a{n} suffix to show how many times it's mutated.
    const tree = randomlyMutateUnitAwareBehaviourTreeAllUnits({ tree: bot.tree, count, borrowBots });
    const mutated: Bot = { ...bot, tree, botName: nextMutationName(bot.botName, count) };
    if (slot === "home") { setHomeBot(mutated); }
    else { setAwayBot(mutated); }
    setMutationSeed((s) => s + 1);
  };

  const handleRevert = (slot: "home" | "away") => {
    const bot = slot === "home" ? homeBot : awayBot;
    if (!bot) { return; }
    // The empty bot has no persisted original, so restore a fresh empty tree.
    const original = bot.id === EMPTY_BOT_ID ? makeEmptyBot() : bots.find((b) => b.id === bot.id) ?? bot;
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
        <button
          className="speed-btn speed-btn--standalone"
          draggable
          onDragStart={(e) => e.dataTransfer.setData("emptyBot", "1")}
          title="Drag an empty bot into a player slot"
        >
          empty bot
        </button>
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
          borrowBots={borrowBots}
          count={count}
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

// Sentinel id for the draggable empty bot; it has no persisted original, so
// reverting one restores a fresh empty tree rather than a lookup in `bots`.
const EMPTY_BOT_ID = -1;

// A throwaway bot with an empty (no-op) selector tree per unit, for dragging a
// blank slate into a player slot to build up (via mutation) or play against.
function makeEmptyBot(): Bot {
  const emptyTree = () => ({ nodeType: "selector" as const, nodes: [] });
  return {
    id: EMPTY_BOT_ID,
    botName: "empty",
    tree: {
      [UnitType.Archer]: emptyTree(),
      [UnitType.Mangonel]: emptyTree(),
      [UnitType.Monk]: emptyTree(),
    },
    iterationCount: 0,
    groupName: "empty",
    elo: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    generation: 0,
    isActive: false,
  };
}

// Advance the "-a{n}" mutation counter on a bot name by `count` (the number of
// mutations just applied), or start it there, so the number tracks the total
// mutations applied: e.g. two rolls at count 3 read foo-a3, foo-a6.
function nextMutationName(name: string, count: number): string {
  const match = name.match(/^(.*)-a(\d+)$/);
  return match ? `${match[1]}-a${Number(match[2]) + count}` : `${name}-a${count}`;
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

function TreeModal(
  { bot, baseBot, borrowBots, count, onClose }: {
    bot: Bot;
    baseBot: Bot;
    borrowBots: Bot[];
    count: number;
    onClose: () => void;
  },
) {
  useEscape(onClose);
  const unitTypes = [UnitType.Archer, UnitType.Mangonel, UnitType.Monk];
  const [activeUnit, setActiveUnit] = useState<UnitType>(unitTypes[0]);
  // The bot currently displayed; the dice button replaces it with a mutation.
  const [current, setCurrent] = useState<Bot>(bot);
  // The left candidates panel shows, in priority order, the node being hovered,
  // the node pinned by clicking its ⚙ icon, else the root node (the default).
  const [panelRoot, setPanelRoot] = useState<NodeSelection | null>(null);
  const [panelPinned, setPanelPinned] = useState<NodeSelection | null>(null);
  const [panelHovered, setPanelHovered] = useState<NodeSelection | null>(null);
  const panelSelection = panelHovered ?? panelPinned ?? panelRoot;
  // A running log of every mutation rolled since the modal opened (or last revert).
  const [mutationLog, setMutationLog] = useState<MutationLogEntry[]>([]);
  // Log entries (by index) whose full mutation JSON is expanded.
  const [expandedLog, setExpandedLog] = useState<Set<number>>(new Set());
  // Bumped whenever the displayed tree changes, to remount the tree view so per
  // node collapse state resets cleanly rather than sticking to the wrong nodes.
  const [treeVersion, setTreeVersion] = useState(0);

  const games = baseBot.wins + baseBot.losses + baseBot.draws;
  const winPct = games > 0 ? Math.round((baseBot.wins / games) * 100) : 0;

  // Cumulative: mutate the currently displayed tree so rolls compound, bumping
  // the -a{n} suffix to show how many times it's been mutated. Each rolled
  // mutation is appended to the running log. The tree's nodes change identity,
  // so any open candidates panel is stale — close it.
  const handleMutate = () => {
    const { tree, log } = mutateAllUnitsWithLog({ tree: current.tree, count, borrowBots });
    setCurrent({ ...current, tree, botName: nextMutationName(current.botName, count) });
    setMutationLog((prev) => [...prev, ...log]);
    setTreeVersion((v) => v + 1);
  };

  // Revert all mutations: the empty bot restores a fresh empty tree, any other
  // bot restores the tree the modal opened on.
  const handleRevert = () => {
    setCurrent(bot.id === EMPTY_BOT_ID ? makeEmptyBot() : bot);
    setMutationLog([]);
    setExpandedLog(new Set());
    setTreeVersion((v) => v + 1);
  };

  // The tree changed (mutate / revert / unit switch): the tree view remounts and
  // reports its new root, which becomes the panel default and clears any stale
  // hovered/pinned selection pointing at the previous tree.
  const handleDefaultNode = (selection: NodeSelection) => {
    setPanelRoot(selection);
    setPanelPinned(null);
    setPanelHovered(null);
  };

  const toggleLogEntry = (index: number) =>
    setExpandedLog((prev) => {
      const next = new Set(prev);
      if (next.has(index)) { next.delete(index); }
      else { next.add(index); }
      return next;
    });

  const selectUnit = (unit: UnitType) => {
    setActiveUnit(unit); // remounts the tree view, which resets the panel via handleDefaultNode
  };

  return (
    <div className="tree-modal__backdrop" onClick={onClose}>
      <div className="tree-modal__layout" onClick={(e) => e.stopPropagation()}>
        {panelSelection && (
          <div className="mutation-panel">
            <div className="mutation-panel__header">
              <span className="mutation-panel__title">
                {panelSelection.title}
                {panelPinned && !panelHovered && <span className="mutation-panel__pin" title="Pinned"> 📌</span>}
              </span>
            </div>
            <div className="mutation-panel__list">
              {panelSelection.candidates.map((c, i) => (
                <div key={i} className="mutation-panel__row">
                  <span className="mutation-panel__label">{c.label}</span>
                  <span className="mutation-panel__pct">{c.probability}/{c.total}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="tree-modal">
          <div className="tree-modal__header">
            <span className="tree-modal__title">
              {current.botName} · {current.groupName} · {winPct}% win · {games} games
            </span>
            <button className="tree-modal__dice" onClick={handleRevert} title="Revert to original tree">↺</button>
            <button className="tree-modal__dice" onClick={handleMutate} title="Mutate tree">⚅</button>
            <button className="tree-modal__close" onClick={onClose}>✕</button>
          </div>
          <div className="tree-modal__tabs">
            {unitTypes.map((unit) => (
              <button
                key={unit}
                className={`tree-modal__tab${activeUnit === unit ? " tree-modal__tab--active" : ""}`}
                onClick={() => selectUnit(unit)}
              >
                {UnitType[unit]}
              </button>
            ))}
          </div>
          <BehaviourTreeView
            key={`${activeUnit}-${treeVersion}`}
            node={current.tree[activeUnit]}
            withBorrowedGeneticTraits={borrowBots.length > 0}
            onHover={setPanelHovered}
            onPin={setPanelPinned}
            onDefault={handleDefaultNode}
            highlightedNodes={new Set(mutationLog.filter((_, i) => expandedLog.has(i)).map((e) => e.node))}
          />
        </div>
        {(() => {
          // The log panel is always open. It shows entries for the unit whose tree
          // is currently on screen, keeping each entry's original index so its
          // expanded state is stable.
          const entries = mutationLog
            .map((entry, index) => ({ entry, index }))
            .filter(({ entry }) => entry.unitType === activeUnit);
          return (
            <div className="mutation-log">
              <div className="mutation-panel__header">
                <span className="mutation-panel__title">Mutation log ({entries.length})</span>
                <button
                  className="tree-modal__close"
                  onClick={() => {
                    setMutationLog([]);
                    setExpandedLog(new Set());
                  }}
                >
                  ✕
                </button>
              </div>
              <div className="mutation-panel__list">
                {entries.length === 0 && <div className="mutation-panel__row mutation-log__empty">No mutations yet</div>}
                {entries.map(({ entry, index }) => (
                  <div key={index} className="mutation-log__entry">
                    <div
                      className={`mutation-panel__row mutation-log__row mutation-log__row--${entry.kind}`}
                      onClick={() => toggleLogEntry(index)}
                    >
                      <span className="bt-tile__toggle">{expandedLog.has(index) ? "▾" : "▸"}</span>
                      <span className="mutation-panel__label">{entry.description}</span>
                    </div>
                    {expandedLog.has(index) && <pre className="mutation-log__json">{entry.json}</pre>}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}


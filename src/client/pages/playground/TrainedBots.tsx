import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTrpc } from "../../hooks/useTrpc.ts";
import { GameCanvas } from "../../components/GameCanvas.tsx";
import type { Bot } from "../../../common/ai/training/infra/repo/getAllBots.ts";
import { useBotVsBotStateManager } from "./hooks/useBotVsBotStateManager.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "../../../common/ai/training/evolution/candidates/generateCandidateTree.ts";
import { params } from "../../../common/ai/training/params.ts";
import { UnitType } from "../../../common/units/UnitType.ts";

export function TrainedBots() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [expandedGen, setExpandedGen] = useState<number | null>(null);
  const [homeBot, setHomeBot] = useState<Bot | null>(null);
  const [awayBot, setAwayBot] = useState<Bot | null>(null);
  const [tickInterval, setTickInterval] = useState(500);
  const [countText, setCountText] = useState(String(params.NEXT_GENERATION_RANDOM_MUTATIONS));
  const count = Math.max(1, Number(countText) || 1);
  const [mutationSeed, setMutationSeed] = useState(0);
  const [swapSeed, setSwapSeed] = useState(0);
  const [inspectBot, setInspectBot] = useState<Bot | null>(null);

  const trpc = useTrpc();
  useEffect(() => {
    trpc.getAllBots.query().then(setBots);
  }, [trpc]);

  const champions = useMemo(
    () => bots.filter((b) => b.generationChampion).sort((a, b) => a.generation - b.generation),
    [bots],
  );

  // On first load, default the matchup to the highest-generation champion vs itself.
  const defaultedRef = useRef(false);
  useEffect(() => {
    if (defaultedRef.current || champions.length === 0) { return; }
    defaultedRef.current = true;
    const topChamp = champions[champions.length - 1];
    setHomeBot(topChamp);
    setAwayBot(topChamp);
  }, [champions]);

  const latestUnchampionedGen = useMemo(() => {
    if (bots.length === 0) { return null; }
    const maxGen = Math.max(...bots.map((b) => b.generation));
    const hasChampion = bots.some((b) => b.generation === maxGen && b.generationChampion);
    return hasChampion ? null : maxGen;
  }, [bots]);

  const expandedGenBots = useMemo(
    () =>
      expandedGen !== null ? [...bots.filter((b) => b.generation === expandedGen)].sort((a, b) => a.elo - b.elo) : [],
    [expandedGen, bots],
  );

  const gameKey = `${homeBot?.id}-${awayBot?.id}-${tickInterval}-${mutationSeed}-${swapSeed}`;
  const stateManager = useBotVsBotStateManager(homeBot ?? undefined, awayBot ?? undefined, tickInterval, gameKey);

  const championTilesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (championTilesRef.current) {
      championTilesRef.current.scrollLeft = championTilesRef.current.scrollWidth;
    }
  }, [champions]);

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
    const tree = randomlyMutateUnitAwareBehaviourTree({ tree: original.tree, count });
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
      </div>

      <div className="matchup-bar">
        <div className="matchup-tiles-col">
          <div className="generation-tiles" ref={championTilesRef}>
          {champions.map((bot) => {
            const { slot, dashed } = slotForGeneration(bot.generation, bot.id, homeBot, awayBot);
            return (
              <BotTile
                key={bot.id}
                bot={bot}
                expanded={expandedGen === bot.generation}
                slot={slot}
                dashed={dashed}
                onClick={() => setExpandedGen(expandedGen === bot.generation ? null : bot.generation)}
                onDragStart={handleDragStart}
              />
            );
          })}
          {latestUnchampionedGen !== null && (
            <PlaceholderTile
              gen={latestUnchampionedGen}
              expanded={expandedGen === latestUnchampionedGen}
              slot={slotForGeneration(latestUnchampionedGen, -1, homeBot, awayBot).slot}
              onClick={() => setExpandedGen(expandedGen === latestUnchampionedGen ? null : latestUnchampionedGen)}
            />
          )}
        </div>

        {expandedGen !== null && expandedGenBots.length > 0 && (
          <div className="generation-tiles generation-tiles--secondary" ref={scrollToEnd}>
            {expandedGenBots.map((bot) => (
              <BotTile
                key={bot.id}
                bot={bot}
                small
                slot={homeBot?.id === bot.id && awayBot?.id === bot.id
                  ? "both"
                  : homeBot?.id === bot.id
                  ? "home"
                  : awayBot?.id === bot.id
                  ? "away"
                  : undefined}
                onDragStart={handleDragStart}
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

      {inspectBot && <TreeModal bot={inspectBot} onClose={() => setInspectBot(null)} />}
    </>
  );
}

// Resolve the highlight for a generation's champion tile. A direct match (the
// champion itself is slotted) renders solid; if instead one of its children is
// slotted, the generation tile inherits the same colour but dashed.
function slotForGeneration(
  generation: number,
  championId: number,
  homeBot: Bot | null,
  awayBot: Bot | null,
): { slot?: "home" | "away" | "both"; dashed?: boolean } {
  const isHome = homeBot?.id === championId;
  const isAway = awayBot?.id === championId;
  if (isHome && isAway) { return { slot: "both" }; }
  if (isHome) { return { slot: "home" }; }
  if (isAway) { return { slot: "away" }; }
  const homeGen = homeBot?.generation === generation;
  const awayGen = awayBot?.generation === generation;
  if (homeGen && awayGen) { return { slot: "both", dashed: true }; }
  if (homeGen) { return { slot: "home", dashed: true }; }
  if (awayGen) { return { slot: "away", dashed: true }; }
  return {};
}

function BotTile({
  bot,
  expanded,
  small,
  slot,
  dashed,
  onClick,
  onDragStart,
}: {
  bot: Bot;
  expanded?: boolean;
  small?: boolean;
  slot?: "home" | "away" | "both";
  dashed?: boolean;
  onClick?: () => void;
  onDragStart: (e: React.DragEvent, bot: Bot) => void;
}) {
  const classes = [
    "gen-tile",
    expanded && "gen-tile--expanded",
    small && "gen-tile--small",
    slot === "home" && (dashed ? "gen-tile--slotted-home-dashed" : "gen-tile--slotted-home"),
    slot === "away" && (dashed ? "gen-tile--slotted-away-dashed" : "gen-tile--slotted-away"),
    slot === "both" && (dashed ? "gen-tile--slotted-both-dashed" : "gen-tile--slotted-both"),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      draggable
      onDragStart={(e) => onDragStart(e, bot)}
      onClick={onClick}
    >
      <span className="gen-tile__gen">{bot.elo}</span>
      <span className="gen-tile__elo">{bot.generation}</span>
    </div>
  );
}

function PlaceholderTile({
  gen,
  expanded,
  slot,
  onClick,
}: {
  gen: number;
  expanded: boolean;
  slot?: "home" | "away" | "both";
  onClick: () => void;
}) {
  const classes = [
    "gen-tile",
    "gen-tile--placeholder",
    expanded && "gen-tile--expanded",
    slot === "home" && "gen-tile--slotted-home-dashed",
    slot === "away" && "gen-tile--slotted-away-dashed",
    slot === "both" && "gen-tile--slotted-both-dashed",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onClick}>
      <span className="gen-tile__gen">Gen {gen}</span>
      <span className="gen-tile__elo">—</span>
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

function TreeModal({ bot, onClose }: { bot: Bot; onClose: () => void }) {
  const unitTypes = [UnitType.Archer, UnitType.Mangonel, UnitType.Monk];
  const [activeUnit, setActiveUnit] = useState<UnitType>(unitTypes[0]);

  return (
    <div className="tree-modal__backdrop" onClick={onClose}>
      <div className="tree-modal" onClick={(e) => e.stopPropagation()}>
        <div className="tree-modal__header">
          <span className="tree-modal__title">{bot.botName}</span>
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
        <pre className="tree-modal__json">{JSON.stringify(bot.tree[activeUnit], null, 2)}</pre>
      </div>
    </div>
  );
}

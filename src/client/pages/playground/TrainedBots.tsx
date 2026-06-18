import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTrpc } from "../../hooks/useTrpc.ts";
import { GameCanvas } from "../../components/GameCanvas.tsx";
import type { Bot } from "../../../common/ai/training/infra/repo/getAllBots.ts";
import { useBotVsBotStateManager } from "./hooks/useBotVsBotStateManager.ts";

export function TrainedBots() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [expandedGen, setExpandedGen] = useState<number | null>(null);
  const [homeBot, setHomeBot] = useState<Bot | null>(null);
  const [awayBot, setAwayBot] = useState<Bot | null>(null);
  const [tickInterval, setTickInterval] = useState(500);

  const trpc = useTrpc();
  useEffect(() => {
    trpc.getAllBots.query().then(setBots);
  }, [trpc]);

  const champions = useMemo(
    () => bots.filter((b) => b.generationChampion).sort((a, b) => a.generation - b.generation),
    [bots],
  );

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

  const stateManager = useBotVsBotStateManager(homeBot ?? undefined, awayBot ?? undefined, tickInterval);

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

  return (
    <>
      <GameCanvas
        key={`${homeBot?.id}-${awayBot?.id}-${tickInterval}`}
        startAs="SPECTATOR"
        stateManager={stateManager}
        canvasStyle={{ width: "100vw", height: "calc(100vh - 52px)" }}
      />

      <div className="matchup-bar">
        <div className="generation-tiles" ref={championTilesRef}>
          {champions.map((bot) => (
            <BotTile
              key={bot.id}
              bot={bot}
              expanded={expandedGen === bot.generation}
              slot={homeBot?.id === bot.id ? "home" : awayBot?.id === bot.id ? "away" : undefined}
              onClick={() => setExpandedGen(expandedGen === bot.generation ? null : bot.generation)}
              onDragStart={handleDragStart}
            />
          ))}
          {latestUnchampionedGen !== null && (
            <PlaceholderTile
              gen={latestUnchampionedGen}
              expanded={expandedGen === latestUnchampionedGen}
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
                slot={homeBot?.id === bot.id ? "home" : awayBot?.id === bot.id ? "away" : undefined}
                onDragStart={handleDragStart}
              />
            ))}
          </div>
        )}

        <div className="matchup-slots">
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
          </div>
          <DropSlot
            color="home"
            bot={homeBot}
            onDrop={(e) => handleDrop(e, "home")}
            onClear={() => setHomeBot(null)}
          />
          <div className="matchup-vs-group">
            <span className="matchup-vs">VS</span>
            <button
              className="matchup-swap"
              onClick={() => {
                setHomeBot(awayBot);
                setAwayBot(homeBot);
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
          />
        </div>
      </div>
    </>
  );
}

function BotTile({
  bot,
  expanded,
  small,
  slot,
  onClick,
  onDragStart,
}: {
  bot: Bot;
  expanded?: boolean;
  small?: boolean;
  slot?: "home" | "away";
  onClick?: () => void;
  onDragStart: (e: React.DragEvent, bot: Bot) => void;
}) {
  const classes = [
    "gen-tile",
    expanded && "gen-tile--expanded",
    small && "gen-tile--small",
    slot === "home" && "gen-tile--slotted-home",
    slot === "away" && "gen-tile--slotted-away",
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
  onClick,
}: {
  gen: number;
  expanded: boolean;
  onClick: () => void;
}) {
  const classes = ["gen-tile", "gen-tile--placeholder", expanded && "gen-tile--expanded"]
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
}: {
  color: "home" | "away";
  bot: Bot | null;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
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
            <button className="drop-slot__clear" onClick={onClear}>✕</button>
          </>
        )
        : <span className="drop-slot__empty">drag a bot here</span>}
    </div>
  );
}

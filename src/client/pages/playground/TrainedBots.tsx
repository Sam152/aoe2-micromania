import { useEffect, useMemo, useState } from "react";
import { useTrpc } from "../../hooks/useTrpc.ts";
import { GameCanvas } from "../../components/GameCanvas.tsx";
import type { Bot } from "../../../common/ai/training/infra/repo/getAllBots.ts";
import { useBotVsBotStateManager } from "./hooks/useBotVsBotStateManager.ts";

export function TrainedBots() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [expandedGen, setExpandedGen] = useState<number | null>(null);
  const [homeBot, setHomeBot] = useState<Bot | null>(null);
  const [awayBot, setAwayBot] = useState<Bot | null>(null);

  const trpc = useTrpc();
  useEffect(() => {
    trpc.getAllBots.query().then(setBots);
  }, [trpc]);

  const champions = useMemo(
    () => bots.filter((b) => b.generationChampion).sort((a, b) => a.generation - b.generation),
    [bots],
  );

  const expandedGenBots = useMemo(
    () =>
      expandedGen !== null ? [...bots.filter((b) => b.generation === expandedGen)].sort((a, b) => b.elo - a.elo) : [],
    [expandedGen, bots],
  );

  const stateManager = useBotVsBotStateManager(homeBot ?? undefined, awayBot ?? undefined);

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
        key={`${homeBot?.id}-${awayBot?.id}`}
        startAs="SPECTATOR"
        stateManager={stateManager}
        canvasStyle={{ width: "100vw", height: "calc(100vh - 53px)" }}
      />

      <div className="matchup-bar">
        <div className="generation-tiles">
          {champions.map((bot) => (
            <BotTile
              key={bot.id}
              bot={bot}
              expanded={expandedGen === bot.generation}
              onClick={() => setExpandedGen(expandedGen === bot.generation ? null : bot.generation)}
              onDragStart={handleDragStart}
            />
          ))}
        </div>

        {expandedGen !== null && expandedGenBots.length > 0 && (
          <div className="generation-tiles generation-tiles--secondary">
            {expandedGenBots.map((bot) => <BotTile key={bot.id} bot={bot} small onDragStart={handleDragStart} />)}
          </div>
        )}

        <div className="matchup-slots">
          <DropSlot
            label="Home"
            bot={homeBot}
            onDrop={(e) => handleDrop(e, "home")}
            onClear={() => setHomeBot(null)}
          />
          <span className="matchup-vs">VS</span>
          <DropSlot
            label="Away"
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
  onClick,
  onDragStart,
}: {
  bot: Bot;
  expanded?: boolean;
  small?: boolean;
  onClick?: () => void;
  onDragStart: (e: React.DragEvent, bot: Bot) => void;
}) {
  const classes = ["gen-tile", expanded && "gen-tile--expanded", small && "gen-tile--small"]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      draggable
      onDragStart={(e) => onDragStart(e, bot)}
      onClick={onClick}
    >
      <span className="gen-tile__gen">Gen {bot.generation}</span>
      <span className="gen-tile__elo">{bot.elo}</span>
      <span className="gen-tile__name">{bot.botName}</span>
    </div>
  );
}

function DropSlot({
  label,
  bot,
  onDrop,
  onClear,
}: {
  label: string;
  bot: Bot | null;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}) {
  const [dragOver, setDragOver] = useState(false);

  const classes = [
    "drop-slot",
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
      <span className="drop-slot__label">{label}</span>
      {bot
        ? (
          <>
            <span className="drop-slot__name">{bot.botName}</span>
            <span className="drop-slot__elo">Gen {bot.generation} · {bot.elo} ELO</span>
            <button className="drop-slot__clear" onClick={onClear}>✕</button>
          </>
        )
        : <span className="drop-slot__empty">drag a bot here</span>}
    </div>
  );
}

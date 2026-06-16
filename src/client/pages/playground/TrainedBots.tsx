import { useEffect, useMemo, useState } from "react";
import { useTrpc } from "../../hooks/useTrpc.ts";
import { GameCanvas } from "../../components/GameCanvas.tsx";
import { LocalStateManager } from "../../../common/state/managers/LocalStateManager.ts";
import type { Bot } from "../../../common/ai/training/infra/repo/getAllBots.ts";
import { triggerBotTicks } from "../../../common/ai/integration/triggerBotTicks.ts";
import { BotInstance, createBot } from "../../../common/ai/integration/createBot.ts";
import { screenManager } from "../../../common/drawing/screenManager.ts";

export function TrainedBots() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [homeBotId, setHomeBotId] = useState<number | null>(null);
  const [awayBotId, setAwayBotId] = useState<number | null>(null);

  const trpc = useTrpc();
  useEffect(() => {
    trpc.getAllBots.query().then(setBots);
  }, [trpc]);

  const stateManager = useMemo(() => {
    const homeBot = bots.find((bot) => bot.id === homeBotId);
    const awayBot = bots.find((bot) => bot.id === awayBotId);

    const botsInstances: BotInstance[] = [homeBot, awayBot].filter((bot) => !!bot).map((bot, i) =>
      createBot({
        playingAs: i + 1,
        playerId: `bot:${i + 1}`,
        tree: bot.tree,
      })
    );

    const manager = new LocalStateManager("playground");

    manager.dispatchGame({
      n: "MAP_PARAMETERS_SET",
      size: 30,
      terrain: "terrain/15008-grass-2",
    });

    manager.addPreTickListener((gameState, action, computed) => {
      if (action.n !== "T") {
        return;
      }
      triggerBotTicks(botsInstances, gameState, manager.dispatchGame.bind(manager), computed);
    });

    botsInstances.forEach((instance) => {
      manager.dispatchGame({
        n: "CLIENT_LOADED_WITH_ID",
        playerId: instance.playerId,
      });
    });

    return manager;
  }, [homeBotId, awayBotId, bots]);

  return (
    <>
      {stateManager && (
        <GameCanvas
          key={`${homeBotId}-${awayBotId}`}
          startAs="SPECTATOR"
          stateManager={stateManager}
          canvasStyle={{ width: "100vw", height: "calc(100vh - 53px)" }}
        />
      )}

      <div className="container">
        <div className="vstack">
          <BotSelector label="Home" bots={bots} value={homeBotId} onChange={setHomeBotId} />
          <BotSelector label="Away" bots={bots} value={awayBotId} onChange={setAwayBotId} />
        </div>
      </div>
    </>
  );
}

function BotSelector({ label, bots, value, onChange }: {
  label: string;
  bots: Bot[];
  value: number | null;
  onChange: (id: number | null) => void;
}) {
  return (
    <label>
      {label}
      <select
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
      >
        <option value="">Select a bot…</option>
        {bots.map((bot) => (
          <option key={bot.id} value={bot.id}>
            {bot.botName} (elo {bot.elo})
          </option>
        ))}
      </select>
    </label>
  );
}

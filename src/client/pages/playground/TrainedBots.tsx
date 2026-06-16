import { useEffect, useMemo, useState } from "react";
import { useTrpc } from "../../hooks/useTrpc.ts";
import { GameCanvas } from "../../components/GameCanvas.tsx";
import { LocalStateManager } from "../../../common/state/managers/LocalStateManager.ts";
import type { Bot } from "../../../common/ai/training/infra/repo/getAllBots.ts";
import {triggerBotTicks} from "../../../common/ai/integration/triggerBotTicks.ts";
import {BotInstance, createBot} from "../../../common/ai/integration/createBot.ts";

export function TrainedBots() {
  const trpc = useTrpc();

  const [bots, setBots] = useState<Bot[]>([]);
  const [homeBotId, setHomeBotId] = useState<number | null>(null);
  const [awayBotId, setAwayBotId] = useState<number | null>(null);

  useEffect(() => {
    trpc.getAllBots.query().then(setBots);
  }, [trpc]);

  const botsInstances: BotInstance[] = [
    createBot({
      playingAs: 1,
      playerId: 'bot:1',
      tree: homeBotId,
    }),
    createBot({
      playingAs: 2,
      playerId: 'bot:2',
      tree: ,
    }),
  ];

  const stateManager = useMemo(() => {
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

    return manager;
  }, [homeBotId, awayBotId]);

  return (
    <div className="container">
      <div className="vstack">
        <label>
          Home
          <select
            value={homeBotId ?? ""}
            onChange={(e) => setHomeBotId(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">Select a bot…</option>
            {bots.map((bot) => (
              <option key={bot.id} value={bot.id}>
                {bot.botName} (elo {bot.elo})
              </option>
            ))}
          </select>
        </label>

        <label>
          Away
          <select
            value={awayBotId ?? ""}
            onChange={(e) => setAwayBotId(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">Select a bot…</option>
            {bots.map((bot) => (
              <option key={bot.id} value={bot.id}>
                {bot.botName} (elo {bot.elo})
              </option>
            ))}
          </select>
        </label>

        <GameCanvas
          key={`${homeBotId}-${awayBotId}`}
          startAs="SPECTATOR"
          stateManager={stateManager}
          canvasStyle={{ width: "100vw", height: "calc(100vh - 53px)" }}
        />
      </div>
    </div>
  );
}

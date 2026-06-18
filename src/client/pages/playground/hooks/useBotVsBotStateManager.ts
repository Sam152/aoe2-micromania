import { useMemo } from "react";
import { LocalStateManager } from "../../../../common/state/managers/LocalStateManager.ts";
import type { Bot } from "../../../../common/ai/training/infra/repo/getAllBots.ts";
import { triggerBotTicks } from "../../../../common/ai/integration/triggerBotTicks.ts";
import { BotInstance, createBot } from "../../../../common/ai/integration/createBot.ts";

export function useBotVsBotStateManager(
  homeBot: Bot | undefined,
  awayBot: Bot | undefined,
  tickInterval: number,
): LocalStateManager {
  return useMemo(() => {
    const botsInstances: BotInstance[] = [homeBot, awayBot].filter((bot) => !!bot).map((bot, i) =>
      createBot({
        playingAs: i + 1,
        playerId: `bot:${i + 1}`,
        tree: bot.tree,
      })
    );

    const manager = new LocalStateManager("playground", undefined, tickInterval);

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
  }, [homeBot, awayBot, tickInterval]);
}

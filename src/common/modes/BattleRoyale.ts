import { GameMode, GameState, GameStateAction, StateManagerInterface } from "../../types.ts";
import { Grid } from "../terrain/Grid.ts";

import { logger } from "../../server/logger.ts";
import { BotInstance, createBot } from "../ai/integration/createBot.ts";
import { assert } from "@std/assert";
import { MAX_PLAYERS_PER_SERVER } from "../state/mutations/players/provisionPlayer.ts";
import stat = Deno.stat;
import { triggerBotTicks } from "../ai/integration/triggerBotTicks.ts";
import { ComputedTickState } from "../state/computed/createComputedTickState.ts";

import { randomlyGeneratedTree } from "../ai/behaviourTree/__fixtures__/randomlyGeneratedTree.ts";

const grid = new Grid(30);

/**
 * Game modes may: respond to state or actions by dispatching more actions,
 * but never modify state directly.
 *
 * This essentially creates a server-only computation of actions as a function of game
 * state, in order to control what is happening.
 *
 * This
 */
export class BattleRoyale implements GameMode {
  private bots: BotInstance[] = [];

  start(manager: StateManagerInterface): void {
    manager.dispatchGame({
      n: "MAP_PARAMETERS_SET",
      size: grid.size,
      terrain: "terrain/15008-grass-2",
    });
  }

  onTick(
    state: GameState,
    action: GameStateAction,
    manager: StateManagerInterface,
  ): void {
    // Only respond on tick.
    if (action.n !== "T") {
      return;
    }
    this.cyclePlayers(state, action, manager);
    this.cycleBots(state, action, manager);
    //this.cycleTerrain(state, action, manager);
  }

  preTick(
    state: GameState,
    action: GameStateAction,
    manager: StateManagerInterface,
    computed: ComputedTickState,
  ): void {
    if (action.n !== "T") {
      return;
    }
    triggerBotTicks(this.bots, state, manager.dispatchGame.bind(manager), computed);
  }

  cyclePlayers(state: GameState, _action: GameStateAction, manager: StateManagerInterface) {
    const activePlayers = Object.keys(state.activePlayers).length;
    if (activePlayers === 0) {
      return;
    }

    // Every so often check if each player has any units left.
    const checkPlayer = (state.ticks % MAX_PLAYERS_PER_SERVER) + 1;
    const unitsOwned = state.units.filter((unit) => unit.ownedByPlayer === checkPlayer).length;
    if (unitsOwned === 0) {
      const found = Object.entries(state.activePlayers).find((entry) => entry[1] === checkPlayer);
      if (!found) {
        return;
      }
      manager.dispatchGame({
        n: "CYCLE_PLAYER",
        playerId: found[0],
        playerNumber: found[1],
      });

      // If bots were mixed in with real players, and a bot cycled into a queued player,
      // we would probably have to destroy its instance here.
    }
  }

  cycleBots(state: GameState, _action: GameStateAction, manager: StateManagerInterface) {
    const botCount = Object.keys(state.activePlayers).filter((id) => id.startsWith("bot:")).length;
    const activePlayers = Object.keys(state.activePlayers).length - botCount;
    // Target at least two bots playing against eachother, so we can spectate something interesting, otherwise
    // only provision a single bot to play against a user. Allow human players to fill available slots.
    const targetBotCount = Math.max(0, 2 - activePlayers);

    if (botCount > targetBotCount) {
      const goodbyeBot = this.bots.pop();
      assert(!!goodbyeBot);
      manager.dispatchGame({
        n: "CLIENT_DISCONNECTED_WITH_ID",
        playerId: goodbyeBot.playerId,
      });
      return;
    }

    if (botCount < targetBotCount) {
      const botPlayerId = `bot:${crypto.randomUUID()}`;
      logger.info({ message: "Bot provisioned", botId: botPlayerId });
      manager.dispatchGame({
        n: "CLIENT_LOADED_WITH_ID",
        playerId: botPlayerId,
      });
      const playingAs = manager.getGameState().activePlayers[botPlayerId];
      this.bots.push(createBot({
        playingAs,
        playerId: botPlayerId,
        tree: randomlyGeneratedTree,
      }));
      return;
    }
  }

  cycleTerrain(state: GameState, _action: GameStateAction, manager: StateManagerInterface) {
    const terrainOptions = ["terrain/15001-grass", "terrain/15008-grass-2", "terrain/15009-grass-dirt"];
    const terrainIndex = Math.floor(state.ticks / 1000) % terrainOptions.length;
    const newTerrain = terrainOptions[terrainIndex];
    if (state.mapTerrain !== newTerrain) {
      manager.dispatchGame({
        n: "MAP_PARAMETERS_SET",
        size: grid.size,
        terrain: newTerrain,
      });
    }
  }
}

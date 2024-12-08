import { GameMode, GameState, GameStateAction, StateManagerInterface } from "../../types";
import Grid from "../terrain/Grid";

const grid = new Grid(30);

/**
 * Game modes may: respond to state or actions by dispatching more actions,
 * but never modify state directly.
 *
 * This essentially creates a server-only computation of actions as a function of game
 * state, in order to control what is happening.
 */
export default class BattleRoyale implements GameMode {
  start(manager: StateManagerInterface): void {
    manager.dispatchGame({
      n: "MAP_PARAMETERS_SET",
      size: grid.size,
      terrain: "terrain/15008-grass-2",
    });
  }

  onTick(state: GameState, action: GameStateAction, manager: StateManagerInterface): void {
    const activePlayers = Object.keys(state.activePlayers).length;
    if (activePlayers === 0) {
      return;
    }
    const checkPlayer = (state.ticks % activePlayers) + 1;

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
    }
  }
}

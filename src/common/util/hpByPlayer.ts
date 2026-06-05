import { GameState } from "../../types.ts";

export function hpByPlayer(state: GameState) {
  return state.units.reduce<Record<string, number>>((pool, unit) => {
    if (!pool[unit.ownedByPlayer]) {
      pool[unit.ownedByPlayer] = 0;
    }
    pool[unit.ownedByPlayer] += unit.hitPoints;
    return pool;
  }, {});
}

import { GameState } from "../../types.ts";

export function hpByPlayer(state: GameState) {
  return state.units.reduce<Record<string, number>>(
    (pool, unit) => {
      if (!pool[unit.ownedByPlayer]) {
        pool[unit.ownedByPlayer] = 0;
      }
      pool[unit.ownedByPlayer] += unit.hitPoints;
      return pool;
    },
    Object.values(state.activePlayers).reduce<Record<number, number>>((obj, player) => {
      obj[player] = 0;
      return obj;
    }, {}),
  );
}

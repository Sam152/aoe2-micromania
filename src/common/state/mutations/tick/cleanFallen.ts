import { GameState } from "../../../../types";

const CLEAN_AFTER_TICKS = 800;

export function cleanFallen(state: GameState) {
  if (state.ticks % 30) {
    state.fallenUnits = state.fallenUnits.filter((unit) => {
      const cleanUpPoint = unit.unitFallenAt + CLEAN_AFTER_TICKS;
      const shouldClean = state.ticks > cleanUpPoint;

      return !shouldClean;
    });
  }
}

import { GameState, UnitInstance } from "../../../../types.d.ts";
import UnitState from "../../../units/UnitState.ts";
import soundManager from "../../../sounds/SoundManger.ts";

export default function registerUnitFallen(state: GameState, unit: UnitInstance) {
  soundManager.unitFallen(state, unit);

  state.units = state.units.filter(({ id }) => unit.id !== id);
  state.units
    .filter(({ targetingUnit, convertingUnit }) => targetingUnit === unit.id || convertingUnit === unit.id)
    .forEach((unit) => {
      unit.targetingUnit = null;
      unit.movingDirection = null;
      unit.unitState = UnitState.Idle;
      unit.unitStateStartedAt = state.ticks;
    });
  state.fallenUnits.push({
    id: unit.id,
    ownedByPlayer: unit.ownedByPlayer,
    unitType: unit.unitType,
    unitFallenAt: state.ticks,
    position: unit.position,
    direction: unit.direction,
  });
}

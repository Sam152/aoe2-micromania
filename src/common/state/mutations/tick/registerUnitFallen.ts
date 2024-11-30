import { GameState, UnitInstance } from "../../../../types";
import UnitState from "../../../units/UnitState";
import soundManager from "../../../sounds/SoundManger";

export default function registerUnitFallen(state: GameState, unit: UnitInstance) {
  soundManager.unitFallen(state, unit);

  state.units = state.units.filter(({ id }) => unit.id !== id);
  state.units
    .filter(({ targetingUnit }) => targetingUnit === unit.id)
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

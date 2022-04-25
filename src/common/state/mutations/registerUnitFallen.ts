import {GameState, UnitInstance} from "../../../types";

export default function registerUnitFallen(state: GameState, unit: UnitInstance) {
    state.units = state.units.filter(({id}) => unit.id !== id);
    state.units.filter(({targetingUnit}) => targetingUnit === unit.id).forEach(unit => unit.targetingUnit = null);
    state.fallenUnits.push({
        id: unit.id,
        ownedByPlayer: unit.ownedByPlayer,
        unitType: unit.unitType,
        unitFallenAt: state.ticks,
        position: unit.position,
        direction: unit.direction,
    });
}

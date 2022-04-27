import {UnitInstance} from "../../types";

export default function resetUnitCommands(unit: UnitInstance): void {
    unit.clickedWaypoints = [];
    unit.targetingUnit = null;
    unit.targetingPosition = null;
    unit.patrollingTo = null;
    unit.patrollingToReturn = null;
}

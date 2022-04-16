import compassDirectionCalculator from "../../units/compassDirectionCalculator";
import UnitState from "../../units/UnitState";
import {UnitInstance} from "../../../types";

export default function moveTowardsCurrentWaypoint(unit: UnitInstance): void {
    unit.movingDirection = unit.waypoints[0].clone().sub(unit.position).normalize();
    unit.direction = compassDirectionCalculator.getDirection(unit.position, unit.waypoints[0]);
    unit.unitState = UnitState.Moving;
}

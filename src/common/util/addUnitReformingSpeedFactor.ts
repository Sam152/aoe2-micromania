import {UnitInstance} from "../../types";
import calculateUnitMovementPerTick from "../units/calculateUnitMovementPerTick";

export default function addUnitReformingSpeedFactor(ticks: number, units: UnitInstance[]) {
    const distances: Array<number> = [];
    const arrivalTicks: Array<number> = [];

    units.forEach(unit => {
        const distanceToReform = unit.reformingTo.distanceTo(unit.position);
        distances.push(distanceToReform);
        arrivalTicks.push(ticks + (distanceToReform !== 0 ? Math.floor(distanceToReform / calculateUnitMovementPerTick(unit).length()) : 0));
    });

    const maxDistance = Math.max(...distances);
    const arrivalTick = Math.max(...arrivalTicks);

    units.forEach((unit, index) => {
        unit.reformingSpeedFactor = distances[index] / maxDistance;
        unit.reformingArrivalTick = arrivalTick;
    });
}

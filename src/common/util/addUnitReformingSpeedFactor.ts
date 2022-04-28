import {UnitInstance} from "../../types";
import calculateUnitMovementPerTick from "../units/calculateUnitMovementPerTick";

export default function addUnitReformingSpeedFactor(ticks: number, units: UnitInstance[]) {
    if (units.length < 2) {
        throw new Error('Should only reform more than one unit.');
    }

    const distances: Array<number> = [];
    const ticksForReform: Array<number> = [];

    units.forEach(unit => {
        const distanceToReform = unit.reformingTo.distanceTo(unit.position);
        distances.push(distanceToReform);
        ticksForReform.push(distanceToReform !== 0 ? Math.floor(distanceToReform / calculateUnitMovementPerTick(unit).length()) : 0);
    });

    const maxDistance = Math.max(...distances);
    const arrivalTick = Math.max(...ticksForReform);

    units.forEach((unit, index) => {
        unit.reformingSpeedFactor = (distances[index] / maxDistance) * 2;
        unit.reformingArrivalTick = ticks + Math.ceil(arrivalTick / 2);
    });

}

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

    const speedFactors = distances.map(distance => distance / maxDistance);
    const smallestSpeedFactor = Math.min(...speedFactors);

    // Try a "catch-up" factor that turns the slowest moving unit into one that moves at a
    // rate of "1", ie, the normal movement speed of a unit, but cap it at a reasonable
    // rate of extra movement you would accept, otherwise extremely slow moving units in a
    // catch-up phase will make other units extrmely fast.
    const catchUpFactor = Math.min(1.5, 1 / smallestSpeedFactor);

    // Scale all unit speeds, so units will slow down to all arrive at the reform point at the same time.
    units.forEach((unit, index) => {
        unit.reformingSpeedFactor = (distances[index] / maxDistance) * catchUpFactor;
        unit.reformingArrivalTick = ticks + Math.ceil(arrivalTick / catchUpFactor);
    });
}

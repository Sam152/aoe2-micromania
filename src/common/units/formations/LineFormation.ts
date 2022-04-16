import {FormationInterface} from "../../../types";
import {Vector2} from "three";
import averageVector from "../../util/averageVector";
import rotateAroundOrigin from "../../util/rotateAroundOrigin";

export default class LineFormation implements FormationInterface {

    distanceBetween = 30;

    form(positions: Array<Vector2>, destination: Vector2): Array<Array<Vector2>> {
        const startingPoint = averageVector(positions);

        const rows = Math.floor(positions.length / 4);

        // Line up the units into rows.
        const unitsPerRow = positions.length / rows;
        let newPositions = positions.map((position, index) => {
            const row = Math.ceil((index + 1) / unitsPerRow);
            return destination.clone().add(new Vector2((index % unitsPerRow) * this.distanceBetween, row * this.distanceBetween));
        });

        // Move the units to the middle of the destination point.
        const offsetFromDestination = averageVector(newPositions).sub(destination);
        newPositions.map(newPosition => newPosition.sub(offsetFromDestination));

        // Rotate the units in the direction they were moving.
        const directionalAngle = destination.clone().sub(startingPoint).angle() + (Math.PI / 2);
        newPositions = newPositions.map(newPosition => rotateAroundOrigin(destination, newPosition, directionalAngle));

        // Find the shortest distance between each source and destination point in the formation.
        const newPositionIndexes = Array.from(Array(newPositions.length).keys());
        const usedIndexes: number[] = [];
        newPositions = positions.map((position, positionIndex) => {
            const candidates = newPositionIndexes.filter(candidate => usedIndexes.indexOf(candidate) === -1);
            const distances = candidates.map(candidate => newPositions[candidate].distanceTo(position));
            const shortestDistance = Math.min(...distances);
            const shortestDistanceIndex = candidates[distances.indexOf(shortestDistance)];
            usedIndexes.push(shortestDistanceIndex);
            return newPositions[shortestDistanceIndex];
        });

        // @todo, to fix the switch around issue, reverse the search order and see if it's less overall distance?

        return newPositions.map(newPosition => [newPosition]);
    }


    shortestDistanceTravelled(newPositions: Array<Vector2>, positions: Array<Vector2>) {
        // Find the shortest distance between each source and destination point in the formation.
        const newPositionIndexes = Array.from(Array(newPositions.length).keys());
        const usedIndexes: number[] = [];
        let totalDistanceTraveled = 0;

        newPositions = positions.map((position, positionIndex) => {
            const candidates = newPositionIndexes.filter(candidate => usedIndexes.indexOf(candidate) === -1);
            const distances = candidates.map(candidate => newPositions[candidate].distanceTo(position));
            const shortestDistance = Math.min(...distances);
            totalDistanceTraveled += shortestDistance;
            const shortestDistanceIndex = candidates[distances.indexOf(shortestDistance)];
            usedIndexes.push(shortestDistanceIndex);
            return newPositions[shortestDistanceIndex];
        });
    }



}

import {FormationInterface} from "../../../types";
import {Vector2} from "three";
import averageVector from "../../util/averageVector";
import rotateAroundOrigin from "../../util/rotateAroundOrigin";
import standardDeviation from "just-standard-deviation";
import columnize from "../../util/columnize";

export default class LineFormation implements FormationInterface {

    distanceBetween = 100;
    unitsPerRow = 4;

    form(positions: Array<Vector2>, destination: Vector2): Array<Vector2> {
        if (positions.length === 1) {
            return [destination.clone()];
        }

        const startingPoint = averageVector(positions);
        const rows = Math.floor(positions.length / this.unitsPerRow);

        // Line up the units into rows.
        const columns = Math.ceil(positions.length / rows);
        let newPositions = positions.map((position, index) => {
            const row = Math.ceil((index + 1) / columns);
            return destination.clone().add(new Vector2((index % columns) * this.distanceBetween, row * this.distanceBetween));
        });

        // Move the units to the middle of the destination point.
        const offsetFromDestination = averageVector(newPositions).sub(destination);
        newPositions.map(newPosition => newPosition.sub(offsetFromDestination));

        // Rotate the units in the direction they were moving.
        const directionalAngle = destination.clone().sub(startingPoint).angle() + (Math.PI / 2);
        newPositions = newPositions.map(newPosition => rotateAroundOrigin(destination, newPosition, directionalAngle));

        // Find the shortest distance between each source and destination point in the formation.
        const [newPositionsA, travelA] = this.sortIntoShortestDistance(newPositions, positions);
        const [newPositionsB, travelB] = this.sortIntoShortestDistance(newPositions, [...positions].reverse());
        const [newPositionsC, travelC] = this.sortIntoShortestDistance(newPositions, columnize(positions, columns + 1));
        const [newPositionsD, travelD] = this.sortIntoShortestDistance(newPositions, columnize(positions, columns + 1).reverse());

        const bestPath = Math.min(travelA, travelB, travelC, travelD);

        if (bestPath === travelA) {
            console.log('A won');
            return newPositionsA;
        }
        if (bestPath === travelB) {
            console.log('B won');
            return newPositionsB.reverse();
        }
        if (bestPath === travelC) {
            console.log('C won');
            return columnize(newPositionsC, columns + 1);
        }
        if (bestPath === travelD) {
            console.log('D won');
            return columnize(newPositionsD, columns + 1).reverse();
        }

    }

    sortIntoShortestDistance(newPositions: Array<Vector2>, positions: Array<Vector2>): [Array<Vector2>, number] {
        const newPositionIndexes = Array.from(Array(newPositions.length).keys());
        const usedIndexes: number[] = [];
        const distancesTraveled: number[] = [];

        const sortedIntoShortestTravel = positions.map((position, positionIndex) => {
            const candidates = newPositionIndexes.filter(candidate => usedIndexes.indexOf(candidate) === -1);
            const distances = candidates.map(candidate => newPositions[candidate].distanceTo(position));
            const shortestDistance = Math.min(...distances);
            distancesTraveled.push(shortestDistance);
            const shortestDistanceIndex = candidates[distances.indexOf(shortestDistance)];
            usedIndexes.push(shortestDistanceIndex);
            return newPositions[shortestDistanceIndex];
        });

        return [sortedIntoShortestTravel, standardDeviation(distancesTraveled)];
    }

}

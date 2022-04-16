import {FormationInterface} from "../../../types";
import {Vector2} from "three";
import averageVector from "../../util/averageVector";
import rotateAroundOrigin from "../../util/rotateAroundOrigin";

export default class LineFormation implements FormationInterface {

    distanceBetween = 30;

    form(positions: Array<Vector2>, destination: Vector2): Array<Array<Vector2>> {
        const startingPoint = averageVector(positions);

        // Line up the units into rows.
        let newPositions = positions.map((position, index) => {
            return destination.clone().add(new Vector2(index * this.distanceBetween, 0));
        });

        // Move the units to the middle of the destination point.
        const offsetFromDestination = averageVector(newPositions).sub(destination);
        newPositions.map(newPosition => newPosition.sub(offsetFromDestination));

        // Rotate the units in the direction they were moving.
        const directionalAngle = destination.clone().sub(startingPoint).angle() + (Math.PI / 2);
        newPositions = newPositions.map(newPosition => rotateAroundOrigin(destination, newPosition, directionalAngle));

        // Find the shortest distance between each source and destination point in the formation.
        const indexMap: {[key: number]: number} = {};
        const newPositionIndexes = Array.from(Array(newPositions.length).keys());
        const shortestPositions = Array();
        positions.forEach((position, positionIndex) => {
            const candidates = newPositionIndexes.filter(candidate => typeof indexMap[candidate] === 'undefined');
            const distances = candidates.map(candidate => newPositions[candidate].distanceTo(position));
            const shortestDistanceIndex = candidates[distances.indexOf(Math.min(...distances))];
            shortestPositions[positionIndex] = newPositions[shortestDistanceIndex];
            indexMap[shortestDistanceIndex] = positionIndex;
        });

        console.log(indexMap);








        return shortestPositions.map(newPosition => [newPosition]);
    }

}

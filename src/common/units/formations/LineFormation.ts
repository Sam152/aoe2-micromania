import {FormationInterface} from "../../../types";
import {Vector2} from "three";
import averageVector from "../../util/averageVector";
import {circle} from "../../drawing/shapes";
import rotateAroundOrigin from "../../util/rotateAroundOrigin";

export default class LineFormation implements FormationInterface {

    distanceBetween = 30;

    form(positions: Array<Vector2>, destination: Vector2): Array<Array<Vector2>> {

        const startingPoint = averageVector(positions);

        const linedUpDestinations = positions.map((position, index) => {
            return destination.clone().add(new Vector2(index * this.distanceBetween, 0));
        });
        const offsetFromDestination = averageVector(linedUpDestinations).sub(destination);

        linedUpDestinations.map(linedUpDestination => linedUpDestination.sub(offsetFromDestination));


        const directionalAngle = destination.clone().sub(startingPoint).angle();





        // https://stackoverflow.com/a/6645412
        circle(window.ctx, destination)


        return linedUpDestinations.map(newPosition => [newPosition]);
    }

}

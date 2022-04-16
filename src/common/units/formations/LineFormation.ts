import {FormationInterface} from "../../../types";
import {Vector2} from "three";
import averageVector from "../../util/averageVector";
import {circle} from "../../drawing/shapes";

export default class LineFormation implements FormationInterface {

    distanceBetween = 30;

    form(positions: Array<Vector2>, destination: Vector2): Array<Array<Vector2>> {

        // If units are nearby, form a position near the average of the units location,
        // otherwise form at the destination.


        const startingPoint = averageVector(positions);




        const newPositions = positions.map((position, index) => {
            return [destination.clone().add(new Vector2(index * this.distanceBetween, 0))];
        });


        const directionalAngle = destination.clone().sub(startingPoint).angle();
        console.log(directionalAngle);




        // https://stackoverflow.com/a/6645412
        circle(window.ctx, destination)


        return newPositions;
    }

}

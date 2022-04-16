import {FormationInterface} from "../../../types";
import {Vector2} from "three";

export default class LineFormation implements FormationInterface {

    form(positions: Array<Vector2>, destination: Vector2): Array<Array<Vector2>> {
        return positions.map(position => {
            return [destination];
        })
    }

}

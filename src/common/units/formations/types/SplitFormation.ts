import {Vector2} from 'three/src/math/Vector2';
import averageVector from '../../../util/averageVector';
import {translateAndRotate} from '../utilities/formLines';
import FormationBase from '../FormationBase';

export default class SplitFormation extends FormationBase {

    doForm(positions: Array<Vector2>, destination: Vector2): Array<Vector2> {
        const startingPoint = averageVector(positions);

        const newPositions = positions.map((position) => {
            return position;
        });

        return translateAndRotate(positions, newPositions, destination, startingPoint);
    }
}

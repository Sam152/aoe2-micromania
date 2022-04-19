import FormationType from './FormationType';
import LineFormation from './LineFormation';
import {FormationInterface} from '../../../types';

class FormationManager {
    map: { 0: LineFormation; };
    constructor() {
        this.map = {
            [FormationType.Line]: new LineFormation(),
        };
    }

    get(type: FormationType): FormationInterface {
        // @ts-ignore
        return this.map[type];
    }
}


const formationManager = new FormationManager();
export default formationManager;

import {Ai, GameDispatcher, GameState, GameStateAction} from '../../types';
import FormationType from '../units/formations/FormationType';
import {Vector2} from 'three/src/math/Vector2';
import averageVector from '../util/averageVector';

/**
 * A zero intelligence AI that just patrols it's units in.
 */
export default class PatrollingAi implements Ai {
    playingAs: number;

    constructor(playingAs: number) {
        this.playingAs = playingAs;
    }

    makeDecisions(state: GameState, action: GameStateAction, dispatcher: GameDispatcher): void {
        return;

        if (action.name === 'TICK' && state.ticks === 20) {
            const patrolTo = averageVector(state.units
                .filter(({ownedByPlayer}) => ownedByPlayer !== this.playingAs)
                .map(({position}) => position));

            dispatcher({
                name: 'PATROL',
                position: patrolTo,
                units: state.units.filter(({ownedByPlayer}) => ownedByPlayer === this.playingAs).map(({id}) => id),
            });
        }
    }
}

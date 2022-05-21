import {Ai, GameDispatcher, GameState, GameStateAction} from '../../types';
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
        // if (state.ticks !== 20) {
        //     return;
        // }
        // const patrolTo = averageVector(state.units
        //     .filter(({ownedByPlayer}) => ownedByPlayer !== this.playingAs)
        //     .map(({position}) => position));
        //
        // dispatcher({
        //     n: 'PATROL',
        //     position: patrolTo,
        //     units: state.units.filter(({ownedByPlayer}) => ownedByPlayer === this.playingAs).map(({id}) => id),
        // });
    }
}

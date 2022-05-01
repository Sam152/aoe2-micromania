import {Ai, GameDispatcher, GameState, GameStateAction} from "../../types";
import FormationType from "../units/formations/FormationType";
import {Vector2} from "three";
import averageVector from "../util/averageVector";

/**
 * A zero intelligence AI that just patrols it's units in.
 */
export default class PatrollingAi implements Ai {
    playingAs: number;
    nextTick: number;
    handled: boolean;

    constructor(playingAs: number) {
        this.playingAs = playingAs;
        this.handled = false;
    }

    makeDecisions(state: GameState, action: GameStateAction, dispatcher: GameDispatcher): void {
        if (state.ticks === 20 && !this.handled) {
            this.handled = true;

            const patrolTo = averageVector(state.units
                .filter(({ownedByPlayer}) => ownedByPlayer !== this.playingAs)
                .map(({position}) => position));

            dispatcher({
                name: "PATROL",
                formation: FormationType.Line,
                position: patrolTo,
                units: state.units.filter(({ownedByPlayer}) => ownedByPlayer === this.playingAs).map(({id}) => id),
            });
        }
    }
}

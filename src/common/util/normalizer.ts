import {GameState, GameStateAction, UnitInstance} from "../../types";
import {Vector2} from "three";

export function normalizeGameStateAction(action: GameStateAction): GameStateAction {
    const vectorKeys = [
        'position',
    ];
    vectorKeys.map(key => {
        if (key in action) {
            // @ts-ignore
            action[key] = new Vector2(action[key].x, action[key].y);
       }
    });
    return action;
}

export function normalizeGameStateObject(state: GameState): GameState {
    // In the absence of a more sophisticated normalizer, points need to be converted back
    // into three.js vectors when state is transmitted from the server.
    state.units = state.units.map((unit: UnitInstance) => ({
        ...unit,
        position: new Vector2(unit.position.x, unit.position.y),
        movingDirection: unit.movingDirection ? new Vector2(unit.movingDirection.x, unit.movingDirection.y) : unit.movingDirection,
        movingTo: unit.movingTo ? new Vector2(unit.movingTo.x, unit.movingTo.y) : unit.movingTo,
    }));
    return state;
}

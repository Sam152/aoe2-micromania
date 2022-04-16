import {GameState, GameStateAction} from "../../types";
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

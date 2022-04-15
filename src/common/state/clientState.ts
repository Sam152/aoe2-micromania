import {ClientState, ClientStateAction, GameDispatcher, GameState} from '../../types';
import deepClone from '../util/deepClone';
import isInRect from "../util/isInRect";
import {act} from "react-dom/test-utils";

function clientStateMutator(state: ClientState, action: ClientStateAction): ClientState {
    if (action.name === "FRAME_RENDERING_STARTED") {
        state.unitHitBoxes = [];
    }

    if (action.name === "UNIT_DRAWN") {
        state.unitHitBoxes.push({
            unit: action.unit,
            hitBox: action.hitBox,
        });
    }

    if (action.name === "LEFT_CLICK") {
        state.lastLeftClick = action.position;
        state.selectedUnits = state.unitHitBoxes
            .filter(unitAndHitBox => isInRect(unitAndHitBox.hitBox, action.position))
            .map(unitAndHitBox => unitAndHitBox.unit);
    }

    return state;
}

function clientStateTransmitter(clientState: ClientState, action: ClientStateAction, gameDispatcher: GameDispatcher): void {
    if (action.name === "RIGHT_CLICK" && clientState.selectedUnits.length > 0) {
        gameDispatcher({
            name: "MOVE_UNIT_TO",
            position: action.position,
            unit: clientState.selectedUnits[0],
        });
    }
}

function defaultState(): ClientState {
    return deepClone({
        unitHitBoxes: [],
        selectedUnits: [],
        lastLeftClick: null,
    });
}

export {defaultState, clientStateMutator, clientStateTransmitter};

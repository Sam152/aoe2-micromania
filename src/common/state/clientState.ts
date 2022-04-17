import {ClientState, ClientStateAction, GameDispatcher, GameState} from '../../types';
import deepClone from '../util/deepClone';
import pointInRect from "../util/pointInRect";
import rectIntersectingWithRect, {normalizeRect} from "../util/rectIntersectingWithRect";
import FormationType from "../units/formations/FormationType";
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
            .filter(unitAndHitBox => pointInRect(unitAndHitBox.hitBox, action.position))
            .map(unitAndHitBox => unitAndHitBox.unit);
    }

    if (action.name === "DRAG_START") {
        state.selectionRectangle = {
            p1: action.position,
            p2: action.position,
        };
    }
    if (action.name === "DRAGGING") {
        state.selectionRectangle.p2 = action.position;
        state.selectedUnits = state.unitHitBoxes
            .filter(unitAndHitBox => rectIntersectingWithRect(unitAndHitBox.hitBox, normalizeRect(state.selectionRectangle)))
            .map(unitAndHitBox => unitAndHitBox.unit);
    }
    if (action.name === "DRAG_END") {
        state.selectionRectangle = null;
    }

    return state;
}

/**
 * Dispatch into the game state, local actions which impact the game state.
 */
function clientStateTransmitter(clientState: ClientState, action: ClientStateAction, gameDispatcher: GameDispatcher): void {
    if (action.name === "RIGHT_CLICK" && clientState.selectedUnits.length > 0) {
        gameDispatcher({
            name: "MOVE_UNITS_TO",
            position: action.position,
            units: clientState.selectedUnits.map(selectedUnit => selectedUnit.id),
            formation: clientState.selectedFormation,
        });
    }
    if (action.name === "SHIFT_RIGHT_CLICK") {
        gameDispatcher({
            name: "ADD_WAYPOINT",
            position: action.position,
            units: clientState.selectedUnits.map(selectedUnit => selectedUnit.id),
        });
    }

    if (action.name === "STOP_UNITS") {
        gameDispatcher({
            name: "STOP_UNITS",
            units: clientState.selectedUnits.map(selectedUnit => selectedUnit.id),
        });
    }
}

function defaultState(): ClientState {
    return deepClone({
        unitHitBoxes: [],
        selectedUnits: [],
        lastLeftClick: null,
        selectionRectangle: null,
        selectedFormation: FormationType.Line,
    });
}

export {defaultState, clientStateMutator, clientStateTransmitter};

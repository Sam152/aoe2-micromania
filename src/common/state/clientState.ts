import {ClientState, ClientStateAction, GameDispatcher} from '../../types';
import deepClone from '../util/deepClone';
import pointInRect from '../util/pointInRect';
import rectIntersectingWithRect, {normalizeRect} from '../util/rectIntersectingWithRect';
import FormationType from '../units/formations/FormationType';
import config from '../config';
import {Vector2} from 'three';
import ActiveCommand from '../input/ActiveCommand';

function clientStateMutator(state: ClientState, action: ClientStateAction): ClientState {
    if (action.name === 'FRAME_RENDERING_STARTED') {
        state.unitHitBoxes = [];
        state.renderedFrames++;
    }

    if (action.name === 'MOUSE_POSITIONED') {
        state.mousePosition = action.position;
    }

    if (action.name === 'UNIT_DRAWN') {
        state.unitHitBoxes.push({
            unit: action.unit,
            hitBox: action.hitBox,
        });
    }

    if (action.name === 'RIGHT_CLICK' && state.selectedUnits.length > 0 && state.activeCommand === ActiveCommand.Default) {
        const attacking = state.unitHitBoxes
            .filter(({unit}) => unit.ownedByPlayer !== state.playingAs)
            .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, state.mousePosition));
        if (!attacking) {
            state.lastMoveClick = [action.position, state.renderedFrames];
        }
    }

    if (action.name === 'LEFT_CLICK' && state.activeCommand === ActiveCommand.Default) {
        state.lastLeftClick = action.position;
        const foundUnit = state.unitHitBoxes
            .filter((unitAndHitBox) => unitAndHitBox.unit.ownedByPlayer === state.playingAs)
            .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, action.position));
        state.selectedUnits = foundUnit ? [foundUnit.unit.id] : [];
    }

    if (action.name === 'DOUBLE_CLICK') {
        const ownUnits = state.unitHitBoxes.filter((unitAndHitBox) => unitAndHitBox.unit.ownedByPlayer === state.playingAs);
        const foundUnit = ownUnits.find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, action.position));
        if (foundUnit) {
            state.selectedUnits = ownUnits
                .filter((unitAndHitBox) => unitAndHitBox.unit.unitType === foundUnit.unit.unitType)
                .map((unitAndHitBox) => unitAndHitBox.unit.id);
        }
    }

    if (action.name === 'HOTKEY_ATTACK_GROUND' && state.selectedUnits.length > 0/* && state.selectedUnits.every(({unitType}) => unitType === Unit.Mangonel)*/) {
        state.activeCommand = ActiveCommand.AttackGround;
    }

    if (action.name === 'FIXATE_CAMERA') {
        state.camera = action.location;
    }

    if (action.name === 'ARROW_DOWN') {
        state.camera.y += config.cameraPanSpeed;
    }
    if (action.name === 'ARROW_UP') {
        state.camera.y -= config.cameraPanSpeed;
    }
    if (action.name === 'ARROW_LEFT') {
        state.camera.x -= config.cameraPanSpeed;
    }
    if (action.name === 'ARROW_RIGHT') {
        state.camera.x += config.cameraPanSpeed;
    }

    if (action.name === 'DRAG_START') {
        state.activeCommand = ActiveCommand.Default;
        state.selectionRectangle = {
            p1: action.position,
            p2: action.position,
        };
    }
    if (action.name === 'DRAGGING') {
        state.selectionRectangle.p2 = action.position;
        state.selectedUnits = state.unitHitBoxes
            .filter((unitAndHitBox) => unitAndHitBox.unit.ownedByPlayer === state.playingAs)
            .filter((unitAndHitBox) => rectIntersectingWithRect(unitAndHitBox.hitBox, normalizeRect(state.selectionRectangle)))
            .map((unitAndHitBox) => unitAndHitBox.unit.id);
    }
    if (action.name === 'DRAG_END') {
        state.selectionRectangle = null;
    }

    return state;
}

/**
 * Dispatch into the game state, local actions which should be transmitted to the server (or handled locally via the
 * single player state manager).
 */
function clientStateTransmitter(clientState: ClientState, action: ClientStateAction, gameDispatcher: GameDispatcher): void {
    if (action.name === 'RIGHT_CLICK' && clientState.selectedUnits.length > 0 && clientState.activeCommand === ActiveCommand.Default) {
        const attacking = clientState.unitHitBoxes
            .filter(({unit}) => unit.ownedByPlayer !== clientState.playingAs)
            .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, clientState.mousePosition));

        if (attacking) {
            gameDispatcher({
                name: 'ATTACK',
                units: clientState.selectedUnits,
                target: attacking.unit.id,
            });
        } else {
            gameDispatcher({
                name: 'MOVE_UNITS_TO',
                position: action.position,
                units: clientState.selectedUnits,
                formation: clientState.selectedFormation,
            });
        }
    }

    if (['RIGHT_CLICK', 'LEFT_CLICK'].includes(action.name) && clientState.selectedUnits.length > 0 && clientState.activeCommand === ActiveCommand.AttackGround) {
        gameDispatcher({
            name: 'ATTACK_GROUND',
            units: clientState.selectedUnits,
            position: clientState.mousePosition,
        });
        clientState.activeCommand = ActiveCommand.Default;
    }
    if (action.name === 'SHIFT_RIGHT_CLICK' && clientState.selectedUnits.length > 0) {
        const attacking = clientState.unitHitBoxes
            .filter(({unit}) => unit.ownedByPlayer !== clientState.playingAs)
            .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, clientState.mousePosition));

        if (!attacking) {
            gameDispatcher({
                name: 'ADD_WAYPOINT',
                formation: clientState.selectedFormation,
                position: action.position,
                units: clientState.selectedUnits,
            });
        }
    }
    if (action.name === 'HOTKEY_STOP') {
        gameDispatcher({
            name: 'STOP_UNITS',
            units: clientState.selectedUnits,
        });
    }
    if (action.name === 'HOTKEY_DELETE' && clientState.selectedUnits.length > 0) {
        gameDispatcher({
            name: 'DELETE_UNITS',
            units: [clientState.selectedUnits[0]],
        });
        clientState.selectedUnits.shift();
    }
    if (action.name === 'HOTKEY_SHIFT_DELETE' && clientState.selectedUnits.length > 0) {
        gameDispatcher({
            name: 'DELETE_UNITS',
            units: clientState.selectedUnits.map((selectedUnit) => selectedUnit),
        });
        clientState.selectedUnits = [];
    }
}

function defaultState(playingAs: number): ClientState {
    const state = deepClone({
        unitHitBoxes: [],
        playingAs: playingAs,
        renderedFrames: 0,
        selectedUnits: [],
        activeCommand: ActiveCommand.Default,
        lastLeftClick: null,
        lastMoveClick: null,
        selectionRectangle: null,
        selectedFormation: FormationType.Line,
    }) as ClientState;
    state.camera = new Vector2(0, 0);
    state.mousePosition = new Vector2(0, 0);
    return state;
}

export {defaultState, clientStateMutator, clientStateTransmitter};

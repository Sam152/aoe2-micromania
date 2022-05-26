import {ClientState, ClientStateAction, GameDispatcher} from '../../types';
import deepClone from '../util/deepClone';
import pointInRect from '../util/pointInRect';
import rectIntersectingWithRect, {normalizeRect} from '../util/rectIntersectingWithRect';
import FormationType from '../units/formations/FormationType';
import config from '../config';
import {Vector2} from 'three/src/math/Vector2';
import ActiveCommand from '../input/ActiveCommand';

function clientStateMutator(state: ClientState, action: ClientStateAction): ClientState {
    if (action.n === 'FRAME_RENDERING_STARTED') {
        state.unitHitBoxes = [];
        state.renderedFrames++;
    }

    if (action.n === 'MOUSE_POSITIONED') {
        state.mousePosition = action.position;
    }

    if (action.n === 'UNIT_DRAWN') {
        state.unitHitBoxes.push({
            unit: action.unit,
            hitBox: action.hitBox,
        });
    }

    if (action.n === 'RIGHT_CLICK' && state.selectedUnits.length > 0 && state.activeCommand === ActiveCommand.Default) {
        const attacking = state.unitHitBoxes
            .filter(({unit}) => unit.ownedByPlayer !== state.playingAs)
            .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, state.mousePosition));
        if (!attacking) {
            state.lastMoveClick = [action.position, state.renderedFrames];
        }
    }

    if (action.n === 'LEFT_CLICK' && state.activeCommand === ActiveCommand.Default) {
        state.lastLeftClick = action.position;
        const foundUnit = state.unitHitBoxes
            .filter((unitAndHitBox) => unitAndHitBox.unit.ownedByPlayer === state.playingAs)
            .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, action.position));
        if (action.shift && foundUnit) {
            state.selectedUnits = Array.from(new Set([foundUnit.unit.id, ...state.selectedUnits]).values());
        }
        else {
            state.selectedUnits = foundUnit ? [foundUnit.unit.id] : [];
        }
    }

    if (action.n === 'DOUBLE_CLICK') {
        const ownUnits = state.unitHitBoxes.filter((unitAndHitBox) => unitAndHitBox.unit.ownedByPlayer === state.playingAs);
        const foundUnit = ownUnits.find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, action.position));
        if (foundUnit) {
            state.selectedUnits = ownUnits
                .filter((unitAndHitBox) => unitAndHitBox.unit.unitType === foundUnit.unit.unitType)
                .map((unitAndHitBox) => unitAndHitBox.unit.id);
        }
    }

    if (action.n === 'HOTKEY_ATTACK_GROUND' && state.selectedUnits.length > 0/* && state.selectedUnits.every(({unitType}) => unitType === Unit.Mangonel)*/) {
        state.activeCommand = ActiveCommand.AttackGround;
    }

    if (action.n === 'HOTKEY_PATROL' && state.selectedUnits.length > 0) {
        state.activeCommand = ActiveCommand.Patrol;
    }

    if (action.n === 'HOTKEY_CANCEL') {
        state.activeCommand = ActiveCommand.Default;
    }

    if (['RIGHT_CLICK', 'LEFT_CLICK', 'DRAG_END'].includes(action.n) && state.activeCommand === ActiveCommand.Patrol) {
        // @ts-ignore
        state.lastMoveClick = [action.position, state.renderedFrames];
    }

    if (action.n === 'FIXATE_CAMERA') {
        state.camera = action.location;
    }

    if (action.n === 'ARROW_DOWN') {
        state.camera.y += config.cameraPanSpeed;
    }
    if (action.n === 'ARROW_UP') {
        state.camera.y -= config.cameraPanSpeed;
    }
    if (action.n === 'ARROW_LEFT') {
        state.camera.x -= config.cameraPanSpeed;
    }
    if (action.n === 'ARROW_RIGHT') {
        state.camera.x += config.cameraPanSpeed;
    }

    if (action.n === 'DRAG_START' && state.activeCommand === ActiveCommand.Default) {
        state.selectionRectangle = {
            p1: action.position,
            p2: action.position,
        };
    }
    if (action.n === 'DRAGGING' && state.activeCommand === ActiveCommand.Default) {
        state.selectionRectangle.p2 = action.position;
        const unitsInSelection = state.unitHitBoxes
            .filter((unitAndHitBox) => unitAndHitBox.unit.ownedByPlayer === state.playingAs)
            .filter((unitAndHitBox) => rectIntersectingWithRect(unitAndHitBox.hitBox, normalizeRect(state.selectionRectangle)))
            .map((unitAndHitBox) => unitAndHitBox.unit.id);
        if (action.shift) {
            state.selectedUnits = Array.from(new Set([...unitsInSelection, ...state.selectedUnits]).values());
        }
        else {
            state.selectedUnits = unitsInSelection;
        }
    }
    if (action.n === 'DRAG_END' && state.activeCommand === ActiveCommand.Default) {
        state.selectionRectangle = null;
    }

    return state;
}

/**
 * Dispatch into the game state, local actions which should be transmitted to the server (or handled locally via the
 * single player state manager).
 */
function clientStateTransmitter(clientState: ClientState, action: ClientStateAction, gameDispatcher: GameDispatcher): void {
    if (action.n === 'RIGHT_CLICK' && clientState.selectedUnits.length > 0 && clientState.activeCommand === ActiveCommand.Default) {
        const attacking = clientState.unitHitBoxes
            .filter(({unit}) => unit.ownedByPlayer !== clientState.playingAs)
            .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, clientState.mousePosition));

        if (attacking) {
            gameDispatcher({
                n: 'ATTACK',
                units: clientState.selectedUnits,
                target: attacking.unit.id,
            });
        } else {
            gameDispatcher({
                n: 'MOVE_UNITS_TO',
                position: action.position,
                units: clientState.selectedUnits,
            });
        }
    }

    if (clientState.activeCommand === ActiveCommand.AttackGround && ['RIGHT_CLICK', 'LEFT_CLICK', 'DRAG_END'].includes(action.n) && clientState.selectedUnits.length > 0) {
        gameDispatcher({
            n: 'ATTACK_GROUND',
            units: clientState.selectedUnits,
            position: clientState.mousePosition,
        });
        clientState.activeCommand = ActiveCommand.Default;
    }

    if (clientState.activeCommand === ActiveCommand.Patrol && ['RIGHT_CLICK', 'LEFT_CLICK', 'DRAG_END'].includes(action.n) && clientState.selectedUnits.length > 0) {
        gameDispatcher({
            n: 'PATROL',
            units: clientState.selectedUnits,
            position: clientState.mousePosition,
        });
        clientState.activeCommand = ActiveCommand.Default;
    }

    if (action.n === 'HOTKEY_FORMATION_CHANGED') {
        gameDispatcher({
            n: 'FORMATION_CHANGED',
            formation: action.formation,
            units: clientState.selectedUnits,
        });
    }

    if (action.n === 'SHIFT_RIGHT_CLICK' && clientState.selectedUnits.length > 0) {
        const attacking = clientState.unitHitBoxes
            .filter(({unit}) => unit.ownedByPlayer !== clientState.playingAs)
            .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, clientState.mousePosition));

        if (!attacking) {
            gameDispatcher({
                n: 'ADD_WAYPOINT',
                position: action.position,
                units: clientState.selectedUnits,
            });
        }
    }
    if (action.n === 'HOTKEY_STOP') {
        gameDispatcher({
            n: 'STOP_UNITS',
            units: clientState.selectedUnits,
        });
    }
    if (action.n === 'HOTKEY_DELETE' && clientState.selectedUnits.length > 0) {
        gameDispatcher({
            n: 'DELETE_UNITS',
            units: [clientState.selectedUnits[0]],
        });
        clientState.selectedUnits.shift();
    }
    if (action.n === 'HOTKEY_SHIFT_DELETE' && clientState.selectedUnits.length > 0) {
        gameDispatcher({
            n: 'DELETE_UNITS',
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
    }) as ClientState;
    state.camera = new Vector2(0, 0);
    state.mousePosition = new Vector2(0, 0);
    return state;
}

export {defaultState, clientStateMutator, clientStateTransmitter};

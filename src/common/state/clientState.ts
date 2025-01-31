import { ClientState, ClientStateAction, GameDispatcher, GameState } from "../../types";
import deepClone from "../util/deepClone";
import pointInRect from "../util/pointInRect";
import rectIntersectingWithRect, { normalizeRect } from "../util/rectIntersectingWithRect";
import config from "../config";
import { Vector2 } from "three/src/math/Vector2";
import ActiveCommand from "../input/ActiveCommand";
import soundManager from "../sounds/SoundManger";
import soundManger from "../sounds/SoundManger";
import { selectionShouldAttackGround } from "../units/selectionShouldAttackGround";
import { unitsById } from "../units/unitsById";
import Unit from "../units/Unit";

function clientStateMutator(state: ClientState, gameState: GameState, action: ClientStateAction): ClientState {
  const playingAs = gameState.activePlayers[state.clientId] ?? -1;

  if (action.n === "FRAME_RENDERING_STARTED") {
    state.unitHitBoxes = [];
    state.renderedFrames++;
  }

  if (action.n === "GAME_STATE_REHYDRATED") {
    // Could filter owned units here?
  }

  if (action.n === "MOUSE_POSITIONED") {
    state.mousePosition = action.position;
  }

  if (action.n === "UNIT_DRAWN") {
    state.unitHitBoxes.push({
      unit: action.unit,
      hitBox: action.hitBox,
    });
  }

  if (action.n === "RIGHT_CLICK" && state.selectedUnits.length > 0 && state.activeCommand === ActiveCommand.Default) {
    const attacking = state.unitHitBoxes
      .filter(({ unit }) => unit.ownedByPlayer !== playingAs)
      .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, state.mousePosition));
    if (attacking) {
      state.lastAttackedUnit = [attacking.unit.id, state.renderedFrames];
    } else {
      state.lastMoveClick = [action.position, state.renderedFrames];
    }
  }

  if (action.n === "LEFT_CLICK" && state.activeCommand === ActiveCommand.Default) {
    state.lastLeftClick = action.position;
    const foundUnit = state.unitHitBoxes
      .filter((unitAndHitBox) => unitAndHitBox.unit.ownedByPlayer === playingAs)
      .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, action.position));
    if (action.shift && foundUnit) {
      state.selectedUnits = Array.from(new Set([foundUnit.unit.id, ...state.selectedUnits]).values());
    } else {
      state.selectedUnits = foundUnit ? [foundUnit.unit.id] : [];
    }
  }

  if (action.n === "DOUBLE_CLICK") {
    const ownUnits = state.unitHitBoxes.filter((unitAndHitBox) => unitAndHitBox.unit.ownedByPlayer === playingAs);
    const foundUnit = ownUnits.find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, action.position));
    if (foundUnit) {
      state.selectedUnits = ownUnits
        .filter((unitAndHitBox) => unitAndHitBox.unit.unitType === foundUnit.unit.unitType)
        .map((unitAndHitBox) => unitAndHitBox.unit.id);
    }
  }

  // Allow all unit classes to attack ground, because it's more fun.
  if (
    action.n === "HOTKEY_ATTACK_GROUND" &&
    state.selectedUnits.length > 0 &&
    selectionShouldAttackGround(state.selectedUnits, gameState)
  ) {
    state.activeCommand = ActiveCommand.AttackGround;
  }

  if (action.n === "HOTKEY_PATROL" && state.selectedUnits.length > 0) {
    state.activeCommand = ActiveCommand.Patrol;
  }

  if (action.n === "HOTKEY_CANCEL") {
    state.activeCommand = ActiveCommand.Default;
  }

  if (["RIGHT_CLICK", "LEFT_CLICK", "DRAG_END"].includes(action.n) && state.activeCommand === ActiveCommand.Patrol) {
    // @ts-ignore
    state.lastMoveClick = [action.position, state.renderedFrames];
  }

  if (action.n === "FIXATE_CAMERA") {
    state.camera = action.location;
  }

  if (action.n === "ARROW_DOWN") {
    state.camera.y += config.cameraPanSpeed;
  }
  if (action.n === "ARROW_UP") {
    state.camera.y -= config.cameraPanSpeed;
  }
  if (action.n === "ARROW_LEFT") {
    state.camera.x -= config.cameraPanSpeed;
  }
  if (action.n === "ARROW_RIGHT") {
    state.camera.x += config.cameraPanSpeed;
  }

  if (action.n === "DRAG_START" && state.activeCommand === ActiveCommand.Default) {
    state.selectionRectangle = {
      p1: action.position,
      p2: action.position,
    };
  }
  if (action.n === "DRAGGING" && state.activeCommand === ActiveCommand.Default) {
    state.selectionRectangle.p2 = action.position;
    const unitsInSelection = state.unitHitBoxes
      .filter((unitAndHitBox) => unitAndHitBox.unit.ownedByPlayer === playingAs)
      .filter((unitAndHitBox) =>
        rectIntersectingWithRect(unitAndHitBox.hitBox, normalizeRect(state.selectionRectangle)),
      )
      .map((unitAndHitBox) => unitAndHitBox.unit.id);
    if (action.shift) {
      state.selectedUnits = Array.from(new Set([...unitsInSelection, ...state.selectedUnits]).values());
    } else {
      state.selectedUnits = unitsInSelection;
    }
  }
  if (action.n === "DRAG_END" && state.activeCommand === ActiveCommand.Default) {
    state.selectionRectangle = null;
  }

  if (action.n === "CONTROL_GROUP_ASSIGNED") {
    // Remove units in the selection from other control groups, before assigning them to a new one.
    Object.keys(state.controlGroups).forEach((controlGroup) => {
      state.controlGroups[parseInt(controlGroup)] = state.controlGroups[parseInt(controlGroup)].filter(
        (unit) => !state.selectedUnits.includes(unit),
      );
    });
    state.controlGroups[action.group] = state.selectedUnits;
  }
  if (action.n === "CONTROL_GROUP_SELECTED" && state.controlGroups[action.group]) {
    state.selectedUnits = state.controlGroups[action.group];
  }

  return state;
}

/**
 * Dispatch into the game state, local actions which should be transmitted to the server (or handled locally via the
 * single player state manager).
 */
function clientStateTransmitter(
  clientState: ClientState,
  gameState: GameState,
  action: ClientStateAction,
  gameDispatcher: GameDispatcher,
): void {
  const playingAs = gameState.activePlayers[clientState.clientId] ?? -1;

  if (
    action.n === "RIGHT_CLICK" &&
    clientState.selectedUnits.length > 0 &&
    clientState.activeCommand === ActiveCommand.Default
  ) {
    const targeting = clientState.unitHitBoxes
      .filter(({ unit }) => unit.ownedByPlayer !== playingAs)
      .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, clientState.mousePosition));

    if (targeting) {
      const byId = unitsById(gameState);
      const attackingUnits = clientState.selectedUnits.filter((selectedUnit) => {
        const unit = byId[selectedUnit];
        return unit && unit.unitType !== Unit.Monk;
      });
      if (attackingUnits.length > 0) {
        soundManager.attacking(clientState);
        gameDispatcher({
          n: "ATTACK",
          units: attackingUnits,
          target: targeting.unit.id,
        });
      }

      const convertingUnits = clientState.selectedUnits.filter((selectedUnit) => {
        const unit = byId[selectedUnit];
        return unit && unit.unitType === Unit.Monk;
      });
      if (convertingUnits.length > 0) {
        gameDispatcher({
          n: "START_CONVERSION",
          units: convertingUnits,
          target: targeting.unit.id,
        });
      }
    } else {
      soundManager.moving(clientState);
      gameDispatcher({
        n: "MOVE_UNITS_TO",
        position: action.position,
        units: clientState.selectedUnits,
      });
    }
  }

  if (
    clientState.activeCommand === ActiveCommand.AttackGround &&
    ["RIGHT_CLICK", "LEFT_CLICK", "DRAG_END"].includes(action.n) &&
    clientState.selectedUnits.length > 0
  ) {
    gameDispatcher({
      n: "ATTACK_GROUND",
      units: clientState.selectedUnits,
      position: clientState.mousePosition,
    });
    clientState.activeCommand = ActiveCommand.Default;
  }

  if (
    clientState.activeCommand === ActiveCommand.Patrol &&
    ["RIGHT_CLICK", "LEFT_CLICK", "DRAG_END"].includes(action.n) &&
    clientState.selectedUnits.length > 0
  ) {
    soundManger.moving(clientState);
    gameDispatcher({
      n: "PATROL",
      units: clientState.selectedUnits,
      position: clientState.mousePosition,
    });
    clientState.activeCommand = ActiveCommand.Default;
  }

  if (action.n === "HOTKEY_FORMATION_CHANGED" && clientState.selectedUnits.length > 0) {
    soundManger.moving(clientState);
    gameDispatcher({
      n: "FORMATION_CHANGED",
      formation: action.formation,
      units: clientState.selectedUnits,
    });
  }

  if (action.n === "SHIFT_RIGHT_CLICK" && clientState.selectedUnits.length > 0) {
    const attacking = clientState.unitHitBoxes
      .filter(({ unit }) => unit.ownedByPlayer !== playingAs)
      .find((unitAndHitBox) => pointInRect(unitAndHitBox.hitBox, clientState.mousePosition));

    if (!attacking) {
      gameDispatcher({
        n: "ADD_WAYPOINT",
        position: action.position,
        units: clientState.selectedUnits,
      });
    }
  }
  if (action.n === "HOTKEY_STOP") {
    gameDispatcher({
      n: "STOP_UNITS",
      units: clientState.selectedUnits,
    });
  }
  if (action.n === "HOTKEY_DELETE" && clientState.selectedUnits.length > 0) {
    gameDispatcher({
      n: "DELETE_UNITS",
      units: [clientState.selectedUnits[0]],
    });
    clientState.selectedUnits.shift();
  }
  if (action.n === "HOTKEY_SHIFT_DELETE" && clientState.selectedUnits.length > 0) {
    gameDispatcher({
      n: "DELETE_UNITS",
      units: clientState.selectedUnits.map((selectedUnit) => selectedUnit),
    });
    clientState.selectedUnits = [];
  }
}

function defaultState(clientId: string): ClientState {
  const state = deepClone({
    unitHitBoxes: [],
    clientId,
    renderedFrames: 0,
    selectedUnits: [],
    activeCommand: ActiveCommand.Default,
    lastLeftClick: null,
    lastMoveClick: null,
    selectionRectangle: null,
    controlGroups: {},
    soundQueue: [],
  }) as ClientState;
  state.camera = new Vector2(0, 0);
  state.mousePosition = new Vector2(0, 0);
  return state;
}

export { defaultState, clientStateMutator, clientStateTransmitter };

import {GameState, GameStateAction, PlayerId, UnitInstance} from '../../types';
import deepClone from '../util/deepClone';
import UnitState from '../units/UnitState';
import CompassDirection from '../units/CompassDirection';
import setUnitMovementTowards, {
    setUnitMovementTowardsCurrentWaypoint,
} from './mutations/initiated/setUnitMovementTowards';
import formationManager from '../units/formations/FormationManager';
import stopUnit, {stopUnitExceptForWaypoints} from './mutations/initiated/stopUnit';
import compassDirectionCalculator from '../units/compassDirectionCalculator';
import fireProjectiles from './mutations/tick/fireProjectiles';
import moveUnits from './mutations/tick/moveUnits';
import registerProjectileHits from './mutations/tick/registerProjectileHits';
import unitMetadataFactory from '../units/unitMetadataFactory';
import unitsInGameState from '../util/unitsInGameState';
import registerUnitFallen from './mutations/tick/registerUnitFallen';
import averageVector from '../util/averageVector';
import patrolUnits from './mutations/tick/patrolUnits';
import reformUnits from './mutations/tick/reformUnits';
import addUnitReformingSpeedFactor from '../util/addUnitReformingSpeedFactor';
import autoAttack from './mutations/tick/autoAttack';

function gameStateMutator(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'CLIENT_LOADED') {
        state.loadedPlayers.push(action.player);
    }
    if (action.name === 'GAME_MODE_STARTED') {
        state.gameModeStarted = true;
    }

    if (action.name === 'SPAWN_UNIT') {
        const stats = unitMetadataFactory.getUnit(action.unitType);
        state.units.push({
            id: state.idAt++,
            position: action.position,
            waypoints: [],
            clickedWaypoints: [],
            movingDirection: null,
            reloadsAt: 0,
            ownedByPlayer: action.forPlayer,
            unitType: action.unitType,
            unitState: UnitState.Idle,
            unitStateStartedAt: state.ticks,
            direction: action.direction ?? CompassDirection.South,
            hitPoints: stats.hitPoints,
        });
    }

    if (action.name === 'MOVE_UNITS_TO') {
        const units = unitsInGameState(state, action.units);
        units.forEach((unit) => stopUnit(unit));
        const positions = units.map((unit) => unit.position);

        formationManager.get(action.formation).form(positions, action.position).forEach((formationPosition, index) => {
            units[index].waypoints = [formationPosition];
            setUnitMovementTowardsCurrentWaypoint(state, units[index]);
        });
    }
    if (action.name === 'ADD_WAYPOINT') {
        const units = unitsInGameState(state, action.units);
        units.forEach((unit) => {
            unit.clickedWaypoints.push(action.position);
            stopUnitExceptForWaypoints(unit);
        });
        const positions = units.map((unit) => unit.waypoints.at(-1) ?? unit.position);
        formationManager.get(action.formation).form(positions, action.position).map((formationPosition, index) => {
            units[index].waypoints.push(formationPosition);
            if (units[index].unitState === UnitState.Idle) {
                setUnitMovementTowardsCurrentWaypoint(state, units[index]);
            }
        });
    }

    if (action.name === 'STOP_UNITS') {
        unitsInGameState(state, action.units).forEach((unit) => stopUnit(unit));
    }
    if (action.name === 'DELETE_UNITS') {
        unitsInGameState(state, action.units).forEach((deletedUnit) => registerUnitFallen(state, deletedUnit));
    }
    if (action.name === 'ATTACK') {
        const target = state.units.find(({id}) => action.target === id);
        unitsInGameState(state, action.units).forEach((attackingUnit) => {
            stopUnit(attackingUnit);
            attackingUnit.targetingUnit = action.target;
        });
    }
    if (action.name === 'ATTACK_GROUND') {
        unitsInGameState(state, action.units).forEach((attackingUnit) => {
            stopUnit(attackingUnit);
            attackingUnit.targetingPosition = action.position;
        });
    }

    if (action.name === 'PATROL') {
        const units = unitsInGameState(state, action.units);
        units.forEach((unit) => stopUnit(unit));

        if (units.length > 1) {
            const positions = units.map((unit) => unit.position);
            const startingPosition = averageVector(positions);

            // Find the formation the units will make at their patrol destination.
            formationManager.get(action.formation).form(positions, action.position).forEach((formationPosition, index) => {
                units[index].patrollingToReturn = formationPosition;
            });

            // Translate their destinations back to their average starting position, then reform and return the
            // patrol to that location.
            const groupTravelledVector = averageVector(units.map(({patrollingToReturn}) => patrollingToReturn)).sub(startingPosition);
            units.map((unit) => {
                unit.patrollingTo = unit.patrollingToReturn.clone().sub(groupTravelledVector);
                unit.reformingTo = unit.patrollingToReturn.clone();
                setUnitMovementTowards(state, unit, unit.reformingTo);
            });
            addUnitReformingSpeedFactor(state.ticks, units);
        } else if (units.length === 1) {
            // units[0].patrollingToReturn = units[0].patrollingTo.clone().sub(groupTravelledVector);
            units[0].patrollingTo = action.position.clone();
            units[0].patrollingToReturn = units[0].position.clone();
            setUnitMovementTowards(state, units[0], units[0].patrollingTo);
        }
    }

    if (action.name === 'TICK') {
        reformUnits(state);
        moveUnits(state);
        patrolUnits(state);
        autoAttack(state);
        registerProjectileHits(state);
        fireProjectiles(state);

        ++state.ticks;
    }
    return state;
}

function defaultState(): GameState {
    return deepClone({
        ticks: 0,
        idAt: 0,
        units: [],
        projectiles: [],
        fallenUnits: [],
        mapSize: 18,
        loadedPlayers: [],
        gameModeStarted: false,
    });
}

export {defaultState, gameStateMutator};

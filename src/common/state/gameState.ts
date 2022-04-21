import {GameState, GameStateAction, PlayerId} from '../../types';
import deepClone from '../util/deepClone';
import UnitState from '../units/UnitState';
import CompassDirection from '../units/CompassDirection';
import unitMetadataFactory from '../units/unitMetadataFactory';
import config from '../config';
import moveTowardsCurrentWaypoint from './mutations/moveTowardsCurrentWaypoint';
import formationManager from '../units/formations/FormationManager';
import stopUnit from './mutations/stopUnit';
import compassDirectionCalculator from '../units/compassDirectionCalculator';
import unitState from '../units/UnitState';
import ProjectileType from "../units/ProjectileType";
import {Vector3} from "three";

let unitId = 0;

function gameStateMutator(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'SPAWN_UNIT') {
        state.units.push({
            id: unitId++,
            position: action.position,
            waypoints: [],
            clickedWaypoints: [],
            movingDirection: null,
            ownedByPlayer: action.forPlayer,
            unitType: action.unitType,
            unitState: UnitState.Idle,
            unitStateStartedAt: state.ticks,
            direction: action.direction ?? CompassDirection.South,
        });
    }

    if (action.name === 'MOVE_UNITS_TO') {
        const units = state.units.filter((instance) => action.units.includes(instance.id));
        units.forEach((unit) => {
            unit.clickedWaypoints = [];
        });
        const positions = units.map((unit) => unit.position);
        formationManager.get(action.formation).form(positions, action.position).map((formationPosition, index) => {
            units[index].waypoints = [formationPosition];
            moveTowardsCurrentWaypoint(units[index]);
        });
    }

    if (action.name === 'ADD_WAYPOINT') {
        const units = state.units.filter((instance) => action.units.includes(instance.id));
        units.forEach((unit) => {
            unit.clickedWaypoints.push(action.position);
        });
        const positions = units.map((unit) => unit.waypoints.at(-1) ?? unit.position);
        formationManager.get(action.formation).form(positions, action.position).map((formationPosition, index) => {
            units[index].waypoints.push(formationPosition);
            if (units[index].unitState === UnitState.Idle) {
                moveTowardsCurrentWaypoint(units[index]);
            }
        });
    }

    if (action.name === 'STOP_UNITS') {
        state.units.filter((instance) => action.units.includes(instance.id)).forEach((unit) => {
            stopUnit(unit);
        });
    }
    if (action.name === 'DELETE_UNITS') {
        const deletedUnits = state.units.filter((instance) => action.units.includes(instance.id));
        state.units = state.units.filter((instance) => !action.units.includes(instance.id));
        deletedUnits.forEach((deletedUnit) => {
            state.fallenUnits.push({
                id: deletedUnit.id,
                ownedByPlayer: deletedUnit.ownedByPlayer,
                unitType: deletedUnit.unitType,
                unitFallenAt: state.ticks,
                position: deletedUnit.position,
                direction: deletedUnit.direction,
            });
        });
    }

    if (action.name === 'ATTACK') {
        const attackingUnits = state.units.filter(({id}) => action.units.includes(id));
        const target = state.units.find(({id}) => action.target === id);
        attackingUnits.forEach((attackingUnit) => {
            attackingUnit.unitState = UnitState.Firing;
            attackingUnit.unitStateStartedAt = state.ticks;
            attackingUnit.targetingUnit = action.target;
            attackingUnit.direction = compassDirectionCalculator.getDirection(attackingUnit.position, target.position);
            attackingUnit.waypoints = [];
        });
    }

    if (action.name === 'TICK') {
        // Move all units that have some active waypoint.
        state.units.filter((unit) => unit.waypoints.length > 0).forEach(function(unit) {
            unit.position.add(unit.movingDirection.clone().multiplyScalar(unitMetadataFactory.getUnit(unit.unitType).movementRate * config.unitSpeedFactor));
            if (unit.position.distanceTo(unit.waypoints[0]) < 5) {
                unit.waypoints.shift();
                if (unit.waypoints.length) {
                    moveTowardsCurrentWaypoint(unit);
                } else {
                    stopUnit(unit);
                }
            }
        });

        // Release arrows for all firing units that have reached the tick corresponding to their frame delay.
        state.units
            .filter(({unitState}) => unitState === UnitState.Firing)
            .forEach((unit) => {
                const unitData = unitMetadataFactory.getUnit(unit.unitType);
                const firingFrame = Math.ceil(unitData.attackFrameDelay * config.ticksPerSecond);
                if (state.ticks - unit.unitStateStartedAt === Math.ceil(firingFrame)) {
                    const targetingUnit = state.units.find(({id}) => id === unit.targetingUnit);
                    state.projectiles.push({
                        ownedBy: unit.ownedByPlayer,
                        type: unitData.firesProjectileType,
                        startingPoint: unit.position,
                        destination: targetingUnit.position,
                        damage: 6,
                        targeting: 5,
                        position: new Vector3(1, 2, 3),
                    });
                }
            });

        ++state.ticks;
    }

    return state;
}

function defaultState(): GameState {
    return deepClone({
        ticks: 0,
        units: [],
        projectiles: [],
        fallenUnits: [],
        mapSize: 20,
    });
}

export {defaultState, gameStateMutator};

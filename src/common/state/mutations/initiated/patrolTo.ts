import unitsInGameState from '../../../util/unitsInGameState';
import stopUnit from './stopUnit';
import averageVector from '../../../util/averageVector';
import formationManager from '../../../units/formations/FormationManager';
import setUnitMovementTowards from './setUnitMovementTowards';
import addUnitReformingSpeedFactor from '../../../util/addUnitReformingSpeedFactor';
import {GameState, GameStateAction, UnitId, UnitInstance} from '../../../../types';
import {Vector2} from 'three/src/math/Vector2';

export default function patrolTo(state: GameState, units: UnitInstance[], position: Vector2) {
    units.forEach((unit) => stopUnit(unit));

    if (units.length > 1) {
        const positions = units.map((unit) => unit.position);
        patrolGroupTo(state, units, positions, position);
    } else if (units.length === 1) {
        // units[0].patrollingToReturn = units[0].patrollingTo.clone().sub(groupTravelledVector);
        units[0].patrollingTo = position.clone();
        units[0].patrollingToReturn = units[0].position.clone();
        setUnitMovementTowards(state, units[0], units[0].patrollingTo);
    }
}

export function patrolGroupTo(state: GameState, units: UnitInstance[], startingPositions: Vector2[], destination: Vector2): void {
    const startingPosition = averageVector(startingPositions);

    // Find the formation the units will make at their patrol destination.
    formationManager.fromPopulation(units).form(startingPositions, destination).forEach((formationPosition, index) => {
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
}

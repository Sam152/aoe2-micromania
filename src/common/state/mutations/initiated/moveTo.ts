import stopUnit from './stopUnit';
import formationManager from '../../../units/formations/FormationManager';
import setUnitMovementTowards, {setUnitMovementTowardsCurrentWaypoint} from './setUnitMovementTowards';
import {GameState, UnitInstance} from '../../../../types';
import {Vector2} from 'three/src/math/Vector2';
import averageVector from '../../../util/averageVector';
import populationVector from '../../../util/populationVector';
import config from '../../../config';
import addUnitReformingSpeedFactor from '../../../util/addUnitReformingSpeedFactor';

export default function moveTo(state: GameState, units: UnitInstance[], destination: Vector2) {
    units.forEach((unit) => stopUnit(unit));
    const positions = units.map((unit) => unit.position);

    formationManager.fromPopulation(units).form(positions, destination).forEach((formationPosition, index) => {
        units[index].waypoints = [formationPosition];
        setUnitMovementTowardsCurrentWaypoint(state, units[index]);
    });

    const position = averageVector(positions);
    // While moving, if the units are travelling a reasonable distance, reform them in their current location before
    // continuing to their destination.
    if (units.length > 2 && position.distanceTo(destination) > config.movingReformDistance * 1.5) {
        const reformAt = position.add(populationVector(units, 'movingDirection').multiplyScalar(config.movingReformDistance));
        formationManager.fromPopulation(units).form(positions, reformAt).forEach((formationPosition, index) => {
            units[index].reformingTo = formationPosition;
            setUnitMovementTowards(state, units[index], units[index].reformingTo);
            units[index].reformingArrivalTick = units[index].arrivalTick;
        });
        addUnitReformingSpeedFactor(state.ticks, units);
    }
}

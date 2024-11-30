import unitMetadataFactory from '../../../units/unitMetadataFactory';
import FormationType from '../../../units/formations/FormationType';
import UnitState from '../../../units/UnitState';
import CompassDirection from '../../../units/CompassDirection';
import {GameState, PlayerId} from '../../../../types';
import {Vector2} from 'three/src/math/Vector2';
import Unit from '../../../units/Unit';

export default function spawnUnit(state: GameState, action: {
    position: Vector2;
    unitType: Unit,
    forPlayer: PlayerId,
    direction?: CompassDirection,
}) {
    const stats = unitMetadataFactory.getUnit(action.unitType);
    state.units.push({
        id: state.idAt++,
        position: action.position.clone(),
        waypoints: [],
        formation: FormationType.Line,
        clickedWaypoints: [],
        movingDirection: null,
        reloadsAt: 0,
        ownedByPlayer: action.forPlayer,
        unitType: action.unitType,
        unitState: UnitState.Idle,
        unitStateStartedAt: state.ticks,
        direction: action.direction ?? CompassDirection.StartD,
        hitPoints: stats.hitPoints,
    });
}

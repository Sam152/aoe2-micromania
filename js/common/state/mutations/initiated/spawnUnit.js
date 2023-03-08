import unitMetadataFactory from '../../../units/unitMetadataFactory';
import FormationType from '../../../units/formations/FormationType';
import UnitState from '../../../units/UnitState';
import CompassDirection from '../../../units/CompassDirection';
export default function spawnUnit(state, action) {
    var _a;
    var stats = unitMetadataFactory.getUnit(action.unitType);
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
        direction: (_a = action.direction) !== null && _a !== void 0 ? _a : CompassDirection.South,
        hitPoints: stats.hitPoints
    });
}
//# sourceMappingURL=spawnUnit.js.map
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Vector2 } from 'three/src/math/Vector2';
export function normalizeGameStateAction(action) {
    var vectorKeys = [
        'position',
    ];
    vectorKeys.map(function (key) {
        if (key in action) {
            action[key] = new Vector2(action[key].x, action[key].y);
        }
    });
    return action;
}
export function normalizeGameStateObject(state) {
    state.units = state.units.map(function (unit) { return (__assign(__assign({}, unit), { position: new Vector2(unit.position.x, unit.position.y), targetingPosition: unit.targetingPosition ? new Vector2(unit.targetingPosition.x, unit.targetingPosition.y) : null, movingDirection: unit.movingDirection ? new Vector2(unit.movingDirection.x, unit.movingDirection.y) : null, waypoints: unit.waypoints.map(function (waypoint) { return new Vector2(waypoint.x, waypoint.y); }), reformingTo: unit.reformingTo ? new Vector2(unit.reformingTo.x, unit.reformingTo.y) : null, patrollingTo: unit.patrollingTo ? new Vector2(unit.patrollingTo.x, unit.patrollingTo.y) : null, patrollingToReturn: unit.patrollingToReturn ? new Vector2(unit.patrollingToReturn.x, unit.patrollingToReturn.y) : null })); });
    state.fallenUnits = state.fallenUnits.map(function (unit) { return (__assign(__assign({}, unit), { position: new Vector2(unit.position.x, unit.position.y) })); });
    state.projectiles = state.projectiles.map(function (projectile) { return (__assign(__assign({}, projectile), { startingPoint: new Vector2(projectile.startingPoint.x, projectile.startingPoint.y), destination: new Vector2(projectile.destination.x, projectile.destination.y), pathVector: new Vector2(projectile.pathVector.x, projectile.pathVector.y) })); });
    return state;
}
//# sourceMappingURL=normalizer.js.map
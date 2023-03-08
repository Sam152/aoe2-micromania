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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function GameStateReducer(state, action) {
    if (action.name === 'SPAWN_UNIT') {
        return __assign(__assign({}, state), { units: __spreadArray(__spreadArray([], state.units, true), [
                {
                    position: action.position,
                    movingTo: null
                }
            ], false) });
    }
    if (action.name === 'MOVE_UNIT_TO') {
        return __assign(__assign({}, state), { units: __spreadArray(__spreadArray(__spreadArray([], state.units.slice(0, action.id), true), [
                __assign(__assign({}, state.units[action.id]), { movingTo: action.position })
            ], false), state.units.slice(action.id + 1), true) });
    }
    if (action.name === 'TICK') {
        return __assign(__assign({}, state), { units: state.units.map(function (unit) {
                if (unit.movingTo) {
                    unit.position.x++;
                    unit.position.y++;
                }
                return unit;
            }) });
    }
    return __assign({}, state);
}
var defaultState = {
    units: [],
    projectiles: [],
    players: []
};
export { defaultState, GameStateReducer };
//# sourceMappingURL=GameState.js.map
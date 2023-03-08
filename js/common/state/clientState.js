import deepClone from '../util/deepClone';
function clientStateReducer(state, action) {
    return state;
}
function defaultState() {
    return deepClone({
        units: [],
        projectiles: [],
        players: []
    });
}
export { defaultState, clientStateReducer };
//# sourceMappingURL=clientState.js.map
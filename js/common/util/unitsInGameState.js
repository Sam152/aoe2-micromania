export default function unitsInGameState(state, selectedUnits) {
    return selectedUnits
        .map(function (selectedUnitId) { return state.units.find(function (_a) {
        var id = _a.id;
        return id === selectedUnitId;
    }); })
        .filter(function (unit) { return unit !== undefined; });
}
//# sourceMappingURL=unitsInGameState.js.map
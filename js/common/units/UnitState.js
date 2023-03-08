var UnitState;
(function (UnitState) {
    UnitState[UnitState["Idle"] = 0] = "Idle";
    UnitState[UnitState["Firing"] = 1] = "Firing";
    UnitState[UnitState["Moving"] = 2] = "Moving";
    UnitState[UnitState["Falling"] = 3] = "Falling";
    UnitState[UnitState["Decaying"] = 4] = "Decaying";
})(UnitState || (UnitState = {}));
export default UnitState;
//# sourceMappingURL=UnitState.js.map
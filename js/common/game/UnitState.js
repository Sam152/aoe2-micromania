var UnitState;
(function (UnitState) {
    UnitState[UnitState["Idle"] = 0] = "Idle";
    UnitState[UnitState["Firing"] = 1] = "Firing";
    UnitState[UnitState["Moving"] = 2] = "Moving";
    UnitState[UnitState["Patrolling"] = 3] = "Patrolling";
    UnitState[UnitState["Fallen"] = 4] = "Fallen";
})(UnitState || (UnitState = {}));
export default UnitState;
//# sourceMappingURL=UnitState.js.map
import averageVector from '../util/averageVector';
var PatrollingAi = (function () {
    function PatrollingAi(playingAs) {
        this.playingAs = playingAs;
    }
    PatrollingAi.prototype.makeDecisions = function (state, action, dispatcher) {
        var _this = this;
        if (state.ticks !== 20) {
            return;
        }
        var patrolTo = averageVector(state.units
            .filter(function (_a) {
            var ownedByPlayer = _a.ownedByPlayer;
            return ownedByPlayer !== _this.playingAs;
        })
            .map(function (_a) {
            var position = _a.position;
            return position;
        }));
    };
    return PatrollingAi;
}());
export default PatrollingAi;
//# sourceMappingURL=PatrollingAi.js.map
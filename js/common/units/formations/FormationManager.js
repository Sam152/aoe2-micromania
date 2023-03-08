import FormationType from './FormationType';
import LineFormation from './types/LineFormation';
import SpreadFormation from './types/SpreadFormation';
import SplitFormation from './types/SplitFormation';
var FormationManager = (function () {
    function FormationManager() {
        var _a;
        this.map = (_a = {},
            _a[FormationType.Line] = new LineFormation(),
            _a[FormationType.Spread] = new SpreadFormation(),
            _a[FormationType.Split] = new SplitFormation(),
            _a);
    }
    FormationManager.prototype.get = function (type) {
        return this.map[type];
    };
    FormationManager.prototype.fromPopulation = function (units) {
        if (units.length === 0) {
            return this.map[FormationType.Line];
        }
        var counts = units.reduce(function (accumulator, unit) {
            accumulator[unit.formation] = accumulator[unit.formation] ? accumulator[unit.formation] + 1 : 1;
            return accumulator;
        }, {});
        var populationFormation = Object.keys(counts).reduce(function (a, b) { return counts[a] > counts[a] ? a : b; });
        return this.map[populationFormation];
    };
    return FormationManager;
}());
var formationManager = new FormationManager();
export default formationManager;
//# sourceMappingURL=FormationManager.js.map
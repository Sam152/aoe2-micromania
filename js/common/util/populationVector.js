import hasValue from './hasValue';
import averageVector from './averageVector';
export default function populationVector(units, property) {
    return averageVector(units.map(function (unit) { return unit[property]; }).filter(function (vector) { return hasValue(vector); }));
}
//# sourceMappingURL=populationVector.js.map
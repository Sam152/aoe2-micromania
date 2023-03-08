import hasValue from './hasValue';
export default function populationHas(units, property) {
    var totalUnitsThatHaveProperty = units.map(function (unit) { return hasValue(unit[property]); }).filter(function (hasProperty) { return hasProperty; }).length;
    return totalUnitsThatHaveProperty > (units.length / 2);
}
//# sourceMappingURL=populationHas.js.map
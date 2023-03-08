var _a, _b;
import Unit from "./Unit";
import UnitState from "./UnitState";
import AnimationStyle from "../drawing/AnimationStyle";
var aocUnitsData = require('./data/aoc_units.json');
var unitDefinitions = (_a = {},
    _a[Unit.Archer] = {
        aocDataName: 'Crossbowman',
        animations: (_b = {},
            _b[UnitState.Idle] = {
                slp: 'xbow-stand',
                animationDuration: 2,
                style: AnimationStyle.Loop
            },
            _b[UnitState.Firing] = {
                slp: 'xbow-firing',
                animationDuration: 0.7,
                style: AnimationStyle.Play
            },
            _b[UnitState.Moving] = {
                slp: 'xbow-moving',
                animationDuration: 1,
                style: AnimationStyle.Loop
            },
            _b[UnitState.Patrolling] = {
                slp: 'xbow-moving',
                animationDuration: 1,
                style: AnimationStyle.Loop
            },
            _b[UnitState.Fallen] = {
                slp: 'xbow-decay',
                animationDuration: 3,
                style: AnimationStyle.Play
            },
            _b)
    },
    _a);
var UnitMetadata = (function () {
    function UnitMetadata() {
        var _this = this;
        this.units = {};
        Object.keys(unitDefinitions).forEach(function (unit) {
            _this.units = {};
            var aocData = aocUnitsData.data.find(function (element) { return element.name === unitDefinitions[unit].aocDataName; });
            _this.units[unit] = {
                attackFrameDelay: parseFloat(aocData.ad),
                reloadTime: parseFloat(aocData.fr),
                movementRate: parseFloat(aocData.mr),
                hitPoints: parseFloat(aocData.hp),
                attackRange: parseFloat(aocData.ra),
                attackDamage: parseFloat(aocData.at),
                animations: unitDefinitions[unit].animations
            };
        });
    }
    UnitMetadata.prototype.getUnit = function (unit) {
        return this.units[unit];
    };
    return UnitMetadata;
}());
var unitMetadataFactory = new UnitMetadata();
export default unitMetadataFactory;
//# sourceMappingURL=unitMetadataFactory.js.map
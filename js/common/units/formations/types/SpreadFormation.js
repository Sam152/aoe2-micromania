var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import averageVector from '../../../util/averageVector';
import formLines, { translateAndRotate } from '../utilities/formLines';
import FormationBase from '../FormationBase';
var SpreadFormation = (function (_super) {
    __extends(SpreadFormation, _super);
    function SpreadFormation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.distanceBetween = 40;
        _this.unitsPerRow = 6;
        return _this;
    }
    SpreadFormation.prototype.doForm = function (positions, destination) {
        var startingPoint = averageVector(positions);
        var rows = Math.ceil(positions.length / this.unitsPerRow);
        var columns = Math.ceil(positions.length / rows);
        var newPositions = formLines(positions, destination, rows, columns, startingPoint, this.distanceBetween);
        return translateAndRotate(positions, newPositions, destination, startingPoint);
    };
    return SpreadFormation;
}(FormationBase));
export default SpreadFormation;
//# sourceMappingURL=SpreadFormation.js.map
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Vector2 } from 'three/src/math/Vector2';
import averageVector from '../../../util/averageVector';
import formLines, { translateAndRotate } from '../utilities/formLines';
import FormationBase from '../FormationBase';
var SplitFormation = (function (_super) {
    __extends(SplitFormation, _super);
    function SplitFormation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.distanceBetween = 20;
        _this.unitsPerRow = 3;
        return _this;
    }
    SplitFormation.prototype.doForm = function (positions, destination) {
        var startingPoint = averageVector(positions);
        var rows = Math.ceil(positions.length / this.unitsPerRow);
        var columns = Math.ceil(positions.length / rows);
        var middleIndex = Math.ceil(positions.length / 2);
        var leftSplitUnits = positions.slice(0, middleIndex);
        var rightSplitUnits = positions.slice(-middleIndex);
        var leftSplitDestination = destination;
        var rightSplitDestination = destination.clone().add(new Vector2(200, 0));
        var newPositions = __spreadArray(__spreadArray([], formLines(leftSplitUnits, leftSplitDestination, rows, columns, startingPoint, this.distanceBetween), true), formLines(rightSplitUnits, rightSplitDestination, rows, columns, startingPoint, this.distanceBetween), true);
        return translateAndRotate(positions, newPositions, destination, startingPoint);
    };
    return SplitFormation;
}(FormationBase));
export default SplitFormation;
//# sourceMappingURL=SplitFormation.js.map
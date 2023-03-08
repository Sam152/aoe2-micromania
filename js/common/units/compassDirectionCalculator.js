import CompassDirection from './CompassDirection';
var CompassDirectionCalculator = (function () {
    function CompassDirectionCalculator() {
        this.circle = Math.PI * 2;
        this.directions = 8;
        this.quadrantSize = this.circle / this.directions;
        this.halfQuadrant = this.quadrantSize / 2;
        this.startingPoint = 0 - this.halfQuadrant;
        this.quadrants = this.computeQuadrants();
        this.quadrantMap = [
            CompassDirection.West,
            CompassDirection.NorthWest,
            CompassDirection.North,
            CompassDirection.NorthEast,
            CompassDirection.East,
            CompassDirection.SouthEast,
            CompassDirection.South,
            CompassDirection.SouthWest,
        ];
    }
    CompassDirectionCalculator.prototype.getDirection = function (startingPoint, endingPoint) {
        var angle = startingPoint.clone().sub(endingPoint).angle();
        return this.quadrantMap[this.getQuadrant(angle)];
    };
    CompassDirectionCalculator.prototype.getQuadrant = function (angle) {
        var quadrant = this.quadrants.findIndex(function (quadrant) { return angle >= quadrant[0] && angle < quadrant[1]; });
        return quadrant === -1 ? 0 : quadrant;
    };
    CompassDirectionCalculator.prototype.computeQuadrants = function () {
        var quadrants = [];
        var computingQuadrant = 0;
        while (computingQuadrant < this.directions) {
            var start = this.startingPoint + (computingQuadrant * this.quadrantSize);
            quadrants.push([start, start + this.quadrantSize]);
            computingQuadrant++;
        }
        return quadrants;
    };
    return CompassDirectionCalculator;
}());
var compassDirectionCalculator = new CompassDirectionCalculator();
export default compassDirectionCalculator;
//# sourceMappingURL=compassDirectionCalculator.js.map
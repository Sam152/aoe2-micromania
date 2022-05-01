import {Vector2} from 'three/src/math/Vector2';
import CompassDirection from './CompassDirection';

class CompassDirectionCalculator {
    private circle: number;
    private directions: number;
    quadrantSize: number;
    halfQuadrant: number;
    private quadrants: Array<[number, number]>;
    private startingPoint: number;
    private quadrantMap: CompassDirection[];

    constructor() {
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

    getDirection(startingPoint: Vector2, endingPoint: Vector2) {
        const angle = startingPoint.clone().sub(endingPoint).angle();
        return this.quadrantMap[this.getQuadrant(angle)];
    }

    private getQuadrant(angle: number): number {
        const quadrant = this.quadrants.findIndex((quadrant) => angle >= quadrant[0] && angle < quadrant[1]);
        // The index of the quadrant may not be found since the first quadrant starts at a negative offset, which
        // the angle will not be computed to. The final quadrant will end at 2PI - halfQuadrant, where the negative
        // offset quadrant begins.
        return quadrant === -1 ? 0 : quadrant;
    }

    private computeQuadrants(): Array<[number, number]> {
        const quadrants = [];
        let computingQuadrant = 0;
        while (computingQuadrant < this.directions) {
            const start = this.startingPoint + (computingQuadrant * this.quadrantSize);
            quadrants.push([start, start + this.quadrantSize] as [number, number]);
            computingQuadrant++;
        }
        return quadrants;
    }
}

const compassDirectionCalculator = new CompassDirectionCalculator();
export default compassDirectionCalculator;

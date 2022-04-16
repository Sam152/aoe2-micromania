import {Vector2} from "three";

export default function rotateAroundOrigin(origin: Vector2, point: Vector2, angle: number): Vector2 {
    return new Vector2(
        origin.x + (point.x - origin.x) * Math.cos(angle) - (point.y - origin.y) * Math.sin(angle),
        origin.y + (point.x - origin.x) * Math.sin(angle) + (point.y - origin.y) * Math.cos(angle)
    );
}

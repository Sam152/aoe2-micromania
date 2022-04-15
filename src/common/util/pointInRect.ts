import {Rectangle} from "../../types";
import {Vector2} from "three";

export default function pointInRect(rect: Rectangle, position: Vector2): boolean {
    return (
        position.x > rect.p1.x && position.x < rect.p2.x
        && position.y > rect.p1.y && position.y < rect.p2.y
    );
}

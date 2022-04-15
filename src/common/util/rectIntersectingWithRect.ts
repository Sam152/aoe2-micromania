import {Rectangle} from "../../types";
import {Vector2} from "three";
import {circle} from "../drawing/shapes";

export function normalizeRect(rect: Rectangle) {
    return {
        p1: new Vector2(Math.min(rect.p1.x, rect.p2.x), Math.min(rect.p1.y, rect.p2.y)),
        p2: new Vector2(Math.max(rect.p1.x, rect.p2.x), Math.max(rect.p1.y, rect.p2.y)),
    };
}

export default function rectIntersectingWithRect(rectA: Rectangle, rectB: Rectangle): boolean {
    return(
        rectA.p1.x < rectB.p2.x &&
        rectA.p2.x > rectB.p1.x &&
        rectA.p1.y < rectB.p2.y &&
        rectA.p2.y > rectB.p1.y
    );
}

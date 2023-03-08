import { Vector2 } from 'three/src/math/Vector2';
export function normalizeRect(rect) {
    return {
        p1: new Vector2(Math.min(rect.p1.x, rect.p2.x), Math.min(rect.p1.y, rect.p2.y)),
        p2: new Vector2(Math.max(rect.p1.x, rect.p2.x), Math.max(rect.p1.y, rect.p2.y))
    };
}
export default function rectIntersectingWithRect(rectA, rectB) {
    return (rectA.p1.x < rectB.p2.x &&
        rectA.p2.x > rectB.p1.x &&
        rectA.p1.y < rectB.p2.y &&
        rectA.p2.y > rectB.p1.y);
}
//# sourceMappingURL=rectIntersectingWithRect.js.map
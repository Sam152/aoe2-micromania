import { Vector2 } from 'three/src/math/Vector2';
export default function rotateAroundOrigin(origin, point, angle) {
    return new Vector2(origin.x + (point.x - origin.x) * Math.cos(angle) - (point.y - origin.y) * Math.sin(angle), origin.y + (point.x - origin.x) * Math.sin(angle) + (point.y - origin.y) * Math.cos(angle));
}
//# sourceMappingURL=rotateAroundOrigin.js.map
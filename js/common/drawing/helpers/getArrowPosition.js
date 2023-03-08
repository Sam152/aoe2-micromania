import { Vector2 } from 'three/src/math/Vector2';
export default function getArrowPosition(projectile, percentageComplete) {
    var length = projectile.pathVector.length();
    var lengthComplete = percentageComplete * length;
    var zValue = (-1 * Math.pow(lengthComplete - (length / 2), 2) + Math.pow(length / 2, 2)) * 0.001;
    var positionOnPathVector = projectile.pathVector.clone().multiplyScalar(percentageComplete);
    return projectile.startingPoint.clone().add(positionOnPathVector).sub(new Vector2(0, zValue));
}
//# sourceMappingURL=getArrowPosition.js.map
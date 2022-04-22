import {ProjectileInstance} from "../../../types";
import {Vector2} from "three";


export default function getArrowPosition(projectile: ProjectileInstance, percentageComplete: number) {
    const length = projectile.pathVector.length();
    const lengthComplete = percentageComplete * length;

    const zValue = (
        -1 * Math.pow(lengthComplete - (length / 2), 2) + Math.pow(length / 2, 2)
    ) * 0.003;

    const positionOnPathVector = projectile.pathVector.clone().multiplyScalar(percentageComplete);
    return projectile.startingPoint.clone().add(positionOnPathVector).sub(
        new Vector2(0, zValue)
    );
}

import screenManager from '../drawing/screenManager';
import {Vector2} from 'three';

export default function screenPositionToGamePosition(screenPosition: Vector2): Vector2 {
    return screenPosition.clone().multiplyScalar(screenManager.getCanvasScale());
}

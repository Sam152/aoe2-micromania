import screenManager from '../drawing/screenManager';
export default function screenPositionToGamePosition(screenPosition) {
    return screenPosition.clone().multiplyScalar(screenManager.getCanvasScale());
}
export function gamePositionToScreenPosition(screenPosition) {
    return screenPosition.clone().divideScalar(screenManager.getCanvasScale());
}
//# sourceMappingURL=screenPositionToGamePosition.js.map
import {GamePosition, ScreenPosition} from "../../types";
import screenManager from "../drawing/screenManager";

export default function screenPositionToGamePosition(screenPosition: ScreenPosition): GamePosition {
    return {
        x: screenPosition.x * screenManager.getCanvasScale(),
        y: screenPosition.y * screenManager.getCanvasScale(),
    }
}

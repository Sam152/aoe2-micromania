import {GamePosition, Rectangle} from "../../types";

export default function positionInRect(rect: Rectangle, position: GamePosition) {
    return (
        position.x > rect.x1 && position.x < rect.x2
        && position.y > rect.y1 && position.y < rect.y2
    );
}

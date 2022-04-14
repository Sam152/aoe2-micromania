import {GamePosition} from "../../types";

export default function anchorAt(hotspot: {x: number, y: number}, position: GamePosition): GamePosition {
    return {
        x: position.x - hotspot.x,
        y: position.y - hotspot.y,
    };
}

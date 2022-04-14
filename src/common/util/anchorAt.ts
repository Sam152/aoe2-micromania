import {GamePosition} from "../../types";

export default function anchorAt(hotspot: {x: number, y: number}, position: GamePosition, flipped: boolean = false): GamePosition {
    return {
        x: position.x - (hotspot.x * (flipped ? -1 : 1)),
        y: position.y - hotspot.y,
    };
}

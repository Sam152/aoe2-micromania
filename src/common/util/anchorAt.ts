import {GamePosition} from '../../types';

interface Hotspot { x: number, y: number };
export default function anchorAt(hotspot: Hotspot, position: GamePosition, flipped: boolean = false): GamePosition {
    return {
        x: position.x - (hotspot.x * (flipped ? -1 : 1)),
        y: position.y - hotspot.y,
    };
}

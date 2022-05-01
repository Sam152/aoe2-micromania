import {Vector2} from 'three/src/math/Vector2';

interface Hotspot { x: number, y: number };
export default function anchorAt(hotspot: Hotspot, position: Vector2, flipped: boolean = false): Vector2 {
    return position.clone().sub(new Vector2(hotspot.x * (flipped ? -1 : 1), hotspot.y));
}

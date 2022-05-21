import {Vector2} from 'three/src/math/Vector2';
import Grid from '../terrain/Grid';

export default function addWithClamp(position: Vector2, addition: Vector2, grid: Grid) {
    /**
     * Usually an isometric game will use the diamond layout exclusively for display. All world & gameplay logic is done in a separate coordinate system, with the axes aligned to the rows & columns (so eg. (2, 0) is the third column of the first row, assuming 0-based indices), and transformed to the isometric perspective only for the drawing step. This kind of switch will likely make a lot of your logic much simpler. –
     */
    position.add(addition);
}

export function setWithClamp(position: Vector2, newPosition: Vector2, grid: Grid) {
    position.set(newPosition.x, newPosition.y);
}

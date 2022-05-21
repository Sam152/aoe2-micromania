import {Vector2} from "three/src/math/Vector2";
import Grid from "../terrain/Grid";

export default function addWithClamp(position: Vector2, addition: Vector2, grid: Grid) {
    position.add(addition);
}

export function setWithClamp() {

}

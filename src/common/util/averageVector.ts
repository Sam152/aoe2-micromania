import {Vector2} from "three";

export default function averageVector(vectors: Vector2[]): Vector2 {
    return new Vector2(
        vectors.reduce((accumulator, vector) => accumulator + vector.x, 0) / vectors.length,
        vectors.reduce((accumulator, vector) => accumulator + vector.y, 0) / vectors.length,
    );
}

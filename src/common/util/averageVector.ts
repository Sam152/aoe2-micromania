import { Vector2 } from "three/src/math/Vector2.js";

export function averageVector(vectors: Vector2[]): Vector2 {
  return new Vector2(
    vectors.reduce((accumulator, vector) => accumulator + vector.x, 0) / vectors.length,
    vectors.reduce((accumulator, vector) => accumulator + vector.y, 0) / vectors.length,
  );
}

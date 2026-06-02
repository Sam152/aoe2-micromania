import { Vector2 } from "three/src/math/Vector2.js";

export function averageVector(vectors: Vector2[]): Vector2 {
  if (vectors.length === 0) {
    throw new Error("Cannot compute the average vector of 0 vectors");
  }

  return new Vector2(
    vectors.reduce((accumulator, vector) => accumulator + vector.x, 0) / vectors.length,
    vectors.reduce((accumulator, vector) => accumulator + vector.y, 0) / vectors.length,
  );
}

export function averageVectorOrUndefined(vectors: Vector2[]): Vector2 | undefined {
  if (vectors.length === 0) {
    return undefined;
  }
  return averageVector(vectors);
}

import { Vector2 } from 'three/src/math/Vector2';
export default function averageVector(vectors) {
    return new Vector2(vectors.reduce(function (accumulator, vector) { return accumulator + vector.x; }, 0) / vectors.length, vectors.reduce(function (accumulator, vector) { return accumulator + vector.y; }, 0) / vectors.length);
}
//# sourceMappingURL=averageVector.js.map
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { chunkArray } from "./chunckArray.ts";

const cases: Array<[number[], number, number[][]]> = [
  [[1, 2, 3, 4, 5, 6], 2, [[1, 2], [3, 4], [5, 6]]],
  [[1, 2, 3, 4, 5], 2, [[1, 2], [3, 4], [5]]],
  [[1, 2, 3], 3, [[1, 2, 3]]],
  [[1, 2, 3], 5, [[1, 2, 3]]],
  [[], 2, []],
];

describe("chunkArray", () => {
  for (const [arr, size, expected] of cases) {
    it(`chunks [${arr}] by ${size}`, () => {
      assertEquals(chunkArray(arr, size), expected);
    });
  }
});

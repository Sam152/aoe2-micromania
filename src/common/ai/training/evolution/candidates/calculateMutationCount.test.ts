import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { calculateMutationCount } from "./calculateMutationCount.ts";

const randoms = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.999];

const cases: Array<[number, number[]]> = [
  [1_000, /*  */ [1, 1, 1, 1, 2, 2, 2, 3, 4, 4]],
  [5_000, /*  */ [1, 1, 1, 2, 3, 3, 4, 6, 7, 8]],
  [10_000, /* */ [1, 1, 2, 2, 4, 5, 6, 8, 10, 12]],
  [50_000, /* */ [1, 2, 4, 8, 12, 16, 22, 29, 36, 44]],
  [100_000, /**/ [1, 4, 8, 14, 22, 31, 42, 54, 69, 84]],
  [200_000, /**/ [2, 7, 15, 27, 42, 60, 81, 105, 133, 164]],
  [500_000, /**/ [5, 17, 37, 65, 102, 146, 198, 259, 328, 404]],
];

describe("calculateMutationCount", () => {
  for (const [iterationsSinceLastWin, expected] of cases) {
    it(`maps the random sweep to ${JSON.stringify(expected)} at ${iterationsSinceLastWin} iterations since last win`, () => {
      const counts = randoms.map((random) => calculateMutationCount({ iterationsSinceLastWin, random }));
      assertEquals(counts, expected);
    });
  }
});

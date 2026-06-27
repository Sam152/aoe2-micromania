import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { computeEloChange } from "./computeEloChange.ts";

const cases: Array<[[number, number], 1 | 2, [number, number]]> = [
  [[1600, 1600], 1, [16, -16]],
  [[1600, 1600], 2, [-16, 16]],
  [[1800, 1700], 1, [12, -12]],
  [[1800, 1700], 2, [-20, 20]],
  [[1700, 1800], 1, [20, -20]],
  [[1700, 1800], 2, [-12, 12]],
  [[2000, 1200], 1, [0, 0]],
  [[2000, 1200], 2, [-32, 32]],
];

describe("computeEloChange", () => {
  for (const [elos, winner, expected] of cases) {
    it(`${elos[0]} vs ${elos[1]}, player ${winner} wins => ${expected}`, () => {
      assertEquals(computeEloChange(elos, winner), expected);
    });
  }
});

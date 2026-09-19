import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { arrayOfSize } from "./arrayOfSize.ts";

describe("arrayOfSize", () => {
  it("builds a 0-indexed array of 10 elements", () => {
    assertEquals(arrayOfSize(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

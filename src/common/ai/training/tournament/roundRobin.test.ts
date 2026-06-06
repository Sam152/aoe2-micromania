import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { roundRobin } from "./roundRobin.ts";

describe("roundRobin", () => {
  it("produces every unique pair exactly once", () => {
    const matchups: [string, string][] = [];
    roundRobin(["A", "B", "C", "D"], (p1, p2) => matchups.push([p1, p2]));
    assertEquals(matchups, [
      ["A", "B"],
      ["A", "C"],
      ["A", "D"],
      ["B", "C"],
      ["B", "D"],
      ["C", "D"],
    ]);
  });
});

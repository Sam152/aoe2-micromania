import { assertEquals } from "@std/assert";
import { hash } from "./hash.ts";

Deno.test("hash spreads sequential inputs 1..15", () => {
  const results = Array.from({ length: 15 }, (_, i) => hash(i + 1));

  assertEquals(results, [
    1364076727,
    821347078,
    2247144487,
    614249093,
    3423425485,
    1558924552,
    415870660,
    1228498187,
    3262916883,
    3911517328,
    2476801540,
    2089332083,
    2512092562,
    3219903473,
    3424311365,
  ]);
});

Deno.test("hash is deterministic", () => {
  assertEquals(hash(7), hash(7));
});

Deno.test("hash produces uint32 values", () => {
  for (let n = 1; n <= 15; n++) {
    const h = hash(n);
    assertEquals(h >>> 0, h);
  }
});

Deno.test("hash has no collisions across 1..15", () => {
  const results = Array.from({ length: 15 }, (_, i) => hash(i + 1));
  assertEquals(new Set(results).size, results.length);
});

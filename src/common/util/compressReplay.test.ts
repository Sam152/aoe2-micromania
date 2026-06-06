import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { compressReplay, decompressReplay } from "./compressReplay.ts";
import { GameStateAction } from "../../types.ts";

describe("decompressReplay", () => {
  it("roundtrips through compress and decompress", () => {
    const actions: GameStateAction[] = [
      { n: "T", t: 1 },
      { n: "T", t: 2 },
      { n: "MOVE_UNITS_TO", position: { x: 1, y: 1 } as any, units: [1] },
      { n: "T", t: 3 },
    ];
    assertEquals(decompressReplay(compressReplay(actions)), actions);
  });
});

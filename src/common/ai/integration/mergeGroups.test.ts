import { mergeGroups } from "./mergeGroups.ts";
import { BotUnitGroup } from "./createBot.ts";
import { UnitType } from "../../units/UnitType.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";

function group(unitType: UnitType, includedUnits: number[]): BotUnitGroup {
  return {
    unitType,
    actionQueue: [],
    includedUnits,
  };
}

const idleQueue = (ticks: number) => [
  {
    action: { nodeType: "action", type: "IDLE", params: { forTicksAmount: 1 } } as const,
    executeAfterTick: ticks + 1,
  },
];

describe("mergeGroups", () => {
  it("merges all groups of the same type into one new group", () => {
    const archersA = group(UnitType.Archer, [1, 2]);
    const archersB = group(UnitType.Archer, [3, 4]);
    const botState = { unitGroups: [archersA, archersB] };

    mergeGroups({ group: archersA, botState, state: { ticks: 10 } });

    assertEquals(botState.unitGroups.length, 3);
    const merged = botState.unitGroups[2];
    assertEquals(merged.unitType, UnitType.Archer);
    assertEquals(merged.includedUnits, [1, 2, 3, 4]);
    assertEquals(merged.actionQueue, idleQueue(10));

    // The source groups are emptied out.
    assertEquals(archersA.includedUnits, []);
    assertEquals(archersB.includedUnits, []);
  });

  it("leaves groups of other types untouched", () => {
    const archersA = group(UnitType.Archer, [1, 2]);
    const archersB = group(UnitType.Archer, [3]);
    const mangonels = group(UnitType.Mangonel, [4, 5]);
    const botState = { unitGroups: [archersA, archersB, mangonels] };

    mergeGroups({ group: archersA, botState, state: { ticks: 0 } });

    assertEquals(mangonels.includedUnits, [4, 5]);
    const merged = botState.unitGroups[3];
    assertEquals(merged.unitType, UnitType.Archer);
    assertEquals(merged.includedUnits, [1, 2, 3]);
  });
});

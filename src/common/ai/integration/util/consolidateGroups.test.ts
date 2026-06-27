import { consolidateGroups } from "./consolidateGroups.ts";
import { BotUnitGroup } from "../createBot.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";

function group(includedUnits: number[]): BotUnitGroup {
  return {
    unitType: UnitType.Archer,
    actionQueue: [],
    includedUnits,
  };
}

function state(unitIds: number[]) {
  return { units: unitIds.map((id) => ({ id })) };
}

describe("consolidateGroups", () => {
  it("retains only units that are still in the game state", () => {
    const groups = [group([1, 2, 3])];
    consolidateGroups(groups, state([1, 3]));
    assertEquals(groups[0].includedUnits, [1, 3]);
  });

  it("leaves groups untouched when all units are present", () => {
    const groups = [group([1, 2])];
    consolidateGroups(groups, state([1, 2]));
    assertEquals(groups[0].includedUnits, [1, 2]);
  });

  it("removes groups that have no remaining units without leaving holes", () => {
    const groups = [group([1]), group([2])];
    consolidateGroups(groups, state([2]));
    assertEquals(groups.length, 1);
    assertEquals(groups[0].includedUnits, [2]);
  });

  it("removes the group when none of its units are in the state", () => {
    const groups = [group([1, 2, 3])];
    consolidateGroups(groups, state([]));
    assertEquals(groups, []);
  });
});

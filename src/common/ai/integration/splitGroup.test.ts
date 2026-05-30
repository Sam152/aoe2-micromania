import { splitGroup } from "./splitGroup.ts";
import { BotUnitGroup } from "./createBot.ts";
import { UnitType } from "../../units/UnitType.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";

function group(includedUnits: number[]): BotUnitGroup {
  return {
    unitType: UnitType.Archer,
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

describe("splitGroup", () => {
  it("splits an even group into two equal halves", () => {
    const g = group([1, 2, 3, 4]);
    const botState = { unitGroups: [g] };
    splitGroup({ group: g, botState, state: { ticks: 10 } });

    assertEquals(g.includedUnits, []);
    assertEquals(botState.unitGroups.length, 3);
    assertEquals(botState.unitGroups[1].includedUnits, [1, 2]);
    assertEquals(botState.unitGroups[2].includedUnits, [3, 4]);
  });

  it("gives the larger half to the second group when odd", () => {
    const g = group([1, 2, 3, 4, 5]);
    const botState = { unitGroups: [g] };
    splitGroup({ group: g, botState, state: { ticks: 0 } });

    assertEquals(botState.unitGroups[1].includedUnits, [1, 2]);
    assertEquals(botState.unitGroups[2].includedUnits, [3, 4, 5]);
  });

  it("carries over the unit type and queues an idle action for next tick", () => {
    const g = group([1, 2]);
    g.unitType = UnitType.Mangonel;
    const botState = { unitGroups: [g] };
    splitGroup({ group: g, botState, state: { ticks: 42 } });

    const [, first, second] = botState.unitGroups;
    assertEquals(first.unitType, UnitType.Mangonel);
    assertEquals(second.unitType, UnitType.Mangonel);
    assertEquals(first.actionQueue, idleQueue(42));
    assertEquals(second.actionQueue, idleQueue(42));
  });

  it("does nothing for a group with a single unit", () => {
    const g = group([1]);
    const botState = { unitGroups: [g] };
    splitGroup({ group: g, botState, state: { ticks: 10 } });

    assertEquals(g.includedUnits, [1]);
    assertEquals(botState.unitGroups.length, 1);
  });

  it("does nothing for an empty group", () => {
    const g = group([]);
    const botState = { unitGroups: [g] };
    splitGroup({ group: g, botState, state: { ticks: 10 } });

    assertEquals(botState.unitGroups.length, 1);
  });
});

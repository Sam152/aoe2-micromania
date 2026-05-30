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
});

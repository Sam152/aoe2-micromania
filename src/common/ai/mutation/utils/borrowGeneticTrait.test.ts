import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { borrowGeneticTrait } from "./borrowGeneticTrait.ts";
import { Bot } from "../../training/infra/repo/utils/botRowToBot.ts";
import { UnitType } from "../../../units/UnitType.ts";

describe("borrowGeneticTrait", () => {
  it("borrows a node of one of the requested types", () => {
    const tree = {
      nodeType: "selector",
      nodes: [{ nodeType: "condition", type: "someCondition", invert: false, params: {} }],
    };
    const previousBots = [{
      id: 1,
      tree: { [UnitType.Archer]: tree, [UnitType.Mangonel]: tree, [UnitType.Monk]: tree },
    }] as Bot[];

    const node = borrowGeneticTrait({ borrowBots: previousBots, types: ["condition"], unitType: UnitType.Archer });

    assertEquals(node?.nodeType, "condition");
  });
});

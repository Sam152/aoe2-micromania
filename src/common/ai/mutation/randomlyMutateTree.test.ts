import { describe, it } from "@std/testing/bdd";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { BehaviourTreeNode } from "../behaviourTree/BehaviourTree.ts";
import { randomlyMutateUnitAwareBehaviourTreeAllUnits } from "./randomlyMutateUnitAwareBehaviourTreeAllUnits.ts";
import { dumpTree } from "./dumpTree.ts";

describe.skip("randomlyMutateTree", () => {
  it("randomlyMutatedTree", () => {
    dumpTree(
      "randomlyMutatedTree",
      randomlyMutateUnitAwareBehaviourTreeAllUnits({
        count: 20,
        tree: sampleTree,
        previousBots: [
          { tree: sampleTree, generation: 1 },
        ],
      }),
    );
  });

  it("randomlyGeneratedTree", () => {
    const emptyTree: BehaviourTreeNode = { nodeType: "selector", nodes: [] };
    dumpTree(
      "randomlyGeneratedTree",
      randomlyMutateUnitAwareBehaviourTreeAllUnits({
        count: 5000,
        tree: { [UnitType.Archer]: emptyTree, [UnitType.Mangonel]: emptyTree, [UnitType.Monk]: emptyTree },
        previousBots: [
          { tree: sampleTree, generation: 1 },
        ],
      }),
    );
  });
});

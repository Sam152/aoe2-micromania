import { describe, it } from "@std/testing/bdd";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { BehaviourTreeNode } from "../behaviourTree/BehaviourTree.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "./randomlyMutateUnitAwareBehaviourTree.ts";
import { dumpTree } from "./dumpTree.ts";

describe.skip("randomlyMutateTree", () => {
  it("randomlyMutatedTree", () => {
    dumpTree("randomlyMutatedTree", randomlyMutateUnitAwareBehaviourTree({ count: 20, tree: sampleTree }));
  });

  it("randomlyGeneratedTree", () => {
    const emptyTree: BehaviourTreeNode = { nodeType: "selector", nodes: [] };
    dumpTree(
      "randomlyGeneratedTree",
      randomlyMutateUnitAwareBehaviourTree({
        count: 5000,
        tree: { [UnitType.Archer]: emptyTree, [UnitType.Mangonel]: emptyTree, [UnitType.Monk]: emptyTree },
      }),
    );
  });
});

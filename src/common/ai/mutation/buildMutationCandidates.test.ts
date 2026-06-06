import { describe, it } from "@std/testing/bdd";
import { assertSnapshot } from "jsr:@std/testing/snapshot";
import { buildMutationCandidates } from "./buildMutationCandidates.ts";
import { flattenTree } from "./flattenTree.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { UnitType } from "../../units/UnitType.ts";

describe("buildMutationCandidates", () => {
  it("generates candidates from tree", async (t) => {
    const tree = sampleTree[UnitType.Archer];

    const candidates = buildMutationCandidates(flattenTree(tree));
    await assertSnapshot(t, candidates);

    const unravelledCandidates = candidates.map((candidate) => {
      if (candidate.type === "INVERT_CONDITION") { return `INVERT_CONDITION > ${candidate.condition.nodeType}`; }
      if (
        candidate.type === "REPLACE_PARAM_DATA_VALUE"
      ) { return `REPLACE_PARAM_DATA_VALUE > ${candidate.node.nodeType} > ${candidate.paramName}`; }
      if (candidate.type === "ADD_NODE_TO_LIST") { return `ADD_NODE_TO_LIST > ${candidate.listNode.nodeType}`; }
      if (candidate.type === "REMOVE_NODE_FROM_LIST") {
        return `REMOVE_NODE_FROM_LIST > ${candidate.listNode.nodeType}`;
      }
      if (
        candidate.type === "CHANGE_LITERAL_DATA_VALUE"
      ) {
        return `CHANGE_LITERAL_DATA_VALUE > ${candidate.parentNode.nodeType} > ${candidate.paramName}`;
      }
    });
    await assertSnapshot(t, unravelledCandidates);
  });
});

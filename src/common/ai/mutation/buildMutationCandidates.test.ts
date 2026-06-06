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

    const unravelledCandidates = candidates.map((candidate) =>
      candidate.type === "INVERT_CONDITION"
        ? `INVERT_CONDITION > ${candidate.condition.nodeType}`
        : `REPLACE_PARAM_DATA_VALUE > ${candidate.node.nodeType} > ${candidate.paramName}`
    );
    await assertSnapshot(t, unravelledCandidates);
  });
});

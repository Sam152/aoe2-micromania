import { describe, it } from "@std/testing/bdd";
import { assertSnapshot } from "jsr:@std/testing/snapshot";
import { flattenTree } from "./flattenTree.ts";
import { sampleTree } from "../../behaviourTree/__fixtures__/sampleTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

describe("flattenTree", () => {
  it("generates candidates from tree", async (t) => {
    const tree = sampleTree[UnitType.Archer];

    const candidates = flattenTree(tree);
    await assertSnapshot(t, candidates);

    const unravelledNodes = candidates.map((candidate) =>
      `${candidate.parent?.nodeType} > ${candidate.node.nodeType} (${candidate.depth})`
    );
    await assertSnapshot(t, unravelledNodes);
  });
});

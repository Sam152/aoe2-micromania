import { describe, it } from "@std/testing/bdd";
import { randomlyMutateTree } from "./randomlyMutateTree.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { assertNotEquals } from "@std/assert";

describe("randomlyMutateTree", () => {
  it("randomly mutates a tree n times", () => {
    const newTree = randomlyMutateTree({ count: 100, tree: sampleTree[UnitType.Archer] });

    assertNotEquals(newTree, sampleTree[UnitType.Archer]);
  });
});

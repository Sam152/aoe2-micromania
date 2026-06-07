import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { determineWinner } from "../training/utils/determineWinner.ts";

import { sampleTree } from "./__fixtures__/sampleTree.ts";
import { winningTree } from "./__fixtures__/winningTree.ts";
import { flattenTree } from "../mutation/utils/flattenTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { pruneUnitAwareTree } from "./pruneTree.ts";

describe("pruneTree", () => {
  it("can prune trees and leave them functionally identical", () => {
    const winner = determineWinner({
      player1: sampleTree,
      player2: winningTree,
    });

    assertEquals(winner.hp, {
      1: 0,
      2: 434,
    });

    assertEquals(flattenTree(winningTree[UnitType.Archer]).length, 22);
    assertEquals(flattenTree(winningTree[UnitType.Monk]).length, 18);
    assertEquals(flattenTree(winningTree[UnitType.Mangonel]).length, 13);

    // Pruning the tree reduces its branches significantly.
    const winningTreePruned = pruneUnitAwareTree(winningTree, winner.bots.player2.activations);
    assertEquals(flattenTree(winningTreePruned[UnitType.Archer]).length, 11);
    assertEquals(flattenTree(winningTreePruned[UnitType.Monk]).length, 3);
    assertEquals(flattenTree(winningTreePruned[UnitType.Mangonel]).length, 3);

    // But the outcome of a match is exactly the same.
    const prunedWinner = determineWinner({
      player1: sampleTree,
      player2: winningTreePruned,
    });
    assertEquals(prunedWinner.hp, {
      1: 0,
      2: 434,
    });
  });
});

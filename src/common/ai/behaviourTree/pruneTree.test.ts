import { describe, it } from "@std/testing/bdd";
import { determineWinner } from "../training/utils/determineWinner.ts";
import { randomlyGeneratedTree } from "./__fixtures__/randomlyGeneratedTree.ts";
import { sampleTree } from "./__fixtures__/sampleTree.ts";

describe("pruneTree", () => {
  it("can prune trees and leave them functionally identical", () => {
    // Play a game with randomlyGeneratedTree.ts.
    // Prune the tree.
    // Play the same game.
    // Validate it's the same.

    const winner = determineWinner({
      player1: randomlyGeneratedTree,
      player2: sampleTree,
    });

    winner.bots.player1;
  });
});

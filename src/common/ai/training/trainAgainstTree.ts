import { determineWinner, GameResult } from "./utils/determineWinner.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "../mutation/randomlyMutateUnitAwareBehaviourTree.ts";
import { dumpTree } from "../mutation/dumpTree.ts";

(() => {
  const formatter = createResultFormatter();
  while (true) {
    const mutatedTree = randomlyMutateUnitAwareBehaviourTree({ tree: sampleTree, count: 50 });

    const result = determineWinner({
      player1: sampleTree,
      player2: mutatedTree,
    });

    formatter(result);

    if (result.hp[2] - result.hp[1] > 200) {
      dumpTree("winningTree", mutatedTree);
      // break;
    }
  }
})();

function createResultFormatter() {
  let games = 0;
  return function formatResult(result: GameResult) {
    const betterBy = result.hp[2] - result.hp[1];

    if (betterBy > 200) {
      process.stdout.write("!");
    } else if (betterBy > 0) {
      process.stdout.write(":");
    } else {
      process.stdout.write(".");
    }

    games++;
    if (games % 50 === 0) {
      process.stdout.write("\n");
    }
  };
}

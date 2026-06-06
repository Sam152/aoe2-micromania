import { determineWinner } from "./determineWinner.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "../mutation/randomlyMutateUnitAwareBehaviourTree.ts";

(() => {
  while (true) {
    const time = performance.now();
    const result = determineWinner({
      player1: sampleTree,
      player2: randomlyMutateUnitAwareBehaviourTree({ tree: sampleTree, count: 5 }),
    });
    console.log(result.hp, performance.now() - time);
  }
})();

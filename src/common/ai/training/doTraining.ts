import { determineWinner } from "./determineWinner.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";

(() => {
  const time = performance.now();
  const result = determineWinner({ a: sampleTree, b: sampleTree });
  console.log(result, performance.now() - time);
})();

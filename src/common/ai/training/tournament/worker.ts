import { determineWinner } from "../utils/determineWinner.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

self.onmessage = (e: MessageEvent<{ 1: UnitAwareBehaviourTree; 2: UnitAwareBehaviourTree }>) => {
  const result = determineWinner({ player1: e.data[1], player2: e.data[2] });
  self.postMessage(result);
};

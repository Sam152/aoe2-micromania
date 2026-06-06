import { BehaviourTreeNode, BehaviourTreeNodeType } from "../../behaviourTree/BehaviourTree.ts";
import { randomArray } from "../../../util/randomArray.ts";

export function randomNode(): BehaviourTreeNode {
  const type: BehaviourTreeNodeType = randomArray([
    "sequence",
    "selector",
    "condition",
    "action",
  ]);

  if (type === "sequence") {
    return {
      nodeType: "sequence",
      nodes: [],
    };
  }

  if (type === "selector") {
    return {
      nodeType: "selector",
      nodes: [],
    };
  }

  // Continue for all the types.
  if (type === "condition") {
  }
}

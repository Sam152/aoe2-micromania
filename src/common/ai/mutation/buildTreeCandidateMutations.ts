import { BehaviourTreeNode } from "../behaviourTree/BehaviourTree.ts";
import { DataValue } from "../behaviourTree/dataValue/DataValue.ts";

export function buildTreeCandidateMutations(node: BehaviourTreeNode | DataValue): void {
  if (node.nodeType === "dataValue" && node.type === "LITERAL") {
  }
}

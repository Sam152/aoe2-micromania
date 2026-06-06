import { BehaviourTreeNodeOrValue } from "../behaviourTree/BehaviourTree.ts";

export type FlatTreeNode = {
  node: BehaviourTreeNodeOrValue;
  parent: BehaviourTreeNodeOrValue | undefined;
};

export function flattenTree(
  node: BehaviourTreeNodeOrValue,
  candidates: FlatTreeNode[] = [],
  parent?: BehaviourTreeNodeOrValue,
): FlatTreeNode[] {
  if (node.nodeType === "sequence" || node.nodeType === "selector") {
    candidates.push({ node, parent });
    node.nodes.forEach((child) => flattenTree(child, candidates, node));
  }

  if (node.nodeType === "action" || node.nodeType === "condition") {
    candidates.push({ node, parent });
    Object.values(node.params).forEach((paramNode) => flattenTree(paramNode, candidates, node));
  }

  if (node.nodeType === "dataValue") {
    candidates.push({ node, parent });
    if ("params" in node) {
      Object.values(node.params).forEach((paramNode) => flattenTree(paramNode, candidates, node));
    }
  }

  return candidates;
}

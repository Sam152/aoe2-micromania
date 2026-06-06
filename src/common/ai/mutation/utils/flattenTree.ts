import { BehaviourTreeNodeOrValue } from "../../behaviourTree/BehaviourTree.ts";

export type FlatTreeNode = {
  node: BehaviourTreeNodeOrValue;
  parent: BehaviourTreeNodeOrValue | undefined;
  paramKey?: string;
};

export function flattenTree(
  node: BehaviourTreeNodeOrValue,
  candidates: FlatTreeNode[] = [],
  parent?: BehaviourTreeNodeOrValue,
  paramKey?: string,
): FlatTreeNode[] {
  if (node.nodeType === "sequence" || node.nodeType === "selector") {
    candidates.push({ node, parent });
    node.nodes.forEach((child) => flattenTree(child, candidates, node));
  }

  if (node.nodeType === "action" || node.nodeType === "condition") {
    candidates.push({ node, parent, paramKey });
    Object.entries(node.params).forEach(([key, paramNode]) => flattenTree(paramNode, candidates, node, key));
  }

  if (node.nodeType === "dataValue") {
    candidates.push({ node, parent, paramKey });
    if ("params" in node) {
      Object.entries(node.params).forEach(([key, paramNode]) => flattenTree(paramNode, candidates, node, key));
    }
  }

  return candidates;
}

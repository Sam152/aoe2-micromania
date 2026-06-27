import { BehaviourTreeNodeOrValue } from "../../behaviourTree/BehaviourTree.ts";

export type FlatTreeNode = {
  node: BehaviourTreeNodeOrValue;
  parent: BehaviourTreeNodeOrValue | undefined;
  depth: number;
  paramKey?: string;
};

export function flattenTree(
  node: BehaviourTreeNodeOrValue,
  candidates: FlatTreeNode[] = [],
  parent?: BehaviourTreeNodeOrValue,
  paramKey?: string,
  depth: number = 0,
): FlatTreeNode[] {
  if (node.nodeType === "sequence" || node.nodeType === "selector") {
    candidates.push({ node, parent, depth });
    node.nodes.forEach((child) => flattenTree(child, candidates, node, undefined, depth + 1));
  }

  if (node.nodeType === "action" || node.nodeType === "condition") {
    candidates.push({ node, parent, paramKey, depth });
    Object.entries(node.params).forEach(([key, paramNode]) => flattenTree(paramNode, candidates, node, key, depth));
  }

  if (node.nodeType === "dataValue") {
    candidates.push({ node, parent, paramKey, depth });
    if ("params" in node) {
      Object.entries(node.params).forEach(([key, paramNode]) => flattenTree(paramNode, candidates, node, key, depth));
    }
  }

  return candidates;
}

import { BehaviourTreeNode } from "./BehaviourTree.ts";

export function pruneTree(
  node: BehaviourTreeNode,
  activations: Set<string>,
  path = "",
): BehaviourTreeNode | undefined {
  if (!activations.has(path)) {
    return undefined;
  }

  if (node.nodeType === "condition" || node.nodeType === "action") {
    return node;
  }

  const prunedNodes = node.nodes.flatMap((child, i) => {
    const pruned = pruneTree(child, activations, `${path}.nodes[${i}]`);
    return pruned ? [pruned] : [];
  });

  return { ...node, nodes: prunedNodes };
}

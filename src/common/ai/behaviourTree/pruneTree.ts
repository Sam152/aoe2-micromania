import { BehaviourTreeNode, UnitAwareBehaviourTree } from "./BehaviourTree.ts";
import { UnitType } from "../../units/UnitType.ts";

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

export function pruneUnitAwareTree(
  tree: UnitAwareBehaviourTree,
  activations: Record<UnitType, Set<string>>,
): UnitAwareBehaviourTree {
  const newTree = structuredClone(tree);
  return Object.fromEntries(
    (Object.entries(newTree) as unknown as [UnitType, BehaviourTreeNode][]).map(([unitType, node]) => [
      unitType,
      pruneTree(node, activations[unitType]) ?? node,
    ]),
  ) as UnitAwareBehaviourTree;
}

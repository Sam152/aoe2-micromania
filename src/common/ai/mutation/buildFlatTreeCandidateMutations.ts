import { FlatTreeNode } from "./flattenTree.ts";
import { BehaviourTreeNodeOrValue } from "../behaviourTree/BehaviourTree.ts";
import { accessTreeNode } from "./accessTreeNode.ts";

export function buildFlatTreeCandidateMutations(flatNodes: FlatTreeNode[], tree: BehaviourTreeNodeOrValue): void {
  flatNodes.flatMap((node) => {
    const node = accessTreeNode(tree, node.path);
    const parent = accessTreeNode(tree, node.parent);

    if (node.nodeType === "") {
      return [];
    }
  });
}

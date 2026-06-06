import { FlatTreeNode } from "./flattenTree.ts";

type MutationCandidate = {
  type: "CONDITION_INVERT";
  flatNode: FlatTreeNode;
};

export function buildMutationCandidates(flatNodes: FlatTreeNode[]): MutationCandidate[] {
  return flatNodes.flatMap((flatNode) => {
    if (flatNode.node.nodeType === "condition") {
      return [
        {
          type: "CONDITION_INVERT",
          flatNode,
        },
      ];
    }

    return [];
  });
}

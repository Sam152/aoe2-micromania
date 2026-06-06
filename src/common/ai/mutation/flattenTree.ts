import { BehaviourTreeNode } from "../behaviourTree/BehaviourTree.ts";
import { DataValue } from "../behaviourTree/dataValue/DataValue.ts";

export type FlatTreeNode = {
  nodeType: string;
  parent: string;
  path: string;
};

export function flattenTree(
  node: BehaviourTreeNode | DataValue,
  candidates: FlatTreeNode[] = [],
  parent: string = "",
  path: string = "",
): FlatTreeNode[] {
  if (node.nodeType === "sequence" || node.nodeType === "selector") {
    candidates.push({
      nodeType: node.nodeType,
      parent,
      path: `${path}`,
    });
    node.nodes.map((node, i) => flattenTree(node, candidates, path, `${path}.nodes[${i}]`));
  }

  if (node.nodeType === "action" || node.nodeType === "condition") {
    candidates.push({
      nodeType: node.nodeType,
      parent,
      path,
    });
    Object.entries(node.params).map(([index, paramNode]) =>
      flattenTree(paramNode, candidates, path, `${path}.params.${index}`)
    );
  }

  if (node.nodeType === "dataValue") {
    candidates.push({
      nodeType: node.nodeType,
      parent,
      path,
    });
    if ("params" in node) {
      Object.entries(node.params).map(([index, paramNode]) =>
        flattenTree(paramNode, candidates, path, `${path}.params.${index}`)
      );
    }
  }

  return candidates;
}

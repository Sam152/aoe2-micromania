import { BehaviourTreeNode } from "../behaviourTree/BehaviourTree.ts";

import { arrayOfSize } from "../../util/arrayOfSize.ts";
import { buildMutationCandidates } from "./utils/buildMutationCandidates.ts";
import { flattenTree } from "./utils/flattenTree.ts";
import { randomArray } from "../../util/randomArray.ts";

import { randomNode } from "./factories/randomNode.ts";

export function randomlyMutateTree({ count, tree }: { count: number; tree: BehaviourTreeNode }): BehaviourTreeNode {
  const newTree = structuredClone(tree);

  arrayOfSize(count).forEach(() => {
    const candidates = buildMutationCandidates(flattenTree(newTree));
    const mutation = randomArray(candidates);

    if (mutation.type === "REMOVE_NODE_FROM_LIST") {
      mutation.listNode.nodes.splice(Math.floor(Math.random() * mutation.listNode.nodes.length));
    }

    if (mutation.type === "ADD_NODE_TO_LIST") {
      mutation.listNode.nodes.splice(
        Math.floor(Math.random() * mutation.listNode.nodes.length),
        0,
        randomNode(),
      );
    }
  });

  return newTree;
}

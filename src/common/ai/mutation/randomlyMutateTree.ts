import { BehaviourTreeNode } from "../behaviourTree/BehaviourTree.ts";

import { arrayOfSize } from "../../util/arrayOfSize.ts";
import { buildMutationCandidates } from "./utils/buildMutationCandidates.ts";
import { flattenTree } from "./utils/flattenTree.ts";
import { randomArray } from "../../util/randomArray.ts";

export function randomlyMutateTree({ count, tree }: { count: number; tree: BehaviourTreeNode }): BehaviourTreeNode {
  const newTree = structuredClone(tree);

  arrayOfSize(count).forEach(() => {
    const candidates = buildMutationCandidates(flattenTree(newTree));
    const mutation = randomArray(candidates);

    console.log(mutation.type);
  });

  return newTree;
}

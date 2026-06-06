import { BehaviourTreeNodeOrValue } from "../behaviourTree/BehaviourTree.ts";

export function accessTreeNode(tree: BehaviourTreeNodeOrValue, path: string): BehaviourTreeNodeOrValue {
  return eval(`tree${path}`);
}

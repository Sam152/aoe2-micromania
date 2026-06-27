import { BehaviourTreeNode, Selector, Sequence } from "../../behaviourTree/BehaviourTree.ts";

export function insertNodeAtRandomIndex(listNode: Sequence | Selector, node: BehaviourTreeNode): void {
  listNode.nodes.splice(Math.floor(Math.random() * listNode.nodes.length), 0, node);
}

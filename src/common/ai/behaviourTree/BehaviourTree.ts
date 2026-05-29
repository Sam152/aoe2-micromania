import { Condition } from "./condition/Condition.ts";
import { ActionNode } from "./action/ActionDefinition.ts";

type Node = Sequence | Selector | Condition | ActionNode;

/**
 * Resolve first success node, else fail.
 */
type Selector = {
  nodeType: "selector";
  nodes: Node[];
};

/**
 * Resolve all as success, else fail.
 */
type Sequence = {
  nodeType: "sequence";
  nodes: Node[];
};

export type BehaviourTree = Selector;

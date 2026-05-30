import { Condition } from "./condition/Condition.ts";
import { ActionNode } from "./action/ActionDefinition.ts";
import { UnitType } from "../../units/UnitType.ts";

export type BehaviourTreeNode = Sequence | Selector | Condition | ActionNode;

/**
 * Resolve first success node, else fail.
 */
type Selector = {
  nodeType: "selector";
  nodes: BehaviourTreeNode[];
};

/**
 * Resolve all as success, else fail.
 */
type Sequence = {
  nodeType: "sequence";
  nodes: BehaviourTreeNode[];
};

export type UnitAwareBehaviourTree = Record<UnitType, BehaviourTreeNode>;

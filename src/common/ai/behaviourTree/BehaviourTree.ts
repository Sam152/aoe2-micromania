import { ActionNode } from "./action/ActionDefinition.ts";
import { UnitType } from "../../units/UnitType.ts";
import { ConditionNode } from "./condition/Condition.ts";

export type BehaviourTreeNode = Sequence | Selector | ConditionNode | ActionNode;

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

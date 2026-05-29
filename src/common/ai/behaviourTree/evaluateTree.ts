import { Blackboard } from "./blackboard/blackboardDefinition.ts";
import { BehaviourTree } from "./BehaviourTree.ts";
import { ActionNode } from "./action/ActionDefinition.ts";

type EvaluateResult = ActionNode[];

export function evaluateTree(
  { blackboard, tree }: { blackboard: Blackboard; tree: BehaviourTree },
): EvaluateResult[] {
  return [];
}

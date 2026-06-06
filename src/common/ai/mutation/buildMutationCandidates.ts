import { FlatTreeNode } from "./flattenTree.ts";
import { ConditionNode } from "../behaviourTree/condition/Condition.ts";
import { ActionNode } from "../behaviourTree/action/ActionDefinition.ts";
import { BlackboardDataValue } from "../behaviourTree/dataValue/DataValue.ts";
import { Selector, Sequence } from "../behaviourTree/BehaviourTree.ts";

type MutationCandidate =
  & { weight?: number }
  & (
    | {
      type: "INVERT_CONDITION";
      condition: ConditionNode;
    }
    | {
      type: "REPLACE_PARAM_DATA_VALUE";
      node: ConditionNode | ActionNode | BlackboardDataValue;
      paramName: string;
    }
    | {
      type: "ADD_NODE_TO_LIST";
      listNode: Sequence | Selector;
    }
    | {
      type: "REMOVE_NODE_FROM_LIST";
      listNode: Sequence | Selector;
    }
    | {
      type: "CHANGE_LITERAL_DATA_VALUE";
      paramName: string;
      parentNode: ConditionNode | ActionNode | BlackboardDataValue;
    }
  );

export function buildMutationCandidates(flatNodes: FlatTreeNode[]): MutationCandidate[] {
  return flatNodes.flatMap((flatNode) => {
    if (flatNode.node.nodeType === "condition") {
      return [
        { type: "INVERT_CONDITION", condition: flatNode.node },
        ...gatherReplaceParamCandidates(flatNode.node),
      ];
    }

    if (flatNode.node.nodeType === "selector" || flatNode.node.nodeType === "sequence") {
      return [
        { type: "ADD_NODE_TO_LIST", listNode: flatNode.node },
        { type: "REMOVE_NODE_FROM_LIST", listNode: flatNode.node },
      ];
    }

    if (flatNode.node.nodeType === "dataValue" && flatNode.node.type === "BLACKBOARD") {
      return gatherReplaceParamCandidates(flatNode.node);
    }

    if (flatNode.node.nodeType === "dataValue" && flatNode.node.type === "LITERAL") {
      return {
        type: "CHANGE_LITERAL_DATA_VALUE",
        paramName: flatNode.paramKey as string,
        parentNode: flatNode.parent as ConditionNode | ActionNode | BlackboardDataValue,
      };
    }

    if (flatNode.node.nodeType === "action") {
      return gatherReplaceParamCandidates(flatNode.node);
    }

    return [];
  });
}

function gatherReplaceParamCandidates(node: ConditionNode | ActionNode | BlackboardDataValue): MutationCandidate[] {
  return Object.entries(node.params).map(([paramName]) => ({
    type: "REPLACE_PARAM_DATA_VALUE",
    node,
    paramName,
  }));
}

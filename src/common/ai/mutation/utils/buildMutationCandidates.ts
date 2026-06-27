import { FlatTreeNode } from "./flattenTree.ts";
import { ConditionNode } from "../../behaviourTree/condition/Condition.ts";
import { ActionNode } from "../../behaviourTree/action/ActionDefinition.ts";
import { BlackboardDataValue } from "../../behaviourTree/dataValue/DataValue.ts";
import { Selector, Sequence } from "../../behaviourTree/BehaviourTree.ts";
import { Probabilities } from "../../training/utils/withProbability.ts";

export type MutationCandidate =
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
    type: "ADD_SEQ_OR_SEL_NODE_TO_LIST";
    listNode: Sequence | Selector;
  }
  | {
    type: "BORROW_GENETIC_NODE_INTO_LIST";
    listNode: Sequence | Selector;
  }
  | {
    type: "BORROW_GENETIC_SEQ_OR_SEL_INTO_LIST";
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
  };

/**
 * Build a weighted list of candidate mutations, expressed as probabilities.
 */
export function buildMutationCandidates(flatNodes: FlatTreeNode[]): Probabilities<MutationCandidate> {
  return flatNodes.flatMap((flatNode): Probabilities<MutationCandidate> => {
    if (flatNode.node.nodeType === "condition") {
      return [
        { probability: 1, effect: { type: "INVERT_CONDITION", condition: flatNode.node } },
        ...gatherReplaceParamCandidates(flatNode.node),
      ];
    }

    if (flatNode.node.nodeType === "action") {
      return gatherReplaceParamCandidates(flatNode.node);
    }

    if (flatNode.node.nodeType === "selector" || flatNode.node.nodeType === "sequence") {
      // Do not add random conditions and actions to the root.
      if (flatNode.depth === 0) {
        return [
          { probability: 1, effect: { type: "BORROW_GENETIC_SEQ_OR_SEL_INTO_LIST", listNode: flatNode.node } },
          { probability: 1, effect: { type: "ADD_SEQ_OR_SEL_NODE_TO_LIST", listNode: flatNode.node } },
          { probability: 1, effect: { type: "REMOVE_NODE_FROM_LIST", listNode: flatNode.node } },
        ];
      }
      // Mutate more the deeper the depths go.
      const baseProbability = flatNode.depth + 1;
      return [
        {
          probability: baseProbability * 2,
          effect: { type: "BORROW_GENETIC_NODE_INTO_LIST", listNode: flatNode.node },
        },
        {
          probability: baseProbability * 2,
          effect: { type: "BORROW_GENETIC_SEQ_OR_SEL_INTO_LIST", listNode: flatNode.node },
        },
        { probability: baseProbability * 2, effect: { type: "ADD_NODE_TO_LIST", listNode: flatNode.node } },
        { probability: baseProbability * 2, effect: { type: "ADD_SEQ_OR_SEL_NODE_TO_LIST", listNode: flatNode.node } },
        { probability: baseProbability, effect: { type: "REMOVE_NODE_FROM_LIST", listNode: flatNode.node } },
      ];
    }

    if (flatNode.node.nodeType === "dataValue" && flatNode.node.type === "BLACKBOARD") {
      return gatherReplaceParamCandidates(flatNode.node);
    }

    if (flatNode.node.nodeType === "dataValue" && flatNode.node.type === "LITERAL") {
      return [{
        probability: 1,
        effect: {
          type: "CHANGE_LITERAL_DATA_VALUE",
          paramName: flatNode.paramKey as string,
          parentNode: flatNode.parent as ConditionNode | ActionNode | BlackboardDataValue,
        },
      }];
    }

    return [];
  });
}

function gatherReplaceParamCandidates(
  node: ConditionNode | ActionNode | BlackboardDataValue,
): Probabilities<MutationCandidate> {
  return Object.entries(node.params).map(([paramName]) => ({
    probability: 1,
    effect: {
      type: "REPLACE_PARAM_DATA_VALUE",
      node,
      paramName,
    },
  }));
}

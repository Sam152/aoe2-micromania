import { ActionNode } from "./action/ActionDefinition.ts";
import { BehaviourTreeNode } from "./BehaviourTree.ts";
import { dataTypes } from "./dataType/dataTypes.ts";
import { BlackboardComputer } from "./blackboard/computeBlackboard.ts";
import { resolveDataValueToPrimitive } from "./dataValue/resolveDataValue.ts";
import { GameState } from "../../../types.ts";
import { BotState, BotUnitGroup } from "../integration/createBot.ts";

type EvaluateTreeNodeArgs = {
  blackboardComputer: BlackboardComputer;
  state: GameState;
  botState: BotState;
  group: BotUnitGroup;
  node: BehaviourTreeNode;
  actionNodes?: ActionNode[];
};

export function evaluateTreeNode(
  { blackboardComputer, node, actionNodes = [], state, botState, group }: EvaluateTreeNodeArgs,
): { result: boolean; actionNodes: ActionNode[] } {
  if (node.nodeType === "condition") {
    const leftValue = resolveDataValueToPrimitive({
      dataValue: node.leftValue,
      state,
      botState,
      group,
      blackboardComputer,
    });
    const rightValue = resolveDataValueToPrimitive({
      dataValue: node.rightValue,
      state,
      botState,
      group,
      blackboardComputer,
    });

    const dataTypeDefinition = dataTypes[node.dataType];
    const comparitors = dataTypeDefinition.comparitors as Record<string, (a: unknown, b: unknown) => boolean>;
    const comparitor = comparitors[node.comparatorType];

    return { result: comparitor(leftValue, rightValue), actionNodes };
  }

  if (node.nodeType === "action") {
    return {
      result: true,
      actionNodes: [...actionNodes, node],
    };
  }

  if (node.nodeType === "selector") {
    for (const selectorNode of node.nodes) {
      const result = evaluateTreeNode({ blackboard, node: selectorNode, actionNodes });
      if (result.result) {
        return {
          result: true,
          actionNodes: result.actionNodes,
        };
      }
    }
    return {
      result: false,
      actionNodes,
    };
  }

  if (node.nodeType === "sequence") {
    const sequenceActionNodes = [];

    for (const sequenceNode of node.nodes) {
      const result = evaluateTreeNode({ blackboard, node: sequenceNode, actionNodes });
      if (!result.result) {
        return {
          result: sequenceActionNodes.length > 0,
          actionNodes: sequenceActionNodes,
        };
      }
      sequenceActionNodes.push(...result.actionNodes);
    }

    return {
      result: true,
      actionNodes: sequenceActionNodes,
    };
  }

  throw new Error();
}

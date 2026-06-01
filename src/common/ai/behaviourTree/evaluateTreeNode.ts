import { ActionNode } from "./action/ActionDefinition.ts";
import { BehaviourTreeNode } from "./BehaviourTree.ts";

import { BlackboardComputer } from "./blackboard/computeBlackboard.ts";
import { resolveParamDataValues } from "./dataValue/resolveDataValue.ts";
import { GameState } from "../../../types.ts";
import { BotState, BotUnitGroup } from "../integration/createBot.ts";
import { conditionList } from "./condition/conditionList.ts";

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
    const resolvedParams = resolveParamDataValues(node.params, {
      group,
      state,
      botState,
      blackboardComputer,
    });
    const conditionDefinition = conditionList[node.type];
    const evalResult = conditionDefinition.evaluate(resolvedParams as any);
    return { result: node.invert ? !evalResult : evalResult, actionNodes };
  }

  if (node.nodeType === "action") {
    return {
      result: true,
      actionNodes: [...actionNodes, node],
    };
  }

  if (node.nodeType === "selector") {
    for (const selectorNode of node.nodes) {
      const result = evaluateTreeNode({ blackboardComputer, node: selectorNode, actionNodes, botState, group, state });
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
      const result = evaluateTreeNode({ blackboardComputer, node: sequenceNode, actionNodes, state, botState, group });
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

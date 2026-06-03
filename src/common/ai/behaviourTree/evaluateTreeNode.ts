import { ActionNode } from "./action/ActionDefinition.ts";
import { BehaviourTreeNode } from "./BehaviourTree.ts";
import { resolveParamDataValues } from "./dataValue/resolveDataValue.ts";
import { GameState } from "../../../types.ts";
import { BotState, BotUnitGroup } from "../integration/createBot.ts";
import { conditionList } from "./condition/conditionList.ts";
import { ActionsList } from "./action/actionsList.ts";
import { DataType, TypeFromDataType } from "./dataType/dataTypes.ts";
import { BlackboardComputer } from "./blackboard/types/BlackboardComputer.ts";

export type ActionNodeWithResolvedParams<TType extends keyof ActionsList = keyof ActionsList> = TType extends
  keyof ActionsList ? {
    type: TType;
    actionNode: ActionNode<TType>;
    resolvedParams: {
      [TKey in keyof ActionsList[TType]["params"]]: ActionsList[TType]["params"][TKey] extends
        { dataType: infer D extends DataType } ? TypeFromDataType<D> : never;
    };
  }
  : never;

type EvaluateTreeNodeArgs = {
  blackboardComputer: BlackboardComputer;
  state: GameState;
  botState: BotState;
  group: BotUnitGroup;
  node: BehaviourTreeNode;
  actionNodes?: ActionNodeWithResolvedParams[];
};

export function evaluateTreeNode(
  { blackboardComputer, node, actionNodes = [], state, botState, group }: EvaluateTreeNodeArgs,
): { result: boolean; actionNodes: ActionNodeWithResolvedParams[] } {
  if (node.nodeType === "condition") {
    const resolvedParams = resolveParamDataValues(node.params, {
      group,
      state,
      botState,
      blackboardComputer,
    });

    // Conditions will resolve as false, if their params cannot be resolved.
    if (resolvedParams === undefined) {
      return {
        result: false,
        actionNodes,
      };
    }

    const conditionDefinition = conditionList[node.type];
    const evalResult = conditionDefinition.evaluate(resolvedParams as any);
    return { result: node.invert ? !evalResult : evalResult, actionNodes };
  }

  if (node.nodeType === "action") {
    const resolvedParams = resolveParamDataValues(node.params, {
      group,
      state,
      botState,
      blackboardComputer,
    });

    // If we cannot resolve the params for an action, bail early, the
    // action is not a valid one to take... but potentially, are we
    // getting outdated data? Should we try resolve the params again,
    // when executing the action?
    if (!resolvedParams) {
      return {
        result: false,
        actionNodes,
      };
    }

    return {
      result: true,
      actionNodes: [
        ...actionNodes,
        { type: node.type, actionNode: node, resolvedParams } as ActionNodeWithResolvedParams,
      ],
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

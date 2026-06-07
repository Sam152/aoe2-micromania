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
  /**
   * An "activation" is when a particular node of the tree had some impact on a decision being
   * made. Activations can be tracked over the course of gameplay and used as a tool to trim
   * down the tree. Removing dead branches from the tree, ensures that future mutations have a
   * maximum chance to have a real impact on the behavior, since they'll spend less time mutating
   * nodes that aren't reachable.
   */
  activations?: Set<string>;
  path?: string;
};

export function evaluateTreeNode(
  { blackboardComputer, node, actionNodes = [], state, botState, group, activations, path = "" }: EvaluateTreeNodeArgs,
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
    const conditionResult = node.invert ? !evalResult : evalResult;

    // Only conditions that evaluate true trigger an activation. If a condition is false,
    // in both sequences and selectors, they'll mean that branch of the structure does not
    // trigger an action, so it should be pruneable.
    if (conditionResult) {
      activations?.add(path);
    }

    return { result: conditionResult, actionNodes };
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

    activations?.add(path);
    return {
      result: true,
      actionNodes: [
        ...actionNodes,
        { type: node.type, actionNode: node, resolvedParams } as ActionNodeWithResolvedParams,
      ],
    };
  }

  if (node.nodeType === "selector") {
    for (const [i, selectorNode] of node.nodes.entries()) {
      const result = evaluateTreeNode({
        blackboardComputer,
        node: selectorNode,
        actionNodes,
        botState,
        group,
        state,
        activations,
        path: `${path}.nodes[${i}]`,
      });
      if (result.result) {
        activations?.add(path);
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

    for (const [i, sequenceNode] of node.nodes.entries()) {
      const result = evaluateTreeNode({
        blackboardComputer,
        node: sequenceNode,
        actionNodes,
        state,
        botState,
        group,
        activations,
        path: `${path}.nodes[${i}]`,
      });
      if (!result.result) {
        const hadAtLeastOneAction = sequenceActionNodes.length > 0;
        if (hadAtLeastOneAction) {
          activations?.add(path);
        }
        return {
          result: hadAtLeastOneAction,
          actionNodes: sequenceActionNodes,
        };
      }
      sequenceActionNodes.push(...result.actionNodes);
    }

    // Only consider a sequence as activated, if it had at least one node
    // that activated.
    if (node.nodes.length > 0) {
      activations?.add(path);
    }
    return {
      result: true,
      actionNodes: sequenceActionNodes,
    };
  }

  throw new Error();
}

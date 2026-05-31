import { actionsList } from "../behaviourTree/action/actionsList.ts";
import { evaluateTreeNode } from "../behaviourTree/evaluateTreeNode.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { GameDispatcher, GameState } from "../../../types.ts";
import { BotState, BotUnitGroup } from "./createBot.ts";
import { splitGroup } from "./util/splitGroup.ts";
import { mergeGroups } from "./util/mergeGroups.ts";
import { createCachedBlackboardComputer } from "../behaviourTree/blackboard/createCachedBlackboardComputer.ts";
import { resolveDataValueToPrimitive, resolveParamDataValues } from "../behaviourTree/dataValue/resolveDataValue.ts";

type TickGroupArgs = {
  group: BotUnitGroup;
  state: GameState;
  botState: BotState;
  dispatcher: GameDispatcher;
};

export function tickUnitGroupDecisions({ state, botState, dispatcher, group }: TickGroupArgs) {
  const blackboardComputer = createCachedBlackboardComputer();

  // If we have actions in the queue, try to consume the next available one.
  if (group.actionQueue.length > 0) {
    const nextAction = group.actionQueue[0];
    if (state.ticks < nextAction.executeAfterTick) {
      return;
    }

    const actionDefinition = actionsList[nextAction.action.type];
    const resolvedParams = resolveParamDataValues(nextAction.action.params, {
      group,
      state,
      botState,
      blackboardComputer,
    });
    const gameStateAction = actionDefinition.execute(
      resolvedParams as any,
      state,
      botState,
      group.includedUnits,
    );

    if (gameStateAction) {
      dispatcher(gameStateAction);
    }

    // These special meta-actions impacts the bot state, splitting groups apart.
    if (nextAction.action.type === "SPLIT_GROUP") {
      splitGroup({ group, state, botState });
    }
    if (nextAction.action.type === "MERGE_GROUP") {
      mergeGroups({ group, state, botState });
    }

    // The queued action is donezo.
    group.actionQueue.shift();
    return;
  }

  // Translate actions from the tree into a queue of actions to take over the course of some number of ticks.
  const treeToEvaluate = sampleTree[group.unitType];

  const { actionNodes } = evaluateTreeNode({
    blackboardComputer,
    group,
    state,
    botState,
    node: treeToEvaluate,
  });

  group.actionQueue.push(
    ...actionNodes.map((actionNode, i) => {
      let executeAfterTick: number = state.ticks + i;

      if (actionNode.type === "IDLE") {
        executeAfterTick += resolveDataValueToPrimitive({
          dataValue: actionNode.params.forTicksAmount,
          group,
          botState,
          state,
          blackboardComputer,
        }) as number;
      }
      return {
        action: actionNode,
        // Execute sequences of actions 1 tick apart, except for IDLE which will only execute after its
        // idle number of ticks have been played out.
        executeAfterTick,
      };
    }),
  );
}

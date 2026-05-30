import { actionsList } from "../behaviourTree/action/actionsList.ts";
import { computeBlackboard } from "../behaviourTree/blackboard/computeBlackboard.ts";
import { evaluateTreeNode } from "../behaviourTree/evaluateTreeNode.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { GameDispatcher, GameState } from "../../../types.ts";
import { BotState, BotUnitGroup } from "./createBot.ts";
import { splitGroup } from "./splitGroup.ts";
import { mergeGroups } from "./mergeGroups.ts";

type TickGroupArgs = {
  group: BotUnitGroup;
  state: GameState;
  botState: BotState;
  dispatcher: GameDispatcher;
};

export function tickUnitGroupDecisions({ state, botState, dispatcher, group }: TickGroupArgs) {
  // If we have actions in the queue, try to consume the next available one.
  if (group.actionQueue.length > 0) {
    const nextAction = group.actionQueue[0];
    if (state.ticks < nextAction.executeAfterTick) {
      return;
    }

    const actionDefinition = actionsList[nextAction.action.type];
    const gameStateAction = actionDefinition.execute(
      nextAction.action.params as any,
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
  const blackboard = computeBlackboard({ state, botState, group });
  const treeToEvaluate = sampleTree[group.unitType];

  const { actionNodes } = evaluateTreeNode({
    blackboard,
    node: treeToEvaluate,
  });
  group.actionQueue.push(
    ...actionNodes.map((actionNode, i) => ({
      action: actionNode,
      // Execute sequences of actions 1 tick apart, except for IDLE which will only execute after its
      // idle number of ticks have been played out.
      executeAfterTick: state.ticks + i + (actionNode.type === "IDLE" ? actionNode.params.forTicksAmount : 0),
    })),
  );
}

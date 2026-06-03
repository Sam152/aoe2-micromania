import { actionsList } from "../behaviourTree/action/actionsList.ts";
import { evaluateTreeNode } from "../behaviourTree/evaluateTreeNode.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { GameDispatcher, GameState } from "../../../types.ts";
import { BotState, BotUnitGroup } from "./createBot.ts";
import { splitGroup } from "./util/splitGroup.ts";
import { mergeGroups } from "./util/mergeGroups.ts";
import { createCachedBlackboardComputer } from "../behaviourTree/blackboard/utils/createCachedBlackboardComputer.ts";

import { ComputedTickState } from "../../state/computed/createComputedTickState.ts";

type TickGroupArgs = {
  group: BotUnitGroup;
  state: GameState;
  botState: BotState;
  dispatcher: GameDispatcher;
  computed: ComputedTickState;
};

export function tickUnitGroupDecisions({ state, botState, dispatcher, group, computed }: TickGroupArgs) {
  const blackboardComputer = createCachedBlackboardComputer({ computed });

  // If we have actions in the queue, try to consume the next available one.
  if (group.actionQueue.length > 0) {
    // Peek if we are able to execute the given action yet.
    if (state.ticks < group.actionQueue[0].executeAfterTick) {
      return;
    }

    const nextAction = group.actionQueue.shift()!;
    const actionDefinition = actionsList[nextAction.action.type];

    // Params were resolved when the action was queued, but should they be resolved
    // again when we execute the action? Do we want to operate on the data we had when
    // we made the choice, or the data we had when we go to execute the action? We could
    // resolve the params here again.
    // const resolvedParams = resolveParamDataValues(nextAction.action.actionNode.params, {
    //   group,
    //   state,
    //   botState,
    //   blackboardComputer,
    // });

    const gameStateAction = actionDefinition.execute(
      nextAction.action.resolvedParams as any,
      { state, botState, group },
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
    ...actionNodes.map((entry, i) => {
      let executeAfterTick: number = state.ticks + i;

      if (entry.type === "IDLE") {
        executeAfterTick += entry.resolvedParams.forTicksAmount;
      }
      return {
        action: entry,
        // Execute sequences of actions 1 tick apart, except for IDLE which will only execute after its
        // idle number of ticks have been played out.
        executeAfterTick,
      };
    }),
  );
}

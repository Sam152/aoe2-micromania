import { actionsList } from "../behaviourTree/action/actionsList.ts";
import { computeBlackboard } from "../behaviourTree/blackboard/computeBlackboard.ts";
import { evaluateTreeNode } from "../behaviourTree/evaluateTreeNode.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { ActionQueue, BotState } from "../behaviourTree/state/BotState.ts";
import { GameDispatcher, GameState } from "../../../types.ts";

type TickGroupArgs = {
  actionQueue: ActionQueue;
  state: GameState;
  botState: BotState;
  dispatcher: GameDispatcher;
};

export function tickUnitGroupDecisions({ actionQueue, state, botState, dispatcher }: TickGroupArgs) {
  // If we have actions in the queue, try to consume the next available one.
  if (actionQueue.length > 0) {
    const nextAction = actionQueue[0];
    if (state.ticks < nextAction.executeAfterTick) {
      return;
    }

    const actionDefinition = actionsList[nextAction.action.type];
    const gameStateAction = actionDefinition.execute(
      nextAction.action.params as any,
      state,
      botState,
    );

    if (gameStateAction) {
      dispatcher(gameStateAction);
    }

    // The queued action is donezo.
    botState.actionQueue.shift();
    return;
  }

  // Translate actions from the tree into a queue of actions to take over the course of some number of ticks.
  const blackboard = computeBlackboard({ gameState: state, botState });
  const { actionNodes } = evaluateTreeNode({
    blackboard,
    node: sampleTree,
  });
  botState.actionQueue = actionNodes.map((actionNode, i) => ({
    action: actionNode,
    executeAfterTick: state.ticks + i + (actionNode.type === "IDLE" ? actionNode.params.forTicksAmount : 0),
  }));
}

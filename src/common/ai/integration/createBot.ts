import { BotState } from "../behaviourTree/state/BotState.ts";
import { GameDispatcher, GameState } from "../../../types.ts";
import { computeBlackboard } from "../behaviourTree/blackboard/computeBlackboard.ts";
import { evaluateTreeNode } from "../behaviourTree/evaluateTreeNode.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { actionsList } from "../behaviourTree/action/actionsList.ts";

export type BotInstance = {
  tick: (state: GameState, dispatcher: GameDispatcher) => void;
  playerId: string;
};

export function createBot({ playingAs, playerId }: { playingAs: number; playerId: string }): BotInstance {
  const agentState: BotState = {
    isEligibleForDecision: true,
    playingAs: playingAs,
    lastActionType: "IDLE",
    lastActionTick: 0,
    actionQueue: [],
  };

  return {
    playerId,
    tick: (state, dispatcher) => {
      // If we have actions in the queue, try to consume the next available one.
      if (agentState.actionQueue.length > 0) {
        const nextAction = agentState.actionQueue[0];
        if (state.ticks < nextAction.executeAfterTick) {
          return;
        }

        const actionDefinition = actionsList[nextAction.action.type];
        const gameStateAction = actionDefinition.execute(
          nextAction.action.params as any,
          state,
          agentState,
        );

        if (gameStateAction) {
          dispatcher(gameStateAction);
        }

        return;
      }

      const blackboard = computeBlackboard({ gameState: state, agentState });
      const { actionNodes } = evaluateTreeNode({
        blackboard,
        node: sampleTree,
      });

      agentState.actionQueue = actionNodes.map((actionNode, i) => ({
        action: actionNode,
        executeAfterTick: state.ticks + i + (actionNode.type === "IDLE" ? actionNode.params.forTicksAmount : 0),
      }));
    },
  };
}

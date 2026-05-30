import { ActionNode } from "../action/ActionDefinition.ts";

export type BotState = {
  playingAs: number;
  lastActionType: ActionNode["type"];
  lastActionTick: number;
  isEligibleForDecision: boolean;

  actionQueue: {
    action: ActionNode;
    executeAfterTick: number;
  }[];
};

import { ActionNode } from "../action/ActionDefinition.ts";

export type ActionQueue = {
  action: ActionNode;
  executeAfterTick: number;
}[];

export type BotState = {
  playingAs: number;
  playerId: string;
  lastActionType: ActionNode["type"];
  lastActionTick: number;
  isEligibleForDecision: boolean;
  actionQueue: ActionQueue;
};

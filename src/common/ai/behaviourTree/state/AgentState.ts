import { ActionType } from "../action/ActionDefinition.ts";

export type AgentState = {
  playingAs: number;
  lastActionType: ActionType;
  lastActionTick: number;
};

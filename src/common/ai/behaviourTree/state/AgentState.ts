import { ActionNode } from "../action/actionsList.ts";

export type AgentState = {
  playingAs: number;
  lastActionType: ActionNode["type"];
  lastActionTick: number;
};

import { ActionNode } from "../action/ActionDefinition.ts";

export type AgentState = {
  playingAs: number;
  lastActionType: ActionNode["type"];
  lastActionTick: number;
};

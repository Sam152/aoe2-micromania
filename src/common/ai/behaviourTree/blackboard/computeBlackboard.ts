import { GameState } from "../../../../types.ts";
import { AgentState } from "../state/AgentState.ts";
import { BlackboardValue } from "./BlackboardValue.ts";

export type Blackboard = {
  distanceToClosestOpponent: BlackboardValue<"number">;
  ticksSinceLastAction: BlackboardValue<"number">;
};

export function computeBlackboard(
  { gameState, agentState }: { gameState: GameState; agentState: AgentState },
): Blackboard {
  return {
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}

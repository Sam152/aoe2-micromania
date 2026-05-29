import { GameState } from "../../../../types.ts";
import { AgentState } from "../state/AgentState.ts";
import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";

export type BlackboardValueDefinition<TDataType extends DataType = DataType> = {
  dataType: TDataType;
  thing: TypeFromDataType<TDataType>;
};

type BlackboardDefinition = Record<string, BlackboardValueDefinition>;

const blackboardDefinition = {
  distanceToClosestOpponent: {
    dataType: "number",
    thing: 1,
  },
  ticksSinceLastAction: {
    dataType: "number",
  },
} as const satisfies BlackboardDefinition;

type BlackboardValuesFromDefinition<TBlackboard extends BlackboardDefinition> = {
  [TKey: keyof TBlackboard]: TypeFromDataType<TBlackboard[TKey]["dataType"]>;
};

export function computeBlackboard(
  { gameState, agentState }: { gameState: GameState; agentState: AgentState },
): BlackboardValuesFromDefinition<typeof blackboardDefinition> {
  return {
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}

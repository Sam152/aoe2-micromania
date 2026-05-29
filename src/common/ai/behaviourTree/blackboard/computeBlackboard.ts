import { GameState } from "../../../../types.ts";
import { AgentState } from "../state/AgentState.ts";
import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";

export type BlackboardValueDefinition<TDataType extends DataType = DataType> = {
  dataType: TDataType;
  thing: TypeFromDataType<TDataType>;
};

type BlackboardDefinition = Record<string, { [K in DataType]: BlackboardValueDefinition<K> }[DataType]>;

const blackboardDefinition = {
  distanceToClosestOpponent: {
    dataType: "number",
    thing: 1,
  },
  ticksSinceLastAction: {
    dataType: "number",
    thing: 1,
  },
} as const satisfies BlackboardDefinition;

export type Blackboard = typeof blackboardDefinition;

type BlackboardValuesFromDefinition<TBlackboard extends BlackboardDefinition> = {
  [TKey in keyof TBlackboard]: TypeFromDataType<TBlackboard[TKey]["dataType"]>;
};

export function computeBlackboard(
  { gameState, agentState }: { gameState: GameState; agentState: AgentState },
): BlackboardValuesFromDefinition<Blackboard> {
  return {
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}

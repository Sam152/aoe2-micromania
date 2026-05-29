import { DataType, MutationRequirementsFromDataType, TypeFromDataType } from "../dataType/dataTypes.ts";

export type BlackboardValueDefinition<TDataType extends DataType = DataType> = {
  dataType: TDataType;
  mutationRequirements: MutationRequirementsFromDataType<TDataType>;
};

export type BlackboardDefinition = Record<string, { [K in DataType]: BlackboardValueDefinition<K> }[DataType]>;

const blackboardDefinition = {
  distanceToClosestOpponent: {
    dataType: "number",
    mutationRequirements: {
      min: 1,
      max: 1,
      step: 1,
    },
  },
  ticksSinceLastAction: {
    dataType: "number",
    mutationRequirements: {
      min: 1,
      max: 100,
      step: 5,
    },
  },
} as const satisfies BlackboardDefinition;

export type Blackboard = typeof blackboardDefinition;

export type BlackboardValuesFromDefinition<TBlackboard extends BlackboardDefinition> = {
  [TKey in keyof TBlackboard]: TypeFromDataType<TBlackboard[TKey]["dataType"]>;
};

import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";

export type BlackboardValueDefinition<TDataType extends DataType = DataType> = {
  dataType: TDataType;
  thing: TypeFromDataType<TDataType>;
};

export type BlackboardDefinition = Record<string, { [K in DataType]: BlackboardValueDefinition<K> }[DataType]>;

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

export type BlackboardValuesFromDefinition<TBlackboard extends BlackboardDefinition> = {
  [TKey in keyof TBlackboard]: TypeFromDataType<TBlackboard[TKey]["dataType"]>;
};

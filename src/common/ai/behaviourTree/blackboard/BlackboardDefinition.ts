import { DataType, MutationRequirementsFromDataType, TypeFromDataType } from "../dataType/dataTypes.ts";

export type BlackboardValueDefinition<TDataType extends DataType = DataType> = {
  dataType: TDataType;
  mutationRequirements: MutationRequirementsFromDataType<TDataType>;
};

export type BlackboardDefinition = Record<string, { [K in DataType]: BlackboardValueDefinition<K> }[DataType]>;

export type BlackboardValuesFromDefinition<TBlackboard extends BlackboardDefinition> = {
  [TKey in keyof TBlackboard]: TypeFromDataType<TBlackboard[TKey]["dataType"]>;
};

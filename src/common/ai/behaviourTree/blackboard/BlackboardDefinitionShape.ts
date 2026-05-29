import { DataType, MutationRequirementsFromDataType, TypeFromDataType } from "../dataType/dataTypes.ts";

export type BlackboardValueDefinition<TDataType extends DataType = DataType> = {
  dataType: TDataType;
  mutationRequirements: MutationRequirementsFromDataType<TDataType>;
};

export type BlackboardDefinitionShape = Record<string, { [K in DataType]: BlackboardValueDefinition<K> }[DataType]>;

export type BlackboardValuesFromDefinition<TBlackboard extends BlackboardDefinitionShape> = {
  [TKey in keyof TBlackboard]: TypeFromDataType<TBlackboard[TKey]["dataType"]>;
};

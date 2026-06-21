import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";
import { DataValueType } from "../dataValue/DataValue.ts";

export type ConditionDefinition<
  TParams extends Record<string, { [TKey in DataType]: ConditionDefinitionParam<TKey> }[DataType]> = Record<
    string,
    { [TKey in DataType]: ConditionDefinitionParam<TKey> }[DataType]
  >,
> = {
  params: TParams;
  evaluate: (params: { [TKey in keyof TParams]: TypeFromDataType<TParams[TKey]["dataType"]> }) => boolean;
};

export type ConditionDefinitionParam<TDataType extends DataType> = {
  dataType: TDataType;
  allowedValueTypes: DataValueType[];
};

/**
 * Definition helper.
 */
export function defineCondition<
  const TParams extends Record<string, { [TKey in DataType]: ConditionDefinitionParam<TKey> }[DataType]>,
>(definition: ConditionDefinition<TParams>): ConditionDefinition<TParams> {
  return definition;
}

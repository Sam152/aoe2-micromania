import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";

export type ActionDefinition<TParams extends Record<string, DataType> = Record<string, DataType>> = {
  type: string;
  params: TParams;
  execute: (input: { [TKey in keyof TParams]: TypeFromDataType<TParams[TKey]> }) => void;
};

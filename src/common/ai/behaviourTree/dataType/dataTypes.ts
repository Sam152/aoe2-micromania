import { boolean } from "./boolean.ts";
import { number } from "./number.ts";
import { DataTypeDefinition } from "./DataTypeDefinition.ts";
import { direction } from "./direction.ts";

export const dataTypes = {
  boolean,
  number,
  direction,
};

export type DataType = keyof typeof dataTypes;

export type TypeFromDataType<TDataType extends DataType> = (typeof dataTypes)[TDataType] extends
  DataTypeDefinition<infer T> ? T
  : never;

export type ComparatorOptionsFromDataType<TDataType extends DataType> =
  keyof (typeof dataTypes)[TDataType]["conditions"];

export type DataTypeFromBlackboardValue<TValue> = {
  [TDataType in DataType]: [TValue] extends [TypeFromDataType<TDataType>]
    ? [TypeFromDataType<TDataType>] extends [TValue] ? TDataType
    : never
    : never;
}[DataType];

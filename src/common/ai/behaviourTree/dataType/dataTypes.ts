import { boolean } from "./catalog/boolean.ts";
import { number } from "./catalog/number.ts";
import { DataTypeDefinition } from "./DataTypeDefinition.ts";
import { direction } from "./catalog/direction.ts";

export const dataTypes = {
  boolean,
  number,
  direction,
};

export type DataType = keyof typeof dataTypes;

export type TypeFromDataType<TDataType extends DataType> = (typeof dataTypes)[TDataType] extends
  DataTypeDefinition<infer T, any> ? T
  : never;

export type MutationRequirementsFromDataType<TDataType extends DataType> = (typeof dataTypes)[TDataType] extends
  DataTypeDefinition<any, infer T> ? T
  : never;

export type ComparatorOptionsFromDataType<TDataType extends DataType> =
  keyof (typeof dataTypes)[TDataType]["comparitors"];

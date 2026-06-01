import { boolean } from "./catalog/boolean.ts";
import { number } from "./catalog/number.ts";
import { DataTypeDefinition } from "./DataTypeDefinition.ts";

import { vector } from "./catalog/vector.ts";
import { count } from "./catalog/count.ts";
import { vectorMagnitude } from "./catalog/vectorMagnitude.ts";

export const dataTypes = {
  boolean,
  number,
  vector,
  count,
  vectorMagnitude,
};

export type DataType = keyof typeof dataTypes;

export type TypeFromDataType<TDataType extends DataType> = (typeof dataTypes)[TDataType] extends
  DataTypeDefinition<infer T, any> ? T
  : never;

export type MutationRequirementsFromDataType<TDataType extends DataType> = (typeof dataTypes)[TDataType] extends
  DataTypeDefinition<any, infer T> ? T
  : never;

import { boolean } from "./catalog/boolean.ts";
import { number } from "./catalog/number.ts";
import { DataTypeDefinition } from "./DataTypeDefinition.ts";

import { vector } from "./catalog/vector.ts";
import { count } from "./catalog/count.ts";
import { vectorMagnitude } from "./catalog/vectorMagnitude.ts";
import { unitId } from "./catalog/unitId.ts";
import { unitType } from "./catalog/blackboardUnitType.ts";
import { vectorAngle } from "./catalog/vectorAngle.ts";

export const dataTypes = {
  boolean,
  count,
  number,
  unitId,
  unitType,
  vector,
  vectorMagnitude,
  vectorAngle,
};

export type DataType = keyof typeof dataTypes;

export type TypeFromDataType<TDataType extends DataType> = (typeof dataTypes)[TDataType] extends
  DataTypeDefinition<infer T> ? T
  : never;

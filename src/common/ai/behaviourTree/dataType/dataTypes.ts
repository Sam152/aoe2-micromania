import { boolean } from "./catalog/boolean.ts";

import { DataTypeDefinition } from "./DataTypeDefinition.ts";

import { vector } from "./catalog/vector.ts";
import { unitCount } from "./catalog/unitCount.ts";
import { vectorMagnitude } from "./catalog/vectorMagnitude.ts";
import { unitId } from "./catalog/unitId.ts";
import { unitType } from "./catalog/unitType.ts";
import { vectorAngle } from "./catalog/vectorAngle.ts";
import { formation } from "./catalog/formation.ts";
import { tickCount } from "./catalog/tickCount.ts";
import { groupIndex } from "./catalog/groupIndex.ts";
import { projectileType } from "./catalog/projectileType.ts";

export const dataTypes = {
  boolean,
  unitCount,
  tickCount,
  unitId,
  unitType,
  vector,
  groupIndex,
  vectorMagnitude,
  vectorAngle,
  formation,
  projectileType,
};

export type DataType = keyof typeof dataTypes;

export type TypeFromDataType<TDataType extends DataType> = (typeof dataTypes)[TDataType] extends
  DataTypeDefinition<infer T> ? T
  : never;

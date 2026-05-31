import { numberEquals } from "./catalog/numberEquals.ts";
import { numberGreaterThan } from "./catalog/numberGreaterThan.ts";
import { vectorDistanceBetweenGreaterThan } from "./catalog/vectorDistanceBetweenGreaterThan.ts";

export const conditionList = {
  numberEquals,
  numberGreaterThan: numberGreaterThan,
  vectorDistanceBetweenLessThan: vectorDistanceBetweenGreaterThan,
} as const;

export type ConditionList = typeof conditionList;
export type ConditionType = keyof ConditionList;

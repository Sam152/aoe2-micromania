import { numberEquals } from "./catalog/numberEquals.ts";
import { numberGreaterThan } from "./catalog/numberGreaterThan.ts";
import { vectorDistanceBetweenLessThan } from "./catalog/vectorDistanceBetweenLessThan.ts";
import { booleanIsTrue } from "./catalog/booleanIsTrue.ts";
import { countGreaterThan } from "./catalog/countGreaterThan.ts";
import { countEquals } from "./catalog/countEquals.ts";

export const conditionList = {
  numberEquals,
  numberGreaterThan,
  vectorDistanceBetweenLessThan,
  booleanIsTrue,
  countGreaterThan,
  countEquals,
} as const;

export type ConditionList = typeof conditionList;
export type ConditionType = keyof ConditionList;

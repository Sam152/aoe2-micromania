import { numberEquals } from "./catalog/numberEquals.ts";
import { numberGreaterThan } from "./catalog/numberGreaterThan.ts";
import { vectorDistanceBetweenLessThan } from "./catalog/vectorDistanceBetweenLessThan.ts";
import { isTrue } from "./catalog/isTrue.ts";
import { countGreaterThan } from "./catalog/countGreaterThan.ts";

export const conditionList = {
  numberEquals,
  numberGreaterThan,
  vectorDistanceBetweenLessThan,
  isTrue,
  countGreaterThan,
} as const;

export type ConditionList = typeof conditionList;
export type ConditionType = keyof ConditionList;

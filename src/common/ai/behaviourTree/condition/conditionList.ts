import { groupIndexEquals } from "./catalog/groupIndexEquals.ts";
import { groupIndexGreaterThan } from "./catalog/groupIndexGreaterThan.ts";
import { vectorDistanceBetweenLessThan } from "./catalog/vectorDistanceBetweenLessThan.ts";
import { booleanIsTrue } from "./catalog/booleanIsTrue.ts";
import { countGreaterThan } from "./catalog/countGreaterThan.ts";
import { countEquals } from "./catalog/countEquals.ts";
import { formationEquals } from "./catalog/formationEquals.ts";

export const conditionList = {
  groupIndexEquals,
  groupIndexGreaterThan,
  vectorDistanceBetweenLessThan,
  booleanIsTrue,
  countGreaterThan,
  countEquals,
  formationEquals,
} as const;

export type ConditionList = typeof conditionList;
export type ConditionType = keyof ConditionList;

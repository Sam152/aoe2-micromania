import { groupIndexEquals } from "./catalog/groupIndexEquals.ts";
import { groupIndexGreaterThan } from "./catalog/groupIndexGreaterThan.ts";
import { vectorDistanceBetweenLessThan } from "./catalog/vectorDistanceBetweenLessThan.ts";
import { booleanIsTrue } from "./catalog/booleanIsTrue.ts";
import { unitCountGreaterThan } from "./catalog/unitCountGreaterThan.ts";
import { unitCountEquals } from "./catalog/unitCountEquals.ts";
import { formationEquals } from "./catalog/formationEquals.ts";

export const conditionList = {
  groupIndexEquals,
  groupIndexGreaterThan,
  vectorDistanceBetweenLessThan,
  booleanIsTrue,
  unitCountGreaterThan,
  unitCountEquals,
  formationEquals,
} as const;

export type ConditionList = typeof conditionList;
export type ConditionType = keyof ConditionList;

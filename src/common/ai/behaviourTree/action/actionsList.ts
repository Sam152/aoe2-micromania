import { patrol } from "./catalog/patrol.ts";
import { idle } from "./catalog/idle.ts";
import { ActionDefinition } from "./ActionDefinition.ts";
import { splitGroup } from "./catalog/splitGroup.ts";
import { mergeGroup } from "./catalog/mergeGroup.ts";

export const actionsList = {
  PATROL: patrol,
  IDLE: idle,
  SPLIT_GROUP: splitGroup,
  MERGE_GROUP: mergeGroup,
} as const satisfies Record<string, ActionDefinition>;

export type ActionsList = typeof actionsList;

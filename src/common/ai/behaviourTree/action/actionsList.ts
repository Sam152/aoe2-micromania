import { patrol } from "./catalog/patrol.ts";
import { idle } from "./catalog/idle.ts";
import { splitGroup } from "./catalog/splitGroup.ts";
import { mergeGroup } from "./catalog/mergeGroup.ts";
import { convert } from "./catalog/convert.ts";
import { move } from "./catalog/move.ts";

export const actionsList = {
  PATROL: patrol,
  IDLE: idle,
  SPLIT_GROUP: splitGroup,
  MERGE_GROUP: mergeGroup,
  CONVERT: convert,
  MOVE: move,
} as const;

export type ActionsList = typeof actionsList;

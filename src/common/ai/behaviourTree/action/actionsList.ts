import { patrol } from "./catalog/patrol.ts";
import { idle } from "./catalog/idle.ts";
import { splitGroup } from "./catalog/splitGroup.ts";
import { mergeGroup } from "./catalog/mergeGroup.ts";
import { convert } from "./catalog/convert.ts";
import { moveUnits } from "./catalog/moveUnits.ts";
import { formationLine } from "./catalog/formationLine.ts";
import { formationSplit } from "./catalog/formationSplit.ts";
import { formationSpread } from "./catalog/formationSpread.ts";
import { attackGround } from "./catalog/attackGround.ts";

export const actionsList = {
  PATROL: patrol,
  IDLE: idle,
  SPLIT_GROUP: splitGroup,
  MERGE_GROUP: mergeGroup,
  CONVERT: convert,
  MOVE_UNITS: moveUnits,
  FORMATION_LINE: formationLine,
  FORMATION_SPLIT: formationSplit,
  FORMATION_SPREAD: formationSpread,
  ATTACK_GROUND: attackGround,
} as const;

export type ActionsList = typeof actionsList;

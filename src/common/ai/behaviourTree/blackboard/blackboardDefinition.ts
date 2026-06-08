import { groupMetaUnitTypeGroupCount } from "./catalog/groupMetaUnitTypeGroupCount.ts";
import { groupMetaUnitTypeIndex } from "./catalog/groupMetaUnitTypeIndex.ts";
import { groupUnitCount } from "./catalog/groupUnitCount.ts";
import { groupAveragePosition } from "./catalog/groupAveragePosition.ts";
import { globalOwnedUnitsOfTypeCount } from "./catalog/globalOwnedUnitsOfTypeCount.ts";
import { opponentAveragePosition } from "./catalog/opponentAveragePosition.ts";
import { opponentClosestUnitByType } from "./catalog/opponentClosestUnitByType.ts";
import { opponentClosestUnitPositionByType } from "./catalog/opponentClosestUnitPositionByType.ts";
import { opponentAverageUnitPositionByType } from "./catalog/opponentAverageUnitPositionByType.ts";
import { groupUnitVectorFacingDirection } from "./catalog/groupUnitVectorFacingDirection.ts";
import { groupIsConverting } from "./catalog/groupIsConverting.ts";
import { groupFormation } from "./catalog/groupFormation.ts";
import { opponentFormationByType } from "./catalog/opponentFormationByType.ts";
import { groupVectorFacingDirection } from "./catalog/groupVectorFacingDirection.ts";

export const blackboardDefinition = {
  groupMetaUnitTypeGroupCount,
  groupMetaUnitTypeIndex,
  groupUnitCount,
  groupAveragePosition,
  globalOwnedUnitsOfTypeCount,
  opponentAveragePosition,
  opponentClosestUnitByType,
  opponentClosestUnitPositionByType,
  opponentAverageUnitPositionByType,
  groupUnitVectorFacingDirection,
  groupVectorFacingDirection,
  groupIsConverting,
  groupFormation,
  opponentFormationByType,
} as const;

export type BlackboardDefinition = typeof blackboardDefinition;
export type BlackboardKey = keyof BlackboardDefinition;
export type BlackboardValue = BlackboardDefinition[BlackboardKey];

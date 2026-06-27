import { unitsByType } from "../../../util/unitsByType.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { BotState } from "../createBot.ts";
import { GameState } from "../../../../types.ts";

export function createInitialUnitGroups(botState: BotState, state: GameState) {
  const allOwnedUnits = new Set(botState.unitGroups.flatMap((group) => group.includedUnits));

  const ungroupedBotUnits = unitsByType(
    state.units.filter((unit) => unit.ownedByPlayer === botState.playingAs && !allOwnedUnits.has(unit.id)),
  );

  if (ungroupedBotUnits[UnitType.Mangonel].length > 0) {
    botState.unitGroups.push({
      unitType: UnitType.Mangonel,
      includedUnits: ungroupedBotUnits[UnitType.Mangonel].map((unit) => unit.id),
      actionQueue: [],
    });
  }

  if (ungroupedBotUnits[UnitType.Archer].length > 0) {
    botState.unitGroups.push({
      unitType: UnitType.Archer,
      includedUnits: ungroupedBotUnits[UnitType.Archer].map((unit) => unit.id),
      actionQueue: [],
    });
  }

  if (ungroupedBotUnits[UnitType.Monk].length > 0) {
    botState.unitGroups.push({
      unitType: UnitType.Monk,
      includedUnits: ungroupedBotUnits[UnitType.Monk].map((unit) => unit.id),
      actionQueue: [],
    });
  }
}

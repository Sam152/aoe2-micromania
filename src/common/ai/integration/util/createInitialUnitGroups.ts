import { unitsByType } from "../../../util/unitsByType.ts";
import { unitsOwnedByPlayer } from "../../../util/unitsOwnedByPlayer.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { BotState } from "../createBot.ts";
import { GameState } from "../../../../types.ts";

export function createInitialUnitGroups(botState: BotState, state: GameState) {
  const botUnitsByType = unitsByType(unitsOwnedByPlayer(state.units, botState.playingAs));

  if (botUnitsByType[UnitType.Mangonel].length > 0) {
    botState.unitGroups.push({
      unitType: UnitType.Mangonel,
      includedUnits: botUnitsByType[UnitType.Mangonel].map((unit) => unit.id),
      actionQueue: [],
    });
  }

  if (botUnitsByType[UnitType.Archer].length > 0) {
    botState.unitGroups.push({
      unitType: UnitType.Archer,
      includedUnits: botUnitsByType[UnitType.Archer].map((unit) => unit.id),
      actionQueue: [],
    });
  }

  if (botUnitsByType[UnitType.Monk].length > 0) {
    botState.unitGroups.push({
      unitType: UnitType.Monk,
      includedUnits: botUnitsByType[UnitType.Monk].map((unit) => unit.id),
      actionQueue: [],
    });
  }
}

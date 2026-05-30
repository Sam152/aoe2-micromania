import { BotUnitGroup } from "./createBot.ts";
import { UnitInstance } from "../../../types.ts";

export function consolidateGroups(groups: BotUnitGroup[], state: { units: Pick<UnitInstance, "id">[] }) {
  const unitsIndex = state.units.reduce<Record<number, boolean>>((index, unit) => {
    index[unit.id] = true;
    return index;
  }, {});

  // Only retain units in the group which are actually in the game state.
  // Delete groups which have no units left.
  groups.forEach((group, index) => {
    group.includedUnits = group.includedUnits.filter((unit) => unitsIndex[unit] ?? false);
    if (group.includedUnits.length === 0) {
      delete groups[index];
    }
  });
}

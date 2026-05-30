import { BotUnitGroup } from "./createBot.ts";
import { UnitInstance } from "../../../types.ts";

export function consolidateGroups(groups: BotUnitGroup[], state: { units: Pick<UnitInstance, "id">[] }) {
  const unitsIndex = state.units.reduce<Record<number, boolean>>((index, unit) => {
    index[unit.id] = true;
    return index;
  }, {});

  // Only retain units in the group which are actually in the game state.
  groups.forEach((group) => {
    group.includedUnits = group.includedUnits.filter((unit) => unitsIndex[unit] ?? false);
  });

  // Remove groups which have no units left, mutating the array in place so we
  // don't leave behind sparse holes (undefined elements).
  const remaining = groups.filter((group) => group.includedUnits.length > 0);
  groups.splice(0, groups.length, ...remaining);
}

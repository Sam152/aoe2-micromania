import { BotUnitGroup } from "../../../integration/createBot.ts";
import { ComputedTickState } from "../../../../state/computed/createComputedTickState.ts";
import { UnitInstance } from "../../../../../types.ts";

export function unitsInGroup(
  { group, computed }: { group: BotUnitGroup; computed: ComputedTickState },
): UnitInstance[] {
  return group.includedUnits.map((id) => computed.unitsById()[id]).filter((unit) => !!unit);
}

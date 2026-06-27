import { BotUnitGroup } from "../../../integration/createBot.ts";
import { ComputedTickState } from "../../../../state/computed/createComputedTickState.ts";
import { unitsInGroup } from "./unitsInGroup.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { averageVectorOrUndefined } from "../../../../util/averageVector.ts";

export function groupAveragePosition(
  { group, computed }: { group: BotUnitGroup; computed: ComputedTickState },
): Vector2 | undefined {
  return averageVectorOrUndefined(unitsInGroup({ group, computed }).map((unit) => unit.position));
}

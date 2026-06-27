import { ComputedTickState } from "../../../../state/computed/createComputedTickState.ts";
import { BlackboardUnitType } from "../../dataType/catalog/unitType.ts";
import { UnitInstance } from "../../../../../types.ts";
import { Quadtree } from "d3-quadtree";

export function playersQuadTreesForUnitType(
  { computed, unitType }: { computed: ComputedTickState; unitType: BlackboardUnitType },
): Record<number, Quadtree<UnitInstance>> {
  return {
    "ARCHER": () => computed.archerQuadTreesByPlayer(),
    "MONK": () => computed.monkQuadTreesByPlayer(),
    "MANGO": () => computed.mangoQuadTreesByPlayer(),
  }[unitType]();
}

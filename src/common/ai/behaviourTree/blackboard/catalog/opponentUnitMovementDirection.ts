import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { vectorToPrimitive } from "../utils/vectorToPrimitive.ts";
import { calculateUnitMovementPerTick } from "../../../../units/calculateUnitMovementPerTick.ts";

export const opponentUnitMovementTowardsVector = defineBlackboardValue({
  dataType: "vector",
  params: {
    movingUnit: {
      dataType: "unitId",
      default: -1,
    },
    positionInTicksAmount: {
      dataType: "tickCount",
      default: 20,
    },
  },
  resolve: ({ params: { movingUnit, positionInTicksAmount }, computed }) => {
    const unit = computed.unitsById()[movingUnit];
    if (!unit) {
      return;
    }

    const movementPerTick = calculateUnitMovementPerTick(unit);
    if (!movementPerTick) {
      return;
    }

    return vectorToPrimitive(movementPerTick.multiplyScalar(positionInTicksAmount).add(unit.position));
  },
});

import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";

import { vectorToPrimitive } from "../utils/vectorToPrimitive.ts";

export const unitPosition = defineBlackboardValue({
  dataType: "vector",
  params: {
    unitWithPosition: {
      dataType: "unitId",
      default: -1,
    },
  },
  resolve: ({ params, computed }) => {
    const position = computed.unitsById()[params.unitWithPosition]?.position;
    return position ? vectorToPrimitive(position) : undefined;
  },
});

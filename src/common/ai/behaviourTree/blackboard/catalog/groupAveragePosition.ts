import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { groupAveragePosition as groupAveragePositionUtil } from "../utils/groupAveragePosition.ts";

export const groupAveragePosition = defineBlackboardValue({
  dataType: "vector",
  params: {},
  resolve: ({ group, computed }) => groupAveragePositionUtil({ group, computed }),
});

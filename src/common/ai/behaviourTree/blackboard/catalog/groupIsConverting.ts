import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { unitsInGroup } from "../utils/unitsInGroup.ts";

export const groupIsConverting = defineBlackboardValue({
  dataType: "boolean",
  params: {},
  resolve: ({ group, computed }) =>
    !!unitsInGroup({ group, computed }).find((unit) => unit.convertingUnit !== undefined),
});

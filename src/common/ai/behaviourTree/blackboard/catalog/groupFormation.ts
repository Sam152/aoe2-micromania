import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";

import { unitsInGroup } from "../utils/unitsInGroup.ts";
import { dominantFormation } from "../utils/dominantFormation.ts";

export const groupFormation = defineBlackboardValue({
  dataType: "formation",
  params: {},
  resolve: ({ group, computed }) => dominantFormation(unitsInGroup({ group, computed })),
});

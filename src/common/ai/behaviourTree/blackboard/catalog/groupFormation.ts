import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";

import { unitsInGroup } from "../utils/unitsInGroup.ts";
import { FormationType } from "../../../../units/formations/FormationType.ts";
import { Formation } from "../../dataType/catalog/formation.ts";

const formationToDataType: Record<FormationType, Formation> = {
  [FormationType.Line]: "LINE",
  [FormationType.Spread]: "SPREAD",
  [FormationType.Split]: "SPLIT",
};

export const groupFormation = defineBlackboardValue({
  dataType: "formation",
  params: {},
  resolve: ({ group, computed }) => {
    const units = unitsInGroup({ group, computed });

    if (units.length === 0) {
      return undefined;
    }

    const counts = units.reduce<Record<FormationType, number>>(
      (counts, unit) => {
        counts[unit.formation]++;
        return counts;
      },
      { [FormationType.Line]: 0, [FormationType.Spread]: 0, [FormationType.Split]: 0 },
    );

    const dominantFormation = (Object.keys(counts) as unknown as FormationType[]).reduce((a, b) =>
      counts[b] > counts[a] ? b : a
    );

    return formationToDataType[dominantFormation];
  },
});

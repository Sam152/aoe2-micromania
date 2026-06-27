import { UnitInstance } from "../../../../../types.ts";
import { FormationType } from "../../../../units/formations/FormationType.ts";
import { Formation } from "../../dataType/catalog/formation.ts";

const formationToDataType: Record<FormationType, Formation> = {
  [FormationType.Line]: "LINE",
  [FormationType.Spread]: "SPREAD",
  [FormationType.Split]: "SPLIT",
};

/**
 * The formation held by the greatest number of the given units, or undefined when there are no units.
 */
export function dominantFormation(units: UnitInstance[]): Formation | undefined {
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

  const dominant = (Object.keys(counts) as unknown as FormationType[]).reduce((a, b) => counts[b] > counts[a] ? b : a);

  return formationToDataType[dominant];
}

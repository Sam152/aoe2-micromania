import { ClientState } from "../../types.ts";
import { UnitType } from "../units/UnitType.ts";

export function selectedTypesFromClientState(state: ClientState) {
  const typeById = state.unitHitBoxes.reduce<{ [key: number]: UnitType }>((obj, instance) => {
    obj[instance.unit.id] = instance.unit.unitType;
    return obj;
  }, {});
  return Array.from(
    new Set(
      state.selectedUnits
        .map((selectedUnitId) => (selectedUnitId in typeById ? typeById[selectedUnitId] : null))
        .filter((val) => val !== null),
    ).values(),
  );
}

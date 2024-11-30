import { ClientState } from "../../types";
import Unit from "../units/Unit";

export default function selectedTypesFromClientState(state: ClientState) {
  const typeById = state.unitHitBoxes.reduce<{ [key: number]: Unit }>((obj, instance) => {
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

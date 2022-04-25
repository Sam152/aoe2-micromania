import {GameState} from "../../types";

export default function unitsFromSelection(state: GameState, selectedUnits: Array<number>) {
    return selectedUnits
        .map((selectedUnitId) => state.units.find(({id}) => id === selectedUnitId))
        .filter(unit => unit !== undefined);
}

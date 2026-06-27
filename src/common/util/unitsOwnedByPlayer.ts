import { UnitInstance } from "../../types.ts";

export function unitsOwnedByPlayer(units: UnitInstance[], playerNumber: number) {
  return units.filter(({ ownedByPlayer }) => ownedByPlayer === playerNumber);
}

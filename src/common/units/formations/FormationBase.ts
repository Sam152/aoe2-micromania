import { FormationInterface, UnitInstance } from "../../../types";
import { Vector2 } from "three/src/math/Vector2";
import unitMetadataFactory from "../unitMetadataFactory";

export default abstract class FormationBase implements FormationInterface {
  form(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    if (units.length === 0) {
      return [];
    }
    if (units.length === 1) {
      units[0].groupMovementSpeed = undefined;
      return [destination.clone()];
    }

    const slowest = Math.min(...units.map((unit) => unitMetadataFactory.getUnit(unit.unitType).movementRate));
    units.forEach((unit) => {
      unit.groupMovementSpeed = slowest;
    });

    return this.doForm(units, destination);
  }

  doForm(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    return [];
  }
}

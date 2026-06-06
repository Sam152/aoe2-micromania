import { DataType } from "../../behaviourTree/dataType/dataTypes.ts";
import { BlackboardUnitType } from "../../behaviourTree/dataType/catalog/blackboardUnitType.ts";
import { randomArray } from "../../../util/randomArray.ts";

const unitTypes: BlackboardUnitType[] = ["ARCHER", "MANGO", "MONK"];

export function randomLiteral(dataType: DataType): unknown {
  switch (dataType) {
    case "boolean":
      return Math.random() < 0.5;
    case "count":
    case "number":
      return Math.floor(Math.random() * 500);
    case "unitType":
      return randomArray(unitTypes);
    case "vector":
      return { x: Math.floor(Math.random() * 1000), y: Math.floor(Math.random() * 1000) };
    case "vectorMagnitude":
      return Math.floor(Math.random() * 500);
    case "vectorAngle":
      return Math.floor(Math.random() * 360);
    case "unitId":
      throw new Error("Generating random unit IDs does not make sense");
  }
}

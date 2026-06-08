import { DataType } from "../../behaviourTree/dataType/dataTypes.ts";
import { randomArray } from "../../../util/randomArray.ts";
import { isNever } from "../../../util/isNever.ts";

export function randomLiteral(dataType: DataType): unknown {
  switch (dataType) {
    case "boolean":
      return Math.random() < 0.5;
    case "count":
      return Math.floor(Math.random() * 40);
    case "number":
      return Math.floor(Math.random() * 500);
    case "unitType":
      return randomArray(["ARCHER", "MANGO", "MONK"]);
    case "formation":
      return randomArray(["SPREAD", "LINE", "SPLIT"]);
    case "vector":
      return { x: Math.floor(Math.random() * 1000), y: Math.floor(Math.random() * 1000) };
    case "vectorMagnitude":
      return Math.floor(Math.random() * 500);
    case "vectorAngle":
      return Math.floor(Math.random() * 360);
    case "unitId":
      throw new Error("Generating random unit IDs does not make sense");
    default:
      return isNever(dataType);
  }
}

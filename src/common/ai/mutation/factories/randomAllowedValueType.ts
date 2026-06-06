import { DataType, dataTypes } from "../../behaviourTree/dataType/dataTypes.ts";
import { randomArray } from "../../../util/randomArray.ts";

export function randomAllowedValueType(dataType: DataType) {
  const dataDefinition = dataTypes[dataType];
  const options: Array<"LITERAL" | "BLACKBOARD"> = [];
  if (dataDefinition.allowedValueTypes.includes("LITERAL")) {
    options.push("LITERAL");
  }
  if (dataDefinition.allowedValueTypes) {
    options.push("BLACKBOARD");
  }
  return randomArray(options);
}

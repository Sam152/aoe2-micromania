import { DataType, dataTypes } from "../../behaviourTree/dataType/dataTypes.ts";
import { blackboardDefinition } from "../../behaviourTree/blackboard/blackboardDefinition.ts";
import { randomArray } from "../../../util/randomArray.ts";
import { BlackboardValueDefinition } from "../../behaviourTree/blackboard/types/BlackboardDefinitionShape.ts";
import { ConditionNode } from "../../behaviourTree/condition/Condition.ts";
import { ActionNode } from "../../behaviourTree/action/ActionDefinition.ts";
import { BlackboardDataValue } from "../../behaviourTree/dataValue/DataValue.ts";
import { randomAllowedValueType } from "./randomAllowedValueType.ts";

type AttachedToNode = ConditionNode | ActionNode | BlackboardDataValue;

export function randomDataValue(
  dataType: DataType,
  _paramName: string,
  _parent: AttachedToNode,
): unknown {
  const type = randomAllowedValueType(dataType);

  if (type === "LITERAL") {
    return {
      nodeType: "dataValue",
      type: "LITERAL",
      dataType,
      value: dataTypes[dataType].defaultValue,
    };
  }

  if (type === "BLACKBOARD") {
    const candidateBlackboardKeys = (Object.entries(blackboardDefinition) as [string, BlackboardValueDefinition][])
      .filter(([_, def]) => def.dataType === dataType)
      .map(([key]) => key);

    const key = randomArray(candidateBlackboardKeys);
    const keyDef = blackboardDefinition[key as keyof typeof blackboardDefinition] as BlackboardValueDefinition;

    const node = {
      nodeType: "dataValue",
      type: "BLACKBOARD",
      dataType,
      blackboardKey: key,
      params: {},
    } as AttachedToNode;

    const params: Record<string, unknown> = {};
    for (const [paramKey, paramDef] of Object.entries(keyDef.params)) {
      params[paramKey] = randomDataValue(paramDef.dataType, paramKey, node);
    }

    node.params = params;
    return node;
  }

  throw new Error();
}

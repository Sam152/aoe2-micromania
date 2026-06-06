import { DataType } from "../../behaviourTree/dataType/dataTypes.ts";
import { blackboardDefinition } from "../../behaviourTree/blackboard/blackboardDefinition.ts";
import { randomArray } from "../../../util/randomArray.ts";
import { BlackboardValueDefinition } from "../../behaviourTree/blackboard/types/BlackboardDefinitionShape.ts";
import { ConditionNode } from "../../behaviourTree/condition/Condition.ts";
import { ActionNode } from "../../behaviourTree/action/ActionDefinition.ts";
import { BlackboardDataValue } from "../../behaviourTree/dataValue/DataValue.ts";
import { randomAllowedValueType } from "./randomAllowedValueType.ts";
import { randomLiteral } from "./randomLiteral.ts";

type AttachedToNode = ConditionNode | ActionNode | BlackboardDataValue;

export function randomDataValue(
  dataType: DataType,
  _paramName: string,
  _parent: AttachedToNode,
  forceLiteral?: boolean,
): unknown {
  const type = randomAllowedValueType(dataType);

  if (type === "LITERAL" || forceLiteral) {
    return {
      nodeType: "dataValue",
      type: "LITERAL",
      dataType,
      value: randomLiteral(dataType),
    };
  }

  if (type === "BLACKBOARD") {
    const candidateBlackboardKeys = (Object.entries(blackboardDefinition) as [string, BlackboardValueDefinition][])
      .filter(([_, def]) => def.dataType === dataType)
      .map(([key]) => key);

    if (candidateBlackboardKeys.length === 0) {
      return randomDataValue(dataType, _paramName, _parent, true);
    }

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

import { DataType, dataTypes } from "../../behaviourTree/dataType/dataTypes.ts";
import { blackboardDefinition, BlackboardValue } from "../../behaviourTree/blackboard/blackboardDefinition.ts";
import { randomArray } from "../../../util/randomArray.ts";
import { ConditionNode } from "../../behaviourTree/condition/Condition.ts";
import { ActionDefinitionParam, ActionNode } from "../../behaviourTree/action/ActionDefinition.ts";
import { BlackboardDataValue } from "../../behaviourTree/dataValue/DataValue.ts";
import { randomLiteral } from "./randomLiteral.ts";
import { actionsList } from "../../behaviourTree/action/actionsList.ts";
import { conditionList } from "../../behaviourTree/condition/conditionList.ts";
import { ConditionDefinitionParam } from "../../behaviourTree/condition/ConditionDefinition.ts";

type AttachedToNode = ConditionNode | ActionNode | BlackboardDataValue;

export function randomDataValue(
  dataType: DataType,
  paramName: string,
  parent: AttachedToNode,
  forceLiteral?: boolean,
): unknown {
  let allowedDataTypes = new Set(dataTypes[dataType].allowedValueTypes);

  // If the type of node we're getting params for is an action, we can narrow the allowedDataTypes,
  // by the action param definitions, to exclude silliness like patrolling to a fixed literal value
  // somewhere, which is highly unlikely to generalize.
  if (parent.nodeType === "action") {
    const actionDef = actionsList[parent.type];
    const paramDef = actionDef.params[paramName as keyof typeof actionDef.params] as ActionDefinitionParam<any>;

    allowedDataTypes = allowedDataTypes.intersection(new Set(paramDef.allowedValueTypes));
  }

  if (parent.nodeType === "condition") {
    const conditionDef = conditionList[parent.type];
    const paramDef = conditionDef.params[paramName as keyof typeof conditionDef.params] as ConditionDefinitionParam<
      any
    >;

    allowedDataTypes = allowedDataTypes.intersection(new Set(paramDef.allowedValueTypes));
  }

  const type = randomArray([...allowedDataTypes]);

  if (type === "LITERAL" || forceLiteral) {
    return {
      nodeType: "dataValue",
      type: "LITERAL",
      dataType,
      value: randomLiteral(dataType),
    };
  }

  if (type === "BLACKBOARD") {
    const candidateBlackboardKeys = (Object.entries(blackboardDefinition) as [string, BlackboardValue][])
      .filter(([_, def]) => def.dataType === dataType)
      .map(([key]) => key);

    if (candidateBlackboardKeys.length === 0) {
      return randomDataValue(dataType, paramName, parent, true);
    }

    const key = randomArray(candidateBlackboardKeys);
    const keyDef = blackboardDefinition[key as keyof typeof blackboardDefinition] as BlackboardValue;

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

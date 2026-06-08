import { BehaviourTreeNode, BehaviourTreeNodeType } from "../../behaviourTree/BehaviourTree.ts";
import { randomArray } from "../../../util/randomArray.ts";
import { conditionList, ConditionType } from "../../behaviourTree/condition/conditionList.ts";
import { actionsList } from "../../behaviourTree/action/actionsList.ts";
import { DataType } from "../../behaviourTree/dataType/dataTypes.ts";
import { randomDataValue } from "./randomDataValue.ts";
import { ConditionNode } from "../../behaviourTree/condition/Condition.ts";
import { ActionNode } from "../../behaviourTree/action/ActionDefinition.ts";
import { UnitType } from "../../../units/UnitType.ts";

export function randomNode(unitType: UnitType, type: BehaviourTreeNodeType): BehaviourTreeNode {
  if (type === "sequence") {
    return { nodeType: "sequence", nodes: [] };
  }

  if (type === "selector") {
    return { nodeType: "selector", nodes: [] };
  }

  if (type === "condition") {
    const conditionType = randomArray(Object.keys(conditionList) as ConditionType[]);
    const conditionDef = conditionList[conditionType];

    const condition: ConditionNode = {
      nodeType: "condition",
      type: conditionType,
      invert: Math.random() < 0.5,
      params: {},
    } as ConditionNode;

    const params: Record<string, unknown> = {};
    for (const [key, paramDef] of Object.entries(conditionDef.params)) {
      params[key] = randomDataValue(paramDef.dataType as DataType, key, condition);
    }

    condition.params = params as typeof condition["params"];
    return condition;
  }

  if (type === "action") {
    const actionType = randomArray(
      (Object.keys(actionsList) as Array<keyof typeof actionsList>).filter((key) =>
        actionsList[key].applicableForUnitType.includes(unitType)
      ),
    );
    const actionDef = actionsList[actionType];

    const action: ActionNode = {
      nodeType: "action",
      type: actionType,
      params: {},
    } as ActionNode;

    const params: Record<string, unknown> = {};
    for (const [key, paramDef] of Object.entries(actionDef.params)) {
      params[key] = randomDataValue(paramDef.dataType as DataType, key, action);
    }
    action.params = params;
    return action;
  }

  throw new Error();
}

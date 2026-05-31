import { ConditionList, ConditionType } from "./conditionList.ts";
import { DataValueOfType } from "../dataValue/DataValue.ts";

import { DataType } from "../dataType/dataTypes.ts";

export type ConditionNode = { [TConditionType in ConditionType]: ConditionOfType<TConditionType> }[ConditionType];

export type ConditionOfType<TConditionType extends ConditionType> = {
  nodeType: "condition";
  type: TConditionType;
  params: {
    [TKey in keyof ConditionList[TConditionType]["params"]]: ConditionList[TConditionType]["params"][TKey] extends
      { dataType: infer D extends DataType } ? DataValueOfType<D> : never;
  };
};

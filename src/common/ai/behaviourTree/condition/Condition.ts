import { ComparatorOptionsFromDataType, TypeFromDataType } from "../dataType/dataTypes.ts";
import { BlackboardDefinition } from "../blackboard/blackboardDefinition.ts";

export type Condition<TBlackBoardKey extends keyof BlackboardDefinition = keyof BlackboardDefinition> = {
  nodeType: "condition";
  propertyName: TBlackBoardKey;
  comparatorType: ComparatorOptionsFromDataType<BlackboardDefinition[TBlackBoardKey]["dataType"]>;
  value: TypeFromDataType<BlackboardDefinition[TBlackBoardKey]["dataType"]>;
};

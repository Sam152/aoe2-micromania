import { ComparatorOptionsFromDataType, DataTypeFromBlackboardValue, TypeFromDataType } from "../dataType/dataTypes.ts";
import { Blackboard } from "../blackboard/blackboard.ts";

export type Condition<TBlackBoardKey extends keyof Blackboard = keyof Blackboard> = {
  nodeType: "condition";
  propertyName: TBlackBoardKey;
  comparatorType: ComparatorOptionsFromDataType<DataTypeFromBlackboardValue<Blackboard[TBlackBoardKey]>>;
  value: TypeFromDataType<DataTypeFromBlackboardValue<Blackboard[TBlackBoardKey]>>;
};

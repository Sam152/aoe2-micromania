import { ComparatorOptionsFromDataType, DataType } from "../dataType/dataTypes.ts";
import { DataValueOfType } from "../dataValue/DataValue.ts";

export type Condition = { [TDataType in DataType]: ConditionOfType<TDataType> }[DataType];

export type ConditionOfType<TDataType extends DataType> = {
  nodeType: "condition";
  dataType: TDataType;
  comparatorType: ComparatorOptionsFromDataType<TDataType>;
  leftValue: DataValueOfType<TDataType>;
  rightValue: DataValueOfType<TDataType>;
};

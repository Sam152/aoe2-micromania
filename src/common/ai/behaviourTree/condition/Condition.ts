import { ComparatorOptionsFromDataType, DataType } from "../dataType/dataTypes.ts";
import { DataValueOfType } from "../dataValue/DataValue.ts";

export type Condition<TDataType extends DataType = DataType> = {
  nodeType: "condition";
  dataType: TDataType;
  comparatorType: ComparatorOptionsFromDataType<TDataType>;
  leftValue: DataValueOfType<TDataType>;
  rightValue: DataValueOfType<TDataType>;
};

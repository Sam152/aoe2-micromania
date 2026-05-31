import { ComparatorOptionsFromDataType, DataType } from "../dataType/dataTypes.ts";
import { DataValueOfType } from "../dataValue/DataValue.ts";

export type Condition<TDataType extends DataType> = {
  nodeType: "condition";
  comparatorType: ComparatorOptionsFromDataType<TDataType>;
  aValue: DataValueOfType<TDataType>;
  bValue: DataValueOfType<TDataType>;
};

import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";

export type BlackboardValue<TDataType extends DataType> = TypeFromDataType<
  TDataType
>;

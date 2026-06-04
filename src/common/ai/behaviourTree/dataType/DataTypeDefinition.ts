import { DataValueType } from "../dataValue/DataValue.ts";

/**
 * TDataType requires use in the body of this type for inference elsewhere
 * to work.
 */
export type DataTypeDefinition<TDataType> = {
  allowedValueTypes: DataValueType[];
  defaultValue: TDataType;
};

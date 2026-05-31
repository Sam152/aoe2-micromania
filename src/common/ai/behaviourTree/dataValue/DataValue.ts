import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";
import { BlackboardDefinition, BlackboardKeys } from "../blackboard/blackboardDefinition.ts";

export type DataValue =
  | { [TKey in DataType]: PrimitiveDataValue<TKey> }[DataType]
  | { [TKey in BlackboardKeys]: BlackboardDataValue<TKey> }[BlackboardKeys];

export type DataValueOfType<TType extends DataType> = Extract<DataValue, { type: TType }>;

export type PrimitiveDataValue<TDataType extends DataType> = {
  nodeType: "dataValue";
  type: "PRIMITIVE";
  dataType: TDataType;
  value: TypeFromDataType<TDataType>;
};

export type BlackboardDataValue<TBlackboardKey extends BlackboardKeys> = {
  nodeType: "dataValue";
  type: "BLACKBOARD";
  dataType: BlackboardDefinition[TBlackboardKey]["dataType"];
  blackboardKey: TBlackboardKey;
  paramValues: {
    [TKey in keyof BlackboardDefinition[TBlackboardKey]["params"]]: DataValueOfType<
      BlackboardDefinition[TBlackboardKey]["params"][TKey]["dataType"]
    >;
  };
};

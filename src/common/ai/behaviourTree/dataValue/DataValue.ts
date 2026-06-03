import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";
import { BlackboardDefinition, BlackboardKey } from "../blackboard/blackboardDefinition.ts";

export type DataValueType = "LITERAL" | "BLACKBOARD";

export type DataValue =
  | { [TKey in DataType]: PrimitiveDataValue<TKey> }[DataType]
  | { [TKey in BlackboardKey]: BlackboardDataValue<TKey> }[BlackboardKey];

export type DataValueOfType<TType extends DataType> = Extract<DataValue, { dataType: TType }>;

export type PrimitiveDataValue<TDataType extends DataType> = {
  nodeType: "dataValue";
  type: "LITERAL";
  dataType: TDataType;
  value: TypeFromDataType<TDataType>;
};

export type BlackboardDataValue<TBlackboardKey extends BlackboardKey> = {
  nodeType: "dataValue";
  type: "BLACKBOARD";
  dataType: BlackboardDefinition[TBlackboardKey]["dataType"];
  blackboardKey: TBlackboardKey;
  params: {
    [TKey in keyof BlackboardDefinition[TBlackboardKey]["params"]]:
      BlackboardDefinition[TBlackboardKey]["params"][TKey] extends { dataType: infer D extends DataType }
        ? DataValueOfType<D>
        : never;
  };
};

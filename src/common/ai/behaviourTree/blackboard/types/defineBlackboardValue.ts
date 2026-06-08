import { DataType } from "../../dataType/dataTypes.ts";
import { BlackboardValueDefinition, BlackboardValueParam } from "./BlackboardDefinitionShape.ts";

export function defineBlackboardValue<
  TDataType extends DataType,
  TParams extends Record<string, { [K in DataType]: BlackboardValueParam<K> }[DataType]>,
>(definition: BlackboardValueDefinition<TDataType, TParams>): BlackboardValueDefinition<TDataType, TParams> {
  return definition;
}

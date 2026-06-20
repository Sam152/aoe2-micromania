import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";
import { ActionsList } from "./actionsList.ts";
import { GameState, GameStateAction } from "../../../../types.ts";
import { BotState, BotUnitGroup } from "../../integration/createBot.ts";
import { DataValueOfType, DataValueType } from "../dataValue/DataValue.ts";
import { UnitType } from "../../../units/UnitType.ts";

export type ActionDefinition<
  TParams extends Record<string, { [K in DataType]: ActionDefinitionParam<K> }[DataType]> = Record<
    string,
    { [K in DataType]: ActionDefinitionParam<K> }[DataType]
  >,
> = {
  type: string;
  params: TParams;
  applicableForUnitType: UnitType[];
  execute: (
    params: { [TKey in keyof TParams]: TypeFromDataType<TParams[TKey]["dataType"]> },
    meta: { state: GameState; botState: BotState; group: BotUnitGroup },
  ) => GameStateAction | undefined;
};

type ActionDefinitionParam<TDataType extends DataType> = {
  dataType: TDataType;
  allowedValueTypes: DataValueType[];
};

/**
 * Definition helper.
 */
export function defineAction<
  const TParams extends Record<string, { [K in DataType]: ActionDefinitionParam<K> }[DataType]>,
>(definition: ActionDefinition<TParams>): ActionDefinition<TParams> {
  return definition;
}

export type ActionNode<TType extends keyof ActionsList = keyof ActionsList> = TType extends keyof ActionsList ? {
    nodeType: "action";
    type: TType;
    params: {
      [TKey in keyof ActionsList[TType]["params"]]: ActionsList[TType]["params"][TKey] extends
        { dataType: infer D extends DataType } ? DataValueOfType<D>
        : never;
    };
  }
  : never;

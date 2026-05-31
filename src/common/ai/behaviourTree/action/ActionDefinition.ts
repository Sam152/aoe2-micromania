import { DataType, MutationRequirementsFromDataType, TypeFromDataType } from "../dataType/dataTypes.ts";
import { ActionsList } from "./actionsList.ts";
import { GameState, GameStateAction, UnitId } from "../../../../types.ts";
import { BotState } from "../../integration/createBot.ts";
import { DataValueOfType } from "../dataValue/DataValue.ts";

export type ActionDefinition<
  TParams extends Record<string, { [K in DataType]: ActionDefinitionParam<K> }[DataType]> = Record<
    string,
    { [K in DataType]: ActionDefinitionParam<K> }[DataType]
  >,
> = {
  type: string;
  params: TParams;
  execute: (
    params: { [TKey in keyof TParams]: TypeFromDataType<TParams[TKey]["dataType"]> },
    gameState: GameState,
    botState: BotState,
    unitIds: UnitId[],
  ) => GameStateAction | undefined;
};

type ActionDefinitionParam<TDataType extends DataType> = {
  dataType: TDataType;
  mutationRequirements: MutationRequirementsFromDataType<TDataType>;
};

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

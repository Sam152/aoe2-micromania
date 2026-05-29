import { patrol } from "./patrol.ts";
import { idle } from "./idle.ts";
import { DataType, MutationRequirementsFromDataType, TypeFromDataType } from "../dataType/dataTypes.ts";

type ActionDefinitionParam<TDataType extends DataType> = {
  dataType: TDataType;
  mutationRequirements: MutationRequirementsFromDataType<TDataType>;
};

export type ActionDefinition<
  TParams extends Record<string, { [K in DataType]: ActionDefinitionParam<K> }[DataType]> = Record<
    string,
    { [K in DataType]: ActionDefinitionParam<K> }[DataType]
  >,
> = {
  type: string;
  params: TParams;
  execute: (input: { [TKey in keyof TParams]: TypeFromDataType<TParams[TKey]["dataType"]> }) => void;
};

export const actionsList = {
  PATROL: patrol,
  IDLE: idle,
} as const satisfies Record<string, ActionDefinition>;

export type ActionsList = typeof actionsList;

export type ActionNode<TType extends keyof ActionsList = keyof ActionsList> = TType extends keyof ActionsList ? {
    nodeType: "action";
    type: TType;
    params: {
      [TKey in keyof ActionsList[TType]["params"]]: ActionsList[TType]["params"][TKey] extends DataType
        ? TypeFromDataType<ActionsList[TType]["params"][TKey]>
        : never;
    };
  }
  : never;

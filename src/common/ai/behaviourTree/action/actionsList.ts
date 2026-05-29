import { patrol } from "./patrol.ts";
import { idle } from "./idle.ts";
import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";

export type ActionDefinition<TParams extends Record<string, DataType> = Record<string, DataType>> = {
  type: string;
  params: TParams;
  execute: (input: { [TKey in keyof TParams]: TypeFromDataType<TParams[TKey]> }) => void;
};

export const actionsList = {
  PATROL: patrol,
  IDLE: idle,
} as const satisfies Record<string, ActionDefinition>;

export type ActionsList = typeof actionsList;

export type Action<TType extends keyof ActionsList = keyof ActionsList> = TType extends keyof ActionsList ? {
    nodeType: "action";
    type: TType;
    params: {
      [TKey in keyof ActionsList[TType]["params"]]: ActionsList[TType]["params"][TKey] extends DataType
        ? TypeFromDataType<ActionsList[TType]["params"][TKey]>
        : never;
    };
  }
  : never;

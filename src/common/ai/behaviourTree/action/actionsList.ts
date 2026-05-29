import { patrol } from "./patrol.ts";

import { idle } from "./idle.ts";
import { TypeFromDataType } from "../dataType/dataTypes.ts";

export const actionsList = {
  PATROL: patrol,
  IDLE: idle,
} as const;

export type ActionsList = typeof actionsList;

export type Action<TType extends keyof ActionsList = keyof ActionsList> = {
  nodeType: "action";
  type: keyof ActionsList;
  params: {
    [TKey in keyof ActionsList[TType]["params"]]: TypeFromDataType<
      // @ts-ignore
      ActionsList[TType]["params"][TKey]
    >;
  };
};

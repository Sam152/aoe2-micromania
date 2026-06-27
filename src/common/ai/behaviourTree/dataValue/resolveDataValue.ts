import { DataValue } from "./DataValue.ts";
import { GameState } from "../../../../types.ts";
import { BotState, BotUnitGroup } from "../../integration/createBot.ts";
import { TypeFromDataType } from "../dataType/dataTypes.ts";
import { BlackboardComputer } from "../blackboard/utils/createCachedBlackboardComputer.ts";

type ResolveContext = {
  state: GameState;
  botState: BotState;
  group: BotUnitGroup;
  blackboardComputer: BlackboardComputer;
};

type ResolveDataValueArgs = ResolveContext & {
  dataValue: DataValue;
};

export function resolveDataValueToPrimitive(
  { dataValue, ...context }: ResolveDataValueArgs,
) {
  if (dataValue.type === "LITERAL") {
    return dataValue.value;
  }

  if (dataValue.type === "BLACKBOARD") {
    const resolvedParams = resolveParamDataValues(dataValue.params, context);
    if (resolvedParams === undefined) {
      return undefined;
    }
    const computer = context.blackboardComputer[dataValue.blackboardKey];
    return computer({ ...context, params: resolvedParams as any });
  }

  throw new Error(`Error resolving: ${JSON.stringify(dataValue)}`);
}

type ResolvedParams<TParams extends Record<string, DataValue>> = {
  [TKey in keyof TParams]: TypeFromDataType<TParams[TKey]["dataType"]>;
};

export function resolveParamDataValues<TParams extends Record<string, DataValue>>(
  params: TParams,
  context: ResolveContext,
): ResolvedParams<TParams> | undefined {
  const entries = Object.entries(params);
  const resolved: Record<string, unknown> = {};
  for (const [paramName, paramDataValue] of entries) {
    const value = resolveDataValueToPrimitive({ dataValue: paramDataValue, ...context });
    if (value === undefined) {
      return undefined;
    }
    resolved[paramName] = value;
  }
  return resolved as ResolvedParams<TParams>;
}

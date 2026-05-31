import { DataValue } from "./DataValue.ts";
import { GameState } from "../../../../types.ts";
import { BotState, BotUnitGroup } from "../../integration/createBot.ts";
import { BlackboardComputer } from "../blackboard/computeBlackboard.ts";
import { TypeFromDataType } from "../dataType/dataTypes.ts";

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
  if (dataValue.type === "PRIMITIVE") {
    return dataValue.value;
  }

  if (dataValue.type === "BLACKBOARD") {
    const resolvedParams = resolveParamDataValues(dataValue.params, context);
    const computer = context.blackboardComputer[dataValue.blackboardKey];
    return computer({ ...context, params: resolvedParams as any });
  }

  throw new Error();
}

type ResolvedParams<TParams extends Record<string, DataValue>> = {
  [TKey in keyof TParams]: TypeFromDataType<TParams[TKey]["dataType"]>;
};

export function resolveParamDataValues<TParams extends Record<string, DataValue>>(
  params: TParams,
  context: ResolveContext,
): ResolvedParams<TParams> {
  return Object.entries(params).reduce(
    (resolved, [paramName, paramDataValue]) => {
      resolved[paramName] = resolveDataValueToPrimitive({ dataValue: paramDataValue, ...context });
      return resolved;
    },
    {} as Record<string, unknown>,
  ) as ResolvedParams<TParams>;
}

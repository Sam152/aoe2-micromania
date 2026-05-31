import { DataValue } from "./DataValue.ts";
import { GameState } from "../../../../types.ts";
import { BotState, BotUnitGroup } from "../../integration/createBot.ts";
import { BlackboardComputer } from "../blackboard/computeBlackboard.ts";

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

export function resolveParamDataValues(
  params: Record<string, DataValue>,
  context: ResolveContext,
): Record<string, unknown> {
  return Object.entries(params).reduce<Record<string, unknown>>(
    (resolved, [paramName, paramDataValue]) => {
      resolved[paramName] = resolveDataValueToPrimitive({ dataValue: paramDataValue, ...context });
      return resolved;
    },
    {},
  );
}

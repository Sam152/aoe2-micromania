import { DataValue } from "./DataValue.ts";
import { GameState } from "../../../../types.ts";
import { BotState, BotUnitGroup } from "../../integration/createBot.ts";
import { BlackboardComputer } from "../blackboard/computeBlackboard.ts";

type ResolveDataValueArgs = {
  dataValue: DataValue;
  state: GameState;
  botState: BotState;
  group: BotUnitGroup;
  blackboardComputer: BlackboardComputer;
};

export function resolveDataValueToPrimitive(
  { dataValue, group, botState, state, blackboardComputer }: ResolveDataValueArgs,
) {
  if (dataValue.type === "PRIMITIVE") {
    return dataValue.value;
  }

  if (dataValue.type === "BLACKBOARD") {
    const resolvedParams = Object.entries(dataValue.paramValues).reduce<Record<string, unknown>>(
      (resolved, [paramName, paramDataValue]) => {
        resolved[paramName] = resolveDataValueToPrimitive({
          dataValue: paramDataValue,
          group,
          botState,
          state,
          blackboardComputer,
        });
        return resolved;
      },
      {},
    );
    const computer = blackboardComputer[dataValue.blackboardKey];
    return computer({ state, botState, group, params: resolvedParams as any });
  }

  throw new Error();
}

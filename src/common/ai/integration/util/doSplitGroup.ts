import { BotState, BotUnitGroup } from "../createBot.ts";
import { GameState } from "../../../../types.ts";

export function doSplitGroup(
  { group, botState, state }: {
    group: BotUnitGroup;
    botState: Pick<BotState, "unitGroups">;
    state: Pick<GameState, "ticks">;
  },
) {
  if (group.includedUnits.length < 2) {
    return;
  }

  const halfWay = Math.floor(group.includedUnits.length / 2);
  const groupOne = group.includedUnits.slice(0, halfWay);
  const groupTwo = group.includedUnits.slice(halfWay);

  botState.unitGroups.push({
    unitType: group.unitType,
    includedUnits: groupOne,
    actionQueue: [
      {
        action: {
          type: "IDLE",
          actionNode: {
            nodeType: "action",
            type: "IDLE",
            params: { forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 1 } },
          },
          resolvedParams: { forTicksAmount: 1 },
        },
        executeAfterTick: state.ticks + 1,
      },
    ],
  });
  botState.unitGroups.push({
    unitType: group.unitType,
    includedUnits: groupTwo,
    actionQueue: [
      {
        action: {
          type: "IDLE",
          actionNode: {
            nodeType: "action",
            type: "IDLE",
            params: { forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 1 } },
          },
          resolvedParams: { forTicksAmount: 1 },
        },
        executeAfterTick: state.ticks + 1,
      },
    ],
  });

  group.includedUnits = [];
}

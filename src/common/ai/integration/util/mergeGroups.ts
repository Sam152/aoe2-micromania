import { BotState, BotUnitGroup } from "../createBot.ts";
import { GameState } from "../../../../types.ts";

export function mergeGroups(
  { group, botState, state }: {
    group: BotUnitGroup;
    botState: Pick<BotState, "unitGroups">;
    state: Pick<GameState, "ticks">;
  },
) {
  const groupsOfType = botState.unitGroups.filter((candidate) => candidate.unitType === group.unitType);
  if (groupsOfType.length < 2) {
    return;
  }

  const newGroup: BotUnitGroup = {
    unitType: group.unitType,
    includedUnits: groupsOfType.flatMap((groupOfType) => groupOfType.includedUnits),
    actionQueue: [
      {
        action: {
          type: "IDLE",
          actionNode: {
            nodeType: "action",
            type: "IDLE",
            params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "LITERAL", value: 1 } },
          },
          resolvedParams: { forTicksAmount: 1 },
        },
        executeAfterTick: state.ticks + 1,
      },
    ],
  };

  groupsOfType.forEach((groupOfType) => {
    groupOfType.includedUnits = [];
  });

  botState.unitGroups.push(newGroup);
}

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
      ...group.actionQueue,
    ],
  });
  botState.unitGroups.push({
    unitType: group.unitType,
    includedUnits: groupTwo,
    actionQueue: [
      // Should we maintain the queue of actions, after a split?
      ...group.actionQueue,
    ],
  });

  group.includedUnits = [];
}

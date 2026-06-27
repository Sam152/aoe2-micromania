import { BotState, BotUnitGroup } from "../createBot.ts";
import { GameState } from "../../../../types.ts";
import { GroupSize } from "../../behaviourTree/dataType/catalog/groupSize.ts";

export function doSplitGroup(
  { group, botState, splitGroupInto }: {
    group: BotUnitGroup;
    botState: Pick<BotState, "unitGroups">;
    state: Pick<GameState, "ticks">;
    splitGroupInto: GroupSize;
  },
) {
  if (group.includedUnits.length < 2) {
    return;
  }

  const pivot = splitGroupInto === "HALF" ? Math.floor(group.includedUnits.length / 2) : 1;
  const groupOne = group.includedUnits.slice(0, pivot);
  const groupTwo = group.includedUnits.slice(pivot);

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

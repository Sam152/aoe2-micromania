import { averageVectorOrUndefined } from "../../../util/averageVector.ts";
import { ComputedTickState } from "../../../state/computed/createComputedTickState.ts";
import { groupAveragePosition } from "./utils/groupAveragePosition.ts";
import { closestExcludingPlayer } from "../../../util/closestExcludingPlayer.ts";
import { BlackboardComputer } from "./types/BlackboardComputer.ts";

export function createBlackboardComputer({ computed }: { computed: ComputedTickState }): BlackboardComputer {
  return {
    groupMetaUnitTypeGroupCount: ({ botState, group }) => {
      return Object.values(botState.unitGroups).filter((botGroup) => botGroup.unitType === group.unitType).length;
    },
    groupMetaUnitTypeIndex: ({ botState, group }) =>
      Object.values(botState.unitGroups)
        .filter((arrGroup) => arrGroup.unitType === group.unitType)
        .findIndex((arrGroup) => arrGroup === group),
    groupUnitCount: ({ group }) => group.includedUnits.length,
    globalUnitsOfTypeCount: ({ state, botState }) =>
      state.units.filter((unit) => unit.ownedByPlayer === botState.playingAs).length,
    opponentAveragePosition: ({ state, botState }) => {
      return averageVectorOrUndefined(
        state.units.filter((unit) => unit.ownedByPlayer !== botState.playingAs).map((unit) => unit.position),
      );
    },
    opponentClosestMonk: ({ group, botState }) =>
      // Re: undefined, allow all data values to resolve undefined. When computing the behaviour tree,
      // turn any undefined data into a "fail" of that node.
      closestExcludingPlayer({
        playerQuadTrees: computed.monkQuadTreesByPlayer(),
        position: groupAveragePosition({ group, computed }),
        excludingPlayer: botState.playingAs,
      })?.id,
    opponentClosestArcher: () => 1,
    opponentClosestMango: () => 1,
  };
}

import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { closestExcludingPlayer } from "../../../../util/closestExcludingPlayer.ts";
import { groupAveragePosition } from "../utils/groupAveragePosition.ts";

export const opponentClosestUnitByType = defineBlackboardValue({
  dataType: "unitId",
  params: {
    unitType: {
      dataType: "unitType",
      default: "ARCHER",
    },
  },
  resolve: ({ params, group, botState, computed }) =>
    closestExcludingPlayer({
      playerQuadTrees: {
        "ARCHER": () => computed.archerQuadTreesByPlayer(),
        "MONK": () => computed.monkQuadTreesByPlayer(),
        "MANGO": () => computed.mangoQuadTreesByPlayer(),
      }[params.unitType](),
      position: groupAveragePosition({ group, computed }),
      excludingPlayer: botState.playingAs,
    })?.id,
});

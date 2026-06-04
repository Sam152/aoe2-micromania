import { averageVectorOrUndefined } from "../../../util/averageVector.ts";
import { ComputedTickState } from "../../../state/computed/createComputedTickState.ts";
import { groupAveragePosition } from "./utils/groupAveragePosition.ts";
import { closestExcludingPlayer } from "../../../util/closestExcludingPlayer.ts";
import { BlackboardComputer } from "./types/BlackboardComputer.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { degToRad } from "three/src/math/MathUtils.js";
import { vectorToPrimitive } from "./utils/vectorToPrimitive.ts";
import { unitIsType } from "./utils/unitIsType.ts";

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
    groupAveragePosition: ({ group }) => groupAveragePosition({ group, computed }),
    opponentAveragePosition: ({ state, botState }) =>
      averageVectorOrUndefined(
        state.units.filter((unit) => unit.ownedByPlayer !== botState.playingAs).map((unit) => unit.position),
      ),
    opponentAverageUnitPositionByType: ({ params, group, state, botState }) =>
      averageVectorOrUndefined(
        state.units.filter((unit) => unit.ownedByPlayer !== botState.playingAs && unitIsType(unit, params.unitType))
          .map((unit) => unit.position),
      ),
    opponentClosestUnitByType: ({ params, group, botState }) =>
      closestExcludingPlayer({
        playerQuadTrees: {
          "ARCHER": () => computed.archerQuadTreesByPlayer(),
          "MONK": () => computed.monkQuadTreesByPlayer(),
          "MANGO": () => computed.mangoQuadTreesByPlayer(),
        }[params.unitType](),
        position: groupAveragePosition({ group, computed }),
        excludingPlayer: botState.playingAs,
      })?.id,

    groupUnitVectorFacingDirection: ({ params, group }) => {
      const groupPosition = groupAveragePosition({ group, computed });
      if (!groupPosition) {
        return undefined;
      }
      return vectorToPrimitive(
        new Vector2(params.direction.x, params.direction.y).sub(groupPosition).rotateAround({
          x: 0,
          y: 0,
        }, degToRad(params.angle))
          .normalize()
          .multiplyScalar(params.magnitude)
          .add(groupPosition),
      );
    },
  };
}

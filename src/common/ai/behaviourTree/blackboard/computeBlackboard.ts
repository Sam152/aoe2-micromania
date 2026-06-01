import { GameState } from "../../../../types.ts";
import { BlackboardDefinition, BlackboardKey } from "./blackboardDefinition.ts";

import { BotState, BotUnitGroup } from "../../integration/createBot.ts";
import { DataType, TypeFromDataType } from "../dataType/dataTypes.ts";
import { averageVector } from "../../../util/averageVector.ts";
import { ComputedTickState } from "../../../state/computed/createComputedTickState.ts";
import { groupAveragePosition } from "./utils/groupAveragePosition.ts";
import { closestExcludingPlayer } from "../../../util/closestExcludingPlayer.ts";

type BlackboardValueResolverParams<TBlackboardKey extends BlackboardKey> = {
  state: GameState;
  botState: BotState;
  group: BotUnitGroup;
  params: {
    [TKey in keyof BlackboardDefinition[TBlackboardKey]["params"]]:
      BlackboardDefinition[TBlackboardKey]["params"][TKey] extends { dataType: infer D extends DataType }
        ? TypeFromDataType<D>
        : never;
  };
};

type BlackboardValueResolver<TDataType extends DataType, TBlackboardKey extends BlackboardKey> = (
  params: BlackboardValueResolverParams<TBlackboardKey>,
) => TypeFromDataType<TDataType>;

export type BlackboardComputer = {
  [TKey in BlackboardKey]: BlackboardValueResolver<BlackboardDefinition[TKey]["dataType"], TKey>;
};

export function createBlackboardComputer({ computed }: { computed: ComputedTickState }): BlackboardComputer {
  return {
    groupsForUnitTypeCount: ({ botState, group }) => {
      return Object.values(botState.unitGroups).filter((botGroup) => botGroup.unitType === group.unitType).length;
    },
    unitTypeGroupIndex: ({ botState, group }) =>
      Object.values(botState.unitGroups)
        .filter((arrGroup) => arrGroup.unitType === group.unitType)
        .findIndex((arrGroup) => arrGroup === group),
    unitsInGroupCount: ({ group }) => group.includedUnits.length,
    unitsOfTypeGlobalCount: ({ state, botState }) =>
      state.units.filter((unit) => unit.ownedByPlayer === botState.playingAs).length,
    opponentAveragePosition: ({ state, botState }) => {
      return averageVector(
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

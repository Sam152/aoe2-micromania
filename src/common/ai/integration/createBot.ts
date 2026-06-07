import { GameDispatcher, GameState, UnitId } from "../../../types.ts";
import { tickUnitGroupDecisions } from "./tickUnitGroupDecisions.ts";

import { ActionNode } from "../behaviourTree/action/ActionDefinition.ts";
import { UnitType } from "../../units/UnitType.ts";

import { createInitialUnitGroups } from "./util/createInitialUnitGroups.ts";
import { consolidateGroups } from "./util/consolidateGroups.ts";
import { ComputedTickState } from "../../state/computed/createComputedTickState.ts";
import { ActionNodeWithResolvedParams } from "../behaviourTree/evaluateTreeNode.ts";
import { UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";

export type BotInstance = {
  tick: (state: GameState, dispatcher: GameDispatcher, computed: ComputedTickState) => void;
  playerId: string;
  botState: BotState;
};

export type ActionQueue = {
  action: ActionNodeWithResolvedParams;
  executeAfterTick: number;
}[];

export type BotUnitGroup = {
  unitType: UnitType;
  actionQueue: ActionQueue;
  includedUnits: UnitId[];
};

export type UnitTypeActivations = Record<UnitType, Set<string>>;

export type BotState = {
  playingAs: number;
  playerId: string;
  lastActionType: ActionNode["type"];
  lastActionTick: number;
  isEligibleForDecision: boolean;
  unitGroups: BotUnitGroup[];
  activations: UnitTypeActivations;
};

export function createUnitTypeActivations(): UnitTypeActivations {
  return {
    [UnitType.Mangonel]: new Set<string>(),
    [UnitType.Monk]: new Set<string>(),
    [UnitType.Archer]: new Set<string>(),
  };
}

export function createBot(
  { playingAs, playerId, tree }: { playingAs: number; playerId: string; tree: UnitAwareBehaviourTree },
): BotInstance {
  const botState: BotState = {
    playerId,
    playingAs: playingAs,
    isEligibleForDecision: true,
    lastActionType: "IDLE",
    lastActionTick: 0,
    unitGroups: [],
    activations: createUnitTypeActivations(),
  };

  return {
    playerId,
    botState,
    tick: (state, dispatcher, computed) => {
      if (botState.unitGroups.length === 0) {
        createInitialUnitGroups(botState, state);
      }

      botState.unitGroups.forEach((group) => {
        tickUnitGroupDecisions({
          group,
          state,
          dispatcher,
          botState,
          computed,
          tree: tree[group.unitType],
          activations: botState.activations?.[group.unitType],
        });
      });

      // Delete any groups with no units actually alive.
      consolidateGroups(botState.unitGroups, state);
    },
  };
}

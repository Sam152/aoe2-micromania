import { GameDispatcher, GameState, UnitId } from "../../../types.ts";
import { tickUnitGroupDecisions } from "./tickUnitGroupDecisions.ts";

import { ActionNode } from "../behaviourTree/action/ActionDefinition.ts";
import { UnitType } from "../../units/UnitType.ts";

import { createInitialUnitGroups } from "./createInitialUnitGroups.ts";
import { consolidateGroups } from "./consolidateGroups.ts";

export type BotInstance = {
  tick: (state: GameState, dispatcher: GameDispatcher) => void;
  playerId: string;
};

export type ActionQueue = {
  action: ActionNode;
  executeAfterTick: number;
}[];

export type BotUnitGroup = {
  unitType: UnitType;
  actionQueue: ActionQueue;
  includedUnits: UnitId[];
};

export type BotState = {
  playingAs: number;
  playerId: string;
  lastActionType: ActionNode["type"];
  lastActionTick: number;
  isEligibleForDecision: boolean;
  unitGroups: BotUnitGroup[];
};

export function createBot({ playingAs, playerId }: { playingAs: number; playerId: string }): BotInstance {
  const botState: BotState = {
    playerId,
    playingAs: playingAs,
    isEligibleForDecision: true,
    lastActionType: "IDLE",
    lastActionTick: 0,
    unitGroups: [],
  };

  return {
    playerId,
    tick: (state, dispatcher) => {
      if (botState.unitGroups.length === 0) {
        createInitialUnitGroups(botState, state);
      }

      botState.unitGroups.forEach((group) => {
        tickUnitGroupDecisions({
          group,
          state,
          dispatcher,
          botState,
        });
      });

      // Delete any groups with no units actually alive.
      consolidateGroups(botState.unitGroups, state);
    },
  };
}

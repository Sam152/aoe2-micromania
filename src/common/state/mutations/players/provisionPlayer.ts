import { GameState } from "../../../../types";
import { spawnStartingUnits } from "./spawnStartingUnits";
import { ComputedFrameState } from "../../computed/createComputedFrameState";

export const MAX_PLAYERS_PER_SERVER = 4;

export default function provisionPlayer(state: GameState, playerId: string, computed: ComputedFrameState) {
  // If the client ID is already active, no need to provision them.
  if (state.activePlayers[playerId]) {
    return;
  }

  // If we reach the max size for the room, add them to the queue of players
  // wanting to play.
  if (Object.keys(state.activePlayers).length >= MAX_PLAYERS_PER_SERVER && !state.queuedPlayers.includes(playerId)) {
    state.queuedPlayers.push(playerId);
    return;
  }

  // Otherwise, spawn some units and 14.
  const newPlayerNumber = getPlayerNumber(state.activePlayers);
  state.activePlayers[playerId] = newPlayerNumber;
  spawnStartingUnits(state, newPlayerNumber, computed);
}

function getPlayerNumber(activePlayers: Record<string, number>): number {
  const usedNumbers = Object.values(activePlayers);
  for (let i = 1; i <= MAX_PLAYERS_PER_SERVER; i++) {
    if (!usedNumbers.includes(i)) {
      return i;
    }
  }
  throw new Error("Could not assign a player number");
}

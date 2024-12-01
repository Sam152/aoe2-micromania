import { GameState } from "../../../../types";
import { spawnStartingUnits } from "./spawnStartingUnits";

export default function provisionPlayer(state: GameState, playerId: string) {
  // If the client ID is already active, no need to provision them.
  if (state.activePlayers[playerId]) {
    return;
  }

  // If we reach the max size for the room, add them to the queue of players
  // wanting to play.
  if (Object.keys(state.activePlayers).length >= 8 && !state.queuedPlayers.includes(playerId)) {
    state.queuedPlayers.push(playerId);
    return;
  }

  // Otherwise, spawn some units and 14.
  const newPlayerNumber = getPlayerNumber(state.activePlayers);
  state.activePlayers[playerId] = newPlayerNumber;
  spawnStartingUnits(state, newPlayerNumber);
}

function getPlayerNumber(activePlayers: Record<string, number>): number {
  const usedNumbers = Object.values(activePlayers);
  for (let i = 1; i <= 8; i++) {
    if (!usedNumbers.includes(i)) {
      return i;
    }
  }
  throw new Error("Could not assign a player number");
}

import { GameState } from "../../../../types";
import registerUnitFallen from "../tick/registerUnitFallen";
import provisionPlayer from "./provisionPlayer";
import { ComputedFrameState } from "../../computed/createComputedFrameState";

export function deprovisionPlayer(state: GameState, playerId: string, computed: ComputedFrameState) {
  // If the player is actually playing, remove them as an active player and despawn their units.
  if (state.activePlayers[playerId]) {
    // Remove the disconnected player from the active player pool.
    const disconnectedPlayer = state.activePlayers[playerId];
    delete state.activePlayers[playerId];

    // Remove units from disconnected players.
    state.units
      .filter((unit) => unit.ownedByPlayer === disconnectedPlayer)
      .forEach((removed) => registerUnitFallen(state, removed));
  }

  // If they are in queue, remove them.
  if (state.queuedPlayers.includes(playerId)) {
    state.queuedPlayers = state.queuedPlayers.filter((playerId) => playerId !== playerId);
  }

  // Provision any queued players first.
  if (state.queuedPlayers.length > 0) {
    const nextInQueuePlayerId = state.queuedPlayers.shift();
    provisionPlayer(state, nextInQueuePlayerId, computed);
  }
}

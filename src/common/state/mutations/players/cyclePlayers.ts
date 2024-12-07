import { GameState } from "../../../../types";
import deprovisionPlayer from "./deprovisionPlayer";
import provisionPlayer from "./provisionPlayer";
import { ComputedFrameState } from "../../computed/createComputedFrameState";

export function cyclePlayers(state: GameState, computed: ComputedFrameState) {
  const activePlayers = Object.keys(state.activePlayers).length;
  if (activePlayers === 0) {
    return;
  }

  const checkPlayer = (state.ticks % activePlayers) + 1;

  console.log("Checking", checkPlayer);

  // If the player has no units, they are at the end of their turn.
  const unitsOwned = state.units.filter((unit) => unit.ownedByPlayer === checkPlayer).length;
  if (unitsOwned === 0) {
    const found = Object.entries(state.activePlayers).find((entry) => entry[1] === checkPlayer);
    if (!found) {
      return;
    }

    const playerId = found[0];
    deprovisionPlayer(state, playerId);

    // Provision any queued players first.
    if (state.queuedPlayers.length > 0) {
      const nextInQueuePlayerId = state.queuedPlayers.shift();
      provisionPlayer(state, nextInQueuePlayerId, computed);
    }

    // Then re-provision the player that just lost.
    provisionPlayer(state, playerId, computed);
  }
}

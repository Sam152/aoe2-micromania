import { GameState } from "../../../../types";
import deprovisionPlayer from "./deprovisionPlayer";
import provisionPlayer from "./provisionPlayer";

export function cyclePlayers(state: GameState) {
  const activePlayers = Object.keys(state.activePlayers).length;
  if (activePlayers === 0) {
    return;
  }

  const checkPlayer = (state.ticks % activePlayers) + 1;

  // If the player has no units, they are at the end of their turn.
  const unitsOwned = state.units.filter((unit) => unit.ownedByPlayer === checkPlayer).length;
  if (unitsOwned === 0) {
    const playerId = Object.entries(state.activePlayers).find((entry) => entry[1] === checkPlayer)[0];
    deprovisionPlayer(state, playerId);

    // Provision any queued players first.
    if (state.queuedPlayers.length > 0) {
      const nextInQueuePlayerId = state.queuedPlayers.shift();
      provisionPlayer(state, nextInQueuePlayerId);
    }

    // Then re-provision the player that just lost.
    provisionPlayer(state, playerId);
  }
}

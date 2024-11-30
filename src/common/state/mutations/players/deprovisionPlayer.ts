import {GameState, GameStateAction} from "../../../../types";
import registerUnitFallen from "../tick/registerUnitFallen";

export default function deprovisionPlayer(state: GameState, action: Extract<GameStateAction, {
    n: 'CLIENT_DISCONNECTED_WITH_ID'
}>) {
    // If the player is actually playing, remove them as an active player and despawn their units.
    if (state.activePlayers[action.playerId]) {
        // Remove the disconnected player from the active player pool.
        const disconnectedPlayer = state.activePlayers[action.playerId];
        delete state.activePlayers[action.playerId];

        // Remove units from disconnected players.
        state.units.filter(unit => unit.ownedByPlayer === disconnectedPlayer).forEach((removed) => registerUnitFallen(state, removed));
    }

    // If they are in queue, remove them.
    if (state.queuedPlayers.includes(action.playerId)) {
        state.queuedPlayers = state.queuedPlayers.filter(playerId => playerId !== action.playerId);
    }
}

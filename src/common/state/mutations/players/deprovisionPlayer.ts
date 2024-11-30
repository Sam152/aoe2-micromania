import {GameState, GameStateAction} from "../../../../types";
import registerUnitFallen from "../tick/registerUnitFallen";

export default function deprovisionPlayer(state: GameState, action: Extract<GameStateAction, {
    n: 'CLIENT_DISCONNECTED_WITH_ID'
}>) {
    // Players that are not active do not need de-previsioning.
    if (!state.activePlayers[action.playerId]) {
        return;
    }

    // Remove the disconnected player from the active player pool.
    const disconnectedPlayer = state.activePlayers[action.playerId];
    delete state.activePlayers[action.playerId];

    // Remove units from disconnected players.
    state.units.filter(unit => unit.ownedByPlayer === disconnectedPlayer).forEach((removed) => registerUnitFallen(state, removed));
}

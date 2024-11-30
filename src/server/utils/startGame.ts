import LocalStateManager from "../../common/state/managers/LocalStateManager";
import TransportEvent from "../../common/state/transport/TransportEvent";
import {normalizeGameStateAction} from "../../common/util/normalizer";
import Player from "../rooms/Player";
import {Server} from "socket.io";
import {GameStateAction} from "../../types";
import BattleRoyale from "../../common/modes/BattleRoyale";

export function startGame(io: Server): {
    registerPlayer: (player: Player) => void,
} {

    const gameMode = new BattleRoyale();
    const state = new LocalStateManager('server');

    state.addGameStateListener((gameState, action) => {
        // The network could either dispatch the whole units state OR the action, letting the clients
        // calculate the whole state. Emitting the action only, seems to work, however are there circumstances
        // where clients could drift out of sync and require syncing back up?
        io.emit(TransportEvent.GameStateActionTransmit, action);
        gameMode.onTick(state, action);
    });

    state.init();
    gameMode.start(state);

    return {
        registerPlayer: (player: Player) => {

            // Connect the actions of the player to the game state.
            player.socket.on(TransportEvent.GameStateActionDispatch, (action: GameStateAction) => {

                if (action.n === 'CLIENT_LOADED') {
                    // Transmit the whole game state after the client has loaded.
                    player.socket.emit(TransportEvent.WholeGameStateTransmit, state.getGameState());

                    state.dispatchGame({
                        n: 'CLIENT_LOADED_WITH_ID',
                        playerId: player.socket.id,
                    });
                } else {
                    state.dispatchGame(normalizeGameStateAction(action));
                }
            });

            player.socket.on('disconnect', (reason) => {
                state.dispatchGame({
                    n: 'CLIENT_DISCONNECTED_WITH_ID',
                    playerId: player.socket.id,
                });
            });

        }
    }
}

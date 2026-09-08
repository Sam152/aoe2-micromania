import { LocalStateManager } from "../../common/state/managers/LocalStateManager.ts";
import { TransportEvent } from "../../common/state/transport/TransportEvent.ts";
import { normalizeGameStateAction } from "../../common/util/normalizer.ts";
import { Player } from "../rooms/Player.ts";
import { Server } from "socket.io";
import { GameStateAction } from "../../types.ts";
import { BattleRoyale } from "../../common/modes/BattleRoyale.ts";
import { meter, traced } from "../telemetry.ts";

export function startGame(io: Server): {
  registerPlayer: (player: Player) => void;
} {
  const gameMode = new BattleRoyale();
  const state = new LocalStateManager("server");

  // Spectators are not represented in the game state at all, so they only exist here.
  const spectators = new Set<string>();

  // Active and queued come from the game state rather than this set, a client that asks to
  // play when the room is full waits in the queue instead of playing. Bots occupy player
  // slots too, but they are not connected clients so they don't count. Observed on export so
  // the value is always the count at that moment.
  meter.createObservableGauge("micromania.connected_clients").addCallback((result) => {
    const gameState = state.getGameState();
    const playing = Object.keys(gameState.activePlayers).filter((id) => !id.startsWith("bot:"));
    result.observe(playing.length, { "client.kind": "playing" });
    result.observe(gameState.queuedPlayers.length, { "client.kind": "queued" });
    result.observe(spectators.size, { "client.kind": "spectating" });
  });

  state.addGameStateListener((gameState, action) => {
    // The network could either dispatch the whole units state OR the action, letting the clients
    // calculate the whole state. Emitting the action only, seems to work, however are there circumstances
    // where clients could drift out of sync and require syncing back up?
    io.emit(TransportEvent.GameStateActionTransmit, action);
    gameMode.onTick(gameState, action, state);
  });

  state.addPreTickListener((gameState, action, computed) => {
    gameMode.preTick(gameState, action, state, computed);
  });

  state.init();
  gameMode.start(state);

  return {
    registerPlayer: (player: Player) => {
      // Connect the actions of the player to the game state.
      player.socket.on(TransportEvent.GameStateActionDispatch, (action: GameStateAction) => {
        traced("game.action", {
          "game.action.name": action.n,
          "player.id": player.socket.id,
          "client.address": player.getIpAddress(),
          "game.ticks": state.getGameState().ticks,
        }, () => {
          if (action.n === "SPECTATE_CLIENT_LOADED") {
            spectators.add(player.socket.id);
            player.socket.emit(TransportEvent.WholeGameStateTransmit, state.getGameState());
          } else if (action.n === "CLIENT_LOADED") {
            // Transmit the whole game state after the client has loaded.
            player.socket.emit(TransportEvent.WholeGameStateTransmit, state.getGameState());

            state.dispatchGame({
              n: "CLIENT_LOADED_WITH_ID",
              playerId: player.socket.id,
            });
          } else {
            state.dispatchGame(normalizeGameStateAction(action));
          }
        });
      });

      player.socket.on("disconnect", (reason) => {
        traced("socket.disconnect", {
          "player.id": player.socket.id,
          "client.address": player.getIpAddress(),
          "socket.disconnect_reason": reason,
        }, () => {
          spectators.delete(player.socket.id);
          state.dispatchGame({
            n: "CLIENT_DISCONNECTED_WITH_ID",
            playerId: player.socket.id,
          });
        });
      });
    },
  };
}

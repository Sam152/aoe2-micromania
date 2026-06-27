import { GameState } from "../../../../types.ts";
import { provisionPlayer } from "./provisionPlayer.ts";
import { ComputedTickState } from "../../computed/createComputedTickState.ts";
import { deprovisionPlayer } from "./deprovisionPlayer.ts";

export function cyclePlayers(state: GameState, computed: ComputedTickState, playerId: string) {
  deprovisionPlayer(state, playerId, computed);
  provisionPlayer(state, playerId, computed);
}

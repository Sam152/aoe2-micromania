import { GameState } from "../../../../types.ts";
import { provisionPlayer } from "./provisionPlayer.ts";
import { ComputedFrameState } from "../../computed/createComputedFrameState.ts";
import { deprovisionPlayer } from "./deprovisionPlayer.ts";

export function cyclePlayers(state: GameState, computed: ComputedFrameState, playerId: string) {
  deprovisionPlayer(state, playerId, computed);
  provisionPlayer(state, playerId, computed);
}

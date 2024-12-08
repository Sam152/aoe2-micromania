import { GameState } from "../../../../types";
import provisionPlayer from "./provisionPlayer";
import { ComputedFrameState } from "../../computed/createComputedFrameState";
import { deprovisionPlayer } from "./deprovisionPlayer";

export function cyclePlayers(state: GameState, computed: ComputedFrameState, playerId: string) {
  deprovisionPlayer(state, playerId, computed);
  provisionPlayer(state, playerId, computed);
}

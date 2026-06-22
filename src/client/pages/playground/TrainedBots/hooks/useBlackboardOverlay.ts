import { useEffect, useRef } from "react";
import { LocalStateManager } from "../../../../../common/state/managers/LocalStateManager.ts";
import { BotInstance } from "../../../../../common/ai/integration/createBot.ts";
import { ComputedTickState } from "../../../../../common/state/computed/createComputedTickState.ts";
import { createComputedTickState } from "../../../../../common/state/computed/createComputedTickState.ts";
import { renderBlackboardOverlay } from "../overlay/renderBlackboardOverlay.ts";

// Draws the blackboard overlay on top of the main game canvas. We hook the
// FRAME_RENDERING_ENDED client event so we paint after the renderer has drawn
// (and reset its transform) but before the next frame clears the canvas.
export function useBlackboardOverlay(
  manager: LocalStateManager,
  botInstances: BotInstance[],
  enabled: boolean,
  visibleKeys: Set<string>,
): void {
  // The state manager has no listener removal, so we attach a single listener
  // per manager instance and read live values through refs.
  const enabledRef = useRef(enabled);
  const botsRef = useRef(botInstances);
  const visibleKeysRef = useRef(visibleKeys);
  enabledRef.current = enabled;
  botsRef.current = botInstances;
  visibleKeysRef.current = visibleKeys;

  useEffect(() => {
    // The computed tick state (quadtrees etc.) only changes per game tick, so
    // cache it across the many frames rendered within a single tick.
    let cachedTick = -1;
    let computed: ComputedTickState | undefined;

    manager.addClientStateListener((clientState, action) => {
      if (action.n !== "FRAME_RENDERING_ENDED" || !enabledRef.current) { return; }
      const ctx = (globalThis as { ctx?: CanvasRenderingContext2D }).ctx;
      if (!ctx) { return; }

      const gameState = manager.getGameState();
      if (!computed || gameState.ticks !== cachedTick) {
        computed = createComputedTickState(gameState);
        cachedTick = gameState.ticks;
      }

      renderBlackboardOverlay({
        ctx,
        gameState,
        clientState,
        botInstances: botsRef.current,
        computed,
        visibleKeys: visibleKeysRef.current,
      });
    });
  }, [manager]);
}

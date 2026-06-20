import { createRef, CSSProperties, useEffect } from "react";
import { StateManagerInterface } from "../../types.ts";
import { RenderLoopManager } from "../../common/state/managers/RenderLoopManager.ts";

export function GameCanvas({
  stateManager,
  startAs,
  canvasStyle,
  preventDefaultOnInput = true,
}: {
  stateManager: StateManagerInterface;
  startAs: "CLIENT" | "SPECTATOR";
  canvasStyle?: CSSProperties;
  preventDefaultOnInput?: boolean;
}) {
  const ref = createRef<HTMLCanvasElement>();

  useEffect(() => {
    const renderLoop = new RenderLoopManager(stateManager, ref.current!, preventDefaultOnInput);
    renderLoop.start(startAs);
    return () => {
      renderLoop.stop();
    };
  }, []);

  return (
    <canvas
      style={{
        width: "100vw",
        height: "calc(100vh - 52px)",
        display: "block",
        backgroundColor: "black",
        ...canvasStyle,
      }}
      ref={ref}
    />
  );
}

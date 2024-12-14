import { createRef, useEffect } from "react";
import { StateManagerInterface } from "../../types";
import RenderLoopManager from "../../common/state/managers/RenderLoopManager";

export default function GameCanvas({
  stateManager,
  startAs,
}: {
  stateManager: StateManagerInterface;
  startAs: "CLIENT" | "SPECTATOR";
}) {
  const ref = createRef<HTMLCanvasElement>();

  useEffect(() => {
    const renderLoop = new RenderLoopManager(stateManager, ref.current);
    renderLoop.start(startAs);
    return () => {
      renderLoop.stop();
    };
  }, []);

  return (
    <canvas
      style={{ width: "100vw", height: "calc(100vh - 53px)", display: "block", backgroundColor: "black" }}
      ref={ref}
    />
  );
}

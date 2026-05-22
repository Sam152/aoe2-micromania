import { createRef, useEffect, useRef } from "react";
import { Vector2 } from "three/src/math/Vector2.js";
import { screenManager } from "../../../common/drawing/screenManager.ts";
import { slpManager } from "../../../common/drawing/SlpManager.ts";
import { SmxAnimation } from "../../../common/drawing/SmxAnimation.ts";
import { projectileMetadata } from "../../../common/units/projectileMetadata.ts";
import { ProjectileType } from "../../../common/units/ProjectileType.ts";

export function RockFramesPlayground() {
  const ref = createRef<HTMLCanvasElement>();
  const anchorsRef = useRef<Record<number, { x: number; y: number }>>({});
  const framesRef = useRef<{ centerX: number; centerY: number }[] | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = globalThis.innerWidth * screenManager.getCanvasScale();
    canvas.height = (globalThis.innerHeight - screenManager.getTopOffset()) * screenManager.getCanvasScale();

    const cellSize = 60;
    const padding = 30;

    let asset: SmxAnimation | undefined;
    let frameCount = 0;
    let columns = 1;

    const cellPosition = (col: number, row: number) =>
      new Vector2(
        padding + col * cellSize + cellSize / 2,
        padding + row * cellSize + cellSize / 2,
      );

    const draw = () => {
      if (!asset) { return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let frameIndex = 0; frameIndex < frameCount; frameIndex++) {
        const col = frameIndex % columns;
        const row = Math.floor(frameIndex / columns);
        const position = cellPosition(col, row);

        asset.drawFrame(ctx, position, frameIndex, null, "FRAME");

        const frame = framesRef.current?.[frameIndex];
        const override = anchorsRef.current[frameIndex];
        ctx.fillStyle = "red";
        if (override && frame) {
          ctx.fillRect(position.x + (override.x - frame.centerX), position.y + (override.y - frame.centerY), 1, 1);
        } else {
          ctx.fillRect(position.x, position.y, 1, 1);
        }

        ctx.fillStyle = "white";
        ctx.font = "9px monospace";
        ctx.textBaseline = "top";
        const label = override ? `(${override.x},${override.y})` : String(frameIndex);
        ctx.fillText(
          label,
          padding + col * cellSize + 2,
          padding + row * cellSize + cellSize - 11,
        );
      }
    };

    const cursorOffset = 12;
    let draggingFrame = -1;

    const cursorPos = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        cx: (event.clientX - rect.left) * (canvas.width / rect.width),
        cy: (event.clientY - rect.top) * (canvas.height / rect.height) - cursorOffset,
      };
    };

    const setAnchorFromCursor = (frameIndex: number, cx: number, cy: number) => {
      if (!asset) { return; }
      const col = frameIndex % columns;
      const row = Math.floor(frameIndex / columns);
      const position = cellPosition(col, row);
      const frame = framesRef.current?.[frameIndex];
      if (!frame) { return; }

      anchorsRef.current[frameIndex] = {
        x: Math.round(frame.centerX + (cx - position.x)),
        y: Math.round(frame.centerY + (cy - position.y)),
      };
      draw();
    };

    const onMouseDown = (event: MouseEvent) => {
      if (!asset) { return; }
      const { cx, cy } = cursorPos(event);
      const col = Math.floor((cx - padding) / cellSize);
      const row = Math.floor((cy - padding) / cellSize);
      if (col < 0 || col >= columns || row < 0) { return; }
      const frameIndex = row * columns + col;
      if (frameIndex >= frameCount) { return; }
      draggingFrame = frameIndex;
      setAnchorFromCursor(frameIndex, cx, cy);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (draggingFrame < 0) { return; }
      const { cx, cy } = cursorPos(event);
      setAnchorFromCursor(draggingFrame, cx, cy);
    };

    const onMouseUp = () => {
      if (draggingFrame < 0) { return; }
      const a = anchorsRef.current[draggingFrame];
      console.log(`frame ${draggingFrame}: (${a.x}, ${a.y})`);
      draggingFrame = -1;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);

    (async () => {
      await slpManager.downloadPreRenderAll();

      const projectileInfo = projectileMetadata[ProjectileType.Rock]!;
      asset = slpManager.getAsset(projectileInfo.asset);
      frameCount = asset.getFramesCount();
      columns = Math.max(1, Math.floor((canvas.width - padding * 2) / cellSize));
      framesRef.current = (asset as unknown as { rendered: { centerX: number; centerY: number }[] }).rendered;

      draw();
    })();

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseUp);
    };
  }, []);

  return (
    <canvas
      style={{ width: "100vw", height: "calc(100vh - 53px)", display: "block", backgroundColor: "black" }}
      ref={ref}
    />
  );
}

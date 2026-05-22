import { createRef, useEffect, useRef } from "react";
import { Vector2 } from "three/src/math/Vector2.js";
import { screenManager } from "../../../common/drawing/screenManager.ts";
import { slpManager } from "../../../common/drawing/SlpManager.ts";
import { SmxAnimation } from "../../../common/drawing/SmxAnimation.ts";
import { projectileMetadata } from "../../../common/units/projectileMetadata.ts";
import { ProjectileType } from "../../../common/units/ProjectileType.ts";

export function ArrowFramesPlayground() {
  const ref = createRef<HTMLCanvasElement>();
  const anchorsRef = useRef<Record<number, { x: number; y: number }>>({});
  const framesRef = useRef<{ centerX: number; centerY: number }[] | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = globalThis.innerWidth * screenManager.getCanvasScale();
    canvas.height = (globalThis.innerHeight - screenManager.getTopOffset()) * screenManager.getCanvasScale();

    const pitches = 11;
    const cellSize = 50;
    const padding = 30;
    const angle = Math.PI * 1.5;

    let asset: SmxAnimation | undefined;
    let frameCount = 0;
    let yaws = 0;

    const cellPosition = (yaw: number, pitch: number) =>
      new Vector2(
        padding + yaw * cellSize + cellSize / 2,
        padding + pitch * cellSize + cellSize / 2,
      );

    // After rotating by `angle` around `position`, the canvas point at offset (dx, dy)
    // from `position` corresponds to the bitmap pixel at `(centerX, centerY) + R⁻¹(dx, dy)`
    // relative to the current anchor.
    const cos = Math.cos(-angle);
    const sin = Math.sin(-angle);

    const draw = () => {
      if (!asset) { return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let yaw = 0; yaw < yaws; yaw++) {
        for (let pitch = 0; pitch < pitches; pitch++) {
          const frameIndex = yaw * pitches + pitch;
          if (frameIndex >= frameCount) { continue; }

          const position = cellPosition(yaw, pitch);
          asset.drawFrame(ctx, position, frameIndex, angle, "FRAME");

          const frame = framesRef.current?.[frameIndex];
          const override = anchorsRef.current[frameIndex];
          ctx.fillStyle = "red";
          if (override && frame) {
            const ox = override.x - frame.centerX;
            const oy = override.y - frame.centerY;
            const rx = ox * Math.cos(angle) - oy * Math.sin(angle);
            const ry = ox * Math.sin(angle) + oy * Math.cos(angle);
            ctx.fillRect(position.x + rx, position.y + ry, 1, 1);
          } else {
            ctx.fillRect(position.x, position.y, 1, 1);
          }

          ctx.fillStyle = "white";
          ctx.font = "9px monospace";
          ctx.textBaseline = "top";
          const label = override ? `(${override.x},${override.y})` : String(frameIndex);
          ctx.fillText(
            label,
            padding + yaw * cellSize + 2,
            padding + pitch * cellSize + cellSize - 11,
          );
        }
      }

      ctx.fillStyle = "#888";
      ctx.font = "10px monospace";
      ctx.textBaseline = "top";
      for (let yaw = 0; yaw < yaws; yaw++) {
        ctx.fillText(`y${yaw}`, padding + yaw * cellSize + 2, 4);
      }
      for (let pitch = 0; pitch < pitches; pitch++) {
        ctx.fillText(`p${pitch}`, 4, padding + pitch * cellSize + cellSize / 2 - 5);
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
      const yaw = Math.floor(frameIndex / pitches);
      const pitch = frameIndex % pitches;
      const position = cellPosition(yaw, pitch);
      const frame = framesRef.current?.[frameIndex];
      if (!frame) { return; }

      const dx = cx - position.x;
      const dy = cy - position.y;
      const localX = dx * cos - dy * sin;
      const localY = dx * sin + dy * cos;
      anchorsRef.current[frameIndex] = {
        x: Math.round(frame.centerX + localX),
        y: Math.round(frame.centerY + localY),
      };
      draw();
    };

    const onMouseDown = (event: MouseEvent) => {
      if (!asset) { return; }
      const { cx, cy } = cursorPos(event);
      const yaw = Math.floor((cx - padding) / cellSize);
      const pitch = Math.floor((cy - padding) / cellSize);
      if (yaw < 0 || yaw >= yaws || pitch < 0 || pitch >= pitches) { return; }
      const frameIndex = yaw * pitches + pitch;
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
      const yaw = Math.floor(draggingFrame / pitches);
      const pitch = draggingFrame % pitches;
      console.log(`frame ${draggingFrame} (y${yaw} p${pitch}): (${a.x}, ${a.y})`);
      draggingFrame = -1;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);

    (async () => {
      await slpManager.downloadPreRenderAll();

      const projectileInfo = projectileMetadata[ProjectileType.Arrow]!;
      asset = slpManager.getAsset(projectileInfo.asset);
      frameCount = asset.getFramesCount();
      yaws = Math.floor(frameCount / pitches);
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

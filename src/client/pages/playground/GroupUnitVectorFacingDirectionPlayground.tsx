import { createRef, useEffect, useRef, useState } from "react";
import { Vector2 } from "three/src/math/Vector2.js";
import { screenManager } from "../../../common/drawing/screenManager.ts";
import { groupAveragePosition } from "../../../common/ai/behaviourTree/blackboard/utils/groupAveragePosition.ts";
import { ComputedTickState } from "../../../common/state/computed/createComputedTickState.ts";
import { BotState, BotUnitGroup } from "../../../common/ai/integration/createBot.ts";
import { GameState, UnitInstance } from "../../../types.ts";
import {
  createCachedBlackboardComputer,
} from "../../../common/ai/behaviourTree/blackboard/utils/createCachedBlackboardComputer.ts";

/**
 * Visual demonstration of `groupUnitVectorFacingDirection`.
 *
 * That blackboard computer takes the group's average position as an origin, then:
 *   result = ((direction - groupPosition).rotate(angle) * magnitude + groupPosition).normalize()
 *
 * The result is computed by calling the real function, and the origin marker uses the real
 * groupAveragePosition — so editing either updates this visualisation directly.
 *
 * Drag the green group units (their average is the origin) and the blue direction handle,
 * and use the sliders to see how `angle` and `magnitude` shape the resulting red vector.
 */

const GROUP_COLOR = "#4ade80";
const DIRECTION_COLOR = "#3a8dff";
const RESULT_COLOR = "#ff4d4d";
const HIT_RADIUS_CSS = 16;

type Handle = { kind: "unit"; index: number } | { kind: "direction" };

export function GroupUnitVectorFacingDirectionPlayground() {
  const ref = createRef<HTMLCanvasElement>();
  const [angle, setAngle] = useState(0);
  const [magnitude, setMagnitude] = useState(100);

  // Positions are stored in CSS pixels. Initialised once.
  const unitsRef = useRef<Vector2[]>([]);
  const directionRef = useRef<Vector2 | null>(null);

  // Keep the latest control values readable from the (stable) draw closure.
  const angleRef = useRef(angle);
  const magnitudeRef = useRef(magnitude);
  angleRef.current = angle;
  magnitudeRef.current = magnitude;

  const drawRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    const scale = screenManager.getCanvasScale();
    const cssWidth = document.documentElement.clientWidth;
    const cssHeight = document.documentElement.clientHeight - 53;
    canvas.width = cssWidth * scale;
    canvas.height = cssHeight * scale;

    if (directionRef.current === null) {
      const cx = cssWidth / 2;
      const cy = cssHeight / 2;
      unitsRef.current = [
        new Vector2(cx - 60, cy - 30),
        new Vector2(cx + 40, cy + 10),
        new Vector2(cx + 10, cy + 60),
      ];
      directionRef.current = new Vector2(cx + 220, cy - 120);
    }

    // A minimal mocked context for the real blackboard code. We only need `unitsById`,
    // since groupAveragePosition -> unitsInGroup reads `computed.unitsById()`.
    const buildContext = () => {
      const unitsById: Record<number, UnitInstance> = {};
      unitsRef.current.forEach((pos, index) => {
        unitsById[index] = { id: index, position: pos.clone() } as UnitInstance;
      });
      const computed = { unitsById: () => unitsById } as unknown as ComputedTickState;
      const group = {
        includedUnits: unitsRef.current.map((_, index) => index),
      } as unknown as BotUnitGroup;
      return { computed, group };
    };

    const computeResult = () => {
      const { computed, group } = buildContext();
      return createCachedBlackboardComputer({ computed }).groupUnitVectorFacingDirection({
        params: {
          direction: { x: directionRef.current!.x, y: directionRef.current!.y },
          angle: angleRef.current,
          magnitude: magnitudeRef.current,
        },
        group,
        state: undefined as unknown as GameState,
        botState: undefined as unknown as BotState,
      });
    };

    // The real origin the function uses, so this marker tracks any change to group-average logic.
    const groupOrigin = () => {
      const { computed, group } = buildContext();
      return groupAveragePosition({ group, computed });
    };

    const dot = (p: { x: number; y: number }, r: number, fill: string) => {
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    const arrow = (from: { x: number; y: number }, to: { x: number; y: number }, color: string) => {
      const dir = new Vector2(to.x - from.x, to.y - from.y);
      const len = dir.length();
      if (len < 0.001) { return; }
      dir.divideScalar(len);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
      const head = 12;
      const left = new Vector2(-dir.y, dir.x);
      ctx.beginPath();
      ctx.moveTo(to.x, to.y);
      ctx.lineTo(to.x - dir.x * head + left.x * head * 0.5, to.y - dir.y * head + left.y * head * 0.5);
      ctx.lineTo(to.x - dir.x * head - left.x * head * 0.5, to.y - dir.y * head - left.y * head * 0.5);
      ctx.closePath();
      ctx.fill();
    };

    const label = (text: string, p: { x: number; y: number }, color: string) => {
      ctx.fillStyle = color;
      ctx.font = "12px monospace";
      ctx.textBaseline = "middle";
      ctx.fillText(text, p.x + 10, p.y - 10);
    };

    const draw = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      const origin = groupOrigin();
      const direction = directionRef.current!;
      const result = computeResult();

      // Group units are always drawn; everything else needs a valid origin.
      unitsRef.current.forEach((u) => dot(u, 6, GROUP_COLOR));
      if (!origin) {
        return;
      }

      // Base vector (direction - groupPosition) before rotation/scaling — drawn faint for reference.
      ctx.strokeStyle = "rgba(255,255,255,0.18)";
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(direction.x, direction.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // The average position the function actually uses as its origin.
      ctx.strokeStyle = GROUP_COLOR;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(origin.x, origin.y, 10, 0, Math.PI * 2);
      ctx.stroke();
      label("group avg (origin)", origin, GROUP_COLOR);

      // Direction handle.
      dot(direction, 7, DIRECTION_COLOR);
      label("direction", direction, DIRECTION_COLOR);

      // Result vector — drawn at whatever coordinate the function returns, with the raw
      // value shown so changes to the math (e.g. a `.normalize()`) stay legible.
      if (result) {
        arrow(origin, result, RESULT_COLOR);
        dot(result, 6, RESULT_COLOR);
        label(`result (${result.x.toFixed(2)}, ${result.y.toFixed(2)})`, result, RESULT_COLOR);
      }
    };

    drawRef.current = draw;
    draw();

    // ---- dragging ----
    let dragging: Handle | null = null;

    const cursorPos = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return new Vector2(event.clientX - rect.left, event.clientY - rect.top);
    };

    const handleAt = (p: Vector2): Handle | null => {
      if (directionRef.current!.distanceTo(p) <= HIT_RADIUS_CSS) {
        return { kind: "direction" };
      }
      for (let i = 0; i < unitsRef.current.length; i++) {
        if (unitsRef.current[i].distanceTo(p) <= HIT_RADIUS_CSS) {
          return { kind: "unit", index: i };
        }
      }
      return null;
    };

    const onMouseDown = (event: MouseEvent) => {
      dragging = handleAt(cursorPos(event));
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!dragging) { return; }
      const p = cursorPos(event);
      if (dragging.kind === "direction") {
        directionRef.current = p;
      } else {
        unitsRef.current[dragging.index] = p;
      }
      draw();
    };

    const onMouseUp = () => {
      dragging = null;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseUp);
      drawRef.current = null;
    };
  }, []);

  // Redraw whenever the sliders change.
  useEffect(() => {
    drawRef.current?.();
  }, [angle, magnitude]);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          padding: "12px 16px",
          background: "rgba(0,0,0,0.6)",
          border: "1px solid #333",
          borderRadius: 8,
          color: "#eee",
          fontFamily: "monospace",
          fontSize: 13,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          minWidth: 260,
        }}
      >
        <div style={{ opacity: 0.7 }}>
          Drag the green group units and the blue direction handle.
        </div>
        <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span>angle: {angle.toFixed(0)}°</span>
          <input
            type="range"
            min={-180}
            max={180}
            step={1}
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span>magnitude: {magnitude.toFixed(2)} (function default: 100)</span>
          <input
            type="range"
            min={0}
            max={500}
            step={1}
            value={magnitude}
            onChange={(e) => setMagnitude(Number(e.target.value))}
          />
        </label>
        <div style={{ opacity: 0.5, fontSize: 11, lineHeight: 1.5 }}>
          result = (direction − origin)
          <br />
          &nbsp;&nbsp;.rotate(angle) × magnitude + origin
        </div>
      </div>
      <canvas
        style={{ width: "100vw", height: "calc(100vh - 53px)", display: "block", backgroundColor: "black" }}
        ref={ref}
      />
    </div>
  );
}

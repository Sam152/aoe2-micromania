import { createRef, useEffect, useRef } from "react";
import { Vector2 } from "three/src/math/Vector2.js";
import { screenManager } from "../../../common/drawing/screenManager.ts";
import { fanOutMangoProjections } from "../../../common/drawing/helpers/fanOutMangoProjections.ts";
import { ProjectileType } from "../../../common/units/ProjectileType.ts";
import { UnitType } from "../../../common/units/UnitType.ts";
import { ProjectileInstance } from "../../../types.ts";

const VARIATIONS = 10;
const TRAIL_STEPS = 28;
const ROW_HEIGHT_CSS = 180;
const TOP_PADDING_CSS = 30;
const START_X_CSS = 100;
const TRAJECTORY_WIDTH_CSS = 500;
const RED_DOT_OFFSET_CSS = 24;

export function MangoFanOutPlayground() {
  const ref = createRef<HTMLCanvasElement>();
  const destinationsRef = useRef<Vector2[]>([]);
  const idsRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    const scale = screenManager.getCanvasScale();
    const cssHeight = TOP_PADDING_CSS * 2 + VARIATIONS * ROW_HEIGHT_CSS;
    canvas.style.height = cssHeight + "px";
    canvas.width = document.documentElement.clientWidth * scale;
    canvas.height = cssHeight * scale;

    const rowHeight = ROW_HEIGHT_CSS * scale;
    const topPadding = TOP_PADDING_CSS * scale;
    const startX = START_X_CSS * scale;
    const defaultTargetX = startX + TRAJECTORY_WIDTH_CSS * scale;
    const hitRadius = 14 * scale;
    const redDotOffset = RED_DOT_OFFSET_CSS * scale;

    const redDotPosition = (startingPoint: Vector2, destination: Vector2) => {
      const dir = destination.clone().sub(startingPoint);
      const len = dir.length();
      if (len === 0) { return destination.clone(); }
      return destination.clone().add(dir.multiplyScalar(redDotOffset / len));
    };

    const startPointFor = (i: number) => new Vector2(startX, topPadding + rowHeight * (i + 0.5));

    if (destinationsRef.current.length === 0) {
      for (let i = 0; i < VARIATIONS; i++) {
        destinationsRef.current.push(new Vector2(defaultTargetX, topPadding + rowHeight * (i + 0.5)));
        idsRef.current.push(Math.floor(Math.random() * 1_000_000_000));
      }
    }

    const makeProjectile = (i: number): ProjectileInstance => {
      const startingPoint = startPointFor(i);
      const destination = destinationsRef.current[i];
      return {
        id: idsRef.current[i],
        ownedBy: 1,
        type: ProjectileType.Rock,
        firedByType: UnitType.Mangonel,
        startingPoint,
        destination,
        pathVector: destination.clone().sub(startingPoint),
        startingTick: 0,
        arrivingTick: 60,
        hasDamage: true,
      };
    };

    const dot = (x: number, y: number, r: number, fill: string) => {
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < VARIATIONS; i++) {
        const projectile = makeProjectile(i);
        const startingPoint = projectile.startingPoint;
        const destination = projectile.destination;

        ctx.strokeStyle = "#222";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(startingPoint.x, startingPoint.y);
        ctx.lineTo(destination.x, destination.y);
        ctx.stroke();

        for (let s = 1; s <= TRAIL_STEPS; s++) {
          const t = s / TRAIL_STEPS;
          const positions = fanOutMangoProjections(projectile, t);
          positions.forEach((pos) => {
            if (t === 1) {
              dot(pos.x, pos.y, 3, "rgba(255, 255, 255, 0.95)");
            } else {
              const alpha = 0.15 + 0.45 * t;
              dot(pos.x, pos.y, 1.4, `rgba(255, 255, 255, ${alpha})`);
            }
          });
        }

        dot(startingPoint.x, startingPoint.y, 5, "#3a8dff");
        const handle = redDotPosition(startingPoint, destination);
        ctx.strokeStyle = "rgba(255, 77, 77, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(destination.x, destination.y);
        ctx.lineTo(handle.x, handle.y);
        ctx.stroke();
        dot(handle.x, handle.y, 3, "#ff4d4d");

        ctx.fillStyle = "#888";
        ctx.font = "11px monospace";
        ctx.textBaseline = "middle";
        ctx.fillText(`id ${projectile.id}`, 8, topPadding + rowHeight * (i + 0.5));
      }
    };

    let draggingRow = -1;

    const cursorPos = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        cx: (event.clientX - rect.left) * (canvas.width / rect.width),
        cy: (event.clientY - rect.top) * (canvas.height / rect.height),
      };
    };

    const onMouseDown = (event: MouseEvent) => {
      const { cx, cy } = cursorPos(event);
      for (let i = 0; i < VARIATIONS; i++) {
        const handle = redDotPosition(startPointFor(i), destinationsRef.current[i]);
        const dx = handle.x - cx;
        const dy = handle.y - cy;
        if (dx * dx + dy * dy <= hitRadius * hitRadius) {
          draggingRow = i;
          return;
        }
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (draggingRow < 0) { return; }
      const { cx, cy } = cursorPos(event);
      const startingPoint = startPointFor(draggingRow);
      const cursor = new Vector2(cx, cy);
      const dir = cursor.clone().sub(startingPoint);
      const len = dir.length();
      destinationsRef.current[draggingRow] = len === 0 ? cursor : cursor.sub(dir.multiplyScalar(redDotOffset / len));
      draw();
    };

    const onMouseUp = () => {
      draggingRow = -1;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseUp);

    draw();

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseUp);
    };
  }, []);

  return (
    <canvas
      style={{ width: "100%", display: "block", backgroundColor: "black" }}
      ref={ref}
    />
  );
}

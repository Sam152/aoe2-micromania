import { useEffect, useRef } from "react";
import { Vector2 } from "three/src/math/Vector2.js";
import { screenManager } from "../../../common/drawing/screenManager.ts";
import { slpManager } from "../../../common/drawing/SlpManager.ts";
import { createCircularProbabilityAccuracy } from "../../../common/state/mutations/tick/applyAccuracy.ts";
import { unitMetadataFactory } from "../../../common/units/unitMetadataFactory.ts";
import { Unit } from "../../../common/units/Unit.ts";
import { UnitState } from "../../../common/units/UnitState.ts";
import { config } from "../../../common/config.ts";

const SAMPLES = 80;
const RANGES_TILES = [1, 2, 4, 6];

export function AccuracyAnalysisPlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cdrSliderRef = useRef<HTMLInputElement>(null);
  const csSliderRef = useRef<HTMLInputElement>(null);
  const cdrLabelRef = useRef<HTMLSpanElement>(null);
  const csLabelRef = useRef<HTMLSpanElement>(null);
  const paramsRef = useRef({ circleDistanceRatio: 6, clusterStrength: 2 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const scale = screenManager.getCanvasScale();

    canvas.width = globalThis.innerWidth * scale;
    canvas.height = (globalThis.innerHeight - screenManager.getTopOffset()) * scale;

    const archerMeta = unitMetadataFactory.getUnit(Unit.Archer);
    const archerPos = new Vector2(200, canvas.height / 2);
    // startingPoint matches fireProjectiles.ts: unit.position + firingAnchor
    const firingPos = archerPos.clone().add(archerMeta.firingAnchor);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { circleDistanceRatio, clusterStrength } = paramsRef.current;
      const accuracyFn = createCircularProbabilityAccuracy({ circleDistanceRatio, clusterStrength });

      RANGES_TILES.forEach((tiles, rangeIndex) => {
        const gameRange = tiles * config.tileGameStatsLength;
        const targetPos = new Vector2(firingPos.x + gameRange, firingPos.y);
        const circleSize = gameRange / circleDistanceRatio;

        // Dashed trajectory line
        ctx.save();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = scale;
        ctx.setLineDash([4 * scale, 6 * scale]);
        ctx.beginPath();
        ctx.moveTo(firingPos.x, firingPos.y);
        ctx.lineTo(targetPos.x, targetPos.y);
        ctx.stroke();
        ctx.restore();

        // Max spread circle
        ctx.save();
        ctx.strokeStyle = "rgba(255, 200, 50, 0.3)";
        ctx.lineWidth = scale;
        ctx.beginPath();
        ctx.arc(targetPos.x, targetPos.y, circleSize, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Arrow landing samples
        for (let i = 0; i < SAMPLES; i++) {
          const landing = accuracyFn({
            startingPoint: firingPos.clone(),
            aimingFor: targetPos.clone(),
            entropy: rangeIndex * 100_000 + i,
          });
          ctx.fillStyle = "rgba(255, 180, 50, 0.65)";
          ctx.beginPath();
          ctx.arc(landing.x, landing.y, 2 * scale, 0, Math.PI * 2);
          ctx.fill();
        }

        // Crosshair at target
        ctx.save();
        ctx.strokeStyle = "rgba(220, 80, 80, 0.9)";
        ctx.lineWidth = scale;
        const cs = 7 * scale;
        ctx.beginPath();
        ctx.moveTo(targetPos.x - cs, targetPos.y);
        ctx.lineTo(targetPos.x + cs, targetPos.y);
        ctx.moveTo(targetPos.x, targetPos.y - cs);
        ctx.lineTo(targetPos.x, targetPos.y + cs);
        ctx.stroke();
        ctx.restore();

        // Range label
        ctx.save();
        ctx.fillStyle = "rgba(200, 200, 200, 0.8)";
        ctx.font = `${12 * scale}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.fillText(`${tiles} tile${tiles !== 1 ? "s" : ""}`, targetPos.x, archerPos.y - 80 * scale);
        ctx.fillText(`±${Math.round(circleSize)}px spread`, targetPos.x, archerPos.y - 65 * scale);
        ctx.restore();
      });

      // Archer: idle animation, facing east (direction 4)
      const idleAnim = archerMeta.animations[UnitState.Idle];
      slpManager.getAsset(idleAnim.slp).animatePlayerAsset(
        ctx,
        archerPos,
        idleAnim.animationDuration,
        0,
        1,
        4,
        idleAnim.style,
      );
    };

    const onCDR = () => {
      const v = parseFloat(cdrSliderRef.current!.value);
      paramsRef.current.circleDistanceRatio = v;
      if (cdrLabelRef.current) { cdrLabelRef.current.textContent = v.toFixed(1); }
      draw();
    };

    const onCS = () => {
      const v = parseFloat(csSliderRef.current!.value);
      paramsRef.current.clusterStrength = v;
      if (csLabelRef.current) { csLabelRef.current.textContent = v.toFixed(1); }
      draw();
    };

    const cdrSlider = cdrSliderRef.current!;
    const csSlider = csSliderRef.current!;
    cdrSlider.addEventListener("input", onCDR);
    csSlider.addEventListener("input", onCS);

    (async () => {
      await slpManager.downloadPreRenderAll();
      draw();
    })();

    return () => {
      cdrSlider.removeEventListener("input", onCDR);
      csSlider.removeEventListener("input", onCS);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "calc(100vh - 53px)", overflow: "hidden" }}>
      <canvas
        style={{ width: "100%", height: "100%", display: "block", backgroundColor: "black" }}
        ref={canvasRef}
      />
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          background: "rgba(0, 0, 0, 0.78)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          padding: "16px 20px",
          borderRadius: "8px",
          color: "white",
          fontFamily: "monospace",
          fontSize: "13px",
          minWidth: "260px",
          userSelect: "none",
        }}
      >
        <div style={{ marginBottom: "14px" }}>
          <div>
            <code>circleDistanceRatio</code>: <span ref={cdrLabelRef}>6.0</span>
          </div>
          <div style={{ fontSize: "11px", color: "rgba(200,200,200,0.6)", margin: "2px 0 4px" }}>
            higher → smaller max spread circle
          </div>
          <input
            ref={cdrSliderRef}
            type="range"
            min="1"
            max="20"
            step="0.5"
            defaultValue="6"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <div>
            <code>clusterStrength</code>: <span ref={csLabelRef}>2.0</span>
          </div>
          <div style={{ fontSize: "11px", color: "rgba(200,200,200,0.6)", margin: "2px 0 4px" }}>
            higher → shots cluster toward center
          </div>
          <input
            ref={csSliderRef}
            type="range"
            min="0.1"
            max="8"
            step="0.1"
            defaultValue="2"
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            marginTop: "14px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "10px",
            fontSize: "11px",
            color: "rgba(200,200,200,0.5)",
          }}
        >
          <div>● orange dots — {SAMPLES} sample landings per range</div>
          <div>○ yellow ring — max spread circle</div>
          <div>+ red — target position</div>
        </div>
      </div>
    </div>
  );
}

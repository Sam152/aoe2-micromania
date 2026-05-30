import { useEffect, useRef } from "react";
import { Vector2 } from "three/src/math/Vector2.js";
import { screenManager } from "../../../common/drawing/screenManager.ts";
import { slpManager } from "../../../common/drawing/SlpManager.ts";
import { createCircularProbabilityAccuracy, defaults } from "../../../common/state/mutations/tick/applyAccuracy.ts";
import { unitMetadataFactory } from "../../../common/units/unitMetadataFactory.ts";
import { UnitType } from "../../../common/units/UnitType.ts";
import { UnitState } from "../../../common/units/UnitState.ts";
import { config } from "../../../common/config.ts";

const SAMPLES = 200;
const RANGES_TILES = [1, 2, 4, 6];
const MAX_RANGE_PX = 6 * config.tileGameStatsLength;

export function AccuracyAnalysisPlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cgfSliderRef = useRef<HTMLInputElement>(null);
  const csSliderRef = useRef<HTMLInputElement>(null);
  const cgrSliderRef = useRef<HTMLInputElement>(null);
  const cgfLabelRef = useRef<HTMLSpanElement>(null);
  const csLabelRef = useRef<HTMLSpanElement>(null);
  const cgrLabelRef = useRef<HTMLSpanElement>(null);
  const mcsSliderRef = useRef<HTMLInputElement>(null);
  const mcsLabelRef = useRef<HTMLSpanElement>(null);
  const paramsRef = useRef({ ...defaults });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const scale = screenManager.getCanvasScale();

    canvas.width = globalThis.innerWidth * scale;
    canvas.height = (globalThis.innerHeight - screenManager.getTopOffset()) * scale;

    const archerMeta = unitMetadataFactory.getUnit(UnitType.Archer);

    const topH = Math.floor(canvas.height * 0.55);

    const archerPos = new Vector2(200, topH / 2);
    const firingPos = archerPos.clone().add(archerMeta.firingAnchor);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { circleGrowthFactor, clusterStrength, circleGrowthRate, minCircleSize } = paramsRef.current;
      const accuracyFn = createCircularProbabilityAccuracy({
        circleGrowthFactor,
        clusterStrength,
        circleGrowthRate,
        minCircleSize,
      });

      // ── TOP: scatter with sample dots ─────────────────────────────

      RANGES_TILES.forEach((tiles, rangeIndex) => {
        const gameRange = tiles * config.tileGameStatsLength;
        const targetPos = new Vector2(firingPos.x + gameRange, firingPos.y);
        const circleSize = circleGrowthFactor * Math.log(Math.max(minCircleSize, gameRange - circleGrowthRate));

        ctx.save();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = scale;
        ctx.setLineDash([4 * scale, 6 * scale]);
        ctx.beginPath();
        ctx.moveTo(firingPos.x, firingPos.y);
        ctx.lineTo(targetPos.x, targetPos.y);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.strokeStyle = "rgba(255, 200, 50, 0.4)";
        ctx.lineWidth = scale;
        ctx.beginPath();
        ctx.arc(targetPos.x, targetPos.y, circleSize, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        for (let i = 0; i < SAMPLES; i++) {
          const landing = accuracyFn({
            startingPoint: firingPos.clone(),
            aimingFor: targetPos.clone(),
            entropy: rangeIndex * 100_000 + i,
          });
          ctx.fillStyle = "rgba(255, 180, 50, 0.18)";
          ctx.beginPath();
          ctx.arc(landing.x, landing.y, 2 * scale, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.save();
        ctx.fillStyle = "rgba(200, 200, 200, 0.8)";
        ctx.font = `${12 * scale}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.fillText(`${tiles} tile${tiles !== 1 ? "s" : ""}`, targetPos.x, archerPos.y - 75 * scale);
        ctx.fillText(`±${Math.round(circleSize)}px`, targetPos.x, archerPos.y - 60 * scale);
        ctx.restore();
      });

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

      // Section divider
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = scale;
      ctx.beginPath();
      ctx.moveTo(0, topH);
      ctx.lineTo(canvas.width, topH);
      ctx.stroke();
      ctx.restore();

      // ── BOTTOM: continuous circle growth ──────────────────────────

      const rowCY = topH + (canvas.height - topH) / 2;

      for (let d = 5; d <= MAX_RANGE_PX; d += 5) {
        const r = circleGrowthFactor * Math.log(Math.max(minCircleSize, d - circleGrowthRate));
        if (r <= 0) { continue; }

        ctx.strokeStyle = "rgba(255, 200, 50, 0.12)";
        ctx.lineWidth = scale;
        ctx.beginPath();
        ctx.arc(firingPos.x + d, rowCY, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const onCGF = () => {
      const v = parseFloat(cgfSliderRef.current!.value);
      paramsRef.current.circleGrowthFactor = v;
      if (cgfLabelRef.current) { cgfLabelRef.current.textContent = v.toFixed(1); }
      draw();
    };

    const onCS = () => {
      const v = parseFloat(csSliderRef.current!.value);
      paramsRef.current.clusterStrength = v;
      if (csLabelRef.current) { csLabelRef.current.textContent = v.toFixed(1); }
      draw();
    };

    const onCGR = () => {
      const v = parseFloat(cgrSliderRef.current!.value);
      paramsRef.current.circleGrowthRate = v;
      if (cgrLabelRef.current) { cgrLabelRef.current.textContent = v.toFixed(0); }
      draw();
    };

    const onMCS = () => {
      const v = parseFloat(mcsSliderRef.current!.value);
      paramsRef.current.minCircleSize = v;
      if (mcsLabelRef.current) { mcsLabelRef.current.textContent = v.toFixed(0); }
      draw();
    };

    const cgfSlider = cgfSliderRef.current!;
    const csSlider = csSliderRef.current!;
    const cgrSlider = cgrSliderRef.current!;
    const mcsSlider = mcsSliderRef.current!;
    cgfSlider.addEventListener("input", onCGF);
    csSlider.addEventListener("input", onCS);
    cgrSlider.addEventListener("input", onCGR);
    mcsSlider.addEventListener("input", onMCS);

    (async () => {
      await slpManager.downloadPreRenderAll();
      draw();
    })();

    return () => {
      cgfSlider.removeEventListener("input", onCGF);
      csSlider.removeEventListener("input", onCS);
      cgrSlider.removeEventListener("input", onCGR);
      mcsSlider.removeEventListener("input", onMCS);
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
            <code>circleGrowthFactor</code>: <span ref={cgfLabelRef}>{defaults.circleGrowthFactor}</span>
          </div>
          <div style={{ fontSize: "11px", color: "rgba(200,200,200,0.6)", margin: "2px 0 4px" }}>
            scales the logarithmic spread curve
          </div>
          <input
            ref={cgfSliderRef}
            type="range"
            min="1"
            max="20"
            step="0.5"
            defaultValue={defaults.circleGrowthFactor}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "14px" }}>
          <div>
            <code>circleGrowthRate</code>: <span ref={cgrLabelRef}>{defaults.circleGrowthRate}</span>
          </div>
          <div style={{ fontSize: "11px", color: "rgba(200,200,200,0.6)", margin: "2px 0 4px" }}>
            offset inside log — ln(distance − cgr)
          </div>
          <input
            ref={cgrSliderRef}
            type="range"
            min="-300"
            max="300"
            step="1"
            defaultValue={defaults.circleGrowthRate}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "14px" }}>
          <div>
            <code>minCircleSize</code>: <span ref={mcsLabelRef}>{defaults.minCircleSize}</span>
          </div>
          <div style={{ fontSize: "11px", color: "rgba(200,200,200,0.6)", margin: "2px 0 4px" }}>
            floor inside log — Math.max(mcs, …)
          </div>
          <input
            ref={mcsSliderRef}
            type="range"
            min="1"
            max="200"
            step="1"
            defaultValue={defaults.minCircleSize}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <div>
            <code>clusterStrength</code>: <span ref={csLabelRef}>{defaults.clusterStrength}</span>
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
            defaultValue={defaults.clusterStrength}
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
          <div>● orange dots — {SAMPLES} samples per range</div>
          <div>○ yellow ring — max spread circle</div>
        </div>
      </div>
    </div>
  );
}

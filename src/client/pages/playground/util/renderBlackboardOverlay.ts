import type { ClientState, GameState } from "../../../../types.ts";
import type { BotInstance } from "../../../../common/ai/integration/createBot.ts";
import type { ComputedTickState } from "../../../../common/state/computed/createComputedTickState.ts";
import {
  blackboardDefinition,
  BlackboardKey,
} from "../../../../common/ai/behaviourTree/blackboard/blackboardDefinition.ts";
import { createCachedBlackboardComputer } from "../../../../common/ai/behaviourTree/blackboard/utils/createCachedBlackboardComputer.ts";
import { unitMetadataFactory } from "../../../../common/units/unitMetadataFactory.ts";
import { UnitType } from "../../../../common/units/UnitType.ts";

// Home is player 1, away is player 2 — match the drop-slot border colours.
const PLAYER_COLORS: Record<number, string> = { 1: "#4299e1", 2: "#fc8181" };
const UNIT_BOX_COLOR = "#ff9d2e";

type PanelLine = { text: string; color: string; header?: boolean };

// Split the blackboard values into how they should be drawn, based on the
// declared data type of each definition entry.
function category(dataType: string): "vector" | "unitId" | "scalar" {
  if (dataType === "vector") { return "vector"; }
  if (dataType === "unitId") { return "unitId"; }
  return "scalar";
}

// The blackboard unit types — see the `unitType` data type catalog entry.
const UNIT_TYPE_VALUES = ["ARCHER", "MANGO", "MONK"] as const;

// Each definition's params carry a `default` we can feed straight in, so every
// value can be resolved without the bot having authored a real data value.
function defaultParams(key: BlackboardKey): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [name, param] of Object.entries(blackboardDefinition[key].params)) {
    out[name] = (param as { default: unknown }).default;
  }
  return out;
}

// "By type" values take a `unitType` param — produce one readout per unit type
// rather than a single one at the default. Values without such a param yield a
// single readout.
function paramVariants(key: BlackboardKey): { params: Record<string, unknown>; suffix: string }[] {
  const base = defaultParams(key);
  const unitTypeParams = Object.entries(blackboardDefinition[key].params)
    .filter(([, param]) => (param as { dataType: string }).dataType === "unitType")
    .map(([name]) => name);

  if (unitTypeParams.length === 0) {
    return [{ params: base, suffix: "" }];
  }

  return UNIT_TYPE_VALUES.map((type) => {
    const params = { ...base };
    for (const name of unitTypeParams) { params[name] = type; }
    return { params, suffix: `[${type}]` };
  });
}

function formatScalar(value: unknown): string {
  if (typeof value === "boolean") { return value ? "true" : "false"; }
  if (typeof value === "number") { return Number.isInteger(value) ? String(value) : value.toFixed(1); }
  return String(value);
}

export function renderBlackboardOverlay({
  ctx,
  gameState,
  clientState,
  botInstances,
  computed,
}: {
  ctx: CanvasRenderingContext2D;
  gameState: GameState;
  clientState: ClientState;
  botInstances: BotInstance[];
  computed: ComputedTickState;
}): void {
  const camera = clientState.camera;
  // FRAME_RENDERING_ENDED fires after the renderer resets to the identity
  // transform, so we re-apply the camera offset ourselves. World units map 1:1
  // to canvas-internal pixels (the camera is a pure translate).
  const sx = (x: number) => x - camera.x;
  const sy = (y: number) => y - camera.y;
  const scale = ctx.canvas.width / globalThis.innerWidth || 1;
  const unitsById = computed.unitsById();

  ctx.save();
  ctx.lineWidth = Math.max(1, scale);
  ctx.textBaseline = "alphabetic";

  const panel: PanelLine[] = [];

  for (const { botState } of botInstances) {
    // Only the red player (away / player 2) is overlaid.
    if (botState.playingAs !== 2) { continue; }
    const color = PLAYER_COLORS[botState.playingAs] ?? "#ffffff";

    botState.unitGroups.forEach((group, groupIndex) => {
      const groupUnits = group.includedUnits.map((id) => unitsById[id]).filter(Boolean);
      if (groupUnits.length === 0) { return; }

      const centroid = {
        x: groupUnits.reduce((sum, u) => sum + u.position.x, 0) / groupUnits.length,
        y: groupUnits.reduce((sum, u) => sum + u.position.y, 0) / groupUnits.length,
      };

      const label = `P${botState.playingAs} ${UnitType[group.unitType]} #${groupIndex}`;
      panel.push({ text: `${label}  (units: ${groupUnits.length})`, color, header: true });

      // A fresh computer per group: its cache keys ignore the group, so reusing
      // one across groups would return the first group's cached results.
      const computer = createCachedBlackboardComputer({ computed });

      for (const key of Object.keys(blackboardDefinition) as BlackboardKey[]) {
        const cat = category(blackboardDefinition[key].dataType);

        for (const variant of paramVariants(key)) {
          let value: unknown;
          try {
            value = (computer[key] as (p: unknown) => unknown)({
              state: gameState,
              botState,
              group,
              params: variant.params,
            });
          } catch {
            value = undefined;
          }
          if (value === undefined || value === null) { continue; }

          const label = `${key}${variant.suffix}`;
          if (cat === "vector") {
            const v = value as { x: number; y: number };
            drawArrow(ctx, sx(centroid.x), sy(centroid.y), sx(v.x), sy(v.y), color, scale, label);
          } else if (cat === "unitId") {
            if (value === -1) { continue; }
            const unit = unitsById[value as number];
            if (!unit) { continue; }
            const radius = unitMetadataFactory.getUnit(unit.unitType).selectionRadius;
            drawUnitBox(ctx, sx(unit.position.x), sy(unit.position.y), radius, scale, label);
          } else {
            panel.push({ text: `  ${label}: ${formatScalar(value)}`, color });
          }
        }
      }
    });
  }

  drawPanel(ctx, panel, scale);
  ctx.restore();
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  scale: number,
  label: string,
): void {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.hypot(dx, dy);
  if (length < 6) { return; } // a value pointing at the group itself — nothing useful to draw.

  const angle = Math.atan2(dy, dx);
  const head = 8 * scale;

  ctx.save();
  ctx.globalAlpha = 0.85;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1.5 * scale;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - head * Math.cos(angle - Math.PI / 6), y2 - head * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(x2 - head * Math.cos(angle + Math.PI / 6), y2 - head * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();

  ctx.globalAlpha = 1;
  ctx.font = `${9 * scale}px ui-monospace, Menlo, monospace`;
  ctx.fillText(label, x2 + 4 * scale, y2 - 4 * scale);
  ctx.restore();
}

function drawUnitBox(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  scale: number,
  label: string,
): void {
  ctx.save();
  ctx.strokeStyle = UNIT_BOX_COLOR;
  ctx.lineWidth = 2 * scale;
  ctx.strokeRect(x - radius, y - radius, radius * 2, radius * 2);
  ctx.fillStyle = UNIT_BOX_COLOR;
  ctx.font = `${9 * scale}px ui-monospace, Menlo, monospace`;
  ctx.fillText(label, x - radius, y - radius - 3 * scale);
  ctx.restore();
}

// Scalar/enum/boolean values are anchored to the bottom-left, growing upward.
// Lines keep their reading order within each column; once a column fills the
// canvas height it wraps into a new column to the right.
function drawPanel(ctx: CanvasRenderingContext2D, lines: PanelLine[], scale: number): void {
  if (lines.length === 0) { return; }

  const padding = 8 * scale;
  const lineHeight = 14 * scale;
  const columnWidth = 230 * scale;
  const fontSize = 11 * scale;

  const perColumn = Math.max(1, Math.floor((ctx.canvas.height - padding * 2) / lineHeight));

  ctx.save();
  ctx.font = `${fontSize}px ui-monospace, Menlo, monospace`;
  ctx.textBaseline = "top";

  for (let start = 0, column = 0; start < lines.length; start += perColumn, column++) {
    const columnLines = lines.slice(start, start + perColumn);
    const x = padding + column * columnWidth;
    // Bottom-anchor the column: its last line sits just above the bottom padding.
    const top = ctx.canvas.height - padding - columnLines.length * lineHeight;

    columnLines.forEach((line, i) => {
      const y = top + i * lineHeight;
      // Backing strip so text stays readable over the game.
      ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
      ctx.fillRect(x - 2 * scale, y, columnWidth - 6 * scale, lineHeight);
      ctx.fillStyle = line.color;
      ctx.font = `${line.header ? "bold " : ""}${fontSize}px ui-monospace, Menlo, monospace`;
      ctx.fillText(line.text, x, y + 1 * scale);
    });
  }
  ctx.restore();
}

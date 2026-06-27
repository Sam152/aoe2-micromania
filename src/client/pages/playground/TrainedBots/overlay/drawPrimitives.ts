// Pure canvas drawing for the overlay. These take screen-space coordinates and
// know nothing about the blackboard — callers convert world → screen first.

// Player colours, darker than the drop-slot borders so labels stay legible.
export const PLAYER_COLORS: Record<number, string> = { 1: "#2b6cb0", 2: "#c53030" };
export const UNIT_BOX_COLOR = "#c05621";

export type PanelLine = { text: string; header?: boolean };

export function drawArrow(
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
  if (length < 6) { return; } // a value pointing at its own origin — nothing useful to draw.

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
  ctx.font = `${13 * scale}px ui-monospace, Menlo, monospace`;
  ctx.fillText(label, x2 + 4 * scale, y2 - 4 * scale);
  ctx.restore();
}

export function drawUnitBox(
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
  ctx.font = `${13 * scale}px ui-monospace, Menlo, monospace`;
  ctx.fillText(label, x - radius, y - radius - 3 * scale);
  ctx.restore();
}

// Group-scoped scalars rendered as black-text labels stacked up from the
// bottom-right of the screen, each joined by a leader line back to the group's
// average position on the canvas.
export function drawGroupLabels(
  ctx: CanvasRenderingContext2D,
  labels: { cx: number; cy: number; header: string; lines: string[] }[],
  scale: number,
): void {
  if (labels.length === 0) { return; }

  const fontSize = 14 * scale;
  const lineHeight = 18 * scale;
  const pad = 5 * scale;
  const edge = 8 * scale; // padding from the screen edges.
  const stackGap = 8 * scale; // gap between stacked boxes.
  const rightX = ctx.canvas.width - edge;

  ctx.save();
  ctx.font = `${fontSize}px ui-monospace, Menlo, monospace`;
  ctx.textBaseline = "top";

  let bottom = ctx.canvas.height - edge;
  for (const { cx, cy, header, lines } of labels) {
    const all = [header, ...lines];
    const width = Math.max(...all.map((t) => ctx.measureText(t).width)) + pad * 2;
    const height = all.length * lineHeight + pad * 2;
    const boxX = rightX - width;
    const boxY = bottom - height;

    // Leader line from the group's position to the box, plus a dot on the group.
    ctx.strokeStyle = "rgba(0, 0, 0, 0.85)";
    ctx.lineWidth = 1 * scale;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(boxX, boxY + height / 2);
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
    ctx.beginPath();
    ctx.arc(cx, cy, 2.5 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Light backing so the black text stays legible over the game.
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fillRect(boxX, boxY, width, height);

    ctx.fillStyle = "#000000";
    all.forEach((text, i) => {
      ctx.font = `${i === 0 ? "bold " : ""}${fontSize}px ui-monospace, Menlo, monospace`;
      ctx.fillText(text, boxX + pad, boxY + pad + i * lineHeight);
    });

    bottom = boxY - stackGap;
  }
  ctx.restore();
}

// Scalar/enum/boolean values anchored to the bottom-left, growing upward. Lines
// keep their reading order within each column; once a column fills the canvas
// height it wraps into a new column to the right.
export function drawPanel(ctx: CanvasRenderingContext2D, lines: PanelLine[], scale: number): void {
  if (lines.length === 0) { return; }

  const padding = 8 * scale;
  const lineHeight = 19 * scale;
  const fontSize = 15 * scale;
  const columnGap = 14 * scale;

  const fontFor = (header?: boolean) => `${header ? "bold " : ""}${fontSize}px ui-monospace, Menlo, monospace`;
  const perColumn = Math.max(1, Math.floor((ctx.canvas.height - padding * 2) / lineHeight));

  ctx.save();
  ctx.textBaseline = "top";

  let x = padding;
  for (let start = 0; start < lines.length; start += perColumn) {
    const columnLines = lines.slice(start, start + perColumn);
    // Size each column's backing strips to its widest line so text never spills.
    const columnWidth = Math.max(...columnLines.map((line) => {
      ctx.font = fontFor(line.header);
      return ctx.measureText(line.text).width;
    }));
    // Bottom-anchor the column: its last line sits just above the bottom padding.
    const top = ctx.canvas.height - padding - columnLines.length * lineHeight;

    columnLines.forEach((line, i) => {
      const y = top + i * lineHeight;
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.fillRect(x - 2 * scale, y, columnWidth + 4 * scale, lineHeight);
      ctx.fillStyle = "#000000";
      ctx.font = fontFor(line.header);
      ctx.fillText(line.text, x, y + 2 * scale);
    });

    x += columnWidth + columnGap;
  }
  ctx.restore();
}

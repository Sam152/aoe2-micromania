export function circle(ctx, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}
//# sourceMappingURL=shapes.js.map
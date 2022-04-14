import {GamePosition} from "../../types";

export function circle(ctx: CanvasRenderingContext2D, position: GamePosition, radius: number) {
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}

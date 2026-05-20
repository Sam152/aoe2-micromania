import { Rectangle } from "../../types.d.ts";
import { CompassDirection } from "../units/CompassDirection.ts";
import { anchorAt } from "../util/anchorAt.ts";
import { AnimationStyle } from "../units/AnimationStyle.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { ticksForAnimation } from "../util/ticksForAnimation.ts";
import { Frame } from "./smx/renderSmx.ts";

export class SmxAnimation {
  private id: string;
  private directions: number = 16;
  private smxFramesCount: number;
  framesPerAngle: number;
  private rendered: Frame[];

  constructor(id: string, smxFramesCount: number, rendered: Frame[]) {
    this.id = id;
    this.rendered = rendered;
    this.smxFramesCount = smxFramesCount;
    this.framesPerAngle = Math.floor(this.smxFramesCount / this.directions);
  }

  drawFrame(context: CanvasRenderingContext2D, at: Vector2, frameIndex: number, rotate: number | null = null) {
    const frame = this.rendered[frameIndex % this.smxFramesCount];
    const bitmap = frame.renders[1];

    if (rotate) {
      context.save();
      context.translate(at.x, at.y);
      context.rotate(rotate);
      context.translate(-at.x, -at.y);
      context.drawImage(bitmap, at.x, at.y);
      context.restore();
    } else {
      context.drawImage(bitmap, at.x, at.y);
    }
  }

  animateAsset(
    context: CanvasRenderingContext2D,
    at: Vector2,
    animationDuration: number,
    unitStateTickCount: number,
    style: AnimationStyle = AnimationStyle.Loop,
  ) {
    const totalTicksForAnimation = ticksForAnimation(animationDuration);
    const percentageOfAnimationComplete = style === AnimationStyle.Loop
      ? (unitStateTickCount % totalTicksForAnimation) / totalTicksForAnimation
      : Math.min(unitStateTickCount / totalTicksForAnimation, 1);

    // For a total of N frames to render, pick a number between 0 to N-1 as an index for the frame to select.
    const frameIndexToRender = Math.floor(percentageOfAnimationComplete * (this.smxFramesCount - 1));

    const frame = this.rendered[frameIndexToRender];
    const bitmap = frame.renders[1];

    const anchoredPosition = anchorAt({ x: frame.centerX, y: frame.centerY }, at);
    context.drawImage(bitmap, anchoredPosition.x, anchoredPosition.y);

    return {
      p1: new Vector2(anchoredPosition.x, anchoredPosition.y),
      p2: new Vector2(anchoredPosition.x + frame.width, anchoredPosition.y + frame.height),
    };
  }

  animatePlayerAsset(
    context: CanvasRenderingContext2D,
    at: Vector2,
    animationDuration: number,
    unitStateTickCount: number,
    player: number,
    direction: CompassDirection,
    style: AnimationStyle,
  ): Rectangle {
    const totalTicksForAnimation = ticksForAnimation(animationDuration);

    const percentageOfAnimationComplete = style === AnimationStyle.Loop
      ? (unitStateTickCount % totalTicksForAnimation) / totalTicksForAnimation
      : Math.min(unitStateTickCount / totalTicksForAnimation, 1);

    // For a total of N frames to render, pick a number between 0 to N-1 as an index for the frame to select.
    const frameIndexToRender = Math.floor(percentageOfAnimationComplete * (this.framesPerAngle - 1));
    const directionAdjustedFrameIndexToRender = frameIndexToRender + this.framesPerAngle * Math.abs(direction);

    const frame = this.rendered[directionAdjustedFrameIndexToRender];
    const bitmap = frame.renders[player];

    const anchoredPosition = anchorAt({ x: frame.centerX, y: frame.centerY }, at);

    if (frame.shadow) {
      const anchoredShadow = anchorAt({ x: frame.shadowCenterX, y: frame.shadowCenterY }, at);
      context.drawImage(frame.shadow, anchoredShadow.x, anchoredShadow.y);
    }

    context.drawImage(bitmap, anchoredPosition.x, anchoredPosition.y);

    return {
      p1: new Vector2(anchoredPosition.x, anchoredPosition.y),
      p2: new Vector2(anchoredPosition.x + frame.width, anchoredPosition.y + frame.height),
    };
  }

  getFramesCount(): number {
    return this.rendered.length;
  }
}

import {Rectangle, RenderedSlpFrame} from '../../types';
import CompassDirection from '../units/CompassDirection';
import anchorAt from '../util/anchorAt';
import AnimationStyle from '../units/AnimationStyle';
import {Vector2} from 'three';
import ticksForAnimation from '../util/ticksForAnimation';

const SLP = require('genie-slp');

export default class Slp {
    private id: string;
    private frames: RenderedSlpFrame[];
    private slp: typeof SLP;
    private directions: number = 5;
    framesPerAngle: number;

    constructor(id: string, slp: typeof SLP, frames: RenderedSlpFrame[]) {
        this.id = id;
        this.frames = frames;
        this.slp = slp;
        this.framesPerAngle = this.slp.numFrames / this.directions;
    }

    drawFrame(
        context: CanvasRenderingContext2D,
        at: Vector2,
        frameIndex: number,
        rotate: number | null = null,
    ) {
        const frame = this.frames[frameIndex % this.frames.length];
        const bitmap = frame.rendered[1];

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
        const percentageOfAnimationComplete = style === AnimationStyle.Loop ?
            (unitStateTickCount % totalTicksForAnimation) / totalTicksForAnimation :
            Math.min(unitStateTickCount / totalTicksForAnimation, 1);

        // For a total of N frames to render, pick a number between 0 to N-1 as an index for the frame to select.
        const frameIndexToRender = Math.floor(percentageOfAnimationComplete * (this.slp.numFrames - 1));

        const frame = this.frames[frameIndexToRender];
        const bitmap = frame.rendered[1];

        const anchoredPosition = anchorAt(frame.hotspot, at);
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

        const percentageOfAnimationComplete = style === AnimationStyle.Loop ?
            (unitStateTickCount % totalTicksForAnimation) / totalTicksForAnimation :
            Math.min(unitStateTickCount / totalTicksForAnimation, 1);

        // For a total of N frames to render, pick a number between 0 to N-1 as an index for the frame to select.
        const frameIndexToRender = Math.floor(percentageOfAnimationComplete * (this.framesPerAngle - 1));
        const directionAdjustedFrameIndexToRender = frameIndexToRender + (this.framesPerAngle * Math.abs(direction));

        const frame = this.frames[directionAdjustedFrameIndexToRender];
        const bitmap = frame.rendered[player];

        const flipped = direction < 0;
        const anchoredPosition = anchorAt(frame.hotspot, at, flipped);

        if (flipped) {
            const originalTransform = context.getTransform();
            context.setTransform(-1, 0, 0, 1, originalTransform.e, originalTransform.f);
            context.drawImage(bitmap, -1 * anchoredPosition.x, anchoredPosition.y);
            context.setTransform(originalTransform);
        } else {
            context.drawImage(bitmap, anchoredPosition.x, anchoredPosition.y);
        }

        return {
            p1: new Vector2(anchoredPosition.x - (flipped ? frame.width : 0), anchoredPosition.y),
            p2: new Vector2(anchoredPosition.x - (flipped ? frame.width : 0) + frame.width, anchoredPosition.y + frame.height),
        };
    }

    getWidth(): number {
        return this.slp.frames[0].width;
    }

    getHeight(): number {
        return this.slp.frames[0].height;
    }

    getFramesCount(): number {
        return this.frames.length;
    }
}

import {Rectangle, RenderedSlpFrame} from '../../types';
import CompassDirection from '../units/CompassDirection';
import anchorAt from '../util/anchorAt';
import AnimationStyle from '../units/AnimationStyle';
import {Vector2} from 'three/src/math/Vector2';
import ticksForAnimation from '../util/ticksForAnimation';
import Smx from "genie-smx";

export default class SmxAnimation {
    private id: string;
    private directions: number = 16;
    framesPerAngle: number;
    private smx: Smx;
    private rendered: RenderedSlpFrame[];

    constructor(id: string, smx: Smx, rendered: RenderedSlpFrame[]) {
        this.id = id;
        this.rendered = rendered;
        this.smx = smx;
        this.framesPerAngle = Math.floor(this.smx.getFramesCount() / this.directions);
    }

    drawFrame(
        context: CanvasRenderingContext2D,
        at: Vector2,
        frameIndex: number,
        rotate: number | null = null,
    ) {
        const frame = this.rendered[frameIndex % this.smx.getFramesCount()];
        const bitmap = frame.playerRenders[1];

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
        const frameIndexToRender = Math.floor(percentageOfAnimationComplete * (this.smx.getFramesCount() - 1));

        const frame = this.rendered[frameIndexToRender];
        const bitmap = frame.playerRenders[1];
        const layer = frame.frameDefinition.layers[0];

        const anchoredPosition = anchorAt({
            x: layer.centerX,
            y: layer.centerY,
        }, at);
        context.drawImage(bitmap, anchoredPosition.x, anchoredPosition.y);

        return {
            p1: new Vector2(anchoredPosition.x, anchoredPosition.y),
            p2: new Vector2(anchoredPosition.x + layer.width, anchoredPosition.y + layer.height),
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

        const frame = this.rendered[directionAdjustedFrameIndexToRender];
        const bitmap = frame.playerRenders[player];

        const anchoredPosition = anchorAt({
            x: frame.frameDefinition.layers[0].centerX,
            y: frame.frameDefinition.layers[0].centerY,
        }, at);

        if (frame.shadowRender) {
            const anchoredShadow = anchorAt({
                x: frame.frameDefinition.layers[1].centerX,
                y: frame.frameDefinition.layers[1].centerY,
            }, at);
            context.drawImage(frame.shadowRender, anchoredShadow.x, anchoredShadow.y);
        }

        context.drawImage(bitmap, anchoredPosition.x, anchoredPosition.y);

        const frameLayer = frame.frameDefinition.layers[0];
        return {
            p1: new Vector2(anchoredPosition.x, anchoredPosition.y),
            p2: new Vector2(anchoredPosition.x + frameLayer.width, anchoredPosition.y + frameLayer.height),
        };
    }

    getFramesCount(): number {
        return this.rendered.length;
    }
}

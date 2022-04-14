import {GamePosition, RenderedSlpFrame} from '../../types';
import {gameSpeed, ticksPerSecond} from '../state/LocalStateManager';
import CompassDirection from '../game/CompassDirection';
import anchorAt from '../util/anchorAt';
import AnimationStyle from './AnimationStyle';

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

    draw(
        context: CanvasRenderingContext2D,
        at: GamePosition,
        animationDuration: number,
        unitStateTickCount: number,
        player: number,
        direction: CompassDirection,
        style: AnimationStyle,
    ) {
        // @todo, can some of this be pre-computed?
        const gameSpeedAdjustedAnimationDuration = animationDuration / gameSpeed;
        const millisecondsForEachFramePassing = (1000 / ticksPerSecond);
        const totalMillisecondsRequiredForWholeAnimation = (gameSpeedAdjustedAnimationDuration * 1000);
        const totalFramesForAnimation = totalMillisecondsRequiredForWholeAnimation / millisecondsForEachFramePassing;

        const percentageOfAnimationComplete = style === AnimationStyle.Loop ?
            (unitStateTickCount % totalFramesForAnimation) / totalFramesForAnimation :
            Math.min(unitStateTickCount / totalFramesForAnimation, 1);

        // For a total of N frames to render, pick a number between 0 to N-1 as an index for the frame to select.
        const frameIndexToRender = Math.floor(percentageOfAnimationComplete * (this.framesPerAngle - 1));
        const directionAdjustedFrameIndexToRender = frameIndexToRender + (this.framesPerAngle * Math.abs(direction));

        const frame = this.frames[directionAdjustedFrameIndexToRender];
        const bitmap = frame.rendered[player];

        const flipped = direction < 0;
        const anchoredPosition = anchorAt(frame.hotspot, at, flipped);

        if (flipped) {
            const originalTransform = context.getTransform();
            context.setTransform(-1, 0, 0, 1, 0, 0);
            context.drawImage(bitmap, -1 * anchoredPosition.x, anchoredPosition.y);
            context.setTransform(originalTransform);
        } else {
            context.drawImage(bitmap, anchoredPosition.x, anchoredPosition.y);
        }
    }
}

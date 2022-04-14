import {GamePosition, RenderedSlpFrame} from '../../types';
import {gameSpeed, ticksPerSecond} from "../state/LocalStateManager";
import CompassDirection from "../game/CompassDirection";
import anchorAt from "../util/anchorAt";

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

        this.framesPerAngle =  this.slp.numFrames / this.directions;
    }

    draw(context: CanvasRenderingContext2D, at: GamePosition, animationDuration: number, gameTickCount: number, player: number, direction: CompassDirection) {
        // @todo, can some of this be pre-computed?
        const gameSpeedAdjustedAnimationDuration = animationDuration / gameSpeed;
        const millisecondsForEachFramePassing = (1000 / ticksPerSecond);
        const totalMillisecondsRequiredForWholeAnimation = (gameSpeedAdjustedAnimationDuration * 1000);
        const totalFramesForAnimation = totalMillisecondsRequiredForWholeAnimation / millisecondsForEachFramePassing;
        const percentageOfAnimationComplete = (gameTickCount % totalFramesForAnimation) / totalFramesForAnimation;

        const frameIndexToRender = Math.floor((percentageOfAnimationComplete * this.framesPerAngle));
        const directionAdjustedFrameIndexToRender = frameIndexToRender + this.framesPerAngle * Math.abs(direction);

        const frame = this.frames[directionAdjustedFrameIndexToRender];
        const bitmap = frame.rendered[player];

        const flipped = direction < 0
        const anchoredPosition = anchorAt(frame.hotspot, at, flipped);
        if (flipped) {
            const originalTransform = context.getTransform();
            context.setTransform(-1, 0, 0, 1, 0, 0);
            context.drawImage(bitmap, -1 * anchoredPosition.x, anchoredPosition.y);
            context.setTransform(originalTransform);
        }
        else {
            context.drawImage(bitmap, anchoredPosition.x, anchoredPosition.y);
        }
    }

}

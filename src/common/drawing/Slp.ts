import {GamePosition, RenderedSlpFrame} from '../../types';
import {gameSpeed, ticksPerSecond} from "../state/LocalStateManager";

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

    draw(context: CanvasRenderingContext2D, at: GamePosition, animationDuration: number, frameNumber: number, player: number) {

        const gameSpeedAdjustedAnimationDuration = animationDuration / gameSpeed;

        const millisecondsForEachFramePassing = (1000 / ticksPerSecond);
        const totalMillisecondsRequiredForWholeAnimation = (gameSpeedAdjustedAnimationDuration * 1000);

        const totalFramesForAnimation = totalMillisecondsRequiredForWholeAnimation / millisecondsForEachFramePassing;

        const percentageOfAnimationComplete = (frameNumber % totalFramesForAnimation) / totalFramesForAnimation;

        const frameIndexToRender = Math.floor((percentageOfAnimationComplete * this.framesPerAngle));

        const frame = this.frames[frameIndexToRender];
        const bitmap = frame.rendered[player];
        context.drawImage(bitmap, at.x, at.y);
    }

}

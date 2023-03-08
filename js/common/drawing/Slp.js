import { gameSpeed, ticksPerSecond } from "../state/LocalStateManager";
import anchorAt from "../util/anchorAt";
import AnimationStyle from "./AnimationStyle";
var SLP = require('genie-slp');
var Slp = (function () {
    function Slp(id, slp, frames) {
        this.directions = 5;
        this.id = id;
        this.frames = frames;
        this.slp = slp;
        this.framesPerAngle = this.slp.numFrames / this.directions;
    }
    Slp.prototype.draw = function (context, at, animationDuration, unitStateTickCount, player, direction, style) {
        var gameSpeedAdjustedAnimationDuration = animationDuration / gameSpeed;
        var millisecondsForEachFramePassing = (1000 / ticksPerSecond);
        var totalMillisecondsRequiredForWholeAnimation = (gameSpeedAdjustedAnimationDuration * 1000);
        var totalFramesForAnimation = totalMillisecondsRequiredForWholeAnimation / millisecondsForEachFramePassing;
        var percentageOfAnimationComplete = style === AnimationStyle.Loop
            ? (unitStateTickCount % totalFramesForAnimation) / totalFramesForAnimation
            : Math.min(unitStateTickCount / totalFramesForAnimation, 1);
        var frameIndexToRender = Math.floor(percentageOfAnimationComplete * (this.framesPerAngle - 1));
        var directionAdjustedFrameIndexToRender = frameIndexToRender + (this.framesPerAngle * Math.abs(direction));
        var frame = this.frames[directionAdjustedFrameIndexToRender];
        var bitmap = frame.rendered[player];
        var flipped = direction < 0;
        var anchoredPosition = anchorAt(frame.hotspot, at, flipped);
        if (flipped) {
            var originalTransform = context.getTransform();
            context.setTransform(-1, 0, 0, 1, 0, 0);
            context.drawImage(bitmap, -1 * anchoredPosition.x, anchoredPosition.y);
            context.setTransform(originalTransform);
        }
        else {
            context.drawImage(bitmap, anchoredPosition.x, anchoredPosition.y);
        }
    };
    return Slp;
}());
export default Slp;
//# sourceMappingURL=Slp.js.map
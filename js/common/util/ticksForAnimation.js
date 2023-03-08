import config from '../config';
export default function ticksForAnimation(animationDuration) {
    var gameSpeedAdjustedAnimationDuration = animationDuration / config.gameSpeed;
    var millisecondsForEachFramePassing = (1000 / config.ticksPerSecond);
    var totalMillisecondsRequiredForWholeAnimation = (gameSpeedAdjustedAnimationDuration * 1000);
    var totalTicksForAnimation = totalMillisecondsRequiredForWholeAnimation / millisecondsForEachFramePassing;
    return Math.ceil(totalTicksForAnimation);
}
//# sourceMappingURL=ticksForAnimation.js.map
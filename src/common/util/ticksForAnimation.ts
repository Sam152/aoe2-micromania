import config from "../config";

export default function ticksForAnimation(animationDuration: number): number {
    const gameSpeedAdjustedAnimationDuration = animationDuration / config.gameSpeed;
    const millisecondsForEachFramePassing = (1000 / config.ticksPerSecond);
    const totalMillisecondsRequiredForWholeAnimation = (gameSpeedAdjustedAnimationDuration * 1000);
    const totalTicksForAnimation = totalMillisecondsRequiredForWholeAnimation / millisecondsForEachFramePassing;
    return Math.ceil(totalTicksForAnimation);
}

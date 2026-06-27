export function roundRobinSize(
  playerCount: number,
): number {
  return (playerCount * (playerCount - 1)) / 2;
}

export function roundRobin<TPlayer, TResult>(
  players: TPlayer[],
  matchUp: (p1: TPlayer, p2: TPlayer) => TResult,
): TResult[] {
  return players.flatMap((p1, i) => players.slice(i + 1).map((p2) => matchUp(p1, p2)));
}

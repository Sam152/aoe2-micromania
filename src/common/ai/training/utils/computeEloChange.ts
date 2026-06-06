const K = 32;

export function computeEloChange(elos: [number, number], winner: 1 | 2): [number, number] {
  const [elo1, elo2] = elos;
  const expected1 = 1 / (1 + Math.pow(10, (elo2 - elo1) / 400));
  const expected2 = 1 - expected1;
  const score1 = winner === 1 ? 1 : 0;
  const score2 = winner === 2 ? 1 : 0;
  return [
    Math.round(K * (score1 - expected1)),
    Math.round(K * (score2 - expected2)),
  ];
}

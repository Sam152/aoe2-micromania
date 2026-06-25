export type Probabilities<T> = Array<{
  probability: number;
  effect: T;
}>;

export function withProbability<T>(probabilities: Probabilities<T>): T {
  const total = probabilities.reduce((sum, { probability }) => sum + probability, 0);

  let roll = Math.random() * total;
  for (const { probability, effect } of probabilities) {
    roll -= probability;
    if (roll < 0) {
      return effect;
    }
  }

  return probabilities[probabilities.length - 1].effect;
}

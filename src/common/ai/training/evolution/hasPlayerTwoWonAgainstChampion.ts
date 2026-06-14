import { GameResult } from "../utils/determineWinner.ts";

/**
 * What is considered a win? Do you have to win by some amount? Completely wipe out
 * opponent? Tune this to favor aggression, defense etc.
 */
export function hasPlayerTwoWonAgainstChampion(result: GameResult) {
  return result.winner === 2 && result.hp[2] - result.hp[1] > 250;
}

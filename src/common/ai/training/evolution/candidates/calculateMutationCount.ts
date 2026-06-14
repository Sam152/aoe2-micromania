import { params } from "../../params.ts";

const { NEXT_GENERATION_RANDOM_MUTATIONS, NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT } = params;

type CalculateMutationCountArgs = {
  /**
   * How many attempts we've made without finding a winner since the last one was found.
   * The longer we've been stuck, the further we're willing to reach from the champion.
   */
  iterationsSinceLastWin: number;

  /**
   * A random value in [0, 1). Injected so the function stays pure and testable; defaults
   * to Math.random() for normal use.
   */
  random?: number;
};

/**
 * Decides how many mutations to apply to a candidate.
 *
 * How "stuck" we are drives a growing ceiling on the search radius — the longer we go
 * without a win, the further from the champion we permit candidates to drift. The actual
 * count is then sampled in [1, ceiling] biased toward small radii (via `random ** 2`), so
 * we keep hammering the productive close-in region while sending the occasional long-range
 * probe. Growing the ceiling adds search space without abandoning the cheap wins.
 */
export function calculateMutationCount(
  { iterationsSinceLastWin, random = Math.random() }: CalculateMutationCountArgs,
): number {
  const ceiling = NEXT_GENERATION_RANDOM_MUTATIONS *
    (Math.floor(iterationsSinceLastWin / NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT) + 1);

  return 1 + Math.floor((random ** 2) * ceiling);
}

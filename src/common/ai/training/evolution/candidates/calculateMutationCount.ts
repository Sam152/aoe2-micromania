import { params } from "../../params.ts";
import { randomArray } from "../../../../util/randomArray.ts";

const {
  NEXT_GENERATION_RANDOM_MUTATIONS,
  NEXT_GENERATION_RANDOM_MUTATIONS_ITERATION_COUNT_INCREASE_THRESHOLD,
} = params;

type CalculateMutationCountArgs = {
  iterationsSinceLastWin: number;
  random?: number;
};

export function calculateMutationCount(
  { iterationsSinceLastWin }: CalculateMutationCountArgs,
): number {
  if (iterationsSinceLastWin > NEXT_GENERATION_RANDOM_MUTATIONS_ITERATION_COUNT_INCREASE_THRESHOLD) {
    return randomArray([
      NEXT_GENERATION_RANDOM_MUTATIONS,
      NEXT_GENERATION_RANDOM_MUTATIONS * 2,
    ]);
  }
  return NEXT_GENERATION_RANDOM_MUTATIONS;
}

import { params } from "../../params.ts";

const {
  NEXT_GENERATION_RANDOM_MUTATIONS,
  NEXT_GENERATION_RANDOM_MUTATIONS_ITERATION_COUNT_INCREASE_THRESHOLD,
} = params;

type CalculateMutationCountArgs = {
  iterationsSinceLastWin: number;
};

export function calculateMutationCount(
  { iterationsSinceLastWin }: CalculateMutationCountArgs,
): number {
  const factor = Math.min(
    3,
    iterationsSinceLastWin > 0
      ? Math.ceil(iterationsSinceLastWin / NEXT_GENERATION_RANDOM_MUTATIONS_ITERATION_COUNT_INCREASE_THRESHOLD)
      : 1,
  );

  return NEXT_GENERATION_RANDOM_MUTATIONS * factor;
}

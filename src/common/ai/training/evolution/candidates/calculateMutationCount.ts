import { params } from "../../params.ts";

const { NEXT_GENERATION_RANDOM_MUTATIONS, NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT } = params;

type CalculateMutationCountArgs = {
  iterationsSinceLastWin: number;
  random?: number;
};

export function calculateMutationCount(
  { iterationsSinceLastWin, random = Math.random() }: CalculateMutationCountArgs,
): number {
  const ceiling = NEXT_GENERATION_RANDOM_MUTATIONS *
    (Math.floor(iterationsSinceLastWin / NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT) + 1);

  return Math.min(1 + Math.floor((random ** 2) * ceiling), 20);
}

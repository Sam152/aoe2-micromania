import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "../../mutation/randomlyMutateUnitAwareBehaviourTree.ts";
import { determineWinner } from "../utils/determineWinner.ts";

const TOTAL_MUTATIONS = 50;

type BreedNextGenArgs = {
  specimens: UnitAwareBehaviourTree[];
  newPlayersRequired: number;
};

export function breedNextGeneration(
  { specimens, newPlayersRequired }: BreedNextGenArgs,
): UnitAwareBehaviourTree[] {
  const formatter = createProgressFormatter({ totalIterations: newPlayersRequired });

  let currentSpecimenIndex = 0;
  const nextGen: UnitAwareBehaviourTree[] = [];

  while (nextGen.length < newPlayersRequired) {
    const currentSpecimen = specimens[currentSpecimenIndex % specimens.length];
    const mutatedTree = randomlyMutateUnitAwareBehaviourTree({ tree: currentSpecimen, count: TOTAL_MUTATIONS });

    const result = determineWinner({
      player1: currentSpecimen,
      player2: mutatedTree,
    });

    if (result.winner === 2) {
      nextGen.push(mutatedTree);
      formatter.advance();
      currentSpecimenIndex++;
    }
  }

  return nextGen;
}

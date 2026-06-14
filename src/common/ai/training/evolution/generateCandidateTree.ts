import { params } from "../params.ts";
import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { randomlyMutateTree } from "../../mutation/randomlyMutateTree.ts";
import { Coinflip, coinflip } from "../../../util/coinflip.ts";

const { NEXT_GENERATION_RANDOM_MUTATIONS, NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT } = params;

type GenerateCandidateTreeArgs = {
  /**
   * The number of attempts we've made to generate a candidate that can beat the current champion pool.
   */
  iterationCount: number;

  /**
   * The current champion list.
   */
  champions: Bot[];
};

export function generateCandidateTree(
  { iterationCount, champions }: GenerateCandidateTreeArgs,
): UnitAwareBehaviourTree {
  const startingPoint = champions.at(0)!;

  // Increase the mutations, as the number of search iterations increases.
  const totalMutations = NEXT_GENERATION_RANDOM_MUTATIONS *
    (Math.floor(iterationCount / NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT) + 1);

  return randomlyMutateUnitAwareBehaviourTree({
    tree: startingPoint.tree,
    count: totalMutations,
  });
}

export function randomlyMutateUnitAwareBehaviourTree(
  { count, tree }: { count: number; tree: UnitAwareBehaviourTree },
): UnitAwareBehaviourTree {
  const [a, b, c] = flipUntilAtLeastOneHeads();

  // Don't always mutate all trees, we might have a strong tree for one unit that does
  // not want to be mutated.
  return {
    [UnitType.Archer]: a === "HEADS"
      ? randomlyMutateTree({ count, tree: tree[UnitType.Archer], unitType: UnitType.Archer })
      : tree[UnitType.Archer],
    [UnitType.Mangonel]: b === "HEADS"
      ? randomlyMutateTree({ count, tree: tree[UnitType.Mangonel], unitType: UnitType.Mangonel })
      : tree[UnitType.Mangonel],
    [UnitType.Monk]: c === "HEADS"
      ? randomlyMutateTree({ count, tree: tree[UnitType.Monk], unitType: UnitType.Monk })
      : tree[UnitType.Monk],
  };
}

function flipUntilAtLeastOneHeads(): [Coinflip, Coinflip, Coinflip] {
  while (true) {
    const flips: [Coinflip, Coinflip, Coinflip] = [coinflip(), coinflip(), coinflip()];
    if (flips.some((flip) => flip === "HEADS")) {
      return flips;
    }
  }
}

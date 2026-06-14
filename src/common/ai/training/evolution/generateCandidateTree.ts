import { params } from "../params.ts";
import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { randomlyMutateTree } from "../../mutation/randomlyMutateTree.ts";
import { Coinflip, coinflip } from "../../../util/coinflip.ts";

const { NEXT_GENERATION_RANDOM_MUTATIONS, NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT } = params;

type GenerateCandidateTreeArgs = {
  /**
   * How many attempts we've made without finding a winner since the last one was found.
   * The longer we've been stuck, the further we're willing to reach from the champion.
   */
  iterationsSinceLastWin: number;

  /**
   * The current champion list.
   */
  champions: Bot[];
};

export function generateCandidateTree(
  { iterationsSinceLastWin, champions }: GenerateCandidateTreeArgs,
): UnitAwareBehaviourTree {
  const startingPoint = champions.at(0)!;

  // How "stuck" are we — drives how far we're willing to reach from the champion.
  // The longer we go without a win, the larger the search radius we permit.
  const ceiling = NEXT_GENERATION_RANDOM_MUTATIONS *
    (Math.floor(iterationsSinceLastWin / NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT) + 1);

  // Sample a mutation count in [1, ceiling], biased toward small radii: keep hammering
  // the productive close-in region while sending the occasional long-range probe. This
  // way growing the ceiling adds search space without abandoning the cheap wins.
  const count = 1 + Math.floor((Math.random() ** 2) * ceiling);

  if (iterationsSinceLastWin % 5000 === 0) {
    console.log(`Chosen mutation count at ${iterationsSinceLastWin} iterations since last win was: ${count}`);
  }

  return randomlyMutateUnitAwareBehaviourTree({
    tree: startingPoint.tree,
    count,
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

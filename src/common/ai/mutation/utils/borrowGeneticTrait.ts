import { BehaviourTreeNode, BehaviourTreeNodeType } from "../../behaviourTree/BehaviourTree.ts";
import { Bot } from "../../training/infra/repo/utils/botRowToBot.ts";
import { flattenTree } from "./flattenTree.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { randomArray } from "../../../util/randomArray.ts";
import { params } from "../../training/params.ts";

const { TRAIT_BORROWING_FROM_LAST_N_GENERATIONS } = params;

/**
 * Previous bots is a result of getAllInactiveBots().
 */
export function borrowGeneticTrait(
  { previousBots, types, unitType }: {
    types: BehaviourTreeNodeType[];
    previousBots: Pick<Bot, "tree" | "generation">[];
    unitType: UnitType;
  },
): BehaviourTreeNode | undefined {
  const bot = getCandidateBotsFromPrevious(previousBots);
  if (!bot) {
    return;
  }

  const candidateNodes = flattenTree(bot.tree[unitType])
    .filter((node) => types.includes(node.node.nodeType as BehaviourTreeNodeType));

  // Some bots won't have any candidates.
  if (candidateNodes.length === 0) {
    return;
  }

  return structuredClone(randomArray(candidateNodes).node) as BehaviourTreeNode;
}

function getCandidateBotsFromPrevious(
  previousBots: Pick<Bot, "tree" | "generation">[],
): Pick<Bot, "tree" | "generation"> | undefined {
  if (previousBots.length === 0) {
    return;
  }

  const latestGeneration = Math.max(...previousBots.map((bot) => bot.generation));
  const recentBots = previousBots.filter((bot) =>
    bot.generation > latestGeneration - TRAIT_BORROWING_FROM_LAST_N_GENERATIONS
  );
  return randomArray(recentBots);
}

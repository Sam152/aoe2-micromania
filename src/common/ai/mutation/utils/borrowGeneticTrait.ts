import { BehaviourTreeNode, BehaviourTreeNodeType } from "../../behaviourTree/BehaviourTree.ts";
import { Bot } from "../../training/infra/repo/utils/botRowToBot.ts";
import { flattenTree, FlatTreeNode } from "./flattenTree.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { randomArray } from "../../../util/randomArray.ts";
import { createMemoryCache } from "../../training/utils/createMemoryCache.ts";

const botCache = createMemoryCache<FlatTreeNode[]>();

/**
 * Previous bots is a result of getAllInactiveBots().
 */
export function borrowGeneticTrait(
  { borrowBots, types, unitType }: {
    types: BehaviourTreeNodeType[];
    borrowBots: Pick<Bot, "tree" | "id">[];
    unitType: UnitType;
  },
): BehaviourTreeNode | undefined {
  const bot = borrowBots.length > 0 ? randomArray(borrowBots) : undefined;
  if (!bot) {
    return;
  }

  const candidateNodes = botCache(`${bot.id}:${unitType}`, () =>
    flattenTree(bot.tree[unitType])
      .filter((node) => types.includes(node.node.nodeType as BehaviourTreeNodeType)));

  // Some bots won't have any candidates.
  if (candidateNodes.length === 0) {
    return;
  }

  return structuredClone(randomArray(candidateNodes).node) as BehaviourTreeNode;
}

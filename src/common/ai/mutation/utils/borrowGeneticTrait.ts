import { BehaviourTreeNode, BehaviourTreeNodeType } from "../../behaviourTree/BehaviourTree.ts";
import { Bot } from "../../training/infra/repo/utils/botRowToBot.ts";
import { flattenTree } from "./flattenTree.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { randomArray } from "../../../util/randomArray.ts";

/**
 * Previous bots is a result of getAllInactiveBots().
 */
export function borrowGeneticTrait(
  { previousBots, types, unitType }: { types: BehaviourTreeNodeType[]; previousBots: Bot[]; unitType: UnitType },
): BehaviourTreeNode | undefined {
  const bot = getCandidateBotsFromPrevious(previousBots);
  const candidateNodes = flattenTree(bot.tree[unitType])
    .filter((node) => types.includes(node.node.nodeType as BehaviourTreeNodeType));

  // Some bots won't have any candidates.
  if (candidateNodes.length === 0) {
    return;
  }

  return randomArray(candidateNodes).node as BehaviourTreeNode;
}

function getCandidateBotsFromPrevious(previousBots: Bot[]): Bot {
  // Select a random bot from the last 5 generations.
  // That is, if we have gen 1 to 10, select generations 6,7,8,9,10 and a random bot from any of those generations.
}

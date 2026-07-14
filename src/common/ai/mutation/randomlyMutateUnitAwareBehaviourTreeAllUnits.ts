import { UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { randomlyMutateTree } from "./randomlyMutateTree.ts";
import { Bot } from "../training/infra/repo/utils/botRowToBot.ts";

export function randomlyMutateUnitAwareBehaviourTreeAllUnits(
  { count, tree, borrowBots }: {
    count: number;
    tree: UnitAwareBehaviourTree;
    borrowBots: Pick<Bot, "tree" | "id">[];
  },
): UnitAwareBehaviourTree {
  return {
    [UnitType.Archer]: randomlyMutateTree({
      count,
      tree: tree[UnitType.Archer],
      unitType: UnitType.Archer,
      borrowBots,
    }),
    [UnitType.Mangonel]: randomlyMutateTree({
      count,
      tree: tree[UnitType.Mangonel],
      unitType: UnitType.Mangonel,
      borrowBots,
    }),
    [UnitType.Monk]: randomlyMutateTree({
      count,
      tree: tree[UnitType.Monk],
      unitType: UnitType.Monk,
      borrowBots,
    }),
  };
}

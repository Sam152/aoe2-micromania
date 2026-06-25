import { UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { randomlyMutateTree } from "./randomlyMutateTree.ts";
import { Bot } from "../training/infra/repo/utils/botRowToBot.ts";

export function randomlyMutateUnitAwareBehaviourTreeAllUnits(
  { count, tree, previousBots }: { count: number; tree: UnitAwareBehaviourTree; previousBots: Bot[] },
): UnitAwareBehaviourTree {
  return {
    [UnitType.Archer]: randomlyMutateTree({
      count,
      tree: tree[UnitType.Archer],
      unitType: UnitType.Archer,
      previousBots,
    }),
    [UnitType.Mangonel]: randomlyMutateTree({
      count,
      tree: tree[UnitType.Mangonel],
      unitType: UnitType.Mangonel,
      previousBots,
    }),
    [UnitType.Monk]: randomlyMutateTree({ count, tree: tree[UnitType.Monk], unitType: UnitType.Monk, previousBots }),
  };
}

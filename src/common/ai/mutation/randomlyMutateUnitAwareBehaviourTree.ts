import { UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { randomlyMutateTree } from "./randomlyMutateTree.ts";

export function randomlyMutateUnitAwareBehaviourTree(
  { count, tree }: { count: number; tree: UnitAwareBehaviourTree },
): UnitAwareBehaviourTree {
  return {
    [UnitType.Archer]: randomlyMutateTree({ count, tree: tree[UnitType.Archer], unitType: UnitType.Archer }),
    [UnitType.Mangonel]: randomlyMutateTree({ count, tree: tree[UnitType.Mangonel], unitType: UnitType.Mangonel }),
    [UnitType.Monk]: randomlyMutateTree({ count, tree: tree[UnitType.Monk], unitType: UnitType.Monk }),
  };
}

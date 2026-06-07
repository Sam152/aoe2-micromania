import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { flattenTree } from "../../mutation/utils/flattenTree.ts";

export function countUnitAwareBehaviourTreeNodes(tree: UnitAwareBehaviourTree): number {
  return flattenTree(tree[UnitType.Archer]).length +
    flattenTree(tree[UnitType.Monk]).length +
    flattenTree(tree[UnitType.Mangonel]).length;
}

import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const emptyTree: UnitAwareBehaviourTree = {
  [UnitType.Monk]: {
    nodeType: "selector",
    nodes: [],
  },
  [UnitType.Archer]: {
    nodeType: "selector",
    nodes: [],
  },
  [UnitType.Mangonel]: {
    nodeType: "selector",
    nodes: [],
  },
};

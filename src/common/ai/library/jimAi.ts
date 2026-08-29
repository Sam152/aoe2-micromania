import { UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../units/UnitType.ts";

export const jimAi: UnitAwareBehaviourTree = {
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

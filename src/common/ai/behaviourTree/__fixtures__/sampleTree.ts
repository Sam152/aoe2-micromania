import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const sampleTree: UnitAwareBehaviourTree = {
  [UnitType.Monk]: {
    nodeType: "sequence",
    nodes: [
      {
        nodeType: "action",
        type: "IDLE",
        params: {
          forTicksAmount: 100,
        },
      },
    ],
  },
  [UnitType.Archer]: {
    nodeType: "sequence",
    nodes: [
      {
        nodeType: "action",
        type: "PATROL",
        params: {
          direction: "TOWARDS",
        },
      },
      {
        nodeType: "action",
        type: "IDLE",
        params: {
          forTicksAmount: 100,
        },
      },
    ],
  },
  [UnitType.Mangonel]: {
    nodeType: "sequence",
    nodes: [
      {
        nodeType: "action",
        type: "PATROL",
        params: {
          direction: "TOWARDS",
        },
      },
      {
        nodeType: "action",
        type: "IDLE",
        params: {
          forTicksAmount: 100,
        },
      },
    ],
  },
};

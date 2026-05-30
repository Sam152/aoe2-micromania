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
    nodeType: "selector",
    nodes: [
      // If there are less than two groups of archers, split them.
      {
        nodeType: "sequence",
        nodes: [
          { nodeType: "condition", value: 2, comparatorType: "GT", propertyName: "numberOfGroupsForGroupUnitType" },
          { nodeType: "action", type: "SPLIT_GROUP", params: {} },
        ],
      },
      // Then patrol.
      {
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

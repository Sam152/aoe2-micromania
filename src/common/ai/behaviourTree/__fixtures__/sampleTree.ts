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
          forTicksAmount: {
            nodeType: "dataValue",
            dataType: "number",
            type: "PRIMITIVE",
            value: 100,
          },
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
          {
            nodeType: "condition",
            dataType: "number",
            leftValue: {
              nodeType: "dataValue",
              dataType: "number",
              type: "PRIMITIVE",
              value: 2,
            },
            comparatorType: "GT",
            rightValue: {
              nodeType: "dataValue",
              dataType: "number",
              type: "BLACKBOARD",
              blackboardKey: "groupsForUnitTypeCount",
              paramValues: {},
            },
          },
          { nodeType: "action", type: "SPLIT_GROUP", params: {} },
        ],
      },
      // Then patrol one of the groups.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            dataType: "number",
            leftValue: {
              nodeType: "dataValue",
              dataType: "number",
              type: "PRIMITIVE",
              value: 0,
            },
            comparatorType: "EQ",
            rightValue: {
              nodeType: "dataValue",
              dataType: "number",
              type: "BLACKBOARD",
              blackboardKey: "unitTypeGroupIndex",
              paramValues: {},
            },
          },
          {
            nodeType: "action",
            type: "PATROL",
            params: {
              direction: {
                nodeType: "dataValue",
                dataType: "direction",
                type: "PRIMITIVE",
                value: "TOWARDS",
              },
            },
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: {
                nodeType: "dataValue",
                dataType: "number",
                type: "PRIMITIVE",
                value: 100,
              },
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
          direction: {
            nodeType: "dataValue",
            dataType: "direction",
            type: "PRIMITIVE",
            value: "TOWARDS",
          },
        },
      },
      {
        nodeType: "action",
        type: "IDLE",
        params: {
          forTicksAmount: {
            nodeType: "dataValue",
            dataType: "number",
            type: "PRIMITIVE",
            value: 100,
          },
        },
      },
    ],
  },
};

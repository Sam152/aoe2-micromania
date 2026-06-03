import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const sampleTree: UnitAwareBehaviourTree = {
  [UnitType.Monk]: {
    nodeType: "selector",
    nodes: [
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "vectorDistanceBetweenLessThan",
            invert: false,
            params: {
              pointA: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "opponentAveragePosition",
                params: {},
              },
              pointB: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "opponentAveragePosition",
                params: {},
              },
              distance: {
                nodeType: "dataValue",
                dataType: "number",
                type: "LITERAL",
                value: 200,
              },
            },
          },
        ],
      },
      {
        nodeType: "sequence",
        nodes: [],
      },
      {
        nodeType: "sequence",
        nodes: [],
      },
      {
        nodeType: "sequence",
        nodes: [],
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
            type: "numberGreaterThan",
            invert: false,
            params: {
              left: {
                nodeType: "dataValue",
                dataType: "number",
                type: "LITERAL",
                value: 2,
              },
              right: {
                nodeType: "dataValue",
                dataType: "number",
                type: "BLACKBOARD",
                blackboardKey: "groupMetaUnitTypeGroupCount",
                params: {},
              },
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
            type: "numberEquals",
            invert: false,
            params: {
              left: {
                nodeType: "dataValue",
                dataType: "number",
                type: "LITERAL",
                value: 0,
              },
              right: {
                nodeType: "dataValue",
                dataType: "number",
                type: "BLACKBOARD",
                blackboardKey: "groupMetaUnitTypeIndex",
                params: {},
              },
            },
          },
          {
            nodeType: "action",
            type: "PATROL",
            params: {
              direction: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "opponentAveragePosition",
                params: {
                  vectorOffset: {
                    nodeType: "dataValue",
                    dataType: "vector",
                    type: "LITERAL",
                    value: { x: 0, y: 0 },
                  },
                },
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
                type: "LITERAL",
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
            dataType: "vector",
            type: "BLACKBOARD",
            blackboardKey: "opponentAveragePosition",
            params: {
              vectorOffset: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "LITERAL",
                value: { x: 0, y: 0 },
              },
            },
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
            type: "LITERAL",
            value: 100,
          },
        },
      },
    ],
  },
};

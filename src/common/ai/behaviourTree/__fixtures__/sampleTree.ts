import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

/**
 * A human wrote this one.
 */
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
            invert: true,
            params: {
              pointA: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "opponentClosestUnitPositionByType",
                params: {
                  unitType: {
                    nodeType: "dataValue",
                    dataType: "unitType",
                    type: "LITERAL",
                    value: "ARCHER",
                  },
                },
              },
              pointB: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "groupAveragePosition",
                params: {},
              },
              distance: {
                nodeType: "dataValue",
                dataType: "number",
                type: "LITERAL",
                value: 400,
              },
            },
          },
          {
            nodeType: "action",
            type: "MOVE_UNITS",
            params: {
              direction: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "groupUnitVectorFacingDirection",
                params: {
                  direction: {
                    nodeType: "dataValue",
                    dataType: "vector",
                    type: "BLACKBOARD",
                    blackboardKey: "opponentAverageUnitPositionByType",
                    params: {
                      unitType: {
                        nodeType: "dataValue",
                        dataType: "unitType",
                        type: "LITERAL",
                        value: "ARCHER",
                      },
                    },
                  },
                  angle: {
                    nodeType: "dataValue",
                    dataType: "vectorAngle",
                    type: "LITERAL",
                    value: 180,
                  },
                  magnitude: {
                    nodeType: "dataValue",
                    dataType: "vectorMagnitude",
                    type: "LITERAL",
                    value: 150,
                  },
                },
              },
            },
          },
        ],
      },
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            invert: true,
            type: "booleanIsTrue",
            params: {
              subject: {
                nodeType: "dataValue",
                dataType: "boolean",
                type: "BLACKBOARD",
                blackboardKey: "groupIsConverting",
                params: {},
              },
            },
          },
          {
            nodeType: "selector",
            nodes: [{
              nodeType: "action",
              type: "CONVERT",
              params: {
                unit: {
                  nodeType: "dataValue",
                  dataType: "unitId",
                  type: "BLACKBOARD",
                  blackboardKey: "opponentClosestUnitByType",
                  params: {
                    unitType: {
                      nodeType: "dataValue",
                      dataType: "unitType",
                      type: "LITERAL",
                      value: "MANGO",
                    },
                  },
                },
              },
            }, {
              nodeType: "action",
              type: "CONVERT",
              params: {
                unit: {
                  nodeType: "dataValue",
                  dataType: "unitId",
                  type: "BLACKBOARD",
                  blackboardKey: "opponentClosestUnitByType",
                  params: {
                    unitType: {
                      nodeType: "dataValue",
                      dataType: "unitType",
                      type: "LITERAL",
                      value: "ARCHER",
                    },
                  },
                },
              },
            }],
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
    ],
  },
  [UnitType.Archer]: {
    nodeType: "selector",
    nodes: [
      // If we have less than 8 units, just patrol them all.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "countGreaterThan",
            invert: true,
            params: {
              leftCount: {
                nodeType: "dataValue",
                dataType: "count",
                type: "BLACKBOARD",
                blackboardKey: "globalOwnedUnitsOfTypeCount",
                params: {
                  unitType: {
                    nodeType: "dataValue",
                    dataType: "unitType",
                    type: "LITERAL",
                    value: "ARCHER",
                  },
                },
              },
              rightCount: {
                nodeType: "dataValue",
                dataType: "count",
                type: "LITERAL",
                value: 8,
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
        ],
      },
      // If there are less than two groups of archers, split them.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "countGreaterThan",
            invert: true,
            params: {
              leftCount: {
                nodeType: "dataValue",
                dataType: "count",
                type: "BLACKBOARD",
                blackboardKey: "groupMetaUnitTypeGroupCount",
                params: {},
              },
              rightCount: {
                nodeType: "dataValue",
                dataType: "count",
                type: "LITERAL",
                value: 2,
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

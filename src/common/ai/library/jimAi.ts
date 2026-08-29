import { UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../units/UnitType.ts";

export const jimAi: UnitAwareBehaviourTree = {
  [UnitType.Monk]: {
    nodeType: "selector",
    nodes: [
      // Avoid archers: if the closest opponent archer is in range, fall back.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "vectorDistanceBetweenLessThan",
            // NOTE: vectorDistanceBetweenLessThan's implementation is actually a greater-than
            // check (see condition/catalog/vectorDistanceBetweenLessThan.ts) - invert:true here
            // is what makes this fire when the archer is actually within `distance`.
            invert: true,
            params: {
              pointA: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "unitPosition",
                params: {
                  unitWithPosition: {
                    nodeType: "dataValue",
                    dataType: "unitId",
                    type: "BLACKBOARD",
                    blackboardKey: "opponentClosestUnitByType",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "ARCHER" },
                    },
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
              distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 250 },
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
                    blackboardKey: "unitPosition",
                    params: {
                      unitWithPosition: {
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
                  },
                  angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: 180 },
                  magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 260 },
                },
              },
            },
          },
        ],
      },
      // Convert: prefer mangos, fall back to archers.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "booleanIsTrue",
            invert: true,
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
            nodes: [
              {
                nodeType: "action",
                type: "CONVERT",
                params: {
                  unit: {
                    nodeType: "dataValue",
                    dataType: "unitId",
                    type: "BLACKBOARD",
                    blackboardKey: "opponentClosestUnitByType",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "MANGO" },
                    },
                  },
                },
              },
              {
                nodeType: "action",
                type: "CONVERT",
                params: {
                  unit: {
                    nodeType: "dataValue",
                    dataType: "unitId",
                    type: "BLACKBOARD",
                    blackboardKey: "opponentClosestUnitByType",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "ARCHER" },
                    },
                  },
                },
              },
            ],
          },
        ],
      },
      // Otherwise, close in on the mangos (or the opponent generally) to get in conversion range.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "selector",
            nodes: [
              {
                nodeType: "action",
                type: "MOVE_UNITS",
                params: {
                  direction: {
                    nodeType: "dataValue",
                    dataType: "vector",
                    type: "BLACKBOARD",
                    blackboardKey: "opponentAverageUnitPositionByType",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "MANGO" },
                    },
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
                    blackboardKey: "opponentAveragePosition",
                    params: {},
                  },
                },
              },
            ],
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 80 },
            },
          },
        ],
      },
    ],
  },
  [UnitType.Archer]: {
    nodeType: "selector",
    nodes: [
      // Dodge an incoming mango rock that's about to land nearby.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "vectorDistanceBetweenLessThan",
            // See NOTE above re: invert:true compensating for the condition's inverted implementation.
            invert: true,
            params: {
              pointA: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "groupAveragePosition",
                params: {},
              },
              pointB: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "opponentNextProjectileLandingPositionByType",
                params: {
                  type: { nodeType: "dataValue", dataType: "projectileType", type: "LITERAL", value: "MANGO_ROCK" },
                },
              },
              distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 180 },
            },
          },
          {
            nodeType: "condition",
            type: "tickCountLessThan",
            invert: false,
            params: {
              leftTicks: {
                nodeType: "dataValue",
                dataType: "tickCount",
                type: "BLACKBOARD",
                blackboardKey: "opponentNextProjectileLandingInTicksTimeByType",
                params: {
                  type: { nodeType: "dataValue", dataType: "projectileType", type: "LITERAL", value: "MANGO_ROCK" },
                },
              },
              rightTicks: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 40 },
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
                    blackboardKey: "opponentNextProjectileLandingPositionByType",
                    params: {
                      type: {
                        nodeType: "dataValue",
                        dataType: "projectileType",
                        type: "LITERAL",
                        value: "MANGO_ROCK",
                      },
                    },
                  },
                  angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: 180 },
                  magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 220 },
                },
              },
            },
          },
        ],
      },
      // Peel half the archers off into a sniper detachment, once.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "unitCountGreaterThan",
            invert: true,
            params: {
              leftUnitCount: {
                nodeType: "dataValue",
                dataType: "unitCount",
                type: "BLACKBOARD",
                blackboardKey: "groupMetaUnitTypeGroupCount",
                params: {},
              },
              rightUnitCount: { nodeType: "dataValue", dataType: "unitCount", type: "LITERAL", value: 1 },
            },
          },
          {
            nodeType: "action",
            type: "SPLIT_GROUP",
            params: {
              splitGroupInto: { nodeType: "dataValue", dataType: "groupSize", type: "LITERAL", value: "HALF" },
            },
          },
        ],
      },
      // The sniper detachment: swing around the fight and snipe monks.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "groupIndexEquals",
            invert: false,
            params: {
              groupIndexLeft: { nodeType: "dataValue", dataType: "groupIndex", type: "LITERAL", value: 1 },
              groupIndexRight: {
                nodeType: "dataValue",
                dataType: "groupIndex",
                type: "BLACKBOARD",
                blackboardKey: "groupMetaUnitTypeIndex",
                params: {},
              },
            },
          },
          // Fan out into a loose skirmish line while circling - looks and behaves distinct from the main group.
          { nodeType: "action", type: "FORMATION_SPLIT", params: {} },
          {
            nodeType: "action",
            type: "PATROL",
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
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "MONK" },
                    },
                  },
                  angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: 60 },
                  magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 150 },
                },
              },
            },
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 60 },
            },
          },
        ],
      },
      // Caught reloading: step back to buy time rather than standing empty-handed.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "booleanIsTrue",
            invert: false,
            params: {
              subject: {
                nodeType: "dataValue",
                dataType: "boolean",
                type: "BLACKBOARD",
                blackboardKey: "groupIsMostlyReloading",
                params: {},
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
                    blackboardKey: "opponentAveragePosition",
                    params: {},
                  },
                  angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: 180 },
                  magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 70 },
                },
              },
            },
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 30 },
            },
          },
        ],
      },
      // A mangonel is actually nearby: spread out to blunt rock splash, angling in rather than sidestepping away.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "vectorDistanceBetweenLessThan",
            // See NOTE above re: invert:true compensating for the condition's inverted implementation.
            invert: true,
            params: {
              pointA: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "groupAveragePosition",
                params: {},
              },
              pointB: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "unitPosition",
                params: {
                  unitWithPosition: {
                    nodeType: "dataValue",
                    dataType: "unitId",
                    type: "BLACKBOARD",
                    blackboardKey: "opponentClosestUnitByType",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "MANGO" },
                    },
                  },
                },
              },
              distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 450 },
            },
          },
          { nodeType: "action", type: "FORMATION_SPREAD", params: {} },
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
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "MANGO" },
                    },
                  },
                  angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: 60 },
                  magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 120 },
                },
              },
            },
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 70 },
            },
          },
        ],
      },
      // Archers are actually nearby (no mangonel threat): split formation, angling in to spoil their aim.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "vectorDistanceBetweenLessThan",
            // See NOTE above re: invert:true compensating for the condition's inverted implementation.
            invert: true,
            params: {
              pointA: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "groupAveragePosition",
                params: {},
              },
              pointB: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "unitPosition",
                params: {
                  unitWithPosition: {
                    nodeType: "dataValue",
                    dataType: "unitId",
                    type: "BLACKBOARD",
                    blackboardKey: "opponentClosestUnitByType",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "ARCHER" },
                    },
                  },
                },
              },
              distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 350 },
            },
          },
          { nodeType: "action", type: "FORMATION_SPLIT", params: {} },
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
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "ARCHER" },
                    },
                  },
                  angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: -60 },
                  magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 120 },
                },
              },
            },
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 70 },
            },
          },
        ],
      },
      // Everyone else: patrol the main fight.
      {
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
                params: {},
              },
            },
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 80 },
            },
          },
        ],
      },
    ],
  },
  [UnitType.Mangonel]: {
    nodeType: "selector",
    nodes: [
      // Back off if a monk is in range to convert us.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "condition",
            type: "vectorDistanceBetweenLessThan",
            // See NOTE above re: invert:true compensating for the condition's inverted implementation.
            invert: true,
            params: {
              pointA: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "groupAveragePosition",
                params: {},
              },
              pointB: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "unitPosition",
                params: {
                  unitWithPosition: {
                    nodeType: "dataValue",
                    dataType: "unitId",
                    type: "BLACKBOARD",
                    blackboardKey: "opponentClosestUnitByType",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "MONK" },
                    },
                  },
                },
              },
              distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 200 },
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
                    blackboardKey: "unitPosition",
                    params: {
                      unitWithPosition: {
                        nodeType: "dataValue",
                        dataType: "unitId",
                        type: "BLACKBOARD",
                        blackboardKey: "opponentClosestUnitByType",
                        params: {
                          unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "MONK" },
                        },
                      },
                    },
                  },
                  angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: 180 },
                  magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 260 },
                },
              },
            },
          },
        ],
      },
      // No monk threat: lob rocks at the closest archer we can safely hit.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "action",
            type: "ATTACK_GROUND",
            params: {
              attackGroundPosition: {
                nodeType: "dataValue",
                dataType: "vector",
                type: "BLACKBOARD",
                blackboardKey: "unitPosition",
                params: {
                  unitWithPosition: {
                    nodeType: "dataValue",
                    dataType: "unitId",
                    type: "BLACKBOARD",
                    blackboardKey: "opponentClosestUnitByTypeNotInMinRange",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "ARCHER" },
                    },
                  },
                },
              },
            },
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 20 },
            },
          },
        ],
      },
      // No archers in reach: hang back and patrol toward the fight.
      {
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
                params: {},
              },
            },
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 100 },
            },
          },
        ],
      },
    ],
  },
};

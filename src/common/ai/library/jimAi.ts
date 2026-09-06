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
              // Archer's real attack range is 6 tiles * 99 (config.tileGameStatsLength) = 594 world
              // units (see units/unitMetadataFactory.ts + util/inAttackRange.ts) - trigger a bit
              // beyond that so the monk reacts before it's actually being shot at, not after.
              distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 650 },
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
                  magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 350 },
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
          // Hysteresis guard: CONVERT targets the globally-closest Mango/Archer with no distance
          // check of its own, so without this it re-fires the instant the retreat guard above stops
          // triggering (i.e. the moment the monk steps just outside 250) - marching it straight back
          // into the same archer's range and yo-yoing at the boundary. Require archers to be genuinely
          // absent, or clearly further than the retreat trigger, before allowing conversion to resume.
          {
            nodeType: "selector",
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
                    blackboardKey: "opponentHasUnitType",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "ARCHER" },
                    },
                  },
                },
              },
              {
                nodeType: "condition",
                type: "vectorDistanceBetweenLessThan",
                // No invert: the raw (bugged) implementation is a greater-than check, which is
                // exactly "archer is far away" here - see NOTE above.
                invert: false,
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
                  distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 850 },
                },
              },
            ],
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
          // Same hysteresis guard as the CONVERT branch above - without it, this is the loophole that
          // recreates the exact yo-yo: the moment CONVERT gets blocked by that guard, this branch would
          // otherwise immediately march the monk straight at the mango average (through the same nearby
          // archer) with no distance awareness of its own.
          {
            nodeType: "selector",
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
                    blackboardKey: "opponentHasUnitType",
                    params: {
                      unitType: { nodeType: "dataValue", dataType: "unitType", type: "LITERAL", value: "ARCHER" },
                    },
                  },
                },
              },
              {
                nodeType: "condition",
                type: "vectorDistanceBetweenLessThan",
                // No invert: the raw (bugged) implementation is a greater-than check, which is
                // exactly "archer is far away" here - see NOTE above.
                invert: false,
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
                  distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 850 },
                },
              },
            ],
          },
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
          // Short IDLE deliberately: while any action is queued (including an IDLE), the whole tree -
          // including the archer-avoidance guard above - stops being re-evaluated until it drains. A
          // long idle here would let the monk walk blindly through archer range on the way to the mangos.
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 15 },
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
          // Dodge left, right, or straight back - randomized so it isn't a predictable single escape line.
          {
            nodeType: "selector",
            nodes: [
              {
                nodeType: "sequence",
                nodes: [
                  {
                    nodeType: "condition",
                    type: "diceRoll",
                    invert: false,
                    params: {
                      sides: { nodeType: "dataValue", dataType: "sidedDice", type: "LITERAL", value: 3 },
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
                          angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: 90 },
                          magnitude: {
                            nodeType: "dataValue",
                            dataType: "vectorMagnitude",
                            type: "LITERAL",
                            value: 220,
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
                    type: "diceRoll",
                    invert: false,
                    params: {
                      sides: { nodeType: "dataValue", dataType: "sidedDice", type: "LITERAL", value: 2 },
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
                          angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: -90 },
                          magnitude: {
                            nodeType: "dataValue",
                            dataType: "vectorMagnitude",
                            type: "LITERAL",
                            value: 220,
                          },
                        },
                      },
                    },
                  },
                ],
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
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 20 },
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
          // Step back-left, back-right, or straight back - randomized so the retreat line isn't predictable.
          {
            nodeType: "selector",
            nodes: [
              {
                nodeType: "sequence",
                nodes: [
                  {
                    nodeType: "condition",
                    type: "diceRoll",
                    invert: false,
                    params: {
                      sides: { nodeType: "dataValue", dataType: "sidedDice", type: "LITERAL", value: 3 },
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
                          angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: 140 },
                          magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 70 },
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
                    type: "diceRoll",
                    invert: false,
                    params: {
                      sides: { nodeType: "dataValue", dataType: "sidedDice", type: "LITERAL", value: 2 },
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
                          angle: { nodeType: "dataValue", dataType: "vectorAngle", type: "LITERAL", value: 220 },
                          magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 70 },
                        },
                      },
                    },
                  },
                ],
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
            ],
          },
          {
            nodeType: "action",
            type: "IDLE",
            params: {
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 15 },
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
              // Mangonel's real attack range is 7 tiles * 99 (config.tileGameStatsLength) = 693 world
              // units (units/unitMetadataFactory.ts + util/inAttackRange.ts) - react a bit before that.
              distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 750 },
            },
          },
          // Usually spread against the splash, but occasionally split instead so it isn't a predictable tell.
          {
            nodeType: "selector",
            nodes: [
              {
                nodeType: "sequence",
                nodes: [
                  {
                    nodeType: "condition",
                    type: "diceRoll",
                    invert: false,
                    params: {
                      sides: { nodeType: "dataValue", dataType: "sidedDice", type: "LITERAL", value: 4 },
                    },
                  },
                  { nodeType: "action", type: "FORMATION_SPLIT", params: {} },
                ],
              },
              { nodeType: "action", type: "FORMATION_SPREAD", params: {} },
            ],
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
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 20 },
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
              // Archer's real attack range is 6 tiles * 99 (config.tileGameStatsLength) = 594 world
              // units (units/unitMetadataFactory.ts + util/inAttackRange.ts) - react a bit before that.
              distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 650 },
            },
          },
          // Usually split to spoil their aim, but occasionally spread instead so it isn't a predictable tell.
          {
            nodeType: "selector",
            nodes: [
              {
                nodeType: "sequence",
                nodes: [
                  {
                    nodeType: "condition",
                    type: "diceRoll",
                    invert: false,
                    params: {
                      sides: { nodeType: "dataValue", dataType: "sidedDice", type: "LITERAL", value: 4 },
                    },
                  },
                  { nodeType: "action", type: "FORMATION_SPREAD", params: {} },
                ],
              },
              { nodeType: "action", type: "FORMATION_SPLIT", params: {} },
            ],
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
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 20 },
            },
          },
        ],
      },
      // Everyone else: patrol the main fight, in a randomly-picked formation so the default stance varies too.
      {
        nodeType: "sequence",
        nodes: [
          {
            nodeType: "selector",
            nodes: [
              {
                nodeType: "sequence",
                nodes: [
                  {
                    nodeType: "condition",
                    type: "diceRoll",
                    invert: false,
                    params: {
                      sides: { nodeType: "dataValue", dataType: "sidedDice", type: "LITERAL", value: 4 },
                    },
                  },
                  { nodeType: "action", type: "FORMATION_SPREAD", params: {} },
                ],
              },
              {
                nodeType: "sequence",
                nodes: [
                  {
                    nodeType: "condition",
                    type: "diceRoll",
                    invert: false,
                    params: {
                      sides: { nodeType: "dataValue", dataType: "sidedDice", type: "LITERAL", value: 3 },
                    },
                  },
                  { nodeType: "action", type: "FORMATION_SPLIT", params: {} },
                ],
              },
              { nodeType: "action", type: "FORMATION_LINE", params: {} },
            ],
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
                params: {},
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
              // Monk's conversion range (the "attackRange" field is repurposed for Monks) is 9 tiles *
              // 99 (config.tileGameStatsLength) = 891 world units (units/unitMetadataFactory.ts +
              // util/inAttackRange.ts) - react before the monk is close enough to actually convert us.
              distance: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 950 },
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
                  magnitude: { nodeType: "dataValue", dataType: "vectorMagnitude", type: "LITERAL", value: 350 },
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
              forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 20 },
            },
          },
        ],
      },
    ],
  },
};

import { UnitAwareBehaviourTree } from "../../BehaviourTree.ts";

export const corruptAfterPruningTree: UnitAwareBehaviourTree = {
  "0": {
    "nodes": [
      {
        "nodes": [
          {
            "nodes": [
              {
                "nodes": [
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                ],
                "nodeType": "sequence",
              },
            ],
            "nodeType": "sequence",
          },
          {
            "type": "FORMATION_LINE",
            "params": {},
            "nodeType": "action",
          },
          {
            "nodes": [
              {
                "nodes": [
                  {
                    "type": "MERGE_GROUP",
                    "params": {},
                    "nodeType": "action",
                  },
                  {
                    "type": "FORMATION_SPLIT",
                    "params": {},
                    "nodeType": "action",
                  },
                ],
                "nodeType": "sequence",
              },
            ],
            "nodeType": "selector",
          },
          {
            "type": "groupIndexGreaterThan",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
            },
            "nodeType": "condition",
          },
          {
            "nodes": [
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "movingUnit": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByType",
                      },
                      "positionInTicksAmount": {
                        "type": "LITERAL",
                        "value": 45,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "formationEquals",
                    "invert": true,
                    "params": {
                      "leftFormation": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "formation",
                        "blackboardKey": "opponentFormationByType",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "ARCHER",
                          },
                        },
                      },
                      "rightFormation": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "formation",
                        "value": "SPLIT",
                      },
                    },
                  },
                  {
                    "type": "FORMATION_LINE",
                    "params": {},
                    "nodeType": "action",
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "ARROW",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingPositionByType",
                      },
                    },
                    "nodeType": "action",
                  },
                ],
                "nodeType": "selector",
              },
              {
                "nodes": [
                  {
                    "nodes": [
                      {
                        "type": "MERGE_GROUP",
                        "params": {},
                        "nodeType": "action",
                      },
                    ],
                    "nodeType": "sequence",
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "tickCountEquals",
                    "invert": false,
                    "params": {
                      "leftTicks": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "tickCount",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                        "params": {
                          "type": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "projectileType",
                            "value": "MANGO_ROCK",
                          },
                        },
                      },
                      "rightTicks": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "tickCount",
                        "value": 2,
                      },
                    },
                  },
                  {
                    "type": "groupIndexEquals",
                    "invert": false,
                    "params": {
                      "groupIndexLeft": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                      },
                      "groupIndexRight": {
                        "type": "LITERAL",
                        "value": 2,
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "type": "tickCountEquals",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": {
                    "type": "LITERAL",
                    "value": 29,
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              },
              {
                "type": "FORMATION_LINE",
                "params": {},
                "nodeType": "action",
              },
              {
                "nodes": [
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "nodes": [],
                    "nodeType": "selector",
                  },
                ],
                "nodeType": "selector",
              },
              {
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "boolean",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupHasAnyReloading",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          },
          {
            "nodes": [
              {
                "nodes": [
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "action",
                        "type": "FORMATION_LINE",
                        "params": {},
                      },
                    ],
                    "nodeType": "selector",
                  },
                  {
                    "nodes": [],
                    "nodeType": "selector",
                  },
                  {
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "unitCountGreaterThan",
                        "invert": false,
                        "params": {
                          "leftUnitCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "unitCount",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                          "rightUnitCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitCount",
                            "value": 13,
                          },
                        },
                      },
                    ],
                    "nodeType": "selector",
                  },
                ],
                "nodeType": "selector",
              },
              {
                "type": "unitCountEquals",
                "invert": true,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          },
          {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "LITERAL",
                "value": 1,
                "dataType": "groupIndex",
                "nodeType": "dataValue",
              },
            },
            "nodeType": "condition",
          },
        ],
        "nodeType": "sequence",
      },
    ],
    "nodeType": "selector",
  },
  "1": {
    "nodes": [
      {
        "nodes": [
          {
            "nodes": [
              {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentAveragePosition",
                  },
                },
                "nodeType": "action",
              },
              {
                "type": "groupIndexEquals",
                "invert": true,
                "params": {
                  "groupIndexLeft": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "groupIndex",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                  },
                  "groupIndexRight": {
                    "type": "LITERAL",
                    "value": 2,
                    "dataType": "groupIndex",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              },
              {
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "groupSize",
                        "value": "HALF",
                      },
                    },
                  },
                  {
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "groupAveragePosition",
                        "params": {},
                      },
                    },
                    "nodeType": "action",
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "action",
                        "type": "FORMATION_SPREAD",
                        "params": {},
                      },
                    ],
                  },
                  {
                    "type": "ATTACK_GROUND",
                    "params": {
                      "attackGroundPosition": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupAveragePosition",
                      },
                    },
                    "nodeType": "action",
                  },
                  {
                    "type": "ATTACK_GROUND",
                    "params": {
                      "attackGroundPosition": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitWithPosition": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "ARCHER",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitId",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                          },
                        },
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "unitPosition",
                      },
                    },
                    "nodeType": "action",
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentAverageUnitPositionByType",
                  },
                },
                "nodeType": "action",
              },
            ],
            "nodeType": "sequence",
          },
          {
            "nodeType": "condition",
            "type": "groupIndexGreaterThan",
            "invert": false,
            "params": {
              "groupIndexLeft": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "groupIndex",
                "blackboardKey": "groupMetaUnitTypeIndex",
                "params": {},
              },
              "groupIndexRight": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 0,
              },
            },
          },
          {
            "nodes": [
              {
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "nodes": [
                  {
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
                        "type": "BLACKBOARD",
                        "params": {
                          "angle": {
                            "type": "LITERAL",
                            "value": 93,
                            "dataType": "vectorAngle",
                            "nodeType": "dataValue",
                          },
                          "direction": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "ARCHER",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "vector",
                            "nodeType": "dataValue",
                            "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                          },
                        },
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupVectorFacingDirection",
                      },
                      "pointB": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                      },
                      "distance": {
                        "type": "LITERAL",
                        "value": 265,
                        "dataType": "vectorMagnitude",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "type": "FORMATION_SPLIT",
                    "params": {},
                    "nodeType": "action",
                  },
                ],
                "nodeType": "sequence",
              },
            ],
            "nodeType": "selector",
          },
          {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": {
                    "type": "LITERAL",
                    "value": "ARCHER",
                    "dataType": "unitType",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": {
                    "type": "LITERAL",
                    "value": "ARCHER",
                    "dataType": "unitType",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
            },
            "nodeType": "condition",
          },
          {
            "nodes": [
              {
                "type": "MERGE_GROUP",
                "params": {},
                "nodeType": "action",
              },
              {
                "type": "vectorDistanceBetweenLessThan",
                "invert": false,
                "params": {
                  "pointA": {
                    "type": "BLACKBOARD",
                    "params": {
                      "movingUnit": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MONK",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByType",
                      },
                      "positionInTicksAmount": {
                        "type": "LITERAL",
                        "value": 82,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": {
                        "type": "LITERAL",
                        "value": 177,
                        "dataType": "vectorAngle",
                        "nodeType": "dataValue",
                      },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 200,
                        "dataType": "vectorMagnitude",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupUnitVectorFacingDirection",
                  },
                  "distance": {
                    "type": "LITERAL",
                    "value": 159,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              },
              {
                "nodes": [
                  {
                    "type": "unitCountEquals",
                    "invert": false,
                    "params": {
                      "leftUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MONK",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentUnitCountByType",
                      },
                      "rightUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MONK",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentUnitCountByType",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupAveragePosition",
                      },
                      "pointB": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentAveragePosition",
                      },
                      "distance": {
                        "type": "LITERAL",
                        "value": 65,
                        "dataType": "vectorMagnitude",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                ],
                "nodeType": "selector",
              },
              {
                "nodes": [
                  {
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "ARROW",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "action",
                  },
                  {
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "action",
                            "type": "MERGE_GROUP",
                            "params": {},
                          },
                        ],
                      },
                      {
                        "nodeType": "condition",
                        "type": "groupIndexEquals",
                        "invert": true,
                        "params": {
                          "groupIndexLeft": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "groupIndex",
                            "blackboardKey": "groupMetaUnitTypeIndex",
                            "params": {},
                          },
                          "groupIndexRight": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "groupIndex",
                            "value": 1,
                          },
                        },
                      },
                    ],
                    "nodeType": "sequence",
                  },
                  {
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "vector",
                            "blackboardKey": "opponentUnitMovementTowardsVector",
                            "params": {
                              "movingUnit": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "unitId",
                                "blackboardKey": "opponentMedoidUnitByType",
                                "params": {
                                  "unitType": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "unitType",
                                    "value": "MONK",
                                  },
                                },
                              },
                              "positionInTicksAmount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "tickCount",
                                "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                "params": {
                                  "type": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "projectileType",
                                    "value": "ARROW",
                                  },
                                },
                              },
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 153,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 385,
                          },
                        },
                      },
                      "pointB": {
                        "type": "BLACKBOARD",
                        "params": {
                          "movingUnit": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "ARCHER",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitId",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentMedoidUnitByType",
                          },
                          "positionInTicksAmount": {
                            "type": "BLACKBOARD",
                            "params": {
                              "type": {
                                "type": "LITERAL",
                                "value": "MANGO_ROCK",
                                "dataType": "projectileType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "tickCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                          },
                        },
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentUnitMovementTowardsVector",
                      },
                      "distance": {
                        "type": "LITERAL",
                        "value": 252,
                        "dataType": "vectorMagnitude",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "nodes": [],
                    "nodeType": "sequence",
                  },
                  {
                    "type": "unitCountEquals",
                    "invert": true,
                    "params": {
                      "leftUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                      },
                      "rightUnitCount": {
                        "type": "LITERAL",
                        "value": 3,
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "nodes": [
                      {
                        "nodes": [
                          {
                            "type": "FORMATION_LINE",
                            "params": {},
                            "nodeType": "action",
                          },
                        ],
                        "nodeType": "sequence",
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodes": [],
                        "nodeType": "selector",
                      },
                    ],
                    "nodeType": "sequence",
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "type": "groupIndexEquals",
                    "invert": true,
                    "params": {
                      "groupIndexLeft": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                      },
                      "groupIndexRight": {
                        "type": "LITERAL",
                        "value": 2,
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "ARROW",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                },
                "nodeType": "action",
              },
              {
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "HALF",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [
                  {
                    "type": "formationEquals",
                    "invert": true,
                    "params": {
                      "leftFormation": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "formation",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentFormationByType",
                      },
                      "rightFormation": {
                        "type": "LITERAL",
                        "value": "LINE",
                        "dataType": "formation",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "type": "groupIndexEquals",
                        "invert": false,
                        "params": {
                          "groupIndexLeft": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "groupIndex",
                            "blackboardKey": "groupMetaUnitTypeIndex",
                            "params": {},
                          },
                          "groupIndexRight": {
                            "type": "BLACKBOARD",
                            "params": {},
                            "dataType": "groupIndex",
                            "nodeType": "dataValue",
                            "blackboardKey": "groupMetaUnitTypeIndex",
                          },
                        },
                        "nodeType": "condition",
                      },
                    ],
                    "nodeType": "sequence",
                  },
                  {
                    "nodeType": "action",
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "groupAveragePosition",
                        "params": {},
                      },
                    },
                  },
                  {
                    "type": "tickCountLessThan",
                    "invert": false,
                    "params": {
                      "leftTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "ARROW",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                      "rightTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "type": "unitCountGreaterThan",
                    "invert": false,
                    "params": {
                      "leftUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MONK",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "globalOwnedUnitsOfTypeCount",
                      },
                      "rightUnitCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitCount",
                        "value": 0,
                      },
                    },
                    "nodeType": "condition",
                  },
                ],
                "nodeType": "sequence",
              },
            ],
            "nodeType": "sequence",
          },
        ],
        "nodeType": "selector",
      },
    ],
    "nodeType": "selector",
  },
  "2": {
    "nodes": [
      {
        "nodes": [
          {
            "nodes": [],
            "nodeType": "selector",
          },
          {
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
                "type": "LITERAL",
                "value": 40,
                "dataType": "tickCount",
                "nodeType": "dataValue",
              },
            },
            "nodeType": "action",
          },
          {
            "nodes": [
              {
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "FORMATION_SPLIT",
                    "params": {},
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "nodes": [],
                "nodeType": "selector",
              },
            ],
            "nodeType": "selector",
          },
        ],
        "nodeType": "selector",
      },
      {
        "nodes": [
          {
            "type": "SPLIT_GROUP",
            "params": {
              "splitGroupInto": {
                "type": "LITERAL",
                "value": "HALF",
                "dataType": "groupSize",
                "nodeType": "dataValue",
              },
            },
            "nodeType": "action",
          },
          {
            "nodes": [
              {
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "groupIndexGreaterThan",
                    "invert": false,
                    "params": {
                      "groupIndexLeft": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "groupIndex",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                        "params": {},
                      },
                      "groupIndexRight": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "groupIndex",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                        "params": {},
                      },
                    },
                  },
                  {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  },
                  {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "groupSize",
                        "value": "ONE",
                      },
                    },
                    "nodeType": "action",
                  },
                  {
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MANGO",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentAverageUnitPositionByType",
                      },
                    },
                    "nodeType": "action",
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "nodeType": "action",
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "vector",
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                },
              },
              {
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                    ],
                    "nodeType": "selector",
                  },
                  {
                    "nodeType": "condition",
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "opponentNextProjectileLandingPositionByType",
                        "params": {
                          "type": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "projectileType",
                            "value": "ARROW",
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "unitPosition",
                        "params": {
                          "unitWithPosition": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "unitId",
                            "blackboardKey": "opponentMedoidUnitByType",
                            "params": {
                              "unitType": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "unitType",
                                "value": "ARCHER",
                              },
                            },
                          },
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 275,
                      },
                    },
                  },
                  {
                    "nodes": [
                      {
                        "type": "DELETE_GROUP",
                        "params": {},
                        "nodeType": "action",
                      },
                    ],
                    "nodeType": "selector",
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "nodeType": "selector",
                "nodes": [],
              },
              {
                "type": "formationEquals",
                "invert": false,
                "params": {
                  "leftFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "MONK",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                  "rightFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "selector",
          },
          {
            "nodeType": "action",
            "type": "MERGE_GROUP",
            "params": {},
          },
          {
            "type": "booleanIsTrue",
            "invert": false,
            "params": {
              "subject": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "boolean",
                "nodeType": "dataValue",
                "blackboardKey": "groupHasAnyReloading",
              },
            },
            "nodeType": "condition",
          },
          {
            "type": "FORMATION_SPLIT",
            "params": {},
            "nodeType": "action",
          },
          {
            "nodes": [
              {
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              },
              {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              },
            ],
            "nodeType": "selector",
          },
          {
            "nodes": [
              {
                "nodes": [
                  {
                    "nodes": [
                      {
                        "nodes": [],
                        "nodeType": "sequence",
                      },
                      {
                        "type": "CONVERT",
                        "params": {
                          "unit": {
                            "type": "BLACKBOARD",
                            "params": {},
                            "dataType": "unitId",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentArcherWithinMangoMinimumRange",
                          },
                        },
                        "nodeType": "action",
                      },
                    ],
                    "nodeType": "selector",
                  },
                  {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "unitCountEquals",
                        "invert": false,
                        "params": {
                          "leftUnitCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "unitCount",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                          "rightUnitCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "unitCount",
                            "blackboardKey": "opponentUnitCountByType",
                            "params": {
                              "unitType": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "unitType",
                                "value": "MANGO",
                              },
                            },
                          },
                        },
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                    ],
                  },
                  {
                    "type": "tickCountLessThan",
                    "invert": true,
                    "params": {
                      "leftTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                      "rightTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "condition",
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentAveragePosition",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "groupSize",
                        "value": "HALF",
                      },
                    },
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                ],
                "nodeType": "selector",
              },
              {
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                    ],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  },
                ],
                "nodeType": "selector",
              },
            ],
            "nodeType": "selector",
          },
          {
            "type": "groupIndexGreaterThan",
            "invert": false,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "LITERAL",
                "value": 0,
                "dataType": "groupIndex",
                "nodeType": "dataValue",
              },
            },
            "nodeType": "condition",
          },
        ],
        "nodeType": "selector",
      },
    ],
    "nodeType": "selector",
  },
};

import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const randomlyMutatedTree: UnitAwareBehaviourTree = {
  [UnitType.Archer]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "unitCountGreaterThan",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 33,
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
            },
          },
          {
            "nodeType": "condition",
            "type": "unitCountGreaterThan",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "dataType": "unitCount",
                "type": "BLACKBOARD",
                "blackboardKey": "globalOwnedUnitsOfTypeCount",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitType",
                    "value": "MONK",
                  },
                },
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 27,
              },
            },
          },
          {
            "nodeType": "action",
            "type": "PATROL",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "dataType": "vector",
                "type": "BLACKBOARD",
                "blackboardKey": "opponentAveragePosition",
                "params": {
                  "vectorOffset": {
                    "nodeType": "dataValue",
                    "dataType": "vector",
                    "type": "LITERAL",
                    "value": {
                      "x": 0,
                      "y": 0,
                    },
                  },
                },
              },
            },
          },
        ],
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 350,
                      "y": 299,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 541,
                      "y": 127,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 195,
                  },
                },
              },
              {
                "nodeType": "action",
                "type": "SPLIT_GROUP",
                "params": {},
              },
            ],
          },
          {
            "nodeType": "action",
            "type": "FORMATION_LINE",
            "params": {},
          },
          {
            "nodeType": "condition",
            "type": "unitCountGreaterThan",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "dataType": "unitCount",
                "type": "BLACKBOARD",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "dataType": "unitCount",
                "type": "LITERAL",
                "value": 2,
              },
            },
          },
          {
            "nodeType": "action",
            "type": "SPLIT_GROUP",
            "params": {},
          },
        ],
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "action",
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
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
          {
            "nodeType": "condition",
            "type": "groupIndexEquals",
            "invert": false,
            "params": {
              "groupIndexLeft": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 2,
              },
              "groupIndexRight": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 3,
              },
            },
          },
          {
            "nodeType": "action",
            "type": "PATROL",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 173,
                  "y": 301,
                },
              },
            },
          },
          {
            "nodeType": "sequence",
            "nodes": [],
          },
          {
            "nodeType": "action",
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 95,
              },
            },
          },
        ],
      },
    ],
  },
  [UnitType.Mangonel]: {
    "nodeType": "sequence",
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
      {
        "nodeType": "action",
        "type": "MOVE_UNITS",
        "params": {
          "direction": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 338,
              "y": 244,
            },
          },
        },
      },
      {
        "nodeType": "action",
        "type": "ATTACK_GROUND",
        "params": {
          "attackGroundPosition": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "vector",
            "blackboardKey": "groupUnitVectorFacingDirection",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "groupUnitVectorFacingDirection",
                "params": {
                  "direction": {
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
                            "value": "MONK",
                          },
                        },
                      },
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 161,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 359,
                  },
                },
              },
              "angle": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorAngle",
                "value": 174,
              },
              "magnitude": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorMagnitude",
                "value": 417,
              },
            },
          },
        },
      },
      {
        "nodeType": "condition",
        "type": "unitCountGreaterThan",
        "invert": false,
        "params": {
          "leftUnitCount": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "unitCount",
            "blackboardKey": "groupMetaUnitTypeGroupCount",
            "params": {},
          },
          "rightUnitCount": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "unitCount",
            "value": 39,
          },
        },
      },
      {
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "selector",
            "nodes": [],
          },
          {
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "tickCountEquals",
                        "invert": false,
                        "params": {
                          "leftTicks": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "tickCount",
                            "value": 93,
                          },
                          "rightTicks": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "tickCount",
                            "value": 81,
                          },
                        },
                      },
                      {
                        "nodeType": "action",
                        "type": "MERGE_GROUP",
                        "params": {},
                      },
                      {
                        "nodeType": "action",
                        "type": "PATROL",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "vector",
                            "blackboardKey": "groupVectorFacingDirection",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "vector",
                                "blackboardKey": "groupAveragePosition",
                                "params": {},
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 10,
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                  {
                    "nodeType": "action",
                    "type": "FORMATION_SPREAD",
                    "params": {},
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        "nodeType": "action",
        "type": "PATROL",
        "params": {
          "direction": {
            "nodeType": "dataValue",
            "dataType": "vector",
            "type": "BLACKBOARD",
            "blackboardKey": "opponentAveragePosition",
            "params": {
              "vectorOffset": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "opponentAverageUnitPositionByType",
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
        },
      },
      {
        "nodeType": "action",
        "type": "IDLE",
        "params": {
          "forTicksAmount": {
            "nodeType": "dataValue",
            "dataType": "tickCount",
            "type": "LITERAL",
            "value": 77,
          },
        },
      },
    ],
  },
  [UnitType.Monk]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "condition",
        "type": "tickCountLessThan",
        "invert": false,
        "params": {
          "leftTicks": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "tickCount",
            "value": 34,
          },
          "rightTicks": {
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
        },
      },
      {
        "nodeType": "condition",
        "type": "tickCountEquals",
        "invert": true,
        "params": {
          "leftTicks": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "tickCount",
            "value": 75,
          },
          "rightTicks": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "tickCount",
            "value": 57,
          },
        },
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "action",
            "type": "FORMATION_SPREAD",
            "params": {},
          },
          {
            "nodeType": "condition",
            "type": "vectorDistanceBetweenLessThan",
            "invert": true,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "dataType": "vector",
                "type": "BLACKBOARD",
                "blackboardKey": "unitPosition",
                "params": {
                  "unitWithPosition": {
                    "nodeType": "dataValue",
                    "dataType": "unitId",
                    "type": "BLACKBOARD",
                    "blackboardKey": "opponentClosestUnitByType",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "dataType": "unitType",
                        "type": "LITERAL",
                        "value": "ARCHER",
                      },
                    },
                  },
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "groupUnitVectorFacingDirection",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "vector",
                    "blackboardKey": "groupAveragePosition",
                    "params": {},
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 229,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 410,
                  },
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "dataType": "vectorMagnitude",
                "type": "LITERAL",
                "value": 400,
              },
            },
          },
          {
            "nodeType": "action",
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "dataType": "vector",
                "type": "BLACKBOARD",
                "blackboardKey": "groupUnitVectorFacingDirection",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "vector",
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "dataType": "vectorAngle",
                    "type": "LITERAL",
                    "value": 180,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "dataType": "vectorMagnitude",
                    "type": "LITERAL",
                    "value": 271,
                  },
                },
              },
            },
          },
        ],
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "sequence",
            "nodes": [],
          },
          {
            "nodeType": "action",
            "type": "FORMATION_SPLIT",
            "params": {},
          },
          {
            "nodeType": "action",
            "type": "CONVERT",
            "params": {
              "unit": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitId",
                "blackboardKey": "opponentMedoidUnitByType",
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
            "nodeType": "condition",
            "invert": false,
            "type": "booleanIsTrue",
            "params": {
              "subject": {
                "nodeType": "dataValue",
                "dataType": "boolean",
                "type": "BLACKBOARD",
                "blackboardKey": "groupIsConverting",
                "params": {},
              },
            },
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "action",
                "type": "CONVERT",
                "params": {
                  "unit": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "unitId",
                    "blackboardKey": "opponentClosestUnitByType",
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
              {
                "nodeType": "action",
                "type": "CONVERT",
                "params": {
                  "unit": {
                    "nodeType": "dataValue",
                    "dataType": "unitId",
                    "type": "BLACKBOARD",
                    "blackboardKey": "opponentClosestUnitByType",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "dataType": "unitType",
                        "type": "LITERAL",
                        "value": "MANGO",
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 30,
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
            },
          },
        ],
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "action",
            "type": "FORMATION_SPLIT",
            "params": {},
          },
        ],
      },
    ],
  },
};

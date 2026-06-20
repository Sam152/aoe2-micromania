import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const randomlyGeneratedTree: UnitAwareBehaviourTree = {
  [UnitType.Archer]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "action",
        "type": "SPLIT_GROUP",
        "params": {},
      },
      {
        "nodeType": "condition",
        "type": "groupIndexGreaterThan",
        "invert": true,
        "params": {
          "groupIndexLeft": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "groupIndex",
            "value": 3,
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
        "nodeType": "action",
        "type": "FORMATION_SPREAD",
        "params": {},
      },
      {
        "nodeType": "condition",
        "type": "tickCountLessThan",
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
                "value": "ARROW",
              },
            },
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
                "value": "ARROW",
              },
            },
          },
        },
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "selector",
            "nodes": [],
          },
          {
            "nodeType": "selector",
            "nodes": [],
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "action",
                "type": "PATROL",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 975,
                      "y": 290,
                    },
                  },
                },
              },
              {
                "nodeType": "condition",
                "type": "formationEquals",
                "invert": false,
                "params": {
                  "leftFormation": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "formation",
                    "blackboardKey": "groupFormation",
                    "params": {},
                  },
                  "rightFormation": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "formation",
                    "value": "SPREAD",
                  },
                },
              },
            ],
          },
          {
            "nodeType": "action",
            "type": "FORMATION_SPLIT",
            "params": {},
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "booleanIsTrue",
                "invert": true,
                "params": {
                  "subject": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "boolean",
                    "value": true,
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "condition",
                            "type": "booleanIsTrue",
                            "invert": false,
                            "params": {
                              "subject": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "boolean",
                                "value": false,
                              },
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    "nodeType": "action",
                    "type": "SPLIT_GROUP",
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
                    "type": "LITERAL",
                    "dataType": "groupIndex",
                    "value": 1,
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
            ],
          },
          {
            "nodeType": "condition",
            "type": "tickCountLessThan",
            "invert": true,
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
                    "value": "ARROW",
                  },
                },
              },
              "rightTicks": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 40,
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
                  "x": 817,
                  "y": 717,
                },
              },
            },
          },
          {
            "nodeType": "sequence",
            "nodes": [],
          },
          {
            "nodeType": "selector",
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
                        "value": "MANGO_ROCK",
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
                    "type": "LITERAL",
                    "dataType": "tickCount",
                    "value": 52,
                  },
                },
              },
              {
                "nodeType": "condition",
                "type": "formationEquals",
                "invert": true,
                "params": {
                  "leftFormation": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "formation",
                    "value": "LINE",
                  },
                  "rightFormation": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "formation",
                    "value": "SPREAD",
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [],
              },
              {
                "nodeType": "action",
                "type": "SPLIT_GROUP",
                "params": {},
              },
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
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
                    "nodeType": "condition",
                    "type": "tickCountLessThan",
                    "invert": false,
                    "params": {
                      "leftTicks": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "tickCount",
                        "value": 18,
                      },
                      "rightTicks": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "tickCount",
                        "value": 45,
                      },
                    },
                  },
                  {
                    "nodeType": "action",
                    "type": "PATROL",
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
                    },
                  },
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
                        "value": 40,
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "action",
                        "type": "FORMATION_LINE",
                        "params": {},
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [
                          {
                            "nodeType": "action",
                            "type": "PATROL",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 746,
                                  "y": 673,
                                },
                              },
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    "nodeType": "condition",
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": true,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "groupVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "vector",
                            "blackboardKey": "groupUnitVectorFacingDirection",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 101,
                                  "y": 673,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 180,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 28,
                              },
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 263,
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "groupAveragePosition",
                        "params": {},
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 437,
                      },
                    },
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "action",
                        "type": "PATROL",
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
                    ],
                  },
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
                          "x": 645,
                          "y": 773,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "opponentAverageUnitPositionByType",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "MONK",
                          },
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 396,
                      },
                    },
                  },
                ],
              },
            ],
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "action",
                "type": "FORMATION_SPLIT",
                "params": {},
              },
              {
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
              },
              {
                "nodeType": "selector",
                "nodes": [],
              },
              {
                "nodeType": "condition",
                "type": "unitCountGreaterThan",
                "invert": true,
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
                    "value": 6,
                  },
                },
              },
              {
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "tickCount",
                    "value": 2,
                  },
                },
              },
              {
                "nodeType": "action",
                "type": "FORMATION_SPREAD",
                "params": {},
              },
            ],
          },
          {
            "nodeType": "action",
            "type": "MERGE_GROUP",
            "params": {},
          },
        ],
      },
      {
        "nodeType": "condition",
        "type": "unitCountEquals",
        "invert": true,
        "params": {
          "leftUnitCount": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "unitCount",
            "blackboardKey": "globalOwnedUnitsOfTypeCount",
            "params": {
              "unitType": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitType",
                "value": "ARCHER",
              },
            },
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
        "nodeType": "action",
        "type": "SPLIT_GROUP",
        "params": {},
      },
      {
        "nodeType": "condition",
        "type": "booleanIsTrue",
        "invert": false,
        "params": {
          "subject": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "boolean",
            "blackboardKey": "groupIsConverting",
            "params": {},
          },
        },
      },
    ],
  },
  [UnitType.Mangonel]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "action",
        "type": "ATTACK_GROUND",
        "params": {
          "attackGroundPosition": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "vector",
            "blackboardKey": "opponentAveragePosition",
            "params": {},
          },
        },
      },
      {
        "nodeType": "condition",
        "type": "booleanIsTrue",
        "invert": false,
        "params": {
          "subject": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "boolean",
            "value": true,
          },
        },
      },
      {
        "nodeType": "selector",
        "nodes": [],
      },
      {
        "nodeType": "condition",
        "type": "formationEquals",
        "invert": false,
        "params": {
          "leftFormation": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "formation",
            "value": "SPLIT",
          },
          "rightFormation": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "formation",
            "blackboardKey": "groupFormation",
            "params": {},
          },
        },
      },
      {
        "nodeType": "action",
        "type": "FORMATION_LINE",
        "params": {},
      },
      {
        "nodeType": "condition",
        "type": "tickCountLessThan",
        "invert": true,
        "params": {
          "leftTicks": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "tickCount",
            "value": 21,
          },
          "rightTicks": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "tickCount",
            "value": 17,
          },
        },
      },
      {
        "nodeType": "action",
        "type": "MOVE_UNITS",
        "params": {
          "direction": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "vector",
            "blackboardKey": "opponentAverageUnitPositionByType",
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
      {
        "nodeType": "action",
        "type": "IDLE",
        "params": {
          "forTicksAmount": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "tickCount",
            "value": 15,
          },
        },
      },
      {
        "nodeType": "condition",
        "type": "formationEquals",
        "invert": false,
        "params": {
          "leftFormation": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "formation",
            "value": "SPREAD",
          },
          "rightFormation": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "formation",
            "blackboardKey": "groupFormation",
            "params": {},
          },
        },
      },
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
                "value": 77,
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
                    "value": "ARROW",
                  },
                },
              },
            },
          },
          {
            "nodeType": "condition",
            "type": "tickCountLessThan",
            "invert": true,
            "params": {
              "leftTicks": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 31,
              },
              "rightTicks": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 73,
              },
            },
          },
          {
            "nodeType": "selector",
            "nodes": [],
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "FORMATION_SPREAD",
                    "params": {},
                  },
                  {
                    "nodeType": "condition",
                    "type": "unitCountEquals",
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
                        "type": "BLACKBOARD",
                        "dataType": "unitCount",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
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
                "nodeType": "condition",
                "type": "formationEquals",
                "invert": true,
                "params": {
                  "leftFormation": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "formation",
                    "blackboardKey": "groupFormation",
                    "params": {},
                  },
                  "rightFormation": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "formation",
                    "value": "SPREAD",
                  },
                },
              },
              {
                "nodeType": "condition",
                "type": "formationEquals",
                "invert": false,
                "params": {
                  "leftFormation": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "formation",
                    "value": "SPLIT",
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
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "FORMATION_SPREAD",
                    "params": {},
                  },
                ],
              },
              {
                "nodeType": "condition",
                "type": "formationEquals",
                "invert": true,
                "params": {
                  "leftFormation": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "formation",
                    "value": "LINE",
                  },
                  "rightFormation": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "formation",
                    "blackboardKey": "opponentFormationByType",
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
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "groupIndex",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                },
              },
            ],
          },
        ],
      },
      {
        "nodeType": "condition",
        "type": "booleanIsTrue",
        "invert": false,
        "params": {
          "subject": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "boolean",
            "value": false,
          },
        },
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
              "x": 40,
              "y": 243,
            },
          },
        },
      },
    ],
  },
  [UnitType.Monk]: {
    "nodeType": "selector",
    "nodes": [
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
            "type": "BLACKBOARD",
            "dataType": "vector",
            "blackboardKey": "opponentUnitMovementTowardsVector",
            "params": {
              "movingUnit": {
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
              "positionInTicksAmount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 11,
              },
            },
          },
        },
      },
      {
        "nodeType": "action",
        "type": "FORMATION_SPREAD",
        "params": {},
      },
      {
        "nodeType": "selector",
        "nodes": [],
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
        "nodeType": "condition",
        "type": "formationEquals",
        "invert": true,
        "params": {
          "leftFormation": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "formation",
            "value": "SPLIT",
          },
          "rightFormation": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "formation",
            "blackboardKey": "opponentFormationByType",
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
      {
        "nodeType": "condition",
        "type": "vectorDistanceBetweenLessThan",
        "invert": false,
        "params": {
          "pointA": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "vector",
            "blackboardKey": "opponentAverageUnitPositionByType",
            "params": {
              "unitType": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitType",
                "value": "MONK",
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
                    "value": "MANGO",
                  },
                },
              },
            },
          },
          "distance": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vectorMagnitude",
            "value": 496,
          },
        },
      },
      {
        "nodeType": "action",
        "type": "FORMATION_LINE",
        "params": {},
      },
      {
        "nodeType": "sequence",
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
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
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
            "type": "groupIndexGreaterThan",
            "invert": false,
            "params": {
              "groupIndexLeft": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 1,
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
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "action",
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 23,
                      "y": 224,
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
                    "type": "LITERAL",
                    "dataType": "tickCount",
                    "value": 58,
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "FORMATION_SPLIT",
                    "params": {},
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                      {
                        "nodeType": "condition",
                        "type": "tickCountLessThan",
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
                        "nodeType": "action",
                        "type": "FORMATION_LINE",
                        "params": {},
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
                            "value": 1,
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
                  },
                ],
              },
            ],
          },
          {
            "nodeType": "action",
            "type": "FORMATION_SPREAD",
            "params": {},
          },
          {
            "nodeType": "condition",
            "type": "tickCountEquals",
            "invert": true,
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
                "value": 46,
              },
            },
          },
          {
            "nodeType": "sequence",
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
                    "value": 82,
                  },
                  "rightTicks": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "tickCount",
                    "value": 35,
                  },
                },
              },
              {
                "nodeType": "action",
                "type": "FORMATION_SPREAD",
                "params": {},
              },
              {
                "nodeType": "action",
                "type": "FORMATION_SPLIT",
                "params": {},
              },
            ],
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "tickCountLessThan",
                "invert": true,
                "params": {
                  "leftTicks": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "tickCount",
                    "value": 40,
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
            ],
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "action",
                "type": "FORMATION_LINE",
                "params": {},
              },
              {
                "nodeType": "sequence",
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
                        "blackboardKey": "groupFormation",
                        "params": {},
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
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
                  },
                ],
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
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 325,
                      "y": 104,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 84,
                  },
                },
              },
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
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "boolean",
                    "value": true,
                  },
                },
              },
              {
                "nodeType": "action",
                "type": "SPLIT_GROUP",
                "params": {},
              },
              {
                "nodeType": "action",
                "type": "FORMATION_SPREAD",
                "params": {},
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "selector",
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
                                "value": "MANGO",
                              },
                            },
                          },
                          "rightFormation": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "formation",
                            "blackboardKey": "opponentFormationByType",
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
                      {
                        "nodeType": "condition",
                        "type": "vectorDistanceBetweenLessThan",
                        "invert": false,
                        "params": {
                          "pointA": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "vector",
                            "blackboardKey": "opponentUnitMovementTowardsVector",
                            "params": {
                              "movingUnit": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "unitId",
                                "blackboardKey": "opponentClosestUnitByType",
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
                                    "value": "MANGO_ROCK",
                                  },
                                },
                              },
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "vector",
                            "blackboardKey": "opponentAveragePosition",
                            "params": {},
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 27,
                          },
                        },
                      },
                    ],
                  },
                  {
                    "nodeType": "action",
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "tickCount",
                        "value": 66,
                      },
                    },
                  },
                  {
                    "nodeType": "condition",
                    "type": "unitCountEquals",
                    "invert": true,
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
                        "value": 35,
                      },
                    },
                  },
                ],
              },
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
            ],
          },
          {
            "nodeType": "action",
            "type": "FORMATION_LINE",
            "params": {},
          },
        ],
      },
    ],
  },
};

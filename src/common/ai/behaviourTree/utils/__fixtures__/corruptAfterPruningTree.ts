import { UnitAwareBehaviourTree } from "../../BehaviourTree.ts";

export const corruptAfterPruningTree: UnitAwareBehaviourTree = {
  "0": {
    "nodes": [
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
                        "value": "MONK",
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
            },
            "nodeType": "action",
          },
          {
            "type": "unitCountEquals",
            "invert": false,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitType",
                    "value": "MONK",
                  },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "LITERAL",
                "value": 34,
                "dataType": "unitCount",
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
            "type": "booleanIsTrue",
            "invert": true,
            "params": {
              "subject": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "boolean",
                "blackboardKey": "groupHasAnyReloading",
                "params": {},
              },
            },
            "nodeType": "condition",
          },
          {
            "nodes": [
              {
                "nodes": [
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                    ],
                  },
                  {
                    "type": "unitCountEquals",
                    "invert": false,
                    "params": {
                      "leftUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupUnitCount",
                      },
                      "rightUnitCount": {
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
                        "blackboardKey": "opponentUnitCountByType",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "nodes": [],
                    "nodeType": "selector",
                  },
                  {
                    "type": "unitCountEquals",
                    "invert": false,
                    "params": {
                      "leftUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupUnitCount",
                      },
                      "rightUnitCount": {
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
                        "blackboardKey": "opponentUnitCountByType",
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
                            "type": "LITERAL",
                            "dataType": "groupIndex",
                            "value": 0,
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
                        "type": "unitCountGreaterThan",
                        "invert": false,
                        "params": {
                          "leftUnitCount": {
                            "type": "BLACKBOARD",
                            "params": {},
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "groupUnitCount",
                          },
                          "rightUnitCount": {
                            "type": "LITERAL",
                            "value": 16,
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                          },
                        },
                        "nodeType": "condition",
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
                        "type": "LITERAL",
                        "value": 2,
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
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
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "FORMATION_LINE",
                    "params": {},
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
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                      },
                    },
                    "nodeType": "condition",
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
                            "value": "MANGO_ROCK",
                          },
                        },
                      },
                    },
                  },
                  {
                    "type": "DELETE_GROUP",
                    "params": {},
                    "nodeType": "action",
                  },
                  {
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                    ],
                    "nodeType": "selector",
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "type": "tickCountEquals",
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
                    "nodeType": "condition",
                  },
                  {
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "condition",
                            "type": "formationEquals",
                            "invert": false,
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
                                    "value": "MONK",
                                  },
                                },
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
                        ],
                      },
                      {
                        "nodes": [],
                        "nodeType": "selector",
                      },
                    ],
                    "nodeType": "selector",
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
                            "type": "tickCountEquals",
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
                                "type": "LITERAL",
                                "value": 53,
                                "dataType": "tickCount",
                                "nodeType": "dataValue",
                              },
                            },
                            "nodeType": "condition",
                          },
                        ],
                        "nodeType": "selector",
                      },
                      {
                        "nodeType": "selector",

                        "nodes": [],
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                      {
                        "nodes": [],
                        "nodeType": "sequence",
                      },
                    ],
                    "nodeType": "selector",
                  },
                ],
                "nodeType": "sequence",
              },
              {
                "type": "FORMATION_SPREAD",
                "params": {},
                "nodeType": "action",
              },
            ],
            "nodeType": "selector",
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
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": {
                        "type": "LITERAL",
                        "value": 318,
                        "dataType": "vectorAngle",
                        "nodeType": "dataValue",
                      },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 283,
                        "dataType": "vectorMagnitude",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupUnitVectorFacingDirection",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [
                  {
                    "nodes": [
                      {
                        "nodes": [
                          {
                            "nodeType": "action",
                            "type": "DELETE_GROUP",
                            "params": {},
                          },
                        ],
                        "nodeType": "selector",
                      },
                    ],
                    "nodeType": "sequence",
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
                    "type": "PATROL",
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
                "nodeType": "condition",
                "type": "groupIndexGreaterThan",
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
                    "value": 2,
                  },
                },
              },
              {
                "nodes": [
                  {
                    "type": "tickCountEquals",
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
                        "type": "LITERAL",
                        "value": 15,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
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
                        "nodeType": "sequence",
                        "nodes": [],
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
                  {
                    "nodeType": "condition",
                    "type": "unitCountEquals",
                    "invert": false,
                    "params": {
                      "leftUnitCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "unitCount",
                        "blackboardKey": "opponentUnitCountByType",
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
                        "type": "LITERAL",
                        "dataType": "unitCount",
                        "value": 31,
                      },
                    },
                  },
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
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "tickCount",
                        "value": 82,
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "nodes": [],
                    "nodeType": "selector",
                  },
                  {
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "tickCount",
                        "value": 15,
                      },
                    },
                    "nodeType": "action",
                  },
                ],
                "nodeType": "sequence",
              },
            ],
            "nodeType": "selector",
          },
          {
            "nodes": [],
            "nodeType": "selector",
          },
          {
            "type": "FORMATION_SPREAD",
            "params": {},
            "nodeType": "action",
          },
          {
            "type": "unitCountGreaterThan",
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
                "blackboardKey": "globalOwnedUnitsOfTypeCount",
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
                "blackboardKey": "globalOwnedUnitsOfTypeCount",
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
            "nodeType": "condition",
          },
        ],
        "nodeType": "sequence",
      },
      {
        "nodes": [
          {
            "nodeType": "action",
            "type": "MOVE_UNITS",
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
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 291,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 486,
                  },
                },
              },
            },
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
                "type": "LITERAL",
                "value": 1,
                "dataType": "groupIndex",
                "nodeType": "dataValue",
              },
            },
            "nodeType": "condition",
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
                "blackboardKey": "groupUnitCount",
              },
              "rightUnitCount": {
                "type": "LITERAL",
                "value": 4,
                "dataType": "unitCount",
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
            ],
            "nodeType": "sequence",
          },
          {
            "type": "vectorDistanceBetweenLessThan",
            "invert": true,
            "params": {
              "pointA": {
                "type": "BLACKBOARD",
                "params": {
                  "angle": {
                    "type": "LITERAL",
                    "value": 191,
                    "dataType": "vectorAngle",
                    "nodeType": "dataValue",
                  },
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "vector",
                    "blackboardKey": "opponentNextProjectileLandingPositionByType",
                    "params": {
                      "type": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "projectileType",
                        "value": "MANGO_ROCK",
                      },
                    },
                  },
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 163,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitVectorFacingDirection",
              },
              "pointB": {
                "type": "BLACKBOARD",
                "params": {
                  "angle": {
                    "type": "LITERAL",
                    "value": 30,
                    "dataType": "vectorAngle",
                    "nodeType": "dataValue",
                  },
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "projectileType",
                        "value": "ARROW",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingPositionByType",
                  },
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 72,
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
                "value": 497,
                "dataType": "vectorMagnitude",
                "nodeType": "dataValue",
              },
            },
            "nodeType": "condition",
          },
          {
            "type": "PATROL",
            "params": {
              "direction": {
                "type": "BLACKBOARD",
                "params": {
                  "angle": {
                    "type": "LITERAL",
                    "value": 311,
                    "dataType": "vectorAngle",
                    "nodeType": "dataValue",
                  },
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": {
                        "type": "LITERAL",
                        "value": 335,
                        "dataType": "vectorAngle",
                        "nodeType": "dataValue",
                      },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentAveragePosition",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupVectorFacingDirection",
                  },
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 337,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitVectorFacingDirection",
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
  "2": {
    "nodes": [
      {
        "nodes": [
          {
            "nodes": [],
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
                "value": 3,
                "dataType": "groupIndex",
                "nodeType": "dataValue",
              },
            },
            "nodeType": "condition",
          },
          {
            "nodes": [
              {
                "nodes": [],
                "nodeType": "sequence",
              },
              {
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": {
                        "type": "LITERAL",
                        "value": 86,
                        "dataType": "vectorAngle",
                        "nodeType": "dataValue",
                      },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {
                          "angle": {
                            "type": "LITERAL",
                            "value": 260,
                            "dataType": "vectorAngle",
                            "nodeType": "dataValue",
                          },
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
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupVectorFacingDirection",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupVectorFacingDirection",
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
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                  "distance": {
                    "type": "LITERAL",
                    "value": 50,
                    "dataType": "vectorMagnitude",
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
      {
        "nodes": [
          {
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": {
                    "type": "LITERAL",
                    "value": "MONK",
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
          {
            "type": "FORMATION_SPLIT",
            "params": {},
            "nodeType": "action",
          },
          {
            "nodes": [],
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
                "nodeType": "selector",
              },
              {
                "nodes": [
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
                            ],
                            "nodeType": "sequence",
                          },
                          {
                            "nodes": [
                              {
                                "type": "MOVE_UNITS",
                                "params": {
                                  "direction": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "angle": {
                                        "type": "LITERAL",
                                        "value": 287,
                                        "dataType": "vectorAngle",
                                        "nodeType": "dataValue",
                                      },
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
                                        "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                                      },
                                    },
                                    "dataType": "vector",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "groupVectorFacingDirection",
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
                    ],
                    "nodeType": "selector",
                  },
                ],
                "nodeType": "selector",
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
                    "value": 57,
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
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
                            "value": "MANGO",
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
                        "value": "SPREAD",
                        "dataType": "formation",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "type": "CONVERT",
                    "params": {
                      "unit": {
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
                        "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                      },
                    },
                    "nodeType": "action",
                  },
                  {
                    "type": "formationEquals",
                    "invert": true,
                    "params": {
                      "leftFormation": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "formation",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupFormation",
                      },
                      "rightFormation": {
                        "type": "LITERAL",
                        "value": "SPREAD",
                        "dataType": "formation",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "nodes": [
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
                    "nodeType": "selector",
                  },
                  {
                    "type": "formationEquals",
                    "invert": true,
                    "params": {
                      "leftFormation": {
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
                      "rightFormation": {
                        "type": "LITERAL",
                        "value": "LINE",
                        "dataType": "formation",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                ],
                "nodeType": "selector",
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
                        "blackboardKey": "opponentMedoidUnitByType",
                      },
                      "positionInTicksAmount": {
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
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": {
                        "type": "LITERAL",
                        "value": 59,
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
                        "value": 77,
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
                    "value": 300,
                    "dataType": "vectorMagnitude",
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
                        "type": "booleanIsTrue",
                        "invert": false,
                        "params": {
                          "subject": {
                            "type": "BLACKBOARD",
                            "params": {},
                            "dataType": "boolean",
                            "nodeType": "dataValue",
                            "blackboardKey": "groupIsConverting",
                          },
                        },
                        "nodeType": "condition",
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
                    ],
                    "nodeType": "selector",
                  },
                  {
                    "nodes": [
                      {
                        "nodes": [],
                        "nodeType": "selector",
                      },
                    ],
                    "nodeType": "selector",
                  },
                  {
                    "type": "formationEquals",
                    "invert": true,
                    "params": {
                      "leftFormation": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "formation",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupFormation",
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
                        "nodes": [
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
                        "type": "FORMATION_SPREAD",
                        "params": {},
                        "nodeType": "action",
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
                            "type": "LITERAL",
                            "value": 0,
                            "dataType": "groupIndex",
                            "nodeType": "dataValue",
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
                            "nodes": [],
                            "nodeType": "sequence",
                          },
                        ],
                        "nodeType": "sequence",
                      },
                      {
                        "type": "FORMATION_SPREAD",
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
                                "type": "tickCountEquals",
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
                                    "type": "LITERAL",
                                    "value": 38,
                                    "dataType": "tickCount",
                                    "nodeType": "dataValue",
                                  },
                                },
                                "nodeType": "condition",
                              },
                              {
                                "nodes": [
                                  {
                                    "nodes": [],
                                    "nodeType": "sequence",
                                  },
                                ],
                                "nodeType": "selector",
                              },
                            ],
                            "nodeType": "sequence",
                          },
                        ],
                        "nodeType": "sequence",
                      },
                      {
                        "type": "CONVERT",
                        "params": {
                          "unit": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "MANGO",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitId",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentMedoidUnitByType",
                          },
                        },
                        "nodeType": "action",
                      },
                      {
                        "nodes": [],
                        "nodeType": "selector",
                      },
                    ],
                    "nodeType": "sequence",
                  },
                ],
                "nodeType": "sequence",
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
};

import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const randomlyGeneratedTree: UnitAwareBehaviourTree = {
  [UnitType.Archer]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "condition",
        "type": "unitCountEquals",
        "invert": false,
        "params": {
          "leftUnitCount": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "unitCount",
            "value": 15,
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
        "invert": false,
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
                    "type": "unitCountGreaterThan",
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
                        "type": "LITERAL",
                        "dataType": "unitCount",
                        "value": 12,
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
                "nodeType": "condition",
                "type": "unitCountGreaterThan",
                "invert": false,
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
                        "value": "MANGO",
                      },
                    },
                  },
                  "rightUnitCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitCount",
                    "value": 11,
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
                "type": "FORMATION_LINE",
                "params": {},
              },
            ],
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
                "blackboardKey": "groupUnitCount",
                "params": {},
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 29,
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
            "nodeType": "condition",
            "type": "vectorDistanceBetweenLessThan",
            "invert": false,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "opponentClosestUnitPositionByType",
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 552,
                  "y": 86,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorMagnitude",
                "value": 500,
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
                "value": 155,
              },
              "groupIndexRight": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 35,
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
      {
        "nodeType": "action",
        "type": "FORMATION_SPLIT",
        "params": {},
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
        "nodes": [
          {
            "nodeType": "condition",
            "type": "vectorDistanceBetweenLessThan",
            "invert": false,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "opponentClosestUnitPositionByType",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitType",
                    "value": "MANGO",
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
                "value": 500,
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
            "value": 44,
          },
        },
      },
      {
        "nodeType": "selector",
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
                "value": 37,
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
                    "value": "MONK",
                  },
                },
              },
            },
          },
        ],
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
            "value": 62,
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
  [UnitType.Mangonel]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "condition",
        "type": "formationEquals",
        "invert": true,
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
        },
      },
      {
        "nodeType": "sequence",
        "nodes": [],
      },
      {
        "nodeType": "action",
        "type": "MERGE_GROUP",
        "params": {},
      },
      {
        "nodeType": "sequence",
        "nodes": [
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
                "value": 407,
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
                "nodeType": "action",
                "type": "PATROL",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 791,
                      "y": 20,
                    },
                  },
                },
              },
            ],
          },
          {
            "nodeType": "action",
            "type": "SPLIT_GROUP",
            "params": {},
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
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 1,
                      "y": 895,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 488,
                      "y": 294,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 500,
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
                    "value": 32,
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
                      "x": 887,
                      "y": 39,
                    },
                  },
                },
              },
            ],
          },
        ],
      },
      {
        "nodeType": "action",
        "type": "MERGE_GROUP",
        "params": {},
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "selector",
            "nodes": [],
          },
        ],
      },
      {
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "selector",
            "nodes": [],
          },
          {
            "nodeType": "action",
            "type": "FORMATION_SPLIT",
            "params": {},
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
                "value": 258,
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
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 220,
              },
              "groupIndexRight": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 421,
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
                "value": 50,
              },
            },
          },
        ],
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
      {
        "nodeType": "condition",
        "type": "vectorDistanceBetweenLessThan",
        "invert": true,
        "params": {
          "pointA": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "vector",
            "blackboardKey": "groupAveragePosition",
            "params": {},
          },
          "pointB": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "vector",
            "blackboardKey": "opponentClosestUnitPositionByType",
            "params": {
              "unitType": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitType",
                "value": "ARCHER",
              },
            },
          },
          "distance": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vectorMagnitude",
            "value": 500,
          },
        },
      },
      {
        "nodeType": "action",
        "type": "FORMATION_SPLIT",
        "params": {},
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
                "value": "MONK",
              },
            },
          },
        },
      },
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
            "type": "SPLIT_GROUP",
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
                    "type": "groupIndexEquals",
                    "invert": false,
                    "params": {
                      "groupIndexLeft": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "groupIndex",
                        "value": 491,
                      },
                      "groupIndexRight": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "groupIndex",
                        "value": 10,
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
                        "blackboardKey": "groupAveragePosition",
                        "params": {},
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
                        "value": 315,
                      },
                      "groupIndexRight": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "groupIndex",
                        "value": 494,
                      },
                    },
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
                    "value": 3,
                  },
                  "groupIndexRight": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "groupIndex",
                    "value": 96,
                  },
                },
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
                    "value": 391,
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
        "type": "groupIndexEquals",
        "invert": false,
        "params": {
          "groupIndexLeft": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "groupIndex",
            "value": 39,
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
  [UnitType.Monk]: {
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
            "value": false,
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
            "type": "LITERAL",
            "dataType": "unitCount",
            "value": 10,
          },
          "rightUnitCount": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "unitCount",
            "value": 35,
          },
        },
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
              "x": 459,
              "y": 58,
            },
          },
          "pointB": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "vector",
            "blackboardKey": "groupVectorFacingDirection",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 223,
                  "y": 47,
                },
              },
              "angle": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorAngle",
                "value": 171,
              },
            },
          },
          "distance": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vectorMagnitude",
            "value": 500,
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
            "value": 219,
          },
          "groupIndexRight": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "groupIndex",
            "value": 278,
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
            "type": "LITERAL",
            "dataType": "unitCount",
            "value": 0,
          },
          "rightUnitCount": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "unitCount",
            "value": 16,
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
                "value": "ARCHER",
              },
            },
          },
        },
      },
      {
        "nodeType": "sequence",
        "nodes": [
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
                "value": 113,
              },
            },
          },
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
                    "value": "MONK",
                  },
                },
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
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 438,
              },
            },
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
                    "invert": false,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 514,
                          "y": 516,
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
                            "value": "MANGO",
                          },
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 500,
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                ],
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 41,
                          "y": 577,
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
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 721,
                      "y": 864,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 202,
                      "y": 320,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 161,
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [
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
                        "value": 388,
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
            "invert": true,
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
          {
            "nodeType": "selector",
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
                    "blackboardKey": "groupUnitCount",
                    "params": {},
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
                    "value": "LINE",
                  },
                },
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
                    "type": "BLACKBOARD",
                    "dataType": "groupIndex",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                },
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
                        "type": "BLACKBOARD",
                        "dataType": "boolean",
                        "blackboardKey": "groupIsConverting",
                        "params": {},
                      },
                    },
                  },
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
                            "type": "LITERAL",
                            "dataType": "formation",
                            "value": "SPREAD",
                          },
                          "rightFormation": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "formation",
                            "value": "LINE",
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
                ],
              },
              {
                "nodeType": "action",
                "type": "FORMATION_SPLIT",
                "params": {},
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
        "nodeType": "action",
        "type": "FORMATION_SPREAD",
        "params": {},
      },
    ],
  },
};

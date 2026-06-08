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
        "nodeType": "selector",
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
            "value": 34,
          },
        },
      },
      {
        "nodeType": "condition",
        "type": "numberGreaterThan",
        "invert": true,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 8,
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 93,
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
            "blackboardKey": "opponentAveragePosition",
            "params": {},
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
            "blackboardKey": "opponentAverageUnitPositionByType",
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
            "nodeType": "action",
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 74,
              },
            },
          },
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 2,
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
                "blackboardKey": "groupAveragePosition",
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
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 83,
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
      {
        "nodeType": "action",
        "type": "MOVE_UNITS",
        "params": {
          "direction": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 746,
              "y": 924,
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
            "value": 13,
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
    ],
  },
  [UnitType.Mangonel]: {
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
        "nodeType": "condition",
        "type": "numberEquals",
        "invert": false,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "number",
            "blackboardKey": "groupMetaUnitTypeIndex",
            "params": {},
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 321,
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
                "type": "LITERAL",
                "dataType": "boolean",
                "value": true,
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
                "type": "LITERAL",
                "dataType": "formation",
                "value": "SPLIT",
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
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitCount",
                    "value": 10,
                  },
                  "rightCount": {
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
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "nodeType": "condition",
                    "type": "numberEquals",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 233,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 403,
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
            ],
          },
          {
            "nodeType": "action",
            "type": "FORMATION_SPLIT",
            "params": {},
          },
        ],
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "numberGreaterThan",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                },
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
                        "blackboardKey": "groupVectorFacingDirection",
                        "params": {
                          "direction": {
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
                                  "x": 799,
                                  "y": 929,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 23,
                              },
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 215,
                          },
                        },
                      },
                    },
                  },
                ],
              },
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
                      "x": 331,
                      "y": 901,
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
                "nodeType": "condition",
                "type": "numberGreaterThan",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
                            "value": "ARCHER",
                          },
                        },
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
                    "type": "numberGreaterThan",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 69,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 291,
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
                          "x": 524,
                          "y": 521,
                        },
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
              "angle": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorAngle",
                "value": 55,
              },
              "magnitude": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorMagnitude",
                "value": 252,
              },
            },
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
        "type": "numberGreaterThan",
        "invert": true,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "number",
            "blackboardKey": "groupMetaUnitTypeIndex",
            "params": {},
          },
          "right": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "number",
            "blackboardKey": "groupMetaUnitTypeIndex",
            "params": {},
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
        "type": "FORMATION_LINE",
        "params": {},
      },
      {
        "nodeType": "condition",
        "type": "numberGreaterThan",
        "invert": false,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 396,
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 12,
          },
        },
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
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 72,
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
                "blackboardKey": "opponentAveragePosition",
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
            "nodeType": "action",
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 96,
              },
            },
          },
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": true,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
                "blackboardKey": "groupUnitCount",
                "params": {},
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 9,
              },
            },
          },
        ],
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
    ],
  },
  [UnitType.Monk]: {
    "nodeType": "selector",
    "nodes": [
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
            "nodeType": "action",
            "type": "FORMATION_SPREAD",
            "params": {},
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
            "value": 63,
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
            "type": "LITERAL",
            "dataType": "formation",
            "value": "SPLIT",
          },
        },
      },
      {
        "nodeType": "condition",
        "type": "countEquals",
        "invert": true,
        "params": {
          "leftCount": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "unitCount",
            "value": 33,
          },
          "rightCount": {
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
            "value": "LINE",
          },
        },
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
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 70,
              },
            },
          },
          {
            "nodeType": "condition",
            "type": "numberEquals",
            "invert": true,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 117,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 193,
              },
            },
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
        ],
      },
      {
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 34,
              },
              "rightCount": {
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
            "type": "numberGreaterThan",
            "invert": true,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 124,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 231,
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
                "nodeType": "action",
                "type": "FORMATION_LINE",
                "params": {},
              },
              {
                "nodeType": "condition",
                "type": "numberGreaterThan",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                },
              },
              {
                "nodeType": "condition",
                "type": "numberGreaterThan",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 367,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
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
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 881,
                      "y": 293,
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
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 38,
                      },
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
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
          {
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "selector",
                "nodes": [],
              },
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitCount",
                    "value": 27,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitCount",
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
                },
              },
            ],
          },
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": true,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 13,
              },
              "rightCount": {
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
            "type": "MERGE_GROUP",
            "params": {},
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "numberEquals",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 486,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
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
            "nodeType": "action",
            "type": "FORMATION_SPLIT",
            "params": {},
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
        "type": "MERGE_GROUP",
        "params": {},
      },
      {
        "nodeType": "condition",
        "type": "numberGreaterThan",
        "invert": true,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 88,
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 498,
          },
        },
      },
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
    ],
  },
};

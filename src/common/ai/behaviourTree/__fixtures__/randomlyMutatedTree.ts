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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 938,
                      "y": 523,
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
            "nodeType": "action",
            "type": "SPLIT_GROUP",
            "params": {},
          },
          {
            "nodeType": "sequence",
            "nodes": [],
          },
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 32,
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
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "action",
                "type": "FORMATION_SPLIT",
                "params": {},
              },
              {
                "nodeType": "selector",
                "nodes": [],
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
                "type": "FORMATION_LINE",
                "params": {},
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
                "dataType": "unitCount",
                "type": "BLACKBOARD",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "rightCount": {
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
    ],
  },
  [UnitType.Mangonel]: {
    "nodeType": "sequence",
    "nodes": [
      {
        "nodeType": "sequence",
        "nodes": [],
      },
      {
        "nodeType": "action",
        "type": "SPLIT_GROUP",
        "params": {},
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
            "blackboardKey": "groupUnitCount",
            "params": {},
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
            "value": 80,
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
            "type": "BLACKBOARD",
            "dataType": "formation",
            "blackboardKey": "groupFormation",
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
            "value": 49,
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
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "vectorDistanceBetweenLessThan",
            "invert": true,
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 68,
                  "y": 892,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 299,
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 298,
                  "y": 426,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 50,
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
                    "dataType": "vector",
                    "type": "BLACKBOARD",
                    "blackboardKey": "opponentAverageUnitPositionByType",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "dataType": "unitType",
                        "type": "LITERAL",
                        "value": "ARCHER",
                      },
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 194,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "dataType": "vectorMagnitude",
                    "type": "LITERAL",
                    "value": 150,
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
            "type": "FORMATION_SPREAD",
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
                "value": 276,
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
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "invert": true,
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
            "nodeType": "action",
            "type": "FORMATION_LINE",
            "params": {},
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
                        "value": "ARCHER",
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
            "type": "numberGreaterThan",
            "invert": true,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 208,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 326,
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
        ],
      },
    ],
  },
};

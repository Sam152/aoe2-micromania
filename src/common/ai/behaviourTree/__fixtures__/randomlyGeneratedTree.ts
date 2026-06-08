import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const randomlyGeneratedTree: UnitAwareBehaviourTree = {
  [UnitType.Archer]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "action",
        "type": "FORMATION_SPLIT",
        "params": {},
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
        },
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
            "type": "LITERAL",
            "dataType": "number",
            "value": 399,
          },
        },
      },
      {
        "nodeType": "condition",
        "type": "countEquals",
        "invert": false,
        "params": {
          "leftCount": {
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
        "nodeType": "action",
        "type": "FORMATION_SPREAD",
        "params": {},
      },
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
              "x": 107,
              "y": 632,
            },
          },
          "pointB": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 478,
              "y": 460,
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
            "type": "BLACKBOARD",
            "dataType": "number",
            "blackboardKey": "groupMetaUnitTypeIndex",
            "params": {},
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
            "nodeType": "condition",
            "type": "numberEquals",
            "invert": true,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 23,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 334,
              },
            },
          },
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
            "type": "numberEquals",
            "invert": true,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 56,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 52,
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
    ],
  },
  [UnitType.Mangonel]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "action",
        "type": "SPLIT_GROUP",
        "params": {},
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
            "nodeType": "action",
            "type": "FORMATION_SPLIT",
            "params": {},
          },
          {
            "nodeType": "selector",
            "nodes": [],
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
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 883,
              "y": 248,
            },
          },
          "pointB": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 389,
              "y": 225,
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
            "type": "BLACKBOARD",
            "dataType": "number",
            "blackboardKey": "groupMetaUnitTypeIndex",
            "params": {},
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
          "rightCount": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "unitCount",
            "value": 6,
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
                "value": false,
              },
            },
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
            ],
          },
          {
            "nodeType": "action",
            "type": "MERGE_GROUP",
            "params": {},
          },
          {
            "nodeType": "action",
            "type": "FORMATION_SPREAD",
            "params": {},
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
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": true,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 31,
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 17,
              },
            },
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
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
                    "blackboardKey": "groupFormation",
                    "params": {},
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
                "value": 41,
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
                "type": "BLACKBOARD",
                "dataType": "number",
                "blackboardKey": "groupMetaUnitTypeIndex",
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
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
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
                    "blackboardKey": "groupVectorFacingDirection",
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
                        "value": 82,
                      },
                    },
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
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "action",
                "type": "FORMATION_LINE",
                "params": {},
              },
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": true,
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
                    "type": "BLACKBOARD",
                    "dataType": "unitCount",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                "nodes": [],
              },
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitCount",
                    "value": 1,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitCount",
                    "value": 27,
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
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  [UnitType.Monk]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "sequence",
        "nodes": [
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
                "type": "BLACKBOARD",
                "dataType": "unitCount",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
            "nodeType": "condition",
            "type": "numberEquals",
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 358,
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
                "type": "LITERAL",
                "dataType": "formation",
                "value": "LINE",
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
        "type": "numberGreaterThan",
        "invert": true,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 240,
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 173,
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
            "blackboardKey": "groupVectorFacingDirection",
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
              "angle": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorAngle",
                "value": 274,
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
            "blackboardKey": "groupFormation",
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
};

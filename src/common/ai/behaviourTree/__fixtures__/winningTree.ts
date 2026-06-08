import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const winningTree: UnitAwareBehaviourTree = {
  [UnitType.Archer]: {
    "nodeType": "selector",
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
                "value": 46,
              },
              "magnitude": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorMagnitude",
                "value": 188,
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
            "type": "groupIndexGreaterThan",
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 75,
              },
              "right": {
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
        "nodeType": "action",
        "type": "MOVE_UNITS",
        "params": {
          "direction": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 989,
              "y": 46,
            },
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
                  "x": 671,
                  "y": 181,
                },
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
        "nodeType": "action",
        "type": "PATROL",
        "params": {
          "direction": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 102,
              "y": 697,
            },
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
            "value": 39,
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
        "type": "countGreaterThan",
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
            "type": "LITERAL",
            "dataType": "unitCount",
            "value": 35,
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
        "type": "MOVE_UNITS",
        "params": {
          "direction": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 870,
              "y": 75,
            },
          },
        },
      },
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
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 16,
              },
            },
          },
        ],
      },
    ],
  },
};

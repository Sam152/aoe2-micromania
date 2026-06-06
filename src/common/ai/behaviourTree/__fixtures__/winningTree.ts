import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const winningTree: UnitAwareBehaviourTree = {
  [UnitType.Archer]: {
    "nodeType": "selector",
    "nodes": [
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
                  "x": 249,
                  "y": 797,
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
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 223,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 447,
                  },
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 103,
              },
            },
          },
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": true,
            "params": {
              "count": {
                "nodeType": "dataValue",
                "dataType": "count",
                "type": "BLACKBOARD",
                "blackboardKey": "globalUnitsOfTypeCount",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "dataType": "unitType",
                    "type": "LITERAL",
                    "value": "ARCHER",
                  },
                },
              },
              "threshold": {
                "nodeType": "dataValue",
                "dataType": "count",
                "type": "LITERAL",
                "value": 8,
              },
            },
          },
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
                "dataType": "vector",
                "type": "BLACKBOARD",
                "blackboardKey": "opponentAveragePosition",
                "params": {
                  "vectorOffset": {
                    "nodeType": "dataValue",
                    "dataType": "vector",
                    "type": "LITERAL",
                    "value": {
                      "x": 803,
                      "y": 334,
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
            "nodeType": "condition",
            "type": "numberGreaterThan",
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "dataType": "number",
                "type": "LITERAL",
                "value": 2,
              },
              "right": {
                "nodeType": "dataValue",
                "dataType": "number",
                "type": "BLACKBOARD",
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
        ],
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
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "dataType": "number",
                "type": "LITERAL",
                "value": 0,
              },
              "right": {
                "nodeType": "dataValue",
                "dataType": "number",
                "type": "BLACKBOARD",
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
          {
            "nodeType": "action",
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 203,
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
                    "value": 297,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 105,
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
            "dataType": "number",
            "type": "LITERAL",
            "value": 100,
          },
        },
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
            "nodeType": "selector",
            "nodes": [],
          },
          {
            "nodeType": "condition",
            "type": "vectorDistanceBetweenLessThan",
            "invert": false,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "dataType": "vector",
                "type": "BLACKBOARD",
                "blackboardKey": "opponentClosestUnitPositionByType",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "dataType": "unitType",
                    "type": "LITERAL",
                    "value": "ARCHER",
                  },
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "dataType": "vector",
                "type": "BLACKBOARD",
                "blackboardKey": "groupAveragePosition",
                "params": {},
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 339,
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
                    "dataType": "vectorAngle",
                    "type": "LITERAL",
                    "value": 180,
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
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "invert": true,
            "type": "isTrue",
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
            ],
          },
        ],
      },
      {
        "nodeType": "sequence",
        "nodes": [],
      },
    ],
  },
};

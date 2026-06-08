import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const randomlyMutatedTree: UnitAwareBehaviourTree = {
  [UnitType.Archer]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "condition",
        "type": "groupIndexEquals",
        "invert": true,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "groupIndex",
            "value": 384,
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "groupIndex",
            "value": 113,
          },
        },
      },
      {
        "nodeType": "condition",
        "type": "groupIndexEquals",
        "invert": true,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "groupIndex",
            "value": 340,
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "groupIndex",
            "value": 183,
          },
        },
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "unitCountGreaterThan",
            "invert": true,
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
            "type": "unitCountGreaterThan",
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
                "dataType": "unitCount",
                "type": "LITERAL",
                "value": 38,
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
            "type": "unitCountGreaterThan",
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
                "dataType": "unitCount",
                "type": "LITERAL",
                "value": 2,
              },
            },
          },
          {
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "sequence",
                "nodes": [],
              },
              {
                "nodeType": "condition",
                "type": "groupIndexGreaterThan",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "groupIndex",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
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
            "type": "SPLIT_GROUP",
            "params": {},
          },
        ],
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "groupIndexEquals",
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "groupIndex",
                "blackboardKey": "groupMetaUnitTypeIndex",
                "params": {},
              },
              "right": {
                "nodeType": "dataValue",
                "dataType": "groupIndex",
                "type": "BLACKBOARD",
                "blackboardKey": "groupMetaUnitTypeIndex",
                "params": {},
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 700,
                  "y": 280,
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
                "value": 100,
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
        "nodeType": "condition",
        "type": "groupIndexGreaterThan",
        "invert": true,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "groupIndex",
            "value": 121,
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "groupIndex",
            "value": 414,
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 886,
                          "y": 192,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 214,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 498,
                      },
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 305,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 428,
                  },
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 138,
                  "y": 959,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 438,
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
            "value": 83,
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
            "nodeType": "condition",
            "type": "vectorDistanceBetweenLessThan",
            "invert": true,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "dataType": "vector",
                "type": "BLACKBOARD",
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
                      "x": 859,
                      "y": 6,
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 281,
                  },
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "dataType": "groupIndex",
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 229,
                      "y": 659,
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "dataType": "vectorAngle",
                    "type": "LITERAL",
                    "value": 354,
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
            "nodeType": "action",
            "type": "FORMATION_LINE",
            "params": {},
          },
          {
            "nodeType": "action",
            "type": "FORMATION_SPREAD",
            "params": {},
          },
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
                      "x": 909,
                      "y": 25,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "groupIndex",
                    "value": 141,
                  },
                },
              },
              {
                "nodeType": "condition",
                "type": "unitCountEquals",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitCount",
                    "value": 4,
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
            ],
          },
        ],
      },
      {
        "nodeType": "condition",
        "type": "unitCountGreaterThan",
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
            "value": 25,
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
        "nodeType": "sequence",
        "nodes": [],
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
            "nodeType": "sequence",
            "nodes": [],
          },
        ],
      },
    ],
  },
};

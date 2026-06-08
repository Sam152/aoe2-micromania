import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const randomlyGeneratedTree: UnitAwareBehaviourTree = {
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
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 319,
              "y": 59,
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
            "blackboardKey": "opponentAveragePosition",
            "params": {},
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
            "dataType": "number",
            "value": 137,
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
              "x": 736,
              "y": 250,
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
            "nodeType": "selector",
            "nodes": [
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
                    "value": 81,
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
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
                ],
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
                      "x": 426,
                      "y": 426,
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
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 12,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 5,
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
                    "nodeType": "action",
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 297,
                          "y": 907,
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
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 755,
                              "y": 405,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 43,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 222,
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
            "nodeType": "selector",
            "nodes": [
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
                "nodeType": "condition",
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
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
                        "value": "ARCHER",
                      },
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
                        "value": "ARCHER",
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
              {
                "nodeType": "sequence",
                "nodes": [
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
                ],
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
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
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
                        "dataType": "number",
                        "value": 105,
                      },
                    },
                  },
                  {
                    "nodeType": "sequence",
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
                        "dataType": "count",
                        "value": 13,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 24,
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 10,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 21,
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
                        "dataType": "count",
                        "value": 6,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 4,
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
                          "x": 829,
                          "y": 579,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 7,
                          "y": 543,
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
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 5,
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "selector",
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
                    ],
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
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": true,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 483,
                          "y": 783,
                        },
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
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
                  },
                  {
                    "nodeType": "sequence",
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
                        "blackboardKey": "groupAveragePosition",
                        "params": {},
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
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
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 105,
                                  "y": 368,
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
              {
                "nodeType": "action",
                "type": "SPLIT_GROUP",
                "params": {},
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
                    "nodeType": "condition",
                    "type": "numberEquals",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 420,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 416,
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
                    "dataType": "number",
                    "value": 460,
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
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 17,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 14,
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
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
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
            "nodeType": "condition",
            "type": "countEquals",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupUnitCount",
                "params": {},
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 28,
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
                "type": "LITERAL",
                "dataType": "count",
                "value": 31,
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
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
                  "x": 140,
                  "y": 550,
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 89,
                  "y": 101,
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
            "nodeType": "sequence",
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
                                  "x": 252,
                                  "y": 129,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 175,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 317,
                              },
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 321,
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
                          "x": 285,
                          "y": 19,
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
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [
                          {
                            "nodeType": "selector",
                            "nodes": [],
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
                                      "x": 25,
                                      "y": 231,
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
                    ],
                  },
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
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
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 997,
                              "y": 167,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 63,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 369,
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
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 35,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 35,
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
                          "x": 390,
                          "y": 355,
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
                        "value": 203,
                      },
                    },
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
                        "nodeType": "sequence",
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
                          "x": 867,
                          "y": 42,
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
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "action",
                        "type": "MERGE_GROUP",
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
                            "value": false,
                          },
                        },
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [
                          {
                            "nodeType": "sequence",
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
                                      "x": 159,
                                      "y": 351,
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
                                        "value": "ARCHER",
                                      },
                                    },
                                  },
                                  "pointB": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 805,
                                      "y": 866,
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 323,
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
                                        "value": "MANGO",
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
                          {
                            "nodeType": "condition",
                            "type": "countEquals",
                            "invert": false,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 30,
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 31,
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
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
                                "params": {},
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
                                "params": {},
                              },
                            },
                          },
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
                                    "nodes": [],
                                  },
                                  {
                                    "nodeType": "selector",
                                    "nodes": [],
                                  },
                                ],
                              },
                            ],
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
                    "type": "LITERAL",
                    "dataType": "boolean",
                    "value": false,
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
                    "type": "SPLIT_GROUP",
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 732,
                          "y": 190,
                        },
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
                        "dataType": "count",
                        "value": 5,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 29,
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
                    "nodeType": "selector",
                    "nodes": [
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
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
                                "params": {},
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
                                "params": {},
                              },
                            },
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 103,
                          "y": 213,
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
                    "nodeType": "selector",
                    "nodes": [],
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
                            "nodeType": "condition",
                            "type": "countEquals",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 39,
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 1,
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
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupMetaUnitTypeIndex",
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
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
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
                        "nodeType": "condition",
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 332,
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
                        "nodes": [],
                      },
                    ],
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": false,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 21,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
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
                                "dataType": "number",
                                "value": 401,
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
                      {
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
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
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
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
                        "type": "numberEquals",
                        "invert": true,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 0,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 167,
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
                              "x": 88,
                              "y": 209,
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
                                "nodeType": "sequence",
                                "nodes": [],
                              },
                            ],
                          },
                        ],
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
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
                                "params": {},
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupUnitCount",
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
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 388,
                                  "y": 731,
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
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 545,
                                      "y": 805,
                                    },
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 170,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 298,
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
                          {
                            "nodeType": "action",
                            "type": "MOVE_UNITS",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 529,
                                  "y": 802,
                                },
                              },
                            },
                          },
                        ],
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
                        "nodeType": "action",
                        "type": "PATROL",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 260,
                              "y": 39,
                            },
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
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 222,
                          "y": 582,
                        },
                      },
                    },
                  },
                ],
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
                    "value": 496,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 487,
                  },
                },
              },
            ],
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
              "x": 946,
              "y": 577,
            },
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
                "nodeType": "selector",
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
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 450,
                              "y": 743,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 197,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 201,
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 889,
                          "y": 925,
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
                              "x": 161,
                              "y": 435,
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
                        "nodeType": "condition",
                        "type": "numberGreaterThan",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 17,
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
                            "nodeType": "condition",
                            "type": "countEquals",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
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
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
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
                            "type": "SPLIT_GROUP",
                            "params": {},
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [
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
                                "nodeType": "sequence",
                                "nodes": [],
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
                            "nodeType": "sequence",
                            "nodes": [
                              {
                                "nodeType": "condition",
                                "type": "countEquals",
                                "invert": false,
                                "params": {
                                  "leftCount": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 35,
                                  },
                                  "rightCount": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 29,
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
                                    "nodeType": "selector",
                                    "nodes": [],
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
                                    "nodeType": "action",
                                    "type": "MOVE_UNITS",
                                    "params": {
                                      "direction": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vector",
                                        "value": {
                                          "x": 501,
                                          "y": 129,
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
                                            "type": "LITERAL",
                                            "dataType": "boolean",
                                            "value": false,
                                          },
                                        },
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
                                ],
                              },
                            ],
                          },
                        ],
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
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 21,
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
                              "x": 551,
                              "y": 524,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 245,
                              "y": 569,
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 42,
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
                            "value": 102,
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
                            "value": 265,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 136,
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                        "params": {},
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
                        "dataType": "count",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 0,
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
                        "value": 195,
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
                        "nodeType": "action",
                        "type": "MERGE_GROUP",
                        "params": {},
                      },
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 22,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 36,
                          },
                        },
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
                            "nodeType": "selector",
                            "nodes": [],
                          },
                          {
                            "nodeType": "action",
                            "type": "IDLE",
                            "params": {
                              "forTicksAmount": {
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
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 12,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 963,
                      "y": 297,
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 48,
                      "y": 442,
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
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                ],
              },
              {
                "nodeType": "sequence",
                "nodes": [
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
                        "nodeType": "selector",
                        "nodes": [],
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 255,
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
                            "blackboardKey": "groupAveragePosition",
                            "params": {},
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
                            "dataType": "count",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 4,
                          },
                        },
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [
                          {
                            "nodeType": "sequence",
                            "nodes": [],
                          },
                          {
                            "nodeType": "sequence",
                            "nodes": [],
                          },
                          {
                            "nodeType": "sequence",
                            "nodes": [],
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
                        "type": "MERGE_GROUP",
                        "params": {},
                      },
                    ],
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
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 28,
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
                    "value": 487,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 46,
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 16,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 3,
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
          {
            "nodeType": "condition",
            "type": "vectorDistanceBetweenLessThan",
            "invert": true,
            "params": {
              "pointA": {
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
                      "x": 677,
                      "y": 571,
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 337,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 390,
                  },
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 319,
                  "y": 973,
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
            "nodeType": "action",
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
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
                "type": "SPLIT_GROUP",
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
                              "x": 355,
                              "y": 361,
                            },
                          },
                        },
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "condition",
                            "type": "countEquals",
                            "invert": false,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 26,
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 19,
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
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                ],
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
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
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
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
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
                          "x": 719,
                          "y": 496,
                        },
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "action",
                        "type": "SPLIT_GROUP",
                        "params": {},
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
                            "nodeType": "selector",
                            "nodes": [
                              {
                                "nodeType": "action",
                                "type": "SPLIT_GROUP",
                                "params": {},
                              },
                              {
                                "nodeType": "condition",
                                "type": "countEquals",
                                "invert": true,
                                "params": {
                                  "leftCount": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 3,
                                  },
                                  "rightCount": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
                                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                                    "params": {},
                                  },
                                },
                              },
                            ],
                          },
                          {
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": false,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupUnitCount",
                                "params": {},
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 34,
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
                        "type": "countEquals",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 20,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    ],
                  },
                ],
              },
            ],
          },
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 11,
              },
            },
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 29,
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
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 5,
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
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
                          },
                          {
                            "nodeType": "sequence",
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
                                  "x": 660,
                                  "y": 826,
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
                                "nodeType": "sequence",
                                "nodes": [
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
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 480,
                                      },
                                    },
                                  },
                                ],
                              },
                              {
                                "nodeType": "selector",
                                "nodes": [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
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
                    ],
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
                        "nodeType": "action",
                        "type": "MERGE_GROUP",
                        "params": {},
                      },
                      {
                        "nodeType": "condition",
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 30,
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
                            "nodeType": "sequence",
                            "nodes": [],
                          },
                          {
                            "nodeType": "sequence",
                            "nodes": [],
                          },
                          {
                            "nodeType": "sequence",
                            "nodes": [],
                          },
                        ],
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
                        "nodeType": "condition",
                        "type": "numberGreaterThan",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 264,
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
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "sequence",
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
                                "blackboardKey": "groupAveragePosition",
                                "params": {},
                              },
                              "pointB": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 863,
                                  "y": 582,
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 297,
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
                                  "x": 839,
                                  "y": 262,
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
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
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
                          "x": 451,
                          "y": 287,
                        },
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 342,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 262,
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
                            "nodeType": "selector",
                            "nodes": [],
                          },
                        ],
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "sequence",
                            "nodes": [],
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
                                  "x": 839,
                                  "y": 771,
                                },
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
                                    "value": "MONK",
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
                          {
                            "nodeType": "sequence",
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
                                ],
                              },
                            ],
                          },
                        ],
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 35,
                  "y": 859,
                },
              },
            },
          },
          {
            "nodeType": "sequence",
            "nodes": [],
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
                  "x": 145,
                  "y": 864,
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 463,
                  "y": 680,
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
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [],
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
                    "invert": true,
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
                            "value": "ARCHER",
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 74,
                          "y": 576,
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
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
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
                            "nodeType": "sequence",
                            "nodes": [],
                          },
                        ],
                      },
                    ],
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
                    "nodeType": "condition",
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 935,
                          "y": 926,
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
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 117,
                              "y": 938,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 226,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 219,
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
                    ],
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
                        "dataType": "number",
                        "value": 86,
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
                                "value": "ARCHER",
                              },
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 110,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 423,
                          },
                        },
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
                        "dataType": "count",
                        "value": 0,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 12,
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 417,
                      },
                    },
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
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
                          "x": 807,
                          "y": 691,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 764,
                          "y": 173,
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
            ],
          },
        ],
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
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "sequence",
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 698,
                          "y": 494,
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
                        "value": 415,
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 0,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                          "x": 189,
                          "y": 621,
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 30,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 21,
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
                        "nodeType": "condition",
                        "type": "numberGreaterThan",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 211,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 140,
                          },
                        },
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
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
                          "x": 585,
                          "y": 310,
                        },
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
                      "x": 961,
                      "y": 943,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 494,
                      "y": 476,
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
                "nodeType": "action",
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 261,
                      "y": 705,
                    },
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
                    "value": 340,
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
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 11,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 21,
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
                    "blackboardKey": "groupUnitVectorFacingDirection",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 807,
                          "y": 576,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 129,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 184,
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
                    "dataType": "number",
                    "value": 294,
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
                "nodeType": "selector",
                "nodes": [
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
                            "value": 214,
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
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
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
                    "nodeType": "selector",
                    "nodes": [],
                  },
                ],
              },
              {
                "nodeType": "selector",
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
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 612,
                          "y": 206,
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                              "x": 220,
                              "y": 881,
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
                        "dataType": "number",
                        "value": 433,
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
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
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 155,
                              },
                            },
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "SPLIT_GROUP",
                    "params": {},
                  },
                ],
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
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 285,
                          "y": 722,
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
                    "value": true,
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 287,
                      "y": 439,
                    },
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
                        "value": "MONK",
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
              {
                "nodeType": "action",
                "type": "PATROL",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 553,
                      "y": 666,
                    },
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
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 39,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
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
                              "x": 343,
                              "y": 348,
                            },
                          },
                        },
                      },
                    ],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                ],
              },
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                ],
              },
            ],
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 29,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 15,
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
                        "nodeType": "sequence",
                        "nodes": [
                          {
                            "nodeType": "action",
                            "type": "MERGE_GROUP",
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 309,
                      "y": 254,
                    },
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
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 836,
                  "y": 858,
                },
              },
            },
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
            "blackboardKey": "groupAveragePosition",
            "params": {},
          },
          "pointB": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 656,
              "y": 298,
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
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "selector",
            "nodes": [
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
                "nodeType": "action",
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 407,
                      "y": 0,
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
                "dataType": "number",
                "value": 24,
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
                "dataType": "count",
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
                "dataType": "count",
                "value": 20,
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
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 931,
                      "y": 381,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 409,
                      "y": 435,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 98,
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
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 303,
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
                      "x": 81,
                      "y": 878,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 524,
                      "y": 520,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 365,
                  },
                },
              },
            ],
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
            "nodeType": "selector",
            "nodes": [],
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
                  {
                    "nodeType": "action",
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 637,
                          "y": 605,
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
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 233,
                          },
                        },
                      },
                    ],
                  },
                ],
              },
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 439,
                      "y": 834,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 611,
                      "y": 364,
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
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "sequence",
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
                      "x": 164,
                      "y": 761,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 42,
                      "y": 410,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 381,
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
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
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
                    "value": 26,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 436,
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
                ],
              },
              {
                "nodeType": "action",
                "type": "SPLIT_GROUP",
                "params": {},
              },
              {
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
              },
              {
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
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
                "nodeType": "selector",
                "nodes": [
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
                              "x": 465,
                              "y": 739,
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
                        "nodes": [],
                      },
                      {
                        "nodeType": "action",
                        "type": "SPLIT_GROUP",
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
                            "blackboardKey": "opponentAveragePosition",
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
                            "nodeType": "selector",
                            "nodes": [],
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [],
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [],
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
                    "type": "countEquals",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 4,
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
                            "nodeType": "condition",
                            "type": "vectorDistanceBetweenLessThan",
                            "invert": true,
                            "params": {
                              "pointA": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 839,
                                  "y": 121,
                                },
                              },
                              "pointB": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 841,
                                  "y": 168,
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 159,
                              },
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            "nodeType": "condition",
            "type": "countEquals",
            "invert": true,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
            },
          },
          {
            "nodeType": "selector",
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
              },
              {
                "nodeType": "sequence",
                "nodes": [
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
                            "dataType": "count",
                            "value": 18,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 31,
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
                            "nodeType": "selector",
                            "nodes": [],
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
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 103,
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
                            "value": 183,
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
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
                  },
                ],
              },
            ],
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
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 31,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 4,
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
                    "nodeType": "condition",
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": true,
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
                            "value": "ARCHER",
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
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 402,
                          "y": 942,
                        },
                      },
                    },
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
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
                        "value": 95,
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": false,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 21,
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
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 172,
                          },
                        },
                      },
                    ],
                  },
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 29,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 26,
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
                    ],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 36,
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
                ],
              },
            ],
          },
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
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "groupAveragePosition",
                "params": {},
              },
              "pointB": {
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
                      "x": 123,
                      "y": 324,
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 307,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 78,
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
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 808,
                      "y": 17,
                    },
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 32,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
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
                "type": "numberEquals",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 29,
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
                        "type": "LITERAL",
                        "dataType": "boolean",
                        "value": true,
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
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 24,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
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
                          {
                            "nodeType": "selector",
                            "nodes": [
                              {
                                "nodeType": "condition",
                                "type": "countEquals",
                                "invert": true,
                                "params": {
                                  "leftCount": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 9,
                                  },
                                  "rightCount": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
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
                                    "type": "SPLIT_GROUP",
                                    "params": {},
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
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
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeIndex",
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
                    "type": "MERGE_GROUP",
                    "params": {},
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                    ],
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
                        "type": "countEquals",
                        "invert": false,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 16,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 18,
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
                                "nodeType": "sequence",
                                "nodes": [],
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
                              "x": 717,
                              "y": 536,
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
                            "blackboardKey": "opponentAveragePosition",
                            "params": {},
                          },
                        },
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [],
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
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 113,
                          },
                        },
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                    ],
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
                    "nodes": [
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
                        "nodeType": "selector",
                        "nodes": [
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
                                    "value": "MANGO",
                                  },
                                },
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
                                    "value": "MANGO",
                                  },
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 224,
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
                            "nodes": [],
                          },
                          {
                            "nodeType": "action",
                            "type": "SPLIT_GROUP",
                            "params": {},
                          },
                          {
                            "nodeType": "sequence",
                            "nodes": [],
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
                    "type": "countEquals",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 3,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                    "nodeType": "condition",
                    "type": "numberEquals",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 372,
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
                ],
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
                    "type": "SPLIT_GROUP",
                    "params": {},
                  },
                ],
              },
            ],
          },
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 28,
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 37,
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
                "nodeType": "condition",
                "type": "numberEquals",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 433,
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
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "SPLIT_GROUP",
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
                  {
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                        "dataType": "count",
                        "value": 19,
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
                            "value": "MANGO",
                          },
                        },
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
                        "nodeType": "condition",
                        "type": "vectorDistanceBetweenLessThan",
                        "invert": true,
                        "params": {
                          "pointA": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 557,
                              "y": 778,
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
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 337,
                                  "y": 887,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 79,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 401,
                              },
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 26,
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
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 695,
                              "y": 369,
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
                                "value": "ARCHER",
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
                      {
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "sequence",
                            "nodes": [],
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
                                      "x": 434,
                                      "y": 287,
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
                ],
              },
              {
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 354,
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
                "nodeType": "sequence",
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
                    "nodeType": "condition",
                    "type": "numberEquals",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 72,
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
                "nodeType": "condition",
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 293,
                      "y": 414,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 987,
                      "y": 910,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 228,
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
                        "value": 69,
                      },
                    },
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
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 312,
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
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 220,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 464,
                              },
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 248,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 381,
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
                        "value": 342,
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
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 115,
                              "y": 515,
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
                                    "value": 162,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 410,
                                  },
                                },
                              },
                              "pointB": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 68,
                                  "y": 241,
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 72,
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
                            ],
                          },
                          {
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupUnitCount",
                                "params": {},
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 497,
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
                        "value": 309,
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
        ],
      },
      {
        "nodeType": "selector",
        "nodes": [],
      },
      {
        "nodeType": "action",
        "type": "MERGE_GROUP",
        "params": {},
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
            "value": 439,
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 196,
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
    ],
  },
  [UnitType.Mangonel]: {
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
            "blackboardKey": "opponentAveragePosition",
            "params": {},
          },
        },
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 18,
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 32,
              },
            },
          },
          {
            "nodeType": "sequence",
            "nodes": [
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
                "nodeType": "sequence",
                "nodes": [],
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
            ],
          },
          {
            "nodeType": "action",
            "type": "SPLIT_GROUP",
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
                  "x": 771,
                  "y": 196,
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
                "type": "BLACKBOARD",
                "dataType": "number",
                "blackboardKey": "groupMetaUnitTypeIndex",
                "params": {},
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
                "dataType": "count",
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
                "dataType": "count",
                "value": 27,
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
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
                    "dataType": "count",
                    "value": 33,
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
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupUnitCount",
                "params": {},
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
            },
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
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 190,
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
                "type": "MERGE_GROUP",
                "params": {},
              },
            ],
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
                    "blackboardKey": "groupAveragePosition",
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 12,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 2,
                  },
                },
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
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                ],
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
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
              },
            ],
          },
          {
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 3,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 32,
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
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                ],
              },
              {
                "nodeType": "sequence",
                "nodes": [],
              },
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 16,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
                "nodeType": "condition",
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 491,
                      "y": 740,
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 165,
                          "y": 876,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 247,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 99,
                      },
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 418,
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
              },
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 15,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 13,
                      },
                    },
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
                    "value": 11,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 491,
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
                "type": "MERGE_GROUP",
                "params": {},
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
                    "value": 483,
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
                            "value": "MONK",
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
                    ],
                  },
                ],
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 4,
                          "y": 572,
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
                            "value": "ARCHER",
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
                  {
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
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
                            "value": "ARCHER",
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 568,
                          "y": 127,
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
                    "nodeType": "sequence",
                    "nodes": [],
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
                            "value": "MANGO",
                          },
                        },
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
                "nodes": [],
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
                        "value": "MONK",
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
                        "dataType": "count",
                        "value": 20,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 29,
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
                    "dataType": "number",
                    "value": 409,
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
                    "value": 384,
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
                  "x": 426,
                  "y": 640,
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
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 11,
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 39,
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
                "value": 247,
              },
            },
          },
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
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "opponentAveragePosition",
                "params": {},
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
                    "blackboardKey": "groupUnitVectorFacingDirection",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 375,
                          "y": 339,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 143,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 252,
                      },
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 318,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 96,
                  },
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 20,
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
                "type": "numberEquals",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 463,
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
                "blackboardKey": "groupAveragePosition",
                "params": {},
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
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                    ],
                  },
                  {
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
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
      {
        "nodeType": "condition",
        "type": "countGreaterThan",
        "invert": false,
        "params": {
          "leftCount": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "count",
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
            "dataType": "count",
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
              "x": 568,
              "y": 748,
            },
          },
        },
      },
      {
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "numberGreaterThan",
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 108,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 44,
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
                "value": 443,
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
                "type": "numberGreaterThan",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 398,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 35,
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
                    "dataType": "count",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 31,
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
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                    ],
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
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
                        "value": 318,
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
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                ],
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
                "type": "SPLIT_GROUP",
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
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 9,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
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
                "nodeType": "sequence",
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
                            "value": 79,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 158,
                          },
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
                            "value": "ARCHER",
                          },
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 408,
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
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 381,
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
                        "dataType": "number",
                        "value": 85,
                      },
                    },
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
                    "type": "LITERAL",
                    "dataType": "boolean",
                    "value": false,
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 23,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
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
                    "nodes": [],
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
                            "value": "MONK",
                          },
                        },
                      },
                    },
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 603,
                          "y": 625,
                        },
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "numberGreaterThan",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 192,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 236,
                          },
                        },
                      },
                      {
                        "nodeType": "sequence",
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
                            "dataType": "count",
                            "value": 26,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 23,
                          },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "value": false,
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
                    "value": 269,
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
      {
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "action",
            "type": "MERGE_GROUP",
            "params": {},
          },
          {
            "nodeType": "action",
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
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
                "type": "PATROL",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 709,
                      "y": 604,
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 775,
                      "y": 103,
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
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 108,
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
                "nodeType": "condition",
                "type": "vectorDistanceBetweenLessThan",
                "invert": false,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 720,
                      "y": 648,
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
                "nodeType": "selector",
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
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 9,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 243,
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
                    "type": "countEquals",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 11,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                ],
              },
            ],
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 3,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
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
                "nodeType": "selector",
                "nodes": [],
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
                    "value": 191,
                  },
                },
              },
            ],
          },
          {
            "nodeType": "condition",
            "type": "countEquals",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 39,
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
      {
        "nodeType": "selector",
        "nodes": [
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
                "value": 179,
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
                "type": "LITERAL",
                "dataType": "count",
                "value": 17,
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 21,
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
                "value": 348,
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
            "type": "BLACKBOARD",
            "dataType": "count",
            "blackboardKey": "groupMetaUnitTypeGroupCount",
            "params": {},
          },
          "rightCount": {
            "nodeType": "dataValue",
            "type": "BLACKBOARD",
            "dataType": "count",
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
      },
      {
        "nodeType": "action",
        "type": "PATROL",
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
                "value": 243,
              },
              "magnitude": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorMagnitude",
                "value": 406,
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
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 290,
              "y": 409,
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
              "x": 764,
              "y": 273,
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
                "value": 132,
              },
              "magnitude": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vectorMagnitude",
                "value": 43,
              },
            },
          },
          "distance": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 83,
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
              "x": 769,
              "y": 976,
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
            "nodeType": "sequence",
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 38,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 11,
                      },
                    },
                  },
                ],
              },
              {
                "nodeType": "selector",
                "nodes": [],
              },
            ],
          },
          {
            "nodeType": "condition",
            "type": "countEquals",
            "invert": true,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupUnitCount",
                "params": {},
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 1,
              },
            },
          },
        ],
      },
      {
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 23,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 3,
                  },
                },
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
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 39,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 34,
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
                        "dataType": "count",
                        "value": 21,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                    },
                  },
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 1,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 16,
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
                          "x": 343,
                          "y": 769,
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
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 202,
                          "y": 487,
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
                        "dataType": "number",
                        "value": 157,
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
                        "value": 237,
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
                    "nodes": [],
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
                        "value": 376,
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
                        ],
                      },
                    ],
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
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 805,
                              "y": 676,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 221,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 342,
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
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "condition",
                            "type": "countEquals",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
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
                                "dataType": "count",
                                "value": 13,
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
                                    "blackboardKey": "groupAveragePosition",
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
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 433,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 421,
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
                            "nodeType": "selector",
                            "nodes": [
                              {
                                "nodeType": "action",
                                "type": "IDLE",
                                "params": {
                                  "forTicksAmount": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 172,
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
                                "invert": true,
                                "params": {
                                  "leftCount": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
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
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
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
                        ],
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
                            "value": 373,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 259,
                          },
                        },
                      },
                    ],
                  },
                  {
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                        "dataType": "count",
                        "value": 30,
                      },
                    },
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
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
                            "type": "countGreaterThan",
                            "invert": false,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 3,
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 34,
                              },
                            },
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
                    ],
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
                          "x": 759,
                          "y": 310,
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
                            "nodeType": "selector",
                            "nodes": [],
                          },
                        ],
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [],
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
                                    "nodes": [],
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
                                          "x": 93,
                                          "y": 244,
                                        },
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
                                        "dataType": "count",
                                        "value": 3,
                                      },
                                      "rightCount": {
                                        "nodeType": "dataValue",
                                        "type": "BLACKBOARD",
                                        "dataType": "count",
                                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                                        "params": {},
                                      },
                                    },
                                  },
                                  {
                                    "nodeType": "sequence",
                                    "nodes": [],
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
                                          "x": 728,
                                          "y": 945,
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
                        "nodeType": "sequence",
                        "nodes": [
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
                            "nodeType": "sequence",
                            "nodes": [],
                          },
                        ],
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
                                "nodeType": "sequence",
                                "nodes": [],
                              },
                            ],
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
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 251,
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
                            "type": "PATROL",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 550,
                                  "y": 37,
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
                                "type": "BLACKBOARD",
                                "dataType": "vector",
                                "blackboardKey": "groupAveragePosition",
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
                  {
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
                  },
                ],
              },
              {
                "nodeType": "selector",
                "nodes": [],
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
                        "value": 30,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 144,
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
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 254,
                              "y": 262,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 177,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 89,
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
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                    ],
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
                      "x": 185,
                      "y": 700,
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
              },
            ],
          },
          {
            "nodeType": "condition",
            "type": "countEquals",
            "invert": true,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
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
                "dataType": "count",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 118,
                      "y": 150,
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
                    "value": 292,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 188,
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [],
              },
              {
                "nodeType": "sequence",
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
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 16,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupUnitCount",
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
                    "type": "SPLIT_GROUP",
                    "params": {},
                  },
                ],
              },
            ],
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
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 26,
              },
            },
          },
          {
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "dataType": "number",
                    "value": 345,
                  },
                },
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
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
                        "nodeType": "sequence",
                        "nodes": [],
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
                            "type": "BLACKBOARD",
                            "dataType": "count",
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
                            "dataType": "count",
                            "value": 2,
                          },
                        },
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
                ],
              },
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
                    "dataType": "count",
                    "value": 29,
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
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 435,
                      "y": 103,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 292,
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
                    "value": 167,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 22,
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
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "numberGreaterThan",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 180,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 150,
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
                      "x": 155,
                      "y": 986,
                    },
                  },
                },
              },
              {
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
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
                    "value": 144,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 373,
                  },
                },
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
                  "x": 713,
                  "y": 755,
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 114,
                  "y": 817,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 21,
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
            "type": "countEquals",
            "invert": true,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 33,
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 37,
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
                      {
                        "nodeType": "action",
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 688,
                              "y": 859,
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
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
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
                        "type": "SPLIT_GROUP",
                        "params": {},
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
                            "value": 137,
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
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                    ],
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": false,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
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
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 22,
                          },
                        },
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [
                          {
                            "nodeType": "action",
                            "type": "SPLIT_GROUP",
                            "params": {},
                          },
                        ],
                      },
                    ],
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
                ],
              },
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 2,
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
                            "value": "ARCHER",
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 476,
                          "y": 817,
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
              {
                "nodeType": "action",
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 334,
                      "y": 600,
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
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 491,
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
    ],
  },
  [UnitType.Monk]: {
    "nodeType": "selector",
    "nodes": [
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
                "nodeType": "selector",
                "nodes": [],
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
                "nodeType": "selector",
                "nodes": [],
              },
              {
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
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
                "nodeType": "selector",
                "nodes": [
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 13,
                          "y": 723,
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
                    "nodes": [],
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
                        "value": 305,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 237,
                      },
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 230,
                      "y": 702,
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
                        "value": "MANGO",
                      },
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 26,
                      "y": 185,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 243,
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
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 442,
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
            "nodeType": "sequence",
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
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                    ],
                  },
                ],
              },
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 33,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
                "type": "numberGreaterThan",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 488,
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
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
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                    ],
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
            "nodeType": "selector",
            "nodes": [
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeIndex",
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
                        "nodes": [
                          {
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 11,
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 33,
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
                                "value": 161,
                              },
                            },
                          },
                        ],
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
                            "dataType": "number",
                            "value": 148,
                          },
                        },
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
                        "value": 246,
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
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [],
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
                          "x": 120,
                          "y": 901,
                        },
                      },
                    },
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "action",
                        "type": "SPLIT_GROUP",
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
                        "dataType": "number",
                        "value": 408,
                      },
                    },
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
                      "x": 26,
                      "y": 747,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 754,
                      "y": 446,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 138,
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
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [],
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
                    "value": true,
                  },
                },
              },
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                    ],
                  },
                ],
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
                "nodeType": "selector",
                "nodes": [],
              },
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
                          "x": 687,
                          "y": 311,
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
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 111,
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
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 235,
                  },
                },
              },
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
                "nodeType": "action",
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 878,
                      "y": 679,
                    },
                  },
                },
              },
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "numberEquals",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 283,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 402,
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
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 125,
                          "y": 181,
                        },
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "selector",
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
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 153,
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
                        "nodeType": "condition",
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 31,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                        },
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
                            "type": "vectorDistanceBetweenLessThan",
                            "invert": true,
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
                                "type": "BLACKBOARD",
                                "dataType": "vector",
                                "blackboardKey": "groupUnitVectorFacingDirection",
                                "params": {
                                  "direction": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 792,
                                      "y": 383,
                                    },
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 14,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 74,
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
                          {
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
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
                                "dataType": "count",
                                "blackboardKey": "groupUnitCount",
                                "params": {},
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
                          {
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 22,
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupUnitCount",
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
                            "nodeType": "selector",
                            "nodes": [],
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
                            "nodes": [],
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
                                "nodeType": "action",
                                "type": "MOVE_UNITS",
                                "params": {
                                  "direction": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 422,
                                      "y": 357,
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
                                "nodes": [],
                              },
                              {
                                "nodeType": "selector",
                                "nodes": [],
                              },
                            ],
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
                                            "value": "MONK",
                                          },
                                        },
                                      },
                                      "angle": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorAngle",
                                        "value": 261,
                                      },
                                      "magnitude": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorMagnitude",
                                        "value": 42,
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
                                        "type": "LITERAL",
                                        "dataType": "vector",
                                        "value": {
                                          "x": 377,
                                          "y": 268,
                                        },
                                      },
                                      "angle": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorAngle",
                                        "value": 57,
                                      },
                                      "magnitude": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorMagnitude",
                                        "value": 262,
                                      },
                                    },
                                  },
                                  "pointB": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 728,
                                      "y": 533,
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 76,
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
                                    "nodeType": "action",
                                    "type": "MERGE_GROUP",
                                    "params": {},
                                  },
                                  {
                                    "nodeType": "sequence",
                                    "nodes": [
                                      {
                                        "nodeType": "action",
                                        "type": "SPLIT_GROUP",
                                        "params": {},
                                      },
                                    ],
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
                                    "nodeType": "sequence",
                                    "nodes": [
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
                                            "type": "LITERAL",
                                            "dataType": "number",
                                            "value": 347,
                                          },
                                        },
                                      },
                                    ],
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
                                        "value": 406,
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
                                    "nodeType": "condition",
                                    "type": "countEquals",
                                    "invert": true,
                                    "params": {
                                      "leftCount": {
                                        "nodeType": "dataValue",
                                        "type": "BLACKBOARD",
                                        "dataType": "count",
                                        "blackboardKey": "groupUnitCount",
                                        "params": {},
                                      },
                                      "rightCount": {
                                        "nodeType": "dataValue",
                                        "type": "BLACKBOARD",
                                        "dataType": "count",
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
                                        "dataType": "count",
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
                                        "dataType": "count",
                                        "value": 27,
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
                                        "nodeType": "selector",
                                        "nodes": [],
                                      },
                                      {
                                        "nodeType": "sequence",
                                        "nodes": [
                                          {
                                            "nodeType": "sequence",
                                            "nodes": [
                                              {
                                                "nodeType": "sequence",
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
                                                ],
                                              },
                                              {
                                                "nodeType": "selector",
                                                "nodes": [
                                                  {
                                                    "nodeType": "condition",
                                                    "type": "countEquals",
                                                    "invert": false,
                                                    "params": {
                                                      "leftCount": {
                                                        "nodeType": "dataValue",
                                                        "type": "BLACKBOARD",
                                                        "dataType": "count",
                                                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                                                        "params": {},
                                                      },
                                                      "rightCount": {
                                                        "nodeType": "dataValue",
                                                        "type": "BLACKBOARD",
                                                        "dataType": "count",
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
                                                "type": "countEquals",
                                                "invert": false,
                                                "params": {
                                                  "leftCount": {
                                                    "nodeType": "dataValue",
                                                    "type": "BLACKBOARD",
                                                    "dataType": "count",
                                                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                                                    "params": {},
                                                  },
                                                  "rightCount": {
                                                    "nodeType": "dataValue",
                                                    "type": "LITERAL",
                                                    "dataType": "count",
                                                    "value": 20,
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
                                                    "value": false,
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
                                      {
                                        "nodeType": "selector",
                                        "nodes": [
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
                                            "nodeType": "action",
                                            "type": "IDLE",
                                            "params": {
                                              "forTicksAmount": {
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
                              {
                                "nodeType": "sequence",
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
                                            "type": "LITERAL",
                                            "dataType": "count",
                                            "value": 27,
                                          },
                                          "rightCount": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "count",
                                            "value": 17,
                                          },
                                        },
                                      },
                                    ],
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
                                  {
                                    "nodeType": "condition",
                                    "type": "countEquals",
                                    "invert": true,
                                    "params": {
                                      "leftCount": {
                                        "nodeType": "dataValue",
                                        "type": "BLACKBOARD",
                                        "dataType": "count",
                                        "blackboardKey": "groupUnitCount",
                                        "params": {},
                                      },
                                      "rightCount": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "count",
                                        "value": 17,
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
                              "x": 405,
                              "y": 758,
                            },
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
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 917,
                                  "y": 415,
                                },
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
                            "type": "MOVE_UNITS",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 870,
                                  "y": 813,
                                },
                              },
                            },
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [
                              {
                                "nodeType": "sequence",
                                "nodes": [],
                              },
                            ],
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
                            "dataType": "number",
                            "value": 459,
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
                            "blackboardKey": "groupAveragePosition",
                            "params": {},
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 432,
                              "y": 234,
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
                ],
              },
            ],
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
            "dataType": "number",
            "value": 101,
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
        "type": "numberGreaterThan",
        "invert": true,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 403,
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 492,
          },
        },
      },
      {
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "countEquals",
            "invert": false,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 10,
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
              "x": 834,
              "y": 443,
            },
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
                "blackboardKey": "opponentAveragePosition",
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
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
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
        "type": "SPLIT_GROUP",
        "params": {},
      },
      {
        "nodeType": "selector",
        "nodes": [
          {
            "nodeType": "selector",
            "nodes": [],
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
                "blackboardKey": "opponentAveragePosition",
                "params": {},
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
                    "value": "ARCHER",
                  },
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
            "nodeType": "sequence",
            "nodes": [
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
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 289,
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
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
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
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 0,
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
              {
                "nodeType": "condition",
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
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
                    "type": "BLACKBOARD",
                    "dataType": "vector",
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
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
                "nodeType": "sequence",
                "nodes": [
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
                    ],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 15,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                        },
                      },
                    ],
                  },
                  {
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 1,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "action",
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 221,
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
                        "nodes": [
                          {
                            "nodeType": "sequence",
                            "nodes": [
                              {
                                "nodeType": "selector",
                                "nodes": [],
                              },
                            ],
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
                                "nodeType": "action",
                                "type": "IDLE",
                                "params": {
                                  "forTicksAmount": {
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
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                    ],
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
          {
            "nodeType": "sequence",
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
            ],
          },
          {
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 27,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
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
          {
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
                    "nodeType": "condition",
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 886,
                          "y": 644,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 168,
                          "y": 339,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 283,
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
                            "blackboardKey": "groupAveragePosition",
                            "params": {},
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 8,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 61,
                          },
                        },
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
                            "value": "MONK",
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
                              "x": 36,
                              "y": 859,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 633,
                              "y": 2,
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 309,
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
                        "nodes": [
                          {
                            "nodeType": "selector",
                            "nodes": [],
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
              {
                "nodeType": "selector",
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
              },
              {
                "nodeType": "selector",
                "nodes": [],
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
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 20,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 21,
                      },
                    },
                  },
                  {
                    "nodeType": "sequence",
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
                    "nodeType": "selector",
                    "nodes": [
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
                            "nodeType": "action",
                            "type": "MERGE_GROUP",
                            "params": {},
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
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 16,
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
                  "x": 767,
                  "y": 632,
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
                "type": "BLACKBOARD",
                "dataType": "count",
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
                "dataType": "count",
                "blackboardKey": "groupUnitCount",
                "params": {},
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
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 17,
                  },
                },
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
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                    ],
                  },
                ],
              },
              {
                "nodeType": "sequence",
                "nodes": [],
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
                        "value": "MONK",
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
                  {
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                ],
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
                    "nodeType": "action",
                    "type": "SPLIT_GROUP",
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 12,
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
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countGreaterThan",
                        "invert": false,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 14,
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
                        "type": "vectorDistanceBetweenLessThan",
                        "invert": true,
                        "params": {
                          "pointA": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 244,
                              "y": 312,
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
                            "dataType": "number",
                            "value": 189,
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
                            "value": 271,
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
                        "nodeType": "action",
                        "type": "SPLIT_GROUP",
                        "params": {},
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
                        "blackboardKey": "groupAveragePosition",
                        "params": {},
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 961,
                          "y": 101,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 26,
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
                        "value": 435,
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
                    "type": "numberEquals",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 445,
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
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
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
                        "nodes": [],
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
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
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
                    "type": "countEquals",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 16,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 20,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                            "nodes": [],
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [],
                          },
                          {
                            "nodeType": "sequence",
                            "nodes": [
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
                                ],
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
                                ],
                              },
                            ],
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
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 62,
                              },
                            },
                          },
                          {
                            "nodeType": "sequence",
                            "nodes": [
                              {
                                "nodeType": "sequence",
                                "nodes": [
                                  {
                                    "nodeType": "selector",
                                    "nodes": [
                                      {
                                        "nodeType": "condition",
                                        "type": "countEquals",
                                        "invert": false,
                                        "params": {
                                          "leftCount": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "count",
                                            "value": 23,
                                          },
                                          "rightCount": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "count",
                                            "value": 29,
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
                                        "type": "MOVE_UNITS",
                                        "params": {
                                          "direction": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vector",
                                            "value": {
                                              "x": 919,
                                              "y": 125,
                                            },
                                          },
                                        },
                                      },
                                      {
                                        "nodeType": "selector",
                                        "nodes": [],
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
                                                  "x": 248,
                                                  "y": 432,
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
                                            "nodeType": "condition",
                                            "type": "vectorDistanceBetweenLessThan",
                                            "invert": false,
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
                                                  "x": 981,
                                                  "y": 357,
                                                },
                                              },
                                              "distance": {
                                                "nodeType": "dataValue",
                                                "type": "LITERAL",
                                                "dataType": "number",
                                                "value": 231,
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
                                                      "x": 590,
                                                      "y": 321,
                                                    },
                                                  },
                                                },
                                              },
                                            ],
                                          },
                                          {
                                            "nodeType": "selector",
                                            "nodes": [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
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
                          "x": 315,
                          "y": 174,
                        },
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
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 26,
                      },
                    },
                  },
                ],
              },
              {
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [
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
                                "dataType": "number",
                                "blackboardKey": "groupMetaUnitTypeIndex",
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
                    ],
                  },
                  {
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 37,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "selector",
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
                        ],
                      },
                      {
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 296,
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
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "selector",
                        "nodes": [
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
                                      "x": 26,
                                      "y": 53,
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
                            ],
                          },
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
                                    "value": true,
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
                            ],
                          },
                        ],
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "condition",
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 27,
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
                                "nodeType": "sequence",
                                "nodes": [],
                              },
                            ],
                          },
                          {
                            "nodeType": "condition",
                            "type": "countEquals",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupUnitCount",
                                "params": {},
                              },
                              "rightCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
                                "params": {},
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
                                "type": "countGreaterThan",
                                "invert": false,
                                "params": {
                                  "leftCount": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
                                    "blackboardKey": "groupUnitCount",
                                    "params": {},
                                  },
                                  "rightCount": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 5,
                                  },
                                },
                              },
                              {
                                "nodeType": "sequence",
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
                                        "value": 412,
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 139,
                      "y": 352,
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
                    "dataType": "number",
                    "value": 115,
                  },
                },
              },
            ],
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
                "value": 219,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 397,
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
                        "value": "MONK",
                      },
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 16,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
              },
              {
                "nodeType": "selector",
                "nodes": [
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
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
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
                        "dataType": "count",
                        "value": 30,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
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
                    },
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": false,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
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
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
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
                            "nodeType": "action",
                            "type": "IDLE",
                            "params": {
                              "forTicksAmount": {
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
                                "nodeType": "selector",
                                "nodes": [],
                              },
                            ],
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 17,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
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
                        "dataType": "count",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 10,
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
                        "value": 333,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 345,
                      },
                    },
                  },
                  {
                    "nodeType": "sequence",
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
                        "nodeType": "selector",
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
                            "dataType": "count",
                            "value": 34,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 35,
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
                      {
                        "nodeType": "action",
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 442,
                              "y": 553,
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
                            "type": "LITERAL",
                            "dataType": "boolean",
                            "value": false,
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
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 2,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 85,
                          },
                        },
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [
                          {
                            "nodeType": "sequence",
                            "nodes": [
                              {
                                "nodeType": "condition",
                                "type": "numberEquals",
                                "invert": false,
                                "params": {
                                  "left": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 342,
                                  },
                                  "right": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 333,
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
                                    "type": "vectorDistanceBetweenLessThan",
                                    "invert": true,
                                    "params": {
                                      "pointA": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vector",
                                        "value": {
                                          "x": 671,
                                          "y": 174,
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
                                            "type": "LITERAL",
                                            "dataType": "vector",
                                            "value": {
                                              "x": 150,
                                              "y": 231,
                                            },
                                          },
                                          "angle": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorAngle",
                                            "value": 243,
                                          },
                                          "magnitude": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorMagnitude",
                                            "value": 310,
                                          },
                                        },
                                      },
                                      "distance": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 490,
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
                                    "type": "MERGE_GROUP",
                                    "params": {},
                                  },
                                ],
                              },
                              {
                                "nodeType": "selector",
                                "nodes": [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                "nodeType": "selector",
                "nodes": [
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
                            "dataType": "count",
                            "value": 25,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 16,
                          },
                        },
                      },
                    ],
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
                    "nodeType": "action",
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 355,
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
                            "blackboardKey": "opponentAveragePosition",
                            "params": {},
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 59,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 123,
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
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
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
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                        },
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
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 121,
                              },
                            },
                          },
                          {
                            "nodeType": "sequence",
                            "nodes": [],
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
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 943,
                                  "y": 34,
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
                        "value": 465,
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
                        "value": 300,
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
                    "nodeType": "action",
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
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
                    "nodeType": "condition",
                    "type": "countEquals",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 24,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 26,
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
                        "dataType": "count",
                        "value": 1,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 29,
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
                        "blackboardKey": "opponentAveragePosition",
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
                            "value": "MANGO",
                          },
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 54,
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
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 15,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 18,
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
                        "dataType": "number",
                        "value": 202,
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
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
                            "value": 313,
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
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "leftCount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
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
                                "dataType": "count",
                                "value": 12,
                              },
                            },
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [
                              {
                                "nodeType": "sequence",
                                "nodes": [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
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
                    "value": 269,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 131,
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
                                  "x": 717,
                                  "y": 729,
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
                                "dataType": "number",
                                "value": 55,
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
                ],
              },
              {
                "nodeType": "sequence",
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
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "selector",
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
                                "value": 320,
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
                                "nodeType": "sequence",
                                "nodes": [],
                              },
                              {
                                "nodeType": "sequence",
                                "nodes": [],
                              },
                              {
                                "nodeType": "selector",
                                "nodes": [],
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
                        "nodeType": "sequence",
                        "nodes": [],
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
                              "x": 562,
                              "y": 912,
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
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupMetaUnitTypeIndex",
                            "params": {},
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
                                "value": "MONK",
                              },
                            },
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
                "nodeType": "condition",
                "type": "countEquals",
                "invert": false,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 11,
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
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
                    "nodeType": "condition",
                    "type": "numberGreaterThan",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 496,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 407,
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 863,
                          "y": 356,
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
                        "dataType": "number",
                        "value": 14,
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 28,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                            "value": 304,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 212,
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
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 62,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 169,
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
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "leftCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 30,
                      },
                      "rightCount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 28,
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
                        "value": 284,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 137,
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": false,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 13,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
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
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                      {
                        "nodeType": "sequence",
                        "nodes": [
                          {
                            "nodeType": "sequence",
                            "nodes": [
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
                                    "type": "BLACKBOARD",
                                    "dataType": "vector",
                                    "blackboardKey": "groupUnitVectorFacingDirection",
                                    "params": {
                                      "direction": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vector",
                                        "value": {
                                          "x": 198,
                                          "y": 306,
                                        },
                                      },
                                      "angle": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorAngle",
                                        "value": 247,
                                      },
                                      "magnitude": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorMagnitude",
                                        "value": 467,
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
                    ],
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
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 454,
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
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [],
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 431,
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 919,
                          "y": 408,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 79,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 372,
                      },
                    },
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
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": true,
            "params": {
              "leftCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 33,
              },
              "rightCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 22,
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
                "value": 42,
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
                "value": 244,
              },
            },
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
                "dataType": "number",
                "value": 423,
              },
            },
          },
          {
            "nodeType": "sequence",
            "nodes": [],
          },
          {
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "countEquals",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
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
                    "nodeType": "sequence",
                    "nodes": [],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": false,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 11,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
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
                "nodeType": "condition",
                "type": "countEquals",
                "invert": true,
                "params": {
                  "leftCount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "rightCount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 8,
                  },
                },
              },
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
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countEquals",
                        "invert": true,
                        "params": {
                          "leftCount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 10,
                          },
                          "rightCount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
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
                      },
                    ],
                  },
                ],
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
                "type": "BLACKBOARD",
                "dataType": "number",
                "blackboardKey": "groupMetaUnitTypeIndex",
                "params": {},
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 217,
              },
            },
          },
        ],
      },
    ],
  },
};

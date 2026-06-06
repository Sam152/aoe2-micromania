import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";
import { UnitType } from "../../../units/UnitType.ts";

export const randomlyGeneratedTree: UnitAwareBehaviourTree = {
  [UnitType.Archer]: {
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
              "count": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "globalUnitsOfTypeCount",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitType",
                    "value": "MONK",
                  },
                },
              },
              "threshold": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "globalUnitsOfTypeCount",
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
                "nodes": [],
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
                        "value": 196,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 221,
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
                      "count": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "MANGO",
                          },
                        },
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 20,
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
                        "value": 133,
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
                      "x": 767,
                      "y": 455,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 513,
                      "y": 800,
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
                "value": 67,
              },
            },
          },
          {
            "nodeType": "condition",
            "type": "isTrue",
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
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 420,
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
                    "value": 317,
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
            "nodeType": "action",
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 422,
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
                          "x": 887,
                          "y": 804,
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
                            "value": 1,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 440,
                          },
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                        "blackboardKey": "opponentAveragePosition",
                        "params": {},
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 335,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 132,
                      },
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 177,
                      "y": 629,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                "type": "LITERAL",
                "dataType": "number",
                "value": 249,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 418,
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
                    "type": "BLACKBOARD",
                    "dataType": "vector",
                    "blackboardKey": "groupAveragePosition",
                    "params": {},
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
                "nodes": [],
              },
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "MANGO",
                          },
                        },
                      },
                      "threshold": {
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
                        "nodeType": "action",
                        "type": "SPLIT_GROUP",
                        "params": {},
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
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 224,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 141,
                                  },
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 210,
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
                            "blackboardKey": "opponentAveragePosition",
                            "params": {},
                          },
                        },
                      },
                      {
                        "nodeType": "condition",
                        "type": "countGreaterThan",
                        "invert": false,
                        "params": {
                          "count": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 32,
                          },
                          "threshold": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 30,
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
              {
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 248,
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
                    "type": "MERGE_GROUP",
                    "params": {},
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
                      "count": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 15,
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
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
                                    "value": 153,
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
                                        "value": "MONK",
                                      },
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 115,
                                  },
                                },
                              },
                              {
                                "nodeType": "condition",
                                "type": "countGreaterThan",
                                "invert": false,
                                "params": {
                                  "count": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 36,
                                  },
                                  "threshold": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 6,
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
                                        "type": "BLACKBOARD",
                                        "dataType": "number",
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
                                        "nodeType": "sequence",
                                        "nodes": [],
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
                                "nodeType": "condition",
                                "type": "numberEquals",
                                "invert": true,
                                "params": {
                                  "left": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 386,
                                  },
                                  "right": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 265,
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
                                            "blackboardKey": "groupAveragePosition",
                                            "params": {},
                                          },
                                          "angle": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorAngle",
                                            "value": 189,
                                          },
                                          "magnitude": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorMagnitude",
                                            "value": 149,
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
                                              "x": 420,
                                              "y": 650,
                                            },
                                          },
                                          "angle": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorAngle",
                                            "value": 33,
                                          },
                                          "magnitude": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorMagnitude",
                                            "value": 418,
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
                                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                                        "params": {},
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
                                      "x": 26,
                                      "y": 530,
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
                                "type": "IDLE",
                                "params": {
                                  "forTicksAmount": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 282,
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
                                      "x": 698,
                                      "y": 96,
                                    },
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
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
                                    "blackboardKey": "globalUnitsOfTypeCount",
                                    "params": {
                                      "unitType": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "unitType",
                                        "value": "MONK",
                                      },
                                    },
                                  },
                                  "threshold": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 22,
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
                                          "x": 497,
                                          "y": 484,
                                        },
                                      },
                                      "angle": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorAngle",
                                        "value": 237,
                                      },
                                      "magnitude": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorMagnitude",
                                        "value": 490,
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
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 357,
                                      "y": 484,
                                    },
                                  },
                                  "pointB": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 710,
                                      "y": 340,
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 301,
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
                                      "x": 352,
                                      "y": 28,
                                    },
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
                                "type": "countGreaterThan",
                                "invert": true,
                                "params": {
                                  "count": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 7,
                                  },
                                  "threshold": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 33,
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
                                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                                    "params": {},
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
                                  "x": 217,
                                  "y": 353,
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
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 506,
                              "y": 165,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 927,
                              "y": 42,
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 495,
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
                          "x": 416,
                          "y": 282,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 32,
                          "y": 598,
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
                          "x": 227,
                          "y": 156,
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
                            "value": 136,
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
                                  "x": 776,
                                  "y": 675,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 266,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 221,
                              },
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
                                            "type": "BLACKBOARD",
                                            "dataType": "number",
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
                                            "type": "countGreaterThan",
                                            "invert": false,
                                            "params": {
                                              "count": {
                                                "nodeType": "dataValue",
                                                "type": "BLACKBOARD",
                                                "dataType": "count",
                                                "blackboardKey": "globalUnitsOfTypeCount",
                                                "params": {
                                                  "unitType": {
                                                    "nodeType": "dataValue",
                                                    "type": "LITERAL",
                                                    "dataType": "unitType",
                                                    "value": "MONK",
                                                  },
                                                },
                                              },
                                              "threshold": {
                                                "nodeType": "dataValue",
                                                "type": "BLACKBOARD",
                                                "dataType": "count",
                                                "blackboardKey": "globalUnitsOfTypeCount",
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
                                    ],
                                  },
                                ],
                              },
                              {
                                "nodeType": "condition",
                                "type": "countGreaterThan",
                                "invert": false,
                                "params": {
                                  "count": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
                                    "blackboardKey": "globalUnitsOfTypeCount",
                                    "params": {
                                      "unitType": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "unitType",
                                        "value": "ARCHER",
                                      },
                                    },
                                  },
                                  "threshold": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
                                    "blackboardKey": "globalUnitsOfTypeCount",
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
                                    "type": "isTrue",
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
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": false,
                            "params": {
                              "count": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "globalUnitsOfTypeCount",
                                "params": {
                                  "unitType": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "unitType",
                                    "value": "MANGO",
                                  },
                                },
                              },
                              "threshold": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 2,
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
                            "nodeType": "sequence",
                            "nodes": [
                              {
                                "nodeType": "condition",
                                "type": "isTrue",
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
                                            "value": 31,
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
                              {
                                "nodeType": "selector",
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
                                    "value": 191,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 122,
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
                                "nodeType": "action",
                                "type": "MOVE_UNITS",
                                "params": {
                                  "direction": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 77,
                                      "y": 153,
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
                                    "value": 248,
                                  },
                                  "right": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 379,
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
                                  "x": 265,
                                  "y": 749,
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 406,
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
                            "nodeType": "condition",
                            "type": "numberGreaterThan",
                            "invert": true,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "number",
                                "blackboardKey": "groupUnitCount",
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
                          {
                            "nodeType": "selector",
                            "nodes": [],
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [
                              {
                                "nodeType": "condition",
                                "type": "isTrue",
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
                                "type": "IDLE",
                                "params": {
                                  "forTicksAmount": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "number",
                                    "blackboardKey": "groupUnitCount",
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
                                      "x": 781,
                                      "y": 459,
                                    },
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
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 32,
                                  },
                                  "threshold": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
                                    "blackboardKey": "globalUnitsOfTypeCount",
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
                                    "blackboardKey": "groupUnitCount",
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
                                        "blackboardKey": "groupUnitVectorFacingDirection",
                                        "params": {
                                          "direction": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vector",
                                            "value": {
                                              "x": 804,
                                              "y": 916,
                                            },
                                          },
                                          "angle": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorAngle",
                                            "value": 44,
                                          },
                                          "magnitude": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorMagnitude",
                                            "value": 58,
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
                            "type": "vectorDistanceBetweenLessThan",
                            "invert": false,
                            "params": {
                              "pointA": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 236,
                                  "y": 910,
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
                                    "blackboardKey": "groupAveragePosition",
                                    "params": {},
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 109,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 483,
                                  },
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "number",
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
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 421,
                      "y": 400,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 844,
                      "y": 700,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                          "x": 830,
                          "y": 426,
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
                            "dataType": "number",
                            "value": 0,
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
                              "x": 998,
                              "y": 30,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 585,
                              "y": 216,
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
                    "type": "isTrue",
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
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
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
                              "x": 664,
                              "y": 949,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 23,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 149,
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
                        "value": 345,
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
                              "x": 9,
                              "y": 293,
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
                    "nodeType": "condition",
                    "type": "numberGreaterThan",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                      "x": 577,
                      "y": 708,
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
                    "blackboardKey": "groupUnitVectorFacingDirection",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 196,
                          "y": 40,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 251,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 172,
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
                    "value": 422,
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
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 125,
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
                        "nodeType": "action",
                        "type": "SPLIT_GROUP",
                        "params": {},
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
                        "type": "numberGreaterThan",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 345,
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
                    "type": "SPLIT_GROUP",
                    "params": {},
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
                          "x": 160,
                          "y": 42,
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 42,
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                  "count": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "MANGO",
                      },
                    },
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
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
                      {
                        "nodeType": "condition",
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 245,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
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
                          "x": 204,
                          "y": 490,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 182,
                          "y": 411,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 22,
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                            "blackboardKey": "groupUnitVectorFacingDirection",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 207,
                                  "y": 84,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 317,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 53,
                              },
                            },
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
                        "type": "numberGreaterThan",
                        "invert": true,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 410,
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
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 17,
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
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
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 429,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 168,
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
                        "value": 194,
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
                "type": "numberEquals",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 88,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupUnitCount",
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
                    "nodeType": "sequence",
                    "nodes": [],
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
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": true,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 271,
                          "y": 854,
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
                        "value": 172,
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
                    "nodeType": "condition",
                    "type": "numberEquals",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 390,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 33,
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
                    "value": "ARCHER",
                  },
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 219,
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
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "globalUnitsOfTypeCount",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitType",
                    "value": "ARCHER",
                  },
                },
              },
              "threshold": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 5,
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
            "invert": true,
            "params": {
              "count": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 37,
              },
              "threshold": {
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
                      "x": 99,
                      "y": 453,
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
                    "blackboardKey": "groupAveragePosition",
                    "params": {},
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupUnitCount",
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
                            "value": 195,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
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
                            "value": 211,
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
                          "count": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "globalUnitsOfTypeCount",
                            "params": {
                              "unitType": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "unitType",
                                "value": "ARCHER",
                              },
                            },
                          },
                          "threshold": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "globalUnitsOfTypeCount",
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
                        "value": 90,
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
                "nodeType": "condition",
                "type": "numberEquals",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
                    "type": "isTrue",
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
                    "type": "SPLIT_GROUP",
                    "params": {},
                  },
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "MANGO",
                          },
                        },
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
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
                        "type": "MERGE_GROUP",
                        "params": {},
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
                "type": "SPLIT_GROUP",
                "params": {},
              },
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
                  },
                  "threshold": {
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
                    "nodes": [],
                  },
                  {
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
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
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 513,
                              "y": 179,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 171,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 399,
                          },
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 325,
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
                          "x": 233,
                          "y": 41,
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
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "groupUnitVectorFacingDirection",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 904,
                      "y": 282,
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 157,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 284,
                  },
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 756,
                  "y": 518,
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
            "nodeType": "sequence",
            "nodes": [],
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
        ],
      },
      {
        "nodeType": "condition",
        "type": "isTrue",
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
                                      "x": 706,
                                      "y": 595,
                                    },
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 224,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 133,
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
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 945,
                          "y": 249,
                        },
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
                        "value": 200,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 149,
                      },
                    },
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "isTrue",
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
                                  "x": 218,
                                  "y": 105,
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
                                      "x": 400,
                                      "y": 836,
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
                                    "value": 299,
                                  },
                                },
                              },
                              "pointB": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 761,
                                  "y": 286,
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "number",
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
                                "type": "isTrue",
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
                                "type": "vectorDistanceBetweenLessThan",
                                "invert": true,
                                "params": {
                                  "pointA": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 647,
                                      "y": 524,
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
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 375,
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
                                    "value": 225,
                                  },
                                  "right": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 293,
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
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                  "x": 411,
                  "y": 292,
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
                      "x": 919,
                      "y": 41,
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
        "type": "isTrue",
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
        "type": "SPLIT_GROUP",
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
                  "x": 978,
                  "y": 569,
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
                "nodeType": "sequence",
                "nodes": [],
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
                                "value": "MANGO",
                              },
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 163,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 282,
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 354,
                          "y": 641,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 269,
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
                        "value": 461,
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
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
                          "x": 917,
                          "y": 426,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 322,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 205,
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
            ],
          },
          {
            "nodeType": "sequence",
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
                "value": 387,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "number",
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
            "nodeType": "selector",
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
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 36,
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 12,
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
                          "x": 484,
                          "y": 653,
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
                          "x": 105,
                          "y": 623,
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
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 241,
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
                            "value": 282,
                          },
                        },
                      },
                      {
                        "nodeType": "condition",
                        "type": "isTrue",
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
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 507,
                          "y": 653,
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
                          "x": 953,
                          "y": 783,
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
                                "type": "BLACKBOARD",
                                "dataType": "vector",
                                "blackboardKey": "groupUnitVectorFacingDirection",
                                "params": {
                                  "direction": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 576,
                                      "y": 901,
                                    },
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 216,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 246,
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
                "type": "LITERAL",
                "dataType": "number",
                "value": 82,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "number",
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
                    "value": 23,
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
                  "x": 585,
                  "y": 614,
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
                      "x": 261,
                      "y": 546,
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 146,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 293,
                  },
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 487,
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
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 307,
                          "y": 74,
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
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "opponentAveragePosition",
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
                    "value": "MONK",
                  },
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 858,
                  "y": 536,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "number",
                "blackboardKey": "groupUnitCount",
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
                "blackboardKey": "groupUnitCount",
                "params": {},
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
                    "type": "numberGreaterThan",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "right": {
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
                "nodeType": "condition",
                "type": "numberGreaterThan",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 97,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 31,
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
                    "value": 371,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 408,
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
                    ],
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                      "x": 147,
                      "y": 70,
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
                        "value": 7,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 497,
                      },
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                },
              },
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "MANGO",
                      },
                    },
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
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
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 13,
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
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
                        "nodeType": "selector",
                        "nodes": [
                          {
                            "nodeType": "condition",
                            "type": "isTrue",
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
                        "nodeType": "condition",
                        "type": "numberGreaterThan",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupUnitCount",
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
                            "nodeType": "selector",
                            "nodes": [
                              {
                                "nodeType": "sequence",
                                "nodes": [],
                              },
                            ],
                          },
                          {
                            "nodeType": "condition",
                            "type": "isTrue",
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
                        "nodeType": "action",
                        "type": "PATROL",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 540,
                              "y": 41,
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
                            "blackboardKey": "groupAveragePosition",
                            "params": {},
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 221,
                              "y": 962,
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupUnitCount",
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
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 387,
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
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 492,
                                  "y": 992,
                                },
                              },
                              "pointB": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 254,
                                  "y": 969,
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
                        "type": "numberGreaterThan",
                        "invert": true,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 364,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 414,
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
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 25,
                          },
                          "threshold": {
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
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "count": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "globalUnitsOfTypeCount",
                                "params": {
                                  "unitType": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "unitType",
                                    "value": "MANGO",
                                  },
                                },
                              },
                              "threshold": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 8,
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
                          {
                            "nodeType": "condition",
                            "type": "numberGreaterThan",
                            "invert": true,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "number",
                                "blackboardKey": "groupUnitCount",
                                "params": {},
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 370,
                              },
                            },
                          },
                          {
                            "nodeType": "condition",
                            "type": "isTrue",
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
                                    "nodeType": "condition",
                                    "type": "numberGreaterThan",
                                    "invert": false,
                                    "params": {
                                      "left": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 293,
                                      },
                                      "right": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 336,
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
                                        "blackboardKey": "groupAveragePosition",
                                        "params": {},
                                      },
                                      "distance": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 5,
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
                                    "nodeType": "selector",
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
                                        "type": "LITERAL",
                                        "dataType": "vector",
                                        "value": {
                                          "x": 849,
                                          "y": 638,
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
                                "nodeType": "action",
                                "type": "MOVE_UNITS",
                                "params": {
                                  "direction": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 757,
                                      "y": 350,
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
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "count": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "globalUnitsOfTypeCount",
                            "params": {
                              "unitType": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "unitType",
                                "value": "MANGO",
                              },
                            },
                          },
                          "threshold": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 23,
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
                        "value": 256,
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
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 5,
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
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
                "type": "numberEquals",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 365,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 264,
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
                          "x": 109,
                          "y": 685,
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
                        "value": 369,
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
                "blackboardKey": "groupUnitCount",
                "params": {},
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 219,
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
                "value": 220,
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
                  "x": 216,
                  "y": 716,
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
                  "x": 389,
                  "y": 128,
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
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                      {
                        "nodeType": "condition",
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "count": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 14,
                          },
                          "threshold": {
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
                    "nodeType": "condition",
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": true,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 664,
                          "y": 374,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 898,
                          "y": 924,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 613,
                              "y": 913,
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
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "opponentAveragePosition",
                        "params": {},
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 272,
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
                        "value": 328,
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
                        "type": "isTrue",
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
                    "nodeType": "condition",
                    "type": "numberGreaterThan",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
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
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "ARCHER",
                          },
                        },
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
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
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "MANGO",
                      },
                    },
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 27,
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
                      "x": 22,
                      "y": 336,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 372,
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
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "count": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 15,
                              },
                              "threshold": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 38,
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
                      "x": 201,
                      "y": 231,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 97,
                      "y": 838,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                        "type": "numberEquals",
                        "invert": true,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 422,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 358,
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
                        "value": 221,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
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
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 671,
                              "y": 991,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 193,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 441,
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
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 809,
                              "y": 942,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 149,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 152,
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
                        "dataType": "number",
                        "value": 386,
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
                            "blackboardKey": "groupUnitVectorFacingDirection",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 357,
                                  "y": 436,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 178,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 313,
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "count": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 4,
                          },
                          "threshold": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 25,
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
                              "count": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "globalUnitsOfTypeCount",
                                "params": {
                                  "unitType": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "unitType",
                                    "value": "ARCHER",
                                  },
                                },
                              },
                              "threshold": {
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
                              "x": 972,
                              "y": 418,
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
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "MONK",
                          },
                        },
                      },
                      "threshold": {
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
                "type": "isTrue",
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
                        "blackboardKey": "groupUnitVectorFacingDirection",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 549,
                              "y": 54,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 303,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 279,
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
  [UnitType.Mangonel]: {
    "nodeType": "selector",
    "nodes": [
      {
        "nodeType": "condition",
        "type": "isTrue",
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
                      "x": 356,
                      "y": 187,
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 188,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 24,
                  },
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 827,
                  "y": 469,
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
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": false,
            "params": {
              "count": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 7,
              },
              "threshold": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 5,
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
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 308,
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
                "type": "LITERAL",
                "dataType": "number",
                "value": 339,
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
                    "value": "ARCHER",
                  },
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 48,
                  "y": 619,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 65,
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
            "nodes": [
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
                          "count": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 38,
                          },
                          "threshold": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 6,
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
                    "type": "numberEquals",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 128,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 244,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 271,
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
                    "dataType": "number",
                    "value": 450,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 256,
                  },
                },
              },
            ],
          },
          {
            "nodeType": "condition",
            "type": "isTrue",
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
            "type": "vectorDistanceBetweenLessThan",
            "invert": true,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 53,
                  "y": 785,
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 143,
                  "y": 93,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "number",
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
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 795,
                      "y": 977,
                    },
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
                    "value": 406,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 246,
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
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
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
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                            "value": 82,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
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
                        "nodeType": "sequence",
                        "nodes": [],
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
                      },
                      {
                        "nodeType": "condition",
                        "type": "isTrue",
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
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "count": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "globalUnitsOfTypeCount",
                            "params": {
                              "unitType": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "unitType",
                                "value": "MANGO",
                              },
                            },
                          },
                          "threshold": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 17,
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
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 125,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
                "type": "SPLIT_GROUP",
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
                      "x": 965,
                      "y": 270,
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
                            "type": "BLACKBOARD",
                            "dataType": "vector",
                            "blackboardKey": "groupAveragePosition",
                            "params": {},
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 324,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 475,
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
                    "nodeType": "condition",
                    "type": "numberGreaterThan",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 252,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 124,
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
                        "value": 142,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 170,
                      },
                    },
                  },
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "MONK",
                          },
                        },
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
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
                    "type": "numberEquals",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 221,
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
                              "x": 990,
                              "y": 371,
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
                                "type": "BLACKBOARD",
                                "dataType": "number",
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                            "nodeType": "condition",
                            "type": "countGreaterThan",
                            "invert": true,
                            "params": {
                              "count": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "globalUnitsOfTypeCount",
                                "params": {
                                  "unitType": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "unitType",
                                    "value": "ARCHER",
                                  },
                                },
                              },
                              "threshold": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "globalUnitsOfTypeCount",
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
                                        "value": "MONK",
                                      },
                                    },
                                  },
                                  "pointB": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 243,
                                      "y": 879,
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 29,
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
                            "nodeType": "condition",
                            "type": "isTrue",
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
                                "blackboardKey": "groupUnitCount",
                                "params": {},
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 215,
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
                            "nodeType": "condition",
                            "type": "vectorDistanceBetweenLessThan",
                            "invert": false,
                            "params": {
                              "pointA": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 446,
                                  "y": 698,
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
                                "blackboardKey": "groupUnitCount",
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
                                      "x": 458,
                                      "y": 660,
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
                                          "x": 645,
                                          "y": 601,
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
                                        "value": 423,
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
                                        "type": "LITERAL",
                                        "dataType": "vector",
                                        "value": {
                                          "x": 225,
                                          "y": 703,
                                        },
                                      },
                                      "angle": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorAngle",
                                        "value": 74,
                                      },
                                      "magnitude": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorMagnitude",
                                        "value": 314,
                                      },
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 185,
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
                                  "x": 32,
                                  "y": 40,
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 358,
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
                                "type": "countGreaterThan",
                                "invert": true,
                                "params": {
                                  "count": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
                                    "blackboardKey": "globalUnitsOfTypeCount",
                                    "params": {
                                      "unitType": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "unitType",
                                        "value": "ARCHER",
                                      },
                                    },
                                  },
                                  "threshold": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "count",
                                    "blackboardKey": "globalUnitsOfTypeCount",
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
                                "type": "isTrue",
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
                                    "type": "countGreaterThan",
                                    "invert": false,
                                    "params": {
                                      "count": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "count",
                                        "value": 14,
                                      },
                                      "threshold": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "count",
                                        "value": 38,
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
                                      "x": 706,
                                      "y": 251,
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "BLACKBOARD",
                                    "dataType": "number",
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
                                    "type": "MOVE_UNITS",
                                    "params": {
                                      "direction": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vector",
                                        "value": {
                                          "x": 567,
                                          "y": 18,
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
                                    "nodeType": "sequence",
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
                    "nodeType": "condition",
                    "type": "numberEquals",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                        "blackboardKey": "opponentAveragePosition",
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
                  "count": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "MONK",
                      },
                    },
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
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
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "MANGO",
                          },
                        },
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 22,
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
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 55,
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
                        "value": 161,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 299,
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
                          "x": 149,
                          "y": 756,
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
                    "nodeType": "sequence",
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
                            "type": "PATROL",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 394,
                                  "y": 328,
                                },
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
                                  "x": 980,
                                  "y": 910,
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
                                    "value": 258,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 19,
                                  },
                                },
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 453,
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
                            "value": 255,
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
            "nodes": [],
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
                  "x": 281,
                  "y": 749,
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
                "value": 443,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 47,
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
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "MANGO",
                      },
                    },
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
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
                "type": "numberEquals",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 166,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 58,
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
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "MANGO",
                      },
                    },
                  },
                  "threshold": {
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
                    "nodeType": "action",
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 125,
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupUnitCount",
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
                          "x": 680,
                          "y": 284,
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
                            "nodeType": "sequence",
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
                                "blackboardKey": "groupUnitCount",
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
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 475,
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
                          {
                            "nodeType": "action",
                            "type": "PATROL",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 940,
                                  "y": 652,
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
                          {
                            "nodeType": "sequence",
                            "nodes": [],
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
                                "value": 155,
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 426,
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
                                "value": 331,
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
                              "x": 712,
                              "y": 644,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 7,
                              "y": 356,
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
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
                "nodeType": "condition",
                "type": "isTrue",
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
                "type": "MERGE_GROUP",
                "params": {},
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
                    "value": 187,
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
                "type": "isTrue",
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
                    "type": "numberEquals",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 407,
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
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "countGreaterThan",
                        "invert": true,
                        "params": {
                          "count": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "globalUnitsOfTypeCount",
                            "params": {
                              "unitType": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "unitType",
                                "value": "MANGO",
                              },
                            },
                          },
                          "threshold": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 36,
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
                                "invert": false,
                                "params": {
                                  "left": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 130,
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
                            "blackboardKey": "groupUnitVectorFacingDirection",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 941,
                                  "y": 461,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 80,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 356,
                              },
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 96,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 390,
                          },
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 200,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 350,
                      },
                    },
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
                    "value": 336,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 404,
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
                        "value": 356,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
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
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 156,
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
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 117,
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
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 207,
                          "y": 656,
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
                            "type": "BLACKBOARD",
                            "dataType": "number",
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
                "nodeType": "selector",
                "nodes": [
                  {
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "isTrue",
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
                    "nodeType": "condition",
                    "type": "isTrue",
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
                    "type": "SPLIT_GROUP",
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
                    "nodeType": "sequence",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "isTrue",
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
                        "nodeType": "sequence",
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
                    ],
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
                    ],
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
                            "value": 216,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 204,
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
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 289,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 470,
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
                            "nodeType": "condition",
                            "type": "numberGreaterThan",
                            "invert": false,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 301,
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 314,
                              },
                            },
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
                    "value": 441,
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
                    "value": 43,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 151,
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
                    "blackboardKey": "groupUnitCount",
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
            "nodeType": "action",
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 981,
                  "y": 51,
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
                  "x": 947,
                  "y": 366,
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
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": true,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 800,
                          "y": 324,
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
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "MANGO",
                          },
                        },
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
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
                        "nodeType": "condition",
                        "type": "isTrue",
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
                    "blackboardKey": "groupUnitCount",
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
                    "value": 198,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
        "nodeType": "condition",
        "type": "isTrue",
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
            "type": "BLACKBOARD",
            "dataType": "vector",
            "blackboardKey": "opponentAveragePosition",
            "params": {},
          },
        },
      },
      {
        "nodeType": "condition",
        "type": "isTrue",
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
            "nodeType": "sequence",
            "nodes": [],
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
        ],
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "condition",
            "type": "isTrue",
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
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 105,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 28,
                  },
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 789,
                  "y": 822,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 417,
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
            "nodeType": "selector",
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
                    "nodeType": "condition",
                    "type": "isTrue",
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
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 403,
                      "y": 899,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "value": 373,
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
                    "blackboardKey": "groupAveragePosition",
                    "params": {},
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 11,
                      "y": 136,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
                    "type": "BLACKBOARD",
                    "dataType": "vector",
                    "blackboardKey": "groupUnitVectorFacingDirection",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 10,
                          "y": 313,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 42,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 329,
                      },
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 270,
                      "y": 452,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupUnitCount",
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
                    "nodeType": "selector",
                    "nodes": [],
                  },
                  {
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "isTrue",
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
                "type": "SPLIT_GROUP",
                "params": {},
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
                          "x": 369,
                          "y": 790,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 330,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 179,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 341,
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
                    "nodes": [],
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
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
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
                            "nodeType": "selector",
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
                                "value": "ARCHER",
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
                        "value": 107,
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
                "nodeType": "condition",
                "type": "isTrue",
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
                  "x": 783,
                  "y": 559,
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
                    "value": 233,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 106,
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
          {
            "nodeType": "selector",
            "nodes": [],
          },
          {
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "ARCHER",
                      },
                    },
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
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
                                "value": "MONK",
                              },
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
                            "value": 353,
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 344,
                          "y": 852,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 448,
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
                    "type": "MERGE_GROUP",
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
                      "x": 950,
                      "y": 464,
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
              {
                "nodeType": "selector",
                "nodes": [],
              },
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "MANGO",
                      },
                    },
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 27,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 182,
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
              "x": 279,
              "y": 389,
            },
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
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": false,
            "params": {
              "count": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 37,
              },
              "threshold": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "globalUnitsOfTypeCount",
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
                            "value": "MANGO",
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 642,
                          "y": 253,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 134,
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 18,
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 13,
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
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 287,
                          "y": 860,
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
                                "value": "ARCHER",
                              },
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 750,
                          "y": 976,
                        },
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
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "ARCHER",
                          },
                        },
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
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
                    "type": "numberEquals",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "nodeType": "condition",
                    "type": "isTrue",
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
                            "value": 194,
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
                        "type": "numberGreaterThan",
                        "invert": true,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 302,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 455,
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
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": true,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 764,
                          "y": 183,
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
                        "value": 471,
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
                "nodeType": "condition",
                "type": "isTrue",
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
                "type": "BLACKBOARD",
                "dataType": "number",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 420,
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
              "count": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "globalUnitsOfTypeCount",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitType",
                    "value": "MANGO",
                  },
                },
              },
              "threshold": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "globalUnitsOfTypeCount",
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
                    "type": "numberEquals",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupUnitCount",
                        "params": {},
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
                    ],
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
                        "type": "isTrue",
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
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                                    "blackboardKey": "opponentAveragePosition",
                                    "params": {},
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 314,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 205,
                                  },
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 26,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 36,
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
                                "blackboardKey": "opponentAveragePosition",
                                "params": {},
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 115,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 463,
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
                      "x": 292,
                      "y": 620,
                    },
                  },
                },
              },
            ],
          },
          {
            "nodeType": "condition",
            "type": "isTrue",
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 311,
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
                          "count": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "count",
                            "blackboardKey": "globalUnitsOfTypeCount",
                            "params": {
                              "unitType": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "unitType",
                                "value": "MANGO",
                              },
                            },
                          },
                          "threshold": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 35,
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
                                "value": "MONK",
                              },
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 65,
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
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 17,
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 12,
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
                            "value": "ARCHER",
                          },
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "number",
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
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
                  },
                  {
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": true,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "MANGO",
                          },
                        },
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
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
            "nodes": [
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
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 215,
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
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                          "x": 234,
                          "y": 872,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 439,
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
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 224,
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
                    "nodes": [],
                  },
                ],
              },
              {
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "MONK",
                      },
                    },
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "count",
                    "blackboardKey": "globalUnitsOfTypeCount",
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
                    "type": "isTrue",
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
              "count": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "globalUnitsOfTypeCount",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "unitType",
                    "value": "MANGO",
                  },
                },
              },
              "threshold": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "count",
                "blackboardKey": "globalUnitsOfTypeCount",
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
                "type": "isTrue",
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 46,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupUnitCount",
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
            "nodes": [
              {
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "isTrue",
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
                                "type": "numberGreaterThan",
                                "invert": false,
                                "params": {
                                  "left": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 273,
                                  },
                                  "right": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 139,
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
                                    "nodeType": "condition",
                                    "type": "numberEquals",
                                    "invert": false,
                                    "params": {
                                      "left": {
                                        "nodeType": "dataValue",
                                        "type": "BLACKBOARD",
                                        "dataType": "number",
                                        "blackboardKey": "groupUnitCount",
                                        "params": {},
                                      },
                                      "right": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 477,
                                      },
                                    },
                                  },
                                  {
                                    "nodeType": "condition",
                                    "type": "isTrue",
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
                                        "blackboardKey": "groupUnitCount",
                                        "params": {},
                                      },
                                      "right": {
                                        "nodeType": "dataValue",
                                        "type": "BLACKBOARD",
                                        "dataType": "number",
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
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 135,
                                      },
                                      "right": {
                                        "nodeType": "dataValue",
                                        "type": "BLACKBOARD",
                                        "dataType": "number",
                                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "nodeType": "condition",
                    "type": "isTrue",
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
                            "nodeType": "condition",
                            "type": "isTrue",
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
                            "type": "MOVE_UNITS",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 587,
                                  "y": 324,
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
                        "nodeType": "condition",
                        "type": "isTrue",
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
                        "nodeType": "sequence",
                        "nodes": [
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
                                "type": "isTrue",
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
                            "nodes": [],
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
                                    "nodeType": "sequence",
                                    "nodes": [],
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
                            "type": "numberEquals",
                            "invert": false,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 120,
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 281,
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
                        "value": 51,
                      },
                    },
                  },
                  {
                    "nodeType": "condition",
                    "type": "isTrue",
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
                    "invert": true,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "BLACKBOARD",
                        "dataType": "count",
                        "blackboardKey": "globalUnitsOfTypeCount",
                        "params": {
                          "unitType": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "unitType",
                            "value": "ARCHER",
                          },
                        },
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 22,
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
                        "blackboardKey": "opponentAveragePosition",
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
                    "nodeType": "selector",
                    "nodes": [
                      {
                        "nodeType": "condition",
                        "type": "isTrue",
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
                        "type": "isTrue",
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
                                          "x": 58,
                                          "y": 761,
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
                                          "x": 539,
                                          "y": 918,
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
                            "type": "numberGreaterThan",
                            "invert": true,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 458,
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
                            "nodes": [
                              {
                                "nodeType": "action",
                                "type": "IDLE",
                                "params": {
                                  "forTicksAmount": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 346,
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
                                "nodes": [
                                  {
                                    "nodeType": "sequence",
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
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 21,
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
                                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                                    "params": {},
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
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 324,
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
                            "blackboardKey": "groupUnitCount",
                            "params": {},
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 414,
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
                              "x": 619,
                              "y": 710,
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
                                  "x": 692,
                                  "y": 830,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 176,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 306,
                              },
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 400,
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
                                "type": "numberEquals",
                                "invert": true,
                                "params": {
                                  "left": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 261,
                                  },
                                  "right": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 256,
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
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 387,
                                      "y": 55,
                                    },
                                  },
                                  "pointB": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 245,
                                      "y": 292,
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 242,
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
                            "type": "countGreaterThan",
                            "invert": false,
                            "params": {
                              "count": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "count",
                                "blackboardKey": "globalUnitsOfTypeCount",
                                "params": {
                                  "unitType": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "unitType",
                                    "value": "ARCHER",
                                  },
                                },
                              },
                              "threshold": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 35,
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
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
                                "params": {},
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "number",
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
                                "type": "isTrue",
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
                                "blackboardKey": "groupUnitCount",
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
                                    "nodeType": "sequence",
                                    "nodes": [
                                      {
                                        "nodeType": "condition",
                                        "type": "countGreaterThan",
                                        "invert": false,
                                        "params": {
                                          "count": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "count",
                                            "value": 5,
                                          },
                                          "threshold": {
                                            "nodeType": "dataValue",
                                            "type": "BLACKBOARD",
                                            "dataType": "count",
                                            "blackboardKey": "globalUnitsOfTypeCount",
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
                            "nodes": [],
                          },
                          {
                            "nodeType": "selector",
                            "nodes": [
                              {
                                "nodeType": "condition",
                                "type": "countGreaterThan",
                                "invert": false,
                                "params": {
                                  "count": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 32,
                                  },
                                  "threshold": {
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
                        "type": "numberGreaterThan",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 362,
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
                            "nodeType": "sequence",
                            "nodes": [
                              {
                                "nodeType": "sequence",
                                "nodes": [
                                  {
                                    "nodeType": "condition",
                                    "type": "isTrue",
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
                            "nodeType": "condition",
                            "type": "isTrue",
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
                                "blackboardKey": "groupUnitCount",
                                "params": {},
                              },
                              "right": {
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
                            "value": 268,
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
                      {
                        "nodeType": "condition",
                        "type": "isTrue",
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
                        "type": "vectorDistanceBetweenLessThan",
                        "invert": false,
                        "params": {
                          "pointA": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 946,
                              "y": 411,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 242,
                              "y": 68,
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "BLACKBOARD",
                            "dataType": "number",
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
                            "nodes": [
                              {
                                "nodeType": "sequence",
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
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 471,
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
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 195,
                          },
                        },
                      },
                      {
                        "nodeType": "condition",
                        "type": "isTrue",
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
                              "x": 650,
                              "y": 689,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 908,
                              "y": 856,
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 47,
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
                    "nodeType": "condition",
                    "type": "isTrue",
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
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 55,
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
                            "nodeType": "action",
                            "type": "IDLE",
                            "params": {
                              "forTicksAmount": {
                                "nodeType": "dataValue",
                                "type": "BLACKBOARD",
                                "dataType": "number",
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
                                "nodeType": "selector",
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
                                        "value": 256,
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
                            "nodeType": "selector",
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
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 189,
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
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    ],
                  },
                ],
              },
              {
                "nodeType": "sequence",
                "nodes": [
                  {
                    "nodeType": "condition",
                    "type": "isTrue",
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
                          "x": 83,
                          "y": 235,
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
                            "blackboardKey": "groupUnitCount",
                            "params": {},
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 430,
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
                        "blackboardKey": "groupUnitCount",
                        "params": {},
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
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 754,
                      "y": 622,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "number",
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
            "type": "BLACKBOARD",
            "dataType": "number",
            "blackboardKey": "groupMetaUnitTypeIndex",
            "params": {},
          },
        },
      },
    ],
  },
};

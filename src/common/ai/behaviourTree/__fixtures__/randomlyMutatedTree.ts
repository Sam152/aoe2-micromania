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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
            "invert": false,
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
                "value": 268,
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
                "value": 0,
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 191,
                  "y": 301,
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
                "blackboardKey": "groupAveragePosition",
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
            "type": "vectorDistanceBetweenLessThan",
            "invert": false,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 0,
                  "y": 0,
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 277,
                  "y": 148,
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
                "value": 0,
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
                    "nodeType": "action",
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                          "x": 663,
                          "y": 976,
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
                        "value": 299,
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
                            "value": 416,
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
                            "value": 0,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 479,
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
                          "x": 0,
                          "y": 0,
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
                                  "x": 0,
                                  "y": 0,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 19,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 0,
                              },
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
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 545,
                                  "y": 577,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 10,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 0,
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
                              "x": 131,
                              "y": 512,
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
                    ],
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
              "count": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 232,
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
                    "value": 192,
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
                                  "x": 0,
                                  "y": 0,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 0,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 0,
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
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "groupAveragePosition",
                        "params": {},
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 0,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 0,
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
                              "x": 0,
                              "y": 0,
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
                      "x": 0,
                      "y": 0,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 10,
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
                  "x": 0,
                  "y": 0,
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
                        "value": "MANGO",
                      },
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 390,
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
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                        "nodeType": "condition",
                        "type": "vectorDistanceBetweenLessThan",
                        "invert": false,
                        "params": {
                          "pointA": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 489,
                              "y": 486,
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
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                                  "x": 0,
                                  "y": 0,
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
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 0,
                                      "y": 0,
                                    },
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 316,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 0,
                                  },
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 0,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 0,
                              },
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 572,
                              "y": 71,
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 0,
                  "y": 0,
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
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
                  "x": 0,
                  "y": 0,
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
                    "invert": false,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                              "x": 0,
                              "y": 0,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 0,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 0,
                          },
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 183,
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
                    "nodes": [],
                  },
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
                                "value": 0,
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
                            "type": "numberGreaterThan",
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
                                "value": 331,
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                              "x": 0,
                              "y": 0,
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
                        "nodeType": "sequence",
                        "nodes": [
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
                                "value": 467,
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
                        "nodes": [],
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
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 0,
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
                    "blackboardKey": "groupUnitCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 494,
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
                          "x": 0,
                          "y": 0,
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
                      "x": 0,
                      "y": 0,
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
            ],
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
                    "nodeType": "condition",
                    "type": "numberGreaterThan",
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
                              "y": 402,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 0,
                              "y": 0,
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 218,
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
                                  "x": 493,
                                  "y": 421,
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
                                  "x": 0,
                                  "y": 0,
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
                              "x": 0,
                              "y": 0,
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
                          "x": 696,
                          "y": 925,
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
                        "type": "SPLIT_GROUP",
                        "params": {},
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
                                "value": 0,
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 472,
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
                        "type": "SPLIT_GROUP",
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
                            "nodeType": "selector",
                            "nodes": [],
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
                                "blackboardKey": "groupAveragePosition",
                                "params": {},
                              },
                              "pointB": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 0,
                                  "y": 0,
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
                            "type": "MERGE_GROUP",
                            "params": {},
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
                                "nodes": [],
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
                            "value": 34,
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
                          "x": 488,
                          "y": 735,
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
                                "value": 432,
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
                              "x": 649,
                              "y": 917,
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
                                  "x": 0,
                                  "y": 0,
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
                            "nodeType": "sequence",
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
                                    "value": 388,
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
                                              "x": 0,
                                              "y": 0,
                                            },
                                          },
                                          "pointB": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vector",
                                            "value": {
                                              "x": 0,
                                              "y": 0,
                                            },
                                          },
                                          "distance": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "number",
                                            "value": 0,
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
                                            "type": "LITERAL",
                                            "dataType": "vector",
                                            "value": {
                                              "x": 0,
                                              "y": 0,
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
                            "invert": false,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 0,
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
                    "nodeType": "action",
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                        "nodeType": "action",
                        "type": "PATROL",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 909,
                              "y": 711,
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 140,
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
                "type": "numberGreaterThan",
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
                    "value": 166,
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
                                "value": "ARCHER",
                              },
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 0,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 0,
                          },
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 734,
                          "y": 598,
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
                                "value": 0,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 0,
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
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "groupAveragePosition",
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
                        "value": 0,
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
                                "value": 0,
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
                                  "x": 0,
                                  "y": 0,
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
                                  "x": 538,
                                  "y": 931,
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
                                  "x": 106,
                                  "y": 944,
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
                            "value": 0,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 116,
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
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
        "type": "vectorDistanceBetweenLessThan",
        "invert": true,
        "params": {
          "pointA": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 329,
              "y": 99,
            },
          },
          "pointB": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 0,
              "y": 0,
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
            "nodeType": "sequence",
            "nodes": [
              {
                "nodeType": "action",
                "type": "MERGE_GROUP",
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
                      "x": 477,
                      "y": 202,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                        "value": 38,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                        "value": 184,
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
                        "value": 0,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                                "value": 0,
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
                                    "type": "BLACKBOARD",
                                    "dataType": "number",
                                    "blackboardKey": "groupUnitCount",
                                    "params": {},
                                  },
                                  "right": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 0,
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
                "nodeType": "sequence",
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
                    "value": 72,
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
            "type": "numberGreaterThan",
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 90,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 249,
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
                        "nodeType": "action",
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 0,
                              "y": 0,
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                "invert": true,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                        "value": 0,
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
                          "x": 948,
                          "y": 306,
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
                            "value": 0,
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
                                  "x": 216,
                                  "y": 39,
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
                          "x": 0,
                          "y": 0,
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
                  "x": 905,
                  "y": 374,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 0,
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 784,
                          "y": 858,
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
                        "type": "BLACKBOARD",
                        "dataType": "vector",
                        "blackboardKey": "opponentAveragePosition",
                        "params": {},
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 0,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 0,
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
                      {
                        "nodeType": "selector",
                        "nodes": [],
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
                    "type": "MERGE_GROUP",
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
                                    "value": 0,
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
                                          "x": 0,
                                          "y": 0,
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
                    "nodeType": "condition",
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": true,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                              "x": 0,
                              "y": 0,
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
                        "value": 305,
                      },
                      "right": {
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
                "nodeType": "action",
                "type": "PATROL",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                    "value": 0,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                "type": "PATROL",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                    "value": 0,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 0,
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
                  "x": 815,
                  "y": 83,
                },
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
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                    "nodes": [],
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
                            "invert": false,
                            "params": {
                              "pointA": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 0,
                                  "y": 0,
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
                                "value": 19,
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
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 778,
                                  "y": 899,
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
                                        "value": 0,
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
                                    "value": 0,
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
                            "type": "numberGreaterThan",
                            "invert": true,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 237,
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
                                "nodeType": "sequence",
                                "nodes": [],
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
                                        "value": "ARCHER",
                                      },
                                    },
                                  },
                                  "threshold": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 0,
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
                              "x": 880,
                              "y": 84,
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
                            "type": "SPLIT_GROUP",
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                  {
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                                "value": 0,
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
                                    "value": 239,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 0,
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
                                "value": 152,
                              },
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 0,
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
                                  "x": 0,
                                  "y": 0,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 0,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 0,
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
                      "x": 0,
                      "y": 0,
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
                "type": "SPLIT_GROUP",
                "params": {},
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
            "blackboardKey": "groupMetaUnitTypeGroupCount",
            "params": {},
          },
          "right": {
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
            "nodeType": "sequence",
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
                          "x": 0,
                          "y": 0,
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
                        "value": 0,
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
                        "value": 104,
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
                        "nodeType": "action",
                        "type": "SPLIT_GROUP",
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
                                "value": 0,
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 0,
                  "y": 0,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 0,
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
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "groupUnitVectorFacingDirection",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 0,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 0,
                  },
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
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
                          "x": 0,
                          "y": 0,
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
                        "type": "MERGE_GROUP",
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
                            "blackboardKey": "groupAveragePosition",
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
                                "blackboardKey": "groupUnitVectorFacingDirection",
                                "params": {
                                  "direction": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 0,
                                      "y": 0,
                                    },
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 0,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 0,
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
                        "nodeType": "sequence",
                        "nodes": [
                          {
                            "nodeType": "selector",
                            "nodes": [],
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
                                "nodeType": "selector",
                                "nodes": [],
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
                            "blackboardKey": "groupUnitVectorFacingDirection",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 0,
                                  "y": 0,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 0,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 445,
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
                            "value": 227,
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
                      "x": 0,
                      "y": 0,
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
                "type": "LITERAL",
                "dataType": "number",
                "value": 411,
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
        "type": "IDLE",
        "params": {
          "forTicksAmount": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 249,
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
                "value": 12,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 353,
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
                    "value": 333,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 193,
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
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 129,
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
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 48,
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
                "nodeType": "action",
                "type": "PATROL",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 59,
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
                  "x": 842,
                  "y": 281,
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
            "type": "LITERAL",
            "dataType": "number",
            "value": 0,
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
                                    "value": 181,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 482,
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
                                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 471,
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
                    "value": 0,
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
                              "x": 0,
                              "y": 0,
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
                                "value": "ARCHER",
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
                              "x": 0,
                              "y": 0,
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
                                  "x": 0,
                                  "y": 0,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 0,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 0,
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
                    "nodeType": "selector",
                    "nodes": [],
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
                        "blackboardKey": "groupUnitCount",
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
                                  "x": 582,
                                  "y": 174,
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
                      "count": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 0,
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
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 313,
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
                              "x": 0,
                              "y": 0,
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
                            "value": 0,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 148,
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
                                "nodeType": "condition",
                                "type": "numberEquals",
                                "invert": false,
                                "params": {
                                  "left": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 159,
                                  },
                                  "right": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 0,
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
                        "nodeType": "condition",
                        "type": "vectorDistanceBetweenLessThan",
                        "invert": true,
                        "params": {
                          "pointA": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 0,
                              "y": 0,
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
                            "value": 144,
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
                            "invert": true,
                            "params": {
                              "count": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 0,
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
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 56,
                              "y": 481,
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
                                "type": "numberEquals",
                                "invert": false,
                                "params": {
                                  "left": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 0,
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
                                "nodeType": "sequence",
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
                            "value": 0,
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
                        "nodeType": "action",
                        "type": "SPLIT_GROUP",
                        "params": {},
                      },
                      {
                        "nodeType": "selector",
                        "nodes": [],
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
                        "nodeType": "condition",
                        "type": "countGreaterThan",
                        "invert": false,
                        "params": {
                          "count": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 35,
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
                            "type": "countGreaterThan",
                            "invert": true,
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
                                "value": 0,
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
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 0,
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
                                    "value": 0,
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
                                        "value": 0,
                                      },
                                      "magnitude": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorMagnitude",
                                        "value": 0,
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
                                "value": 0,
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
            "nodeType": "action",
            "type": "PATROL",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 942,
                  "y": 606,
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
                "value": 0,
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
            "nodeType": "sequence",
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
                      "x": 0,
                      "y": 0,
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
                    "type": "numberGreaterThan",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                    "type": "numberGreaterThan",
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
                        "value": 0,
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
                          "x": 0,
                          "y": 0,
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
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 116,
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
                          "x": 0,
                          "y": 0,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 0,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 0,
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
                    "value": 0,
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
                    "value": 0,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                    "type": "numberGreaterThan",
                    "invert": false,
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
                      "x": 0,
                      "y": 0,
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
                    "type": "SPLIT_GROUP",
                    "params": {},
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
                        "value": 0,
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
                            "value": 0,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 0,
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
                                "value": 0,
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
                    "type": "SPLIT_GROUP",
                    "params": {},
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
                            "blackboardKey": "opponentAveragePosition",
                            "params": {},
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
                        "value": 0,
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
                              "x": 859,
                              "y": 447,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 0,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 0,
                          },
                        },
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
                    "value": 334,
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
                "nodeType": "action",
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 4,
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
                        "value": 0,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 201,
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
                    "type": "LITERAL",
                    "dataType": "number",
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
                    "value": 254,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 0,
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 109,
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
                                "value": 0,
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
                              "x": 0,
                              "y": 0,
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
                            "value": 0,
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
                          "x": 0,
                          "y": 0,
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
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
                            "type": "numberGreaterThan",
                            "invert": false,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 0,
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
                                            "value": 353,
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
                                          "x": 0,
                                          "y": 0,
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
                                        "value": 0,
                                      },
                                      "right": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 0,
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
                                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 0,
                                      "y": 0,
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
                            "value": 179,
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
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 0,
                                      "y": 0,
                                    },
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 0,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 0,
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
                                      "x": 427,
                                      "y": 857,
                                    },
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 0,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 0,
                                  },
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
                                "nodeType": "condition",
                                "type": "countGreaterThan",
                                "invert": false,
                                "params": {
                                  "count": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 322,
                                  },
                                  "threshold": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 0,
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
                                        "blackboardKey": "groupUnitVectorFacingDirection",
                                        "params": {
                                          "direction": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vector",
                                            "value": {
                                              "x": 0,
                                              "y": 0,
                                            },
                                          },
                                          "angle": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorAngle",
                                            "value": 0,
                                          },
                                          "magnitude": {
                                            "nodeType": "dataValue",
                                            "type": "LITERAL",
                                            "dataType": "vectorMagnitude",
                                            "value": 0,
                                          },
                                        },
                                      },
                                      "angle": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorAngle",
                                        "value": 0,
                                      },
                                      "magnitude": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorMagnitude",
                                        "value": 0,
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
                      {
                        "nodeType": "sequence",
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
                                "value": 0,
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
                              "x": 0,
                              "y": 0,
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
                      "count": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 303,
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 70,
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
                              "x": 0,
                              "y": 0,
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
                            "value": 379,
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
                    "value": 0,
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
                    "type": "numberGreaterThan",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 30,
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
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 0,
                              "y": 0,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 893,
                              "y": 837,
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
                            "value": 0,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 0,
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 864,
                          "y": 302,
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
                          "x": 193,
                          "y": 15,
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
                            "type": "BLACKBOARD",
                            "dataType": "vector",
                            "blackboardKey": "groupUnitVectorFacingDirection",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 670,
                                  "y": 596,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 0,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 0,
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
                                  "x": 0,
                                  "y": 0,
                                },
                              },
                              "pointB": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 994,
                                  "y": 706,
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
                                    "blackboardKey": "groupAveragePosition",
                                    "params": {},
                                  },
                                  "pointB": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 0,
                                      "y": 0,
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 0,
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
                                    "value": 0,
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
                                        "type": "LITERAL",
                                        "dataType": "number",
                                        "value": 0,
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
                                    "value": 0,
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
                                        "value": "ARCHER",
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
                                "value": 0,
                              },
                              "threshold": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "count",
                                "value": 0,
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
                                "value": 0,
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
                                "nodeType": "condition",
                                "type": "numberEquals",
                                "invert": false,
                                "params": {
                                  "left": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 0,
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
                "value": 114,
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 0,
                  "y": 0,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 280,
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
            "type": "MERGE_GROUP",
            "params": {},
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
                      "x": 482,
                      "y": 165,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 3,
                      "y": 93,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 87,
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
                          "x": 0,
                          "y": 0,
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
                                "value": 0,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 306,
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
                              "x": 0,
                              "y": 0,
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
                            "value": 100,
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
                        "value": 0,
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
                        "value": 136,
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
                        "nodeType": "sequence",
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
                        "value": 0,
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
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                    "value": 0,
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
                            "value": 0,
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
                              "y": 930,
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 86,
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
                            "value": "ARCHER",
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
                        "value": 0,
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
                        "value": 104,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 429,
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
                "value": false,
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
                    "value": 0,
                  },
                  "threshold": {
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
                      "x": 842,
                      "y": 831,
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
                        "value": 164,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 0,
                      },
                    },
                  },
                  "distance": {
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
                      "x": 0,
                      "y": 0,
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
                    "value": 223,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                    "value": 0,
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
            "type": "SPLIT_GROUP",
            "params": {},
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
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
                        },
                      },
                      "distance": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                        "value": 0,
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
                        "nodeType": "action",
                        "type": "IDLE",
                        "params": {
                          "forTicksAmount": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 496,
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
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 276,
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
                        "value": 0,
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
                            "nodeType": "sequence",
                            "nodes": [],
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
            "nodeType": "condition",
            "type": "numberGreaterThan",
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
                "type": "BLACKBOARD",
                "dataType": "number",
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
                "blackboardKey": "groupUnitCount",
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
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 84,
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
                "type": "MERGE_GROUP",
                "params": {},
              },
              {
                "nodeType": "sequence",
                "nodes": [],
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
                  "x": 714,
                  "y": 173,
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
        "nodeType": "action",
        "type": "PATROL",
        "params": {
          "direction": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 0,
              "y": 0,
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
                "value": 153,
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
                    "type": "countGreaterThan",
                    "invert": true,
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
                        "value": 0,
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
                        "type": "BLACKBOARD",
                        "dataType": "number",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                        "value": 0,
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
                        "value": 439,
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
            "type": "vectorDistanceBetweenLessThan",
            "invert": false,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 0,
                  "y": 0,
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
                    "nodeType": "action",
                    "type": "MERGE_GROUP",
                    "params": {},
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
                    "value": 0,
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
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
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 851,
                          "y": 458,
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
                        "value": 0,
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
                        "value": 53,
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
                          "x": 0,
                          "y": 0,
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
                        "value": 94,
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
            "type": "numberGreaterThan",
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 427,
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
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 883,
                  "y": 604,
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
            "type": "numberEquals",
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 0,
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
            "type": "PATROL",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 0,
                  "y": 0,
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
                  "x": 286,
                  "y": 217,
                },
              },
            },
          },
        ],
      },
    ],
  },
  [UnitType.Monk]: {
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
                      "x": 0,
                      "y": 0,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 279,
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                    "value": 286,
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
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 140,
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 0,
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
                        "value": 0,
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 0,
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
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 0,
                              "y": 0,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 0,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 0,
                          },
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 10,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 0,
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "value": 0,
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
                    "value": 0,
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
                              "x": 0,
                              "y": 0,
                            },
                          },
                          "distance": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 431,
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
                        "invert": true,
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
                            "value": 0,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 9,
                      "y": 945,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                "type": "vectorDistanceBetweenLessThan",
                "invert": false,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                    "value": 303,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 155,
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
                    "value": 104,
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
                "value": 0,
              },
              "threshold": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 196,
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
            "nodeType": "condition",
            "type": "vectorDistanceBetweenLessThan",
            "invert": true,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 982,
                  "y": 416,
                },
              },
              "pointB": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 0,
                  "y": 0,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 0,
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
                "value": 0,
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
                      "x": 0,
                      "y": 0,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 367,
                      "y": 182,
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 177,
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
                            "blackboardKey": "groupMetaUnitTypeGroupCount",
                            "params": {},
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 0,
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
                                        "value": 0,
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
                            "nodeType": "action",
                            "type": "MERGE_GROUP",
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
                        "type": "MERGE_GROUP",
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                              "x": 0,
                              "y": 0,
                            },
                          },
                          "pointB": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 0,
                              "y": 0,
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
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
                "value": 0,
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
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
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
                        "blackboardKey": "opponentAveragePosition",
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
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
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
                    "blackboardKey": "groupUnitCount",
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
                    "value": 110,
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                    "value": false,
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
                    "type": "SPLIT_GROUP",
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 301,
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 442,
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
                "nodeType": "action",
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 533,
                      "y": 56,
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
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 618,
                      "y": 432,
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
                "nodeType": "condition",
                "type": "countGreaterThan",
                "invert": true,
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
                    "value": 0,
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
                        "value": 443,
                      },
                      "threshold": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 0,
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
                    "type": "MERGE_GROUP",
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
                            "type": "BLACKBOARD",
                            "dataType": "vector",
                            "blackboardKey": "groupAveragePosition",
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
                          "x": 0,
                          "y": 0,
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
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
                    "value": 11,
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
                    "nodeType": "selector",
                    "nodes": [
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
                                    "blackboardKey": "groupUnitVectorFacingDirection",
                                    "params": {
                                      "direction": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vector",
                                        "value": {
                                          "x": 0,
                                          "y": 0,
                                        },
                                      },
                                      "angle": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorAngle",
                                        "value": 0,
                                      },
                                      "magnitude": {
                                        "nodeType": "dataValue",
                                        "type": "LITERAL",
                                        "dataType": "vectorMagnitude",
                                        "value": 0,
                                      },
                                    },
                                  },
                                  "angle": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorAngle",
                                    "value": 0,
                                  },
                                  "magnitude": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vectorMagnitude",
                                    "value": 466,
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
                                    "value": 0,
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
                              "x": 347,
                              "y": 867,
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
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 0,
                              "y": 0,
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
                              "x": 0,
                              "y": 0,
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
                    "type": "BLACKBOARD",
                    "dataType": "vector",
                    "blackboardKey": "groupUnitVectorFacingDirection",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 378,
                          "y": 512,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 268,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 0,
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
                    "type": "BLACKBOARD",
                    "dataType": "number",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                "type": "numberGreaterThan",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 60,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 197,
                  },
                  "threshold": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 0,
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
                "value": 389,
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
                "value": 45,
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
                              "x": 0,
                              "y": 0,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 0,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 0,
                          },
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 0,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 0,
                      },
                    },
                  },
                  "angle": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorAngle",
                    "value": 0,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 0,
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
                "value": "ARCHER",
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
        "type": "MERGE_GROUP",
        "params": {},
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
                "dataType": "number",
                "value": 0,
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
                "value": 338,
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
                      "x": 0,
                      "y": 0,
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                      "x": 51,
                      "y": 988,
                    },
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 0,
                              "y": 0,
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
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 0,
                      "y": 0,
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
                "nodeType": "sequence",
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
                    "type": "MERGE_GROUP",
                    "params": {},
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
                    "value": 0,
                  },
                  "threshold": {
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
                            "value": 0,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 174,
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
                        "value": 0,
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
                          {
                            "nodeType": "condition",
                            "type": "numberEquals",
                            "invert": false,
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
                                "value": 37,
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
                                      "x": 0,
                                      "y": 0,
                                    },
                                  },
                                  "distance": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "number",
                                    "value": 0,
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
                            ],
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
                  "x": 0,
                  "y": 0,
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
                "type": "MERGE_GROUP",
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
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 0,
                          "y": 0,
                        },
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
                        "value": 458,
                      },
                      "threshold": {
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
                          "x": 0,
                          "y": 0,
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
                        "value": 352,
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
                "type": "numberGreaterThan",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 451,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 0,
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
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 0,
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
                    "value": 0,
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
                "type": "LITERAL",
                "dataType": "number",
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
                "value": 94,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 0,
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
                      "x": 0,
                      "y": 0,
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
                "type": "countGreaterThan",
                "invert": true,
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
                    "value": 0,
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
                        "value": 472,
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
                              "x": 324,
                              "y": 11,
                            },
                          },
                          "angle": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorAngle",
                            "value": 0,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 0,
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
                        "type": "MERGE_GROUP",
                        "params": {},
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
                                  "x": 0,
                                  "y": 0,
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 0,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 484,
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
                "nodeType": "condition",
                "type": "numberEquals",
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
                        "value": 0,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 0,
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
                    "value": 0,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 176,
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
                    "nodeType": "sequence",
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
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 0,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 0,
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
                "value": 0,
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
                        "value": "MANGO",
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
                "nodeType": "selector",
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
};

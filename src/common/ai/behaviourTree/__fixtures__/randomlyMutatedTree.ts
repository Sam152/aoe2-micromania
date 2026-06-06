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
                    "value": 289,
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
                            "value": 270,
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
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 83,
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
                "value": 0,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 175,
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
                "value": 363,
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
            "type": "numberGreaterThan",
            "invert": false,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 227,
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
                    "value": 139,
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
                            "value": 112,
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
                            "value": "MONK",
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
                  {
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
                    "value": 406,
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
                    "value": 160,
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
                "nodes": [],
              },
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
                      "x": 584,
                      "y": 883,
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
                            "value": 17,
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
                      "x": 51,
                      "y": 901,
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
                "value": 384,
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
                    "nodeType": "action",
                    "type": "SPLIT_GROUP",
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 170,
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
                          "x": 52,
                          "y": 210,
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
                            ],
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
                              "x": 66,
                              "y": 691,
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
                                "type": "MERGE_GROUP",
                                "params": {},
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
                            "value": 18,
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
                      {
                        "nodeType": "condition",
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 203,
                          },
                          "right": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 361,
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
                    "value": 22,
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
                              "x": 690,
                              "y": 713,
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
                        "nodeType": "selector",
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
                                "nodeType": "action",
                                "type": "SPLIT_GROUP",
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
                                  "x": 475,
                                  "y": 791,
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
                            "value": 239,
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
            "nodeType": "condition",
            "type": "numberGreaterThan",
            "invert": true,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 67,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 482,
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
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                "type": "BLACKBOARD",
                "dataType": "vector",
                "blackboardKey": "groupAveragePosition",
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
                    "value": 178,
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
        "nodeType": "condition",
        "type": "numberGreaterThan",
        "invert": false,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 133,
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
  [UnitType.Mangonel]: {
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
            "blackboardKey": "groupAveragePosition",
            "params": {},
          },
          "distance": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 473,
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
              "x": 222,
              "y": 690,
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
                        "value": 497,
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
              {
                "nodeType": "action",
                "type": "PATROL",
                "params": {
                  "direction": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 567,
                      "y": 24,
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
            "blackboardKey": "groupMetaUnitTypeIndex",
            "params": {},
          },
          "right": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 479,
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
                "value": 449,
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
                    "value": 27,
                  },
                  "magnitude": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 420,
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
                        "value": 31,
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
                        "nodeType": "action",
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 7,
                              "y": 472,
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
            "type": "numberEquals",
            "invert": true,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 215,
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
                  "x": 404,
                  "y": 201,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 113,
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
                "value": 341,
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
                    "value": true,
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
                "nodeType": "action",
                "type": "MERGE_GROUP",
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
                "type": "numberGreaterThan",
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 299,
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
                            "nodeType": "action",
                            "type": "MOVE_UNITS",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 563,
                                  "y": 974,
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
                      "x": 165,
                      "y": 207,
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
            "nodeType": "condition",
            "type": "countGreaterThan",
            "invert": true,
            "params": {
              "count": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 462,
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
                    "value": 117,
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
                    "value": 415,
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
            "type": "countGreaterThan",
            "invert": true,
            "params": {
              "count": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 491,
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
                    "nodeType": "action",
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 76,
                          "y": 747,
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
                        "blackboardKey": "groupUnitCount",
                        "params": {},
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 154,
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
                "type": "SPLIT_GROUP",
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
                            "nodeType": "selector",
                            "nodes": [],
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
                                "blackboardKey": "groupAveragePosition",
                                "params": {},
                              },
                              "distance": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 213,
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
                        "type": "SPLIT_GROUP",
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
                "invert": true,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 225,
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
                        "value": 133,
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
                    "type": "BLACKBOARD",
                    "dataType": "boolean",
                    "blackboardKey": "groupIsConverting",
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
                          "x": 51,
                          "y": 337,
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
                            "value": 286,
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
                    "nodeType": "action",
                    "type": "SPLIT_GROUP",
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
  [UnitType.Monk]: {
    "nodeType": "selector",
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
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 376,
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
                "value": 182,
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
                    "value": 107,
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
                      "x": 363,
                      "y": 218,
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
                        "value": 269,
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 456,
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
                        "type": "MERGE_GROUP",
                        "params": {},
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
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                    "params": {},
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 277,
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
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 775,
                                      "y": 444,
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
                        "value": 397,
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
                      "x": 828,
                      "y": 777,
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
        "nodeType": "sequence",
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
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 292,
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
                          "x": 51,
                          "y": 615,
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
                            "value": 250,
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
                    "value": 325,
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 949,
                  "y": 86,
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
                    "value": 0,
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
                    "value": 309,
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
                    "nodeType": "condition",
                    "type": "countGreaterThan",
                    "invert": false,
                    "params": {
                      "count": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "count",
                        "value": 152,
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
                                "value": 436,
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 452,
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
                "value": 336,
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
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": true,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 921,
                          "y": 500,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 422,
                          "y": 496,
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
                                    "blackboardKey": "groupAveragePosition",
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
                                    "value": 145,
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
                          "y": 241,
                        },
                      },
                      "pointB": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 833,
                          "y": 195,
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
                      "x": 827,
                      "y": 692,
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
                  "x": 690,
                  "y": 549,
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
                  "x": 626,
                  "y": 552,
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
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 296,
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
                        "type": "numberEquals",
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
                        "type": "MERGE_GROUP",
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 65,
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
                                "type": "MOVE_UNITS",
                                "params": {
                                  "direction": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 370,
                                      "y": 908,
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
                                                "value": 454,
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
                                          "x": 415,
                                          "y": 570,
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
                                        "value": 280,
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
                    "type": "MERGE_GROUP",
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
                            "blackboardKey": "groupUnitVectorFacingDirection",
                            "params": {
                              "direction": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 898,
                                  "y": 712,
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
                                "value": 252,
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
                    "value": 363,
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
                      "x": 413,
                      "y": 402,
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
                    "value": 33,
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
                "type": "numberEquals",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 64,
                  },
                  "right": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 227,
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
                            "value": 311,
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
                            "value": 319,
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
                        "nodeType": "sequence",
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
                "nodeType": "condition",
                "type": "numberGreaterThan",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 489,
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
          {
            "nodeType": "action",
            "type": "IDLE",
            "params": {
              "forTicksAmount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 88,
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
                    "value": 127,
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
            "value": 243,
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
                            "type": "vectorDistanceBetweenLessThan",
                            "invert": false,
                            "params": {
                              "pointA": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 681,
                                  "y": 291,
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
                "value": 363,
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 114,
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
                      "x": 334,
                      "y": 746,
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
};

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
                    "value": 334,
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
                      "x": 235,
                      "y": 984,
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
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 99,
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
                    "value": 371,
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
                    "type": "MERGE_GROUP",
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
      {
        "nodeType": "condition",
        "type": "numberGreaterThan",
        "invert": true,
        "params": {
          "left": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "number",
            "value": 366,
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
              "x": 51,
              "y": 95,
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
                "nodeType": "condition",
                "type": "vectorDistanceBetweenLessThan",
                "invert": true,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 901,
                      "y": 474,
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
                "value": 207,
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
                            "value": 0,
                          },
                          "threshold": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 434,
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
                    "value": 97,
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
                      "x": 312,
                      "y": 842,
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
                              "x": 719,
                              "y": 171,
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
                            "value": 334,
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
                "value": 295,
              },
              "threshold": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 234,
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
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "right": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 267,
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
                    "nodeType": "condition",
                    "type": "numberGreaterThan",
                    "invert": true,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 300,
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
                        "type": "vectorDistanceBetweenLessThan",
                        "invert": true,
                        "params": {
                          "pointA": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 151,
                              "y": 590,
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
                            ],
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
                                  "x": 635,
                                  "y": 608,
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
                                    "value": 31,
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
                                      "x": 716,
                                      "y": 126,
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
                      "x": 988,
                      "y": 183,
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
                        "value": 210,
                      },
                      "right": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 245,
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
                        "value": 272,
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
                        "type": "PATROL",
                        "params": {
                          "direction": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vector",
                            "value": {
                              "x": 632,
                              "y": 618,
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
                            "type": "LITERAL",
                            "dataType": "count",
                            "value": 63,
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
                "type": "vectorDistanceBetweenLessThan",
                "invert": false,
                "params": {
                  "pointA": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 781,
                      "y": 401,
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
                    "value": 3,
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
                          "x": 397,
                          "y": 734,
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
                                "value": 478,
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
                            "value": 273,
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
                "nodeType": "condition",
                "type": "numberEquals",
                "invert": false,
                "params": {
                  "left": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 6,
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
                        "value": 373,
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
            "nodeType": "sequence",
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
                    "value": 398,
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
                "nodeType": "sequence",
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
      {
        "nodeType": "action",
        "type": "MOVE_UNITS",
        "params": {
          "direction": {
            "nodeType": "dataValue",
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 521,
              "y": 418,
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
  [UnitType.Mangonel]: {
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
                "value": 354,
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
                  "x": 0,
                  "y": 0,
                },
              },
              "distance": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 468,
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
                  "x": 3,
                  "y": 638,
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
                        "value": 147,
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
                          "x": 220,
                          "y": 424,
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
                    "nodes": [],
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
                        "value": 330,
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
                    "value": 233,
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
                      "x": 799,
                      "y": 636,
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
                        "value": 176,
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
                        "value": "MONK",
                      },
                    },
                  },
                  "distance": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 348,
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
                            "value": 0,
                          },
                          "magnitude": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "vectorMagnitude",
                            "value": 329,
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
                    "type": "MERGE_GROUP",
                    "params": {},
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
                  "x": 152,
                  "y": 750,
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
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 734,
                  "y": 586,
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
                              "x": 188,
                              "y": 261,
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
                            "type": "IDLE",
                            "params": {
                              "forTicksAmount": {
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
                        "value": 8,
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
                        "nodeType": "sequence",
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
                                "value": 0,
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
                    "invert": false,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 398,
                          "y": 924,
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
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 258,
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
                    "nodeType": "condition",
                    "type": "numberGreaterThan",
                    "invert": false,
                    "params": {
                      "left": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 353,
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
                                "value": 127,
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
                              "x": 560,
                              "y": 331,
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
                            "type": "vectorDistanceBetweenLessThan",
                            "invert": false,
                            "params": {
                              "pointA": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vector",
                                "value": {
                                  "x": 162,
                                  "y": 204,
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
                                    "value": 111,
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
                            "type": "SPLIT_GROUP",
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
                                        "value": 283,
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
                                    "value": 377,
                                  },
                                },
                              },
                              "angle": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorAngle",
                                "value": 190,
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
                          {
                            "nodeType": "condition",
                            "type": "numberEquals",
                            "invert": true,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 343,
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
                                            "value": 254,
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
                            "value": 51,
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
                                "value": true,
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
                            "nodeType": "condition",
                            "type": "numberGreaterThan",
                            "invert": true,
                            "params": {
                              "left": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 478,
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 385,
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
                              "y": 450,
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
                                          "x": 389,
                                          "y": 821,
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
                                "nodeType": "condition",
                                "type": "countGreaterThan",
                                "invert": true,
                                "params": {
                                  "count": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "count",
                                    "value": 360,
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
                                    "value": 37,
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
                                      "x": 0,
                                      "y": 0,
                                    },
                                  },
                                  "pointB": {
                                    "nodeType": "dataValue",
                                    "type": "LITERAL",
                                    "dataType": "vector",
                                    "value": {
                                      "x": 38,
                                      "y": 238,
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
                            "value": 445,
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
                                        "value": 23,
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
                              "x": 983,
                              "y": 365,
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
                                "value": 342,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 134,
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
                                "value": 0,
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 7,
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
                                "value": 0,
                              },
                              "right": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "number",
                                "value": 82,
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
                                        "value": 161,
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
                    "value": 401,
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
                        "type": "LITERAL",
                        "dataType": "number",
                        "value": 450,
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
                "type": "SPLIT_GROUP",
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
                            "value": 433,
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
                    "type": "PATROL",
                    "params": {
                      "direction": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 940,
                          "y": 516,
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
                "nodeType": "selector",
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
                            "value": false,
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
                        "value": 395,
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
                "type": "MERGE_GROUP",
                "params": {},
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
                            "value": 307,
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
              "count": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 404,
              },
              "threshold": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "count",
                "value": 122,
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
                "value": 426,
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
                        "value": 334,
                      },
                      "magnitude": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorMagnitude",
                        "value": 310,
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
                          "x": 108,
                          "y": 443,
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
                            "value": 260,
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
                "value": 95,
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
                "value": 386,
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
            "type": "BLACKBOARD",
            "dataType": "number",
            "blackboardKey": "groupMetaUnitTypeIndex",
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
            "nodeType": "action",
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 755,
                  "y": 570,
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
            "value": 109,
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
                          "x": 935,
                          "y": 616,
                        },
                      },
                      "angle": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vectorAngle",
                        "value": 347,
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
                "type": "countGreaterThan",
                "invert": true,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 481,
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
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "vector",
                        "value": {
                          "x": 398,
                          "y": 338,
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
                                "value": 300,
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
                      "x": 472,
                      "y": 808,
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
                        "value": 137,
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
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                        "value": 404,
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
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 193,
                  "y": 593,
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
            "value": 0,
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
                "value": 324,
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
                "value": 88,
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
        "type": "SPLIT_GROUP",
        "params": {},
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
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 469,
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
                    "blackboardKey": "opponentAveragePosition",
                    "params": {},
                  },
                  "pointB": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "vector",
                    "value": {
                      "x": 844,
                      "y": 197,
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
                "nodeType": "selector",
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
            "nodeType": "condition",
            "type": "numberEquals",
            "invert": true,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 92,
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
                        "value": 136,
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
                "value": 305,
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
                "type": "LITERAL",
                "dataType": "count",
                "value": 138,
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
                "type": "LITERAL",
                "dataType": "count",
                "value": 24,
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
                  "x": 848,
                  "y": 903,
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
                  "x": 288,
                  "y": 900,
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
                        "value": 180,
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
                          "x": 999,
                          "y": 678,
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
                          "x": 675,
                          "y": 805,
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
                        "value": 427,
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
                        "type": "numberEquals",
                        "invert": false,
                        "params": {
                          "left": {
                            "nodeType": "dataValue",
                            "type": "LITERAL",
                            "dataType": "number",
                            "value": 59,
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
                        "value": 8,
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
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "number",
                    "value": 448,
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
                                "value": 112,
                              },
                              "magnitude": {
                                "nodeType": "dataValue",
                                "type": "LITERAL",
                                "dataType": "vectorMagnitude",
                                "value": 80,
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
                  "x": 236,
                  "y": 146,
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
                "value": 429,
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
                      "x": 102,
                      "y": 207,
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
                "type": "numberGreaterThan",
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
                    "value": 358,
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
            "invert": true,
            "params": {
              "pointA": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 604,
                  "y": 229,
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
                "type": "LITERAL",
                "dataType": "number",
                "value": 26,
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
                    "value": true,
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
                          "x": 872,
                          "y": 307,
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
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 207,
                  "y": 615,
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
                "type": "countGreaterThan",
                "invert": false,
                "params": {
                  "count": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "count",
                    "value": 134,
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
                    "nodeType": "sequence",
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
                  "x": 900,
                  "y": 123,
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
            "nodeType": "condition",
            "type": "numberGreaterThan",
            "invert": true,
            "params": {
              "left": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "number",
                "value": 177,
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
};

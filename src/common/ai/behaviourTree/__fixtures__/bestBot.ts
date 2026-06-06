import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";

export const bestBot: UnitAwareBehaviourTree = {
  "0": {
    "nodes": [
      {
        "type": "PATROL",
        "params": {
          "direction": {
            "type": "LITERAL",
            "value": { "x": 879, "y": 427 },
            "dataType": "vector",
            "nodeType": "dataValue",
          },
        },
        "nodeType": "action",
      },
      { "nodes": [], "nodeType": "selector" },
      {
        "nodes": [{
          "type": "IDLE",
          "params": {
            "forTicksAmount": { "type": "LITERAL", "value": 207, "dataType": "number", "nodeType": "dataValue" },
          },
          "nodeType": "action",
        }, {
          "type": "numberGreaterThan",
          "invert": true,
          "params": {
            "left": { "type": "LITERAL", "value": 163, "dataType": "number", "nodeType": "dataValue" },
            "right": {
              "type": "BLACKBOARD",
              "params": {},
              "dataType": "number",
              "nodeType": "dataValue",
              "blackboardKey": "groupMetaUnitTypeIndex",
            },
          },
          "nodeType": "condition",
        }, {
          "type": "numberGreaterThan",
          "invert": false,
          "params": {
            "left": {
              "type": "BLACKBOARD",
              "params": {},
              "dataType": "number",
              "nodeType": "dataValue",
              "blackboardKey": "groupUnitCount",
            },
            "right": {
              "type": "BLACKBOARD",
              "params": {},
              "dataType": "number",
              "nodeType": "dataValue",
              "blackboardKey": "groupUnitCount",
            },
          },
          "nodeType": "condition",
        }, {
          "type": "vectorDistanceBetweenLessThan",
          "invert": false,
          "params": {
            "pointA": {
              "type": "LITERAL",
              "value": { "x": 314, "y": 249 },
              "dataType": "vector",
              "nodeType": "dataValue",
            },
            "pointB": {
              "type": "BLACKBOARD",
              "params": {
                "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
              },
              "dataType": "vector",
              "nodeType": "dataValue",
              "blackboardKey": "opponentClosestUnitPositionByType",
            },
            "distance": {
              "type": "BLACKBOARD",
              "params": {},
              "dataType": "number",
              "nodeType": "dataValue",
              "blackboardKey": "groupMetaUnitTypeIndex",
            },
          },
          "nodeType": "condition",
        }, {
          "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" }],
          "nodeType": "selector",
        }, { "type": "SPLIT_GROUP", "params": {}, "nodeType": "action" }],
        "nodeType": "sequence",
      },
      {
        "nodes": [{
          "nodes": [{
            "type": "vectorDistanceBetweenLessThan",
            "invert": false,
            "params": {
              "pointA": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "MANGO", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentAverageUnitPositionByType",
              },
              "pointB": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "groupAveragePosition",
              },
              "distance": { "type": "LITERAL", "value": 67, "dataType": "number", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }, {
            "type": "vectorDistanceBetweenLessThan",
            "invert": false,
            "params": {
              "pointA": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentAveragePosition",
              },
              "pointB": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "MANGO", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentAverageUnitPositionByType",
              },
              "distance": { "type": "LITERAL", "value": 55, "dataType": "number", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }, {
          "type": "numberEquals",
          "invert": false,
          "params": {
            "left": { "type": "LITERAL", "value": 5, "dataType": "number", "nodeType": "dataValue" },
            "right": {
              "type": "BLACKBOARD",
              "params": {},
              "dataType": "number",
              "nodeType": "dataValue",
              "blackboardKey": "groupMetaUnitTypeGroupCount",
            },
          },
          "nodeType": "condition",
        }, {
          "type": "PATROL",
          "params": {
            "direction": {
              "type": "BLACKBOARD",
              "params": {
                "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
              },
              "dataType": "vector",
              "nodeType": "dataValue",
              "blackboardKey": "opponentAverageUnitPositionByType",
            },
          },
          "nodeType": "action",
        }],
        "nodeType": "sequence",
      },
    ],
    "nodeType": "selector",
  },
  "1": {
    "nodes": [
      {
        "nodes": [
          { "type": "SPLIT_GROUP", "params": {}, "nodeType": "action" },
          {
            "type": "isTrue",
            "invert": false,
            "params": {
              "subject": { "type": "LITERAL", "value": true, "dataType": "boolean", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          },
          { "nodes": [], "nodeType": "sequence" },
          {
            "type": "countGreaterThan",
            "invert": true,
            "params": {
              "count": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "count",
                "nodeType": "dataValue",
                "blackboardKey": "globalUnitsOfTypeCount",
              },
              "threshold": { "type": "LITERAL", "value": 15, "dataType": "count", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          },
          {
            "type": "countGreaterThan",
            "invert": true,
            "params": {
              "count": { "type": "LITERAL", "value": 21, "dataType": "count", "nodeType": "dataValue" },
              "threshold": { "type": "LITERAL", "value": 32, "dataType": "count", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          },
        ],
        "nodeType": "sequence",
      },
      {
        "type": "IDLE",
        "params": {
          "forTicksAmount": { "type": "LITERAL", "value": 436, "dataType": "number", "nodeType": "dataValue" },
        },
        "nodeType": "action",
      },
      {
        "nodes": [{
          "type": "IDLE",
          "params": {
            "forTicksAmount": {
              "type": "BLACKBOARD",
              "params": {},
              "dataType": "number",
              "nodeType": "dataValue",
              "blackboardKey": "groupUnitCount",
            },
          },
          "nodeType": "action",
        }, {
          "type": "IDLE",
          "params": {
            "forTicksAmount": {
              "type": "BLACKBOARD",
              "params": {},
              "dataType": "number",
              "nodeType": "dataValue",
              "blackboardKey": "groupMetaUnitTypeIndex",
            },
          },
          "nodeType": "action",
        }, {
          "type": "PATROL",
          "params": {
            "direction": {
              "type": "LITERAL",
              "value": { "x": 150, "y": 378 },
              "dataType": "vector",
              "nodeType": "dataValue",
            },
          },
          "nodeType": "action",
        }, {
          "nodes": [{
            "type": "isTrue",
            "invert": true,
            "params": {
              "subject": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "boolean",
                "nodeType": "dataValue",
                "blackboardKey": "groupIsConverting",
              },
            },
            "nodeType": "condition",
          }],
          "nodeType": "selector",
        }, { "nodes": [], "nodeType": "selector" }],
        "nodeType": "sequence",
      },
      { "nodes": [], "nodeType": "sequence" },
      {
        "type": "IDLE",
        "params": {
          "forTicksAmount": {
            "type": "BLACKBOARD",
            "params": {},
            "dataType": "number",
            "nodeType": "dataValue",
            "blackboardKey": "groupMetaUnitTypeGroupCount",
          },
        },
        "nodeType": "action",
      },
    ],
    "nodeType": "sequence",
  },
  "2": {
    "nodes": [{
      "type": "numberEquals",
      "invert": false,
      "params": {
        "left": {
          "type": "BLACKBOARD",
          "params": {},
          "dataType": "number",
          "nodeType": "dataValue",
          "blackboardKey": "groupUnitCount",
        },
        "right": {
          "type": "BLACKBOARD",
          "params": {},
          "dataType": "number",
          "nodeType": "dataValue",
          "blackboardKey": "groupMetaUnitTypeGroupCount",
        },
      },
      "nodeType": "condition",
    }, {
      "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
        "type": "vectorDistanceBetweenLessThan",
        "invert": true,
        "params": {
          "pointA": {
            "type": "BLACKBOARD",
            "params": {
              "unitType": { "type": "LITERAL", "value": "MANGO", "dataType": "unitType", "nodeType": "dataValue" },
            },
            "dataType": "vector",
            "nodeType": "dataValue",
            "blackboardKey": "opponentClosestUnitPositionByType",
          },
          "pointB": {
            "type": "BLACKBOARD",
            "params": {},
            "dataType": "vector",
            "nodeType": "dataValue",
            "blackboardKey": "groupAveragePosition",
          },
          "distance": {
            "type": "BLACKBOARD",
            "params": {},
            "dataType": "number",
            "nodeType": "dataValue",
            "blackboardKey": "groupUnitCount",
          },
        },
        "nodeType": "condition",
      }],
      "nodeType": "sequence",
    }, {
      "nodes": [{ "nodes": [], "nodeType": "sequence" }, { "nodes": [], "nodeType": "sequence" }, {
        "type": "isTrue",
        "invert": true,
        "params": {
          "subject": {
            "type": "BLACKBOARD",
            "params": {},
            "dataType": "boolean",
            "nodeType": "dataValue",
            "blackboardKey": "groupIsConverting",
          },
        },
        "nodeType": "condition",
      }, {
        "nodes": [{
          "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
            "nodes": [{
              "type": "numberGreaterThan",
              "invert": true,
              "params": {
                "left": { "type": "LITERAL", "value": 208, "dataType": "number", "nodeType": "dataValue" },
                "right": { "type": "LITERAL", "value": 62, "dataType": "number", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }, {
              "type": "numberEquals",
              "invert": false,
              "params": {
                "left": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "number",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "right": { "type": "LITERAL", "value": 427, "dataType": "number", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }],
            "nodeType": "selector",
          }],
          "nodeType": "selector",
        }, {
          "type": "CONVERT",
          "params": {
            "unit": {
              "type": "BLACKBOARD",
              "params": {
                "unitType": { "type": "LITERAL", "value": "MANGO", "dataType": "unitType", "nodeType": "dataValue" },
              },
              "dataType": "unitId",
              "nodeType": "dataValue",
              "blackboardKey": "opponentClosestUnitByType",
            },
          },
          "nodeType": "action",
        }],
        "nodeType": "selector",
      }],
      "nodeType": "sequence",
    }, {
      "nodes": [{ "nodes": [], "nodeType": "selector" }, { "nodes": [], "nodeType": "selector" }],
      "nodeType": "selector",
    }, { "nodes": [{ "type": "SPLIT_GROUP", "params": {}, "nodeType": "action" }], "nodeType": "sequence" }],
    "nodeType": "selector",
  },
};

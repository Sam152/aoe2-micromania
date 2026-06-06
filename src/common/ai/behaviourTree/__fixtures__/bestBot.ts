import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";

export const bestBot: UnitAwareBehaviourTree = {
  "0": {
    "nodes": [
      {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
            "type": "PATROL",
            "params": {
              "direction": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentAveragePosition",
              },
            },
            "nodeType": "action",
          }],
          "nodeType": "sequence",
        }, {
          "type": "IDLE",
          "params": {
            "forTicksAmount": { "type": "LITERAL", "value": 114, "dataType": "number", "nodeType": "dataValue" },
          },
          "nodeType": "action",
        }, {
          "type": "countGreaterThan",
          "invert": false,
          "params": {
            "count": { "type": "LITERAL", "value": 30, "dataType": "count", "nodeType": "dataValue" },
            "threshold": {
              "type": "BLACKBOARD",
              "params": {
                "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
              },
              "dataType": "count",
              "nodeType": "dataValue",
              "blackboardKey": "globalUnitsOfTypeCount",
            },
          },
          "nodeType": "condition",
        }, {
          "type": "countGreaterThan",
          "invert": false,
          "params": {
            "count": { "type": "LITERAL", "value": 6, "dataType": "count", "nodeType": "dataValue" },
            "threshold": { "type": "LITERAL", "value": 25, "dataType": "count", "nodeType": "dataValue" },
          },
          "nodeType": "condition",
        }, {
          "nodes": [{
            "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }],
            "nodeType": "selector",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "sequence",
      },
      {
        "type": "isTrue",
        "invert": true,
        "params": { "subject": { "type": "LITERAL", "value": false, "dataType": "boolean", "nodeType": "dataValue" } },
        "nodeType": "condition",
      },
      { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" },
      {
        "type": "IDLE",
        "params": {
          "forTicksAmount": { "type": "LITERAL", "value": 249, "dataType": "number", "nodeType": "dataValue" },
        },
        "nodeType": "action",
      },
      {
        "nodes": [
          {
            "type": "PATROL",
            "params": {
              "direction": {
                "type": "LITERAL",
                "value": { "x": 730, "y": 613 },
                "dataType": "vector",
                "nodeType": "dataValue",
              },
            },
            "nodeType": "action",
          },
          {
            "type": "numberGreaterThan",
            "invert": true,
            "params": {
              "left": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "number",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitCount",
              },
              "right": { "type": "LITERAL", "value": 492, "dataType": "number", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
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
    ],
    "nodeType": "selector",
  },
  "1": {
    "nodes": [{
      "type": "MOVE_UNITS",
      "params": {
        "direction": {
          "type": "LITERAL",
          "value": { "x": 748, "y": 886 },
          "dataType": "vector",
          "nodeType": "dataValue",
        },
      },
      "nodeType": "action",
    }, {
      "nodes": [{ "nodes": [], "nodeType": "selector" }, { "nodes": [], "nodeType": "sequence" }, {
        "nodes": [
          {
            "type": "PATROL",
            "params": {
              "direction": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "MANGO", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentClosestUnitPositionByType",
              },
            },
            "nodeType": "action",
          },
          { "nodes": [], "nodeType": "sequence" },
          {
            "type": "vectorDistanceBetweenLessThan",
            "invert": false,
            "params": {
              "pointA": {
                "type": "BLACKBOARD",
                "params": {
                  "angle": { "type": "LITERAL", "value": 109, "dataType": "vectorAngle", "nodeType": "dataValue" },
                  "direction": {
                    "type": "LITERAL",
                    "value": { "x": 268, "y": 554 },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                  },
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 25,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitVectorFacingDirection",
              },
              "pointB": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentClosestUnitPositionByType",
              },
              "distance": { "type": "LITERAL", "value": 14, "dataType": "number", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          },
        ],
        "nodeType": "selector",
      }, {
        "type": "PATROL",
        "params": {
          "direction": {
            "type": "LITERAL",
            "value": { "x": 188, "y": 2 },
            "dataType": "vector",
            "nodeType": "dataValue",
          },
        },
        "nodeType": "action",
      }, { "nodes": [], "nodeType": "sequence" }],
      "nodeType": "selector",
    }, {
      "type": "PATROL",
      "params": {
        "direction": {
          "type": "BLACKBOARD",
          "params": {
            "vectorOffset": {
              "type": "BLACKBOARD",
              "params": {
                "angle": { "type": "LITERAL", "value": 358, "dataType": "vectorAngle", "nodeType": "dataValue" },
                "direction": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAveragePosition",
                },
                "magnitude": {
                  "type": "LITERAL",
                  "value": 484,
                  "dataType": "vectorMagnitude",
                  "nodeType": "dataValue",
                },
              },
              "dataType": "vector",
              "nodeType": "dataValue",
              "blackboardKey": "groupUnitVectorFacingDirection",
            },
          },
          "dataType": "vector",
          "nodeType": "dataValue",
          "blackboardKey": "opponentAveragePosition",
        },
      },
      "nodeType": "action",
    }],
    "nodeType": "sequence",
  },
  "2": {
    "nodes": [{ "nodes": [], "nodeType": "selector" }, {
      "nodes": [{ "nodes": [], "nodeType": "sequence" }, { "nodes": [], "nodeType": "selector" }, {
        "nodes": [{
          "nodes": [{
            "type": "numberEquals",
            "invert": false,
            "params": {
              "left": { "type": "LITERAL", "value": 197, "dataType": "number", "nodeType": "dataValue" },
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
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "type": "LITERAL",
                "value": { "x": 164, "y": 150 },
                "dataType": "vector",
                "nodeType": "dataValue",
              },
            },
            "nodeType": "action",
          }],
          "nodeType": "sequence",
        }, {
          "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
            "type": "MERGE_GROUP",
            "params": {},
            "nodeType": "action",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      }],
      "nodeType": "sequence",
    }],
    "nodeType": "selector",
  },
};

import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";

export const winningTree: UnitAwareBehaviourTree = {
  "0": {
    "nodes": [{
      "nodes": [{
        "type": "unitCountGreaterThan",
        "invert": true,
        "params": {
          "leftUnitCount": {
            "type": "BLACKBOARD",
            "params": {
              "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
            },
            "dataType": "unitCount",
            "nodeType": "dataValue",
            "blackboardKey": "globalOwnedUnitsOfTypeCount",
          },
          "rightUnitCount": {
            "type": "BLACKBOARD",
            "params": {},
            "dataType": "unitCount",
            "nodeType": "dataValue",
            "blackboardKey": "groupUnitCount",
          },
        },
        "nodeType": "condition",
      }, {
        "type": "MOVE_UNITS",
        "params": {
          "direction": {
            "type": "LITERAL",
            "value": { "x": 327, "y": 748 },
            "dataType": "vector",
            "nodeType": "dataValue",
          },
        },
        "nodeType": "action",
      }, {
        "type": "unitCountGreaterThan",
        "invert": true,
        "params": {
          "leftUnitCount": { "type": "LITERAL", "value": 21, "dataType": "unitCount", "nodeType": "dataValue" },
          "rightUnitCount": {
            "type": "BLACKBOARD",
            "params": {},
            "dataType": "unitCount",
            "nodeType": "dataValue",
            "blackboardKey": "groupUnitCount",
          },
        },
        "nodeType": "condition",
      }, {
        "type": "PATROL",
        "params": {
          "direction": {
            "type": "BLACKBOARD",
            "params": {
              "vectorOffset": {
                "type": "LITERAL",
                "value": { "x": 820, "y": 972 },
                "dataType": "vector",
                "nodeType": "dataValue",
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
    }, { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" }],
    "nodeType": "selector",
  },
  "1": {
    "nodes": [{ "type": "SPLIT_GROUP", "params": {}, "nodeType": "action" }, {
      "type": "PATROL",
      "params": {
        "direction": {
          "type": "LITERAL",
          "value": { "x": 211, "y": 629 },
          "dataType": "vector",
          "nodeType": "dataValue",
        },
      },
      "nodeType": "action",
    }],
    "nodeType": "sequence",
  },
  "2": {
    "nodes": [{
      "nodes": [
        {
          "type": "vectorDistanceBetweenLessThan",
          "invert": true,
          "params": {
            "pointA": {
              "type": "BLACKBOARD",
              "params": {
                "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
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
            "distance": { "type": "LITERAL", "value": 400, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
          },
          "nodeType": "condition",
        },
        {
          "type": "MOVE_UNITS",
          "params": {
            "direction": {
              "type": "LITERAL",
              "value": { "x": 73, "y": 315 },
              "dataType": "vector",
              "nodeType": "dataValue",
            },
          },
          "nodeType": "action",
        },
        { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
        { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
        {
          "type": "MOVE_UNITS",
          "params": {
            "direction": {
              "type": "BLACKBOARD",
              "params": {
                "angle": { "type": "LITERAL", "value": 180, "dataType": "vectorAngle", "nodeType": "dataValue" },
                "direction": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAverageUnitPositionByType",
                },
                "magnitude": {
                  "type": "LITERAL",
                  "value": 286,
                  "dataType": "vectorMagnitude",
                  "nodeType": "dataValue",
                },
              },
              "dataType": "vector",
              "nodeType": "dataValue",
              "blackboardKey": "groupUnitVectorFacingDirection",
            },
          },
          "nodeType": "action",
        },
      ],
      "nodeType": "sequence",
    }, {
      "nodes": [{
        "type": "booleanIsTrue",
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
        }, {
          "type": "CONVERT",
          "params": {
            "unit": {
              "type": "BLACKBOARD",
              "params": {
                "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
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
    }],
    "nodeType": "selector",
  },
};

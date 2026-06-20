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
            "nodeType": "condition",
            "type": "unitCountGreaterThan",
            "invert": false,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
                "params": {},
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
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
            "type": "unitCountGreaterThan",
            "invert": false,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "dataType": "unitCount",
                "type": "BLACKBOARD",
                "blackboardKey": "globalOwnedUnitsOfTypeCount",
                "params": {
                  "unitType": {
                    "nodeType": "dataValue",
                    "dataType": "unitType",
                    "type": "LITERAL",
                    "value": "ARCHER",
                  },
                },
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "dataType": "unitCount",
                "type": "LITERAL",
                "value": 8,
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
            "value": 38,
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
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
                "blackboardKey": "groupUnitCount",
                "params": {},
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 32,
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
                  "y": 891,
                },
              },
            },
          },
          {
            "nodeType": "condition",
            "type": "unitCountGreaterThan",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
                "blackboardKey": "groupUnitCount",
                "params": {},
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "dataType": "unitCount",
                "type": "LITERAL",
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
                "blackboardKey": "opponentUnitMovementTowardsVector",
                "params": {
                  "movingUnit": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "unitId",
                    "blackboardKey": "opponentMedoidUnitByType",
                    "params": {
                      "unitType": {
                        "nodeType": "dataValue",
                        "type": "LITERAL",
                        "dataType": "unitType",
                        "value": "ARCHER",
                      },
                    },
                  },
                  "positionInTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "tickCount",
                    "value": 14,
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
        "nodes": [
          {
            "nodeType": "condition",
            "type": "groupIndexEquals",
            "invert": false,
            "params": {
              "groupIndexLeft": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "groupIndex",
                "blackboardKey": "groupMetaUnitTypeIndex",
                "params": {},
              },
              "groupIndexRight": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 2,
              },
            },
          },
          {
            "nodeType": "action",
            "type": "FORMATION_SPLIT",
            "params": {},
          },
          {
            "nodeType": "action",
            "type": "FORMATION_SPREAD",
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
                  "x": 460,
                  "y": 57,
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
                "dataType": "tickCount",
                "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                "params": {
                  "type": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "projectileType",
                    "value": "MANGO_ROCK",
                  },
                },
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
            "type": "LITERAL",
            "dataType": "vector",
            "value": {
              "x": 608,
              "y": 787,
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
              "x": 698,
              "y": 720,
            },
          },
        },
      },
      {
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "action",
            "type": "ATTACK_GROUND",
            "params": {
              "attackGroundPosition": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "vector",
                "value": {
                  "x": 934,
                  "y": 821,
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
                "dataType": "tickCount",
                "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                "params": {
                  "type": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "projectileType",
                    "value": "ARROW",
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
            "type": "formationEquals",
            "invert": false,
            "params": {
              "leftFormation": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "formation",
                "blackboardKey": "groupFormation",
                "params": {},
              },
              "rightFormation": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "formation",
                "blackboardKey": "groupFormation",
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
                "type": "FORMATION_SPLIT",
                "params": {},
              },
              {
                "nodeType": "action",
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "tickCount",
                    "value": 99,
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
        "nodeType": "sequence",
        "nodes": [
          {
            "nodeType": "sequence",
            "nodes": [],
          },
          {
            "nodeType": "condition",
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 2,
              },
              "groupIndexRight": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 1,
              },
            },
          },
          {
            "nodeType": "condition",
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 36,
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "unitCount",
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
            "dataType": "tickCount",
            "type": "LITERAL",
            "value": 89,
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
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 1,
              },
              "groupIndexRight": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 3,
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
                "dataType": "vector",
                "type": "BLACKBOARD",
                "blackboardKey": "unitPosition",
                "params": {
                  "unitWithPosition": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "unitId",
                    "blackboardKey": "opponentMedoidUnitByType",
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
              "pointB": {
                "nodeType": "dataValue",
                "dataType": "vector",
                "type": "BLACKBOARD",
                "blackboardKey": "groupAveragePosition",
                "params": {},
              },
              "distance": {
                "nodeType": "dataValue",
                "dataType": "vectorMagnitude",
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
                    "type": "LITERAL",
                    "dataType": "vectorMagnitude",
                    "value": 323,
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
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 11,
              },
              "rightUnitCount": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "unitCount",
                "value": 39,
              },
            },
          },
          {
            "nodeType": "condition",
            "invert": true,
            "type": "booleanIsTrue",
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
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
                "value": 0,
              },
              "groupIndexRight": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "groupIndex",
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
            "nodeType": "selector",
            "nodes": [
              {
                "nodeType": "action",
                "type": "MERGE_GROUP",
                "params": {},
              },
              {
                "nodeType": "condition",
                "type": "groupIndexEquals",
                "invert": true,
                "params": {
                  "groupIndexLeft": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "groupIndex",
                    "value": 1,
                  },
                  "groupIndexRight": {
                    "nodeType": "dataValue",
                    "type": "BLACKBOARD",
                    "dataType": "groupIndex",
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
                    "blackboardKey": "opponentMedoidUnitByType",
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
            "nodeType": "action",
            "type": "FORMATION_LINE",
            "params": {},
          },
        ],
      },
      {
        "nodeType": "action",
        "type": "FORMATION_LINE",
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
            "nodeType": "condition",
            "type": "tickCountEquals",
            "invert": true,
            "params": {
              "leftTicks": {
                "nodeType": "dataValue",
                "type": "LITERAL",
                "dataType": "tickCount",
                "value": 27,
              },
              "rightTicks": {
                "nodeType": "dataValue",
                "type": "BLACKBOARD",
                "dataType": "tickCount",
                "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                "params": {
                  "type": {
                    "nodeType": "dataValue",
                    "type": "LITERAL",
                    "dataType": "projectileType",
                    "value": "ARROW",
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

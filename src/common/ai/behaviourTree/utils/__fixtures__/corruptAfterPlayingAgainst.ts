import { UnitAwareBehaviourTree } from "../../BehaviourTree.ts";

export const corruptAfterPlayingAgainst: { tree: UnitAwareBehaviourTree }[] = [
  {
    "tree": {
      "0": { "nodes": [], "nodeType": "selector" },
      "1": { "nodes": [], "nodeType": "selector" },
      "2": { "nodes": [], "nodeType": "selector" },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "groupIndexEquals",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 2, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }, { "nodes": [], "nodeType": "selector" }],
            "nodeType": "sequence",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [
            {
              "nodes": [{
                "type": "PATROL",
                "params": {
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
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            },
            { "nodes": [], "nodeType": "sequence" },
            {
              "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                "type": "unitCountEquals",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupUnitCount",
                  },
                  "rightUnitCount": { "type": "LITERAL", "value": 9, "dataType": "unitCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            { "nodes": [], "nodeType": "selector" },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            { "nodes": [], "nodeType": "selector" },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "groupIndexEquals",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 2, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }, { "nodes": [], "nodeType": "selector" }],
            "nodeType": "sequence",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "ATTACK_GROUND",
              "params": {
                "attackGroundPosition": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAveragePosition",
                },
              },
              "nodeType": "action",
            }, {
              "type": "PATROL",
              "params": {
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
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "ONE",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            }, {
              "type": "tickCountEquals",
              "invert": true,
              "params": {
                "leftTicks": {
                  "type": "BLACKBOARD",
                  "params": {
                    "type": {
                      "type": "LITERAL",
                      "value": "MANGO_ROCK",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
                "rightTicks": { "type": "LITERAL", "value": 46, "dataType": "tickCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }, { "type": "DELETE_GROUP", "params": {}, "nodeType": "action" }],
            "nodeType": "sequence",
          }, {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [{
              "nodes": [{
                "type": "groupIndexEquals",
                "invert": true,
                "params": {
                  "groupIndexLeft": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "groupIndex",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupMetaUnitTypeIndex",
                  },
                  "groupIndexRight": {
                    "type": "LITERAL",
                    "value": 1,
                    "dataType": "groupIndex",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            }, {
              "type": "IDLE",
              "params": {
                "forTicksAmount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "type": {
                      "type": "LITERAL",
                      "value": "ARROW",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
              },
              "nodeType": "action",
            }, {
              "nodes": [{
                "type": "unitCountGreaterThan",
                "invert": true,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                },
                "nodeType": "condition",
              }, { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            }, {
              "type": "unitCountEquals",
              "invert": false,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeGroupCount",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 9, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, { "nodes": [], "nodeType": "selector" }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [{
                "nodes": [{
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "HALF",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MONK",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentAverageUnitPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "sequence",
              }, {
                "type": "formationEquals",
                "invert": false,
                "params": {
                  "leftFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                  "rightFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [{
                "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                  "type": "tickCountLessThan",
                  "invert": true,
                  "params": {
                    "leftTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                    "rightTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "sequence",
              }, { "nodes": [], "nodeType": "selector" }],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
            "nodes": [{
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }, {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": { "type": "LITERAL", "value": 3, "dataType": "groupIndex", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [
            {
              "nodes": [{
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentAveragePosition",
                  },
                },
                "nodeType": "action",
              }, {
                "nodes": [{
                  "type": "ATTACK_GROUND",
                  "params": {
                    "attackGroundPosition": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitWithPosition": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "ARCHER",
                              "dataType": "unitType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "unitPosition",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "sequence",
              }, {
                "type": "PATROL",
                "params": {
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
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "tickCountEquals",
                "invert": true,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 46, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              }, { "type": "DELETE_GROUP", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            },
            { "nodes": [], "nodeType": "selector" },
            {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
                "rightUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
              },
              "nodeType": "condition",
            },
            {
              "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
                "nodes": [
                  {
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "action",
                  },
                  {
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
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
                      "pointB": {
                        "type": "BLACKBOARD",
                        "params": {
                          "movingUnit": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "ARCHER",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitId",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentMedoidUnitByType",
                          },
                          "positionInTicksAmount": {
                            "type": "BLACKBOARD",
                            "params": {
                              "type": {
                                "type": "LITERAL",
                                "value": "MANGO_ROCK",
                                "dataType": "projectileType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "tickCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                          },
                        },
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentUnitMovementTowardsVector",
                      },
                      "distance": {
                        "type": "LITERAL",
                        "value": 288,
                        "dataType": "vectorMagnitude",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  { "nodes": [], "nodeType": "sequence" },
                  {
                    "type": "unitCountEquals",
                    "invert": true,
                    "params": {
                      "leftUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                      },
                      "rightUnitCount": {
                        "type": "LITERAL",
                        "value": 3,
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "type": "groupIndexEquals",
                    "invert": true,
                    "params": {
                      "groupIndexLeft": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                      },
                      "groupIndexRight": {
                        "type": "LITERAL",
                        "value": 2,
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                ],
                "nodeType": "sequence",
              }, {
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "ARROW",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                },
                "nodeType": "action",
              }, {
                "nodes": [{
                  "type": "booleanIsTrue",
                  "invert": false,
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
                  "type": "unitCountGreaterThan",
                  "invert": false,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MONK",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "globalOwnedUnitsOfTypeCount",
                    },
                    "rightUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "ARCHER",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "globalOwnedUnitsOfTypeCount",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "sequence",
              }, {
                "type": "unitCountEquals",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                  },
                  "rightUnitCount": {
                    "type": "LITERAL",
                    "value": 39,
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, { "nodes": [], "nodeType": "selector" }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [
                {
                  "nodes": [{
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MANGO",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
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
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "formationEquals",
                  "invert": false,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                    "rightFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [{
                "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                  "nodes": [{
                    "nodes": [
                      {
                        "nodes": [{ "nodes": [], "nodeType": "sequence" }, { "nodes": [], "nodeType": "sequence" }],
                        "nodeType": "selector",
                      },
                      { "nodes": [], "nodeType": "selector" },
                      { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" },
                    ],
                    "nodeType": "selector",
                  }],
                  "nodeType": "selector",
                }, {
                  "type": "tickCountLessThan",
                  "invert": true,
                  "params": {
                    "leftTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                    "rightTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "sequence",
              }, {
                "type": "MOVE_UNITS",
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
              }, { "nodes": [], "nodeType": "selector" }],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
            "nodes": [
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [{
                  "type": "tickCountLessThan",
                  "invert": true,
                  "params": {
                    "leftTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                    "rightTicks": { "type": "LITERAL", "value": 66, "dataType": "tickCount", "nodeType": "dataValue" },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "selector",
              },
              { "nodes": [], "nodeType": "sequence" },
              {
                "type": "tickCountEquals",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 29, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              },
              {
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "boolean",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupHasAnyReloading",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "ONE",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [
            {
              "nodes": [{
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentAveragePosition",
                  },
                },
                "nodeType": "action",
              }, {
                "nodes": [{
                  "type": "ATTACK_GROUND",
                  "params": {
                    "attackGroundPosition": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitWithPosition": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "ARCHER",
                              "dataType": "unitType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "unitPosition",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "sequence",
              }, {
                "type": "PATROL",
                "params": {
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
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "tickCountEquals",
                "invert": true,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 46, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              }, { "type": "DELETE_GROUP", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            },
            { "nodes": [], "nodeType": "selector" },
            {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
                "rightUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
              },
              "nodeType": "condition",
            },
            {
              "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
                "nodes": [
                  {
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "action",
                  },
                  {
                    "type": "vectorDistanceBetweenLessThan",
                    "invert": false,
                    "params": {
                      "pointA": {
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
                      "pointB": {
                        "type": "BLACKBOARD",
                        "params": {
                          "movingUnit": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "ARCHER",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitId",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentMedoidUnitByType",
                          },
                          "positionInTicksAmount": {
                            "type": "BLACKBOARD",
                            "params": {
                              "type": {
                                "type": "LITERAL",
                                "value": "MANGO_ROCK",
                                "dataType": "projectileType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "tickCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                          },
                        },
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentUnitMovementTowardsVector",
                      },
                      "distance": {
                        "type": "LITERAL",
                        "value": 288,
                        "dataType": "vectorMagnitude",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  { "nodes": [], "nodeType": "sequence" },
                  {
                    "type": "unitCountEquals",
                    "invert": true,
                    "params": {
                      "leftUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupMetaUnitTypeGroupCount",
                      },
                      "rightUnitCount": {
                        "type": "LITERAL",
                        "value": 3,
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  {
                    "type": "groupIndexEquals",
                    "invert": true,
                    "params": {
                      "groupIndexLeft": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupMetaUnitTypeIndex",
                      },
                      "groupIndexRight": {
                        "type": "LITERAL",
                        "value": 2,
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                ],
                "nodeType": "sequence",
              }, {
                "type": "IDLE",
                "params": {
                  "forTicksAmount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "ARROW",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                },
                "nodeType": "action",
              }, {
                "nodes": [{
                  "type": "booleanIsTrue",
                  "invert": false,
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
                  "type": "unitCountGreaterThan",
                  "invert": false,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MONK",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "globalOwnedUnitsOfTypeCount",
                    },
                    "rightUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "ARCHER",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "globalOwnedUnitsOfTypeCount",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "sequence",
              }, {
                "type": "unitCountEquals",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupMetaUnitTypeGroupCount",
                  },
                  "rightUnitCount": {
                    "type": "LITERAL",
                    "value": 39,
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, { "nodes": [], "nodeType": "selector" }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [
                {
                  "nodes": [{
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MANGO",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
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
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "formationEquals",
                  "invert": false,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                    "rightFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [{
                "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                  "nodes": [{
                    "nodes": [
                      {
                        "nodes": [{ "nodes": [], "nodeType": "sequence" }, { "nodes": [], "nodeType": "sequence" }],
                        "nodeType": "selector",
                      },
                      { "nodes": [], "nodeType": "selector" },
                      { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" },
                    ],
                    "nodeType": "selector",
                  }],
                  "nodeType": "selector",
                }, {
                  "type": "tickCountLessThan",
                  "invert": true,
                  "params": {
                    "leftTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                    "rightTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "sequence",
              }, {
                "type": "MOVE_UNITS",
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
              }, { "nodes": [], "nodeType": "selector" }],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
            "nodes": [
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [{
                  "type": "tickCountLessThan",
                  "invert": true,
                  "params": {
                    "leftTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                    "rightTicks": { "type": "LITERAL", "value": 66, "dataType": "tickCount", "nodeType": "dataValue" },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "selector",
              },
              { "nodes": [], "nodeType": "sequence" },
              {
                "type": "tickCountEquals",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 29, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              },
              {
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "boolean",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupHasAnyReloading",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "ONE",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "ATTACK_GROUND",
              "params": {
                "attackGroundPosition": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAveragePosition",
                },
              },
              "nodeType": "action",
            }, {
              "type": "groupIndexEquals",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingPositionByType",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            }, {
              "type": "PATROL",
              "params": {
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
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            }],
            "nodeType": "selector",
          }, {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
              "nodes": [],
              "nodeType": "selector",
            }, {
              "nodes": [
                {
                  "type": "IDLE",
                  "params": {
                    "forTicksAmount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                  },
                  "nodeType": "action",
                },
                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "sequence" },
                {
                  "type": "vectorDistanceBetweenLessThan",
                  "invert": false,
                  "params": {
                    "pointA": {
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
                    "pointB": {
                      "type": "BLACKBOARD",
                      "params": {
                        "movingUnit": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "ARCHER",
                              "dataType": "unitType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentMedoidUnitByType",
                        },
                        "positionInTicksAmount": {
                          "type": "BLACKBOARD",
                          "params": {
                            "type": {
                              "type": "LITERAL",
                              "value": "MANGO_ROCK",
                              "dataType": "projectileType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "tickCount",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentUnitMovementTowardsVector",
                    },
                    "distance": {
                      "type": "LITERAL",
                      "value": 288,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "unitCountEquals",
                  "invert": true,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeGroupCount",
                    },
                    "rightUnitCount": {
                      "type": "LITERAL",
                      "value": 3,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                {
                  "type": "groupIndexEquals",
                  "invert": true,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "sequence",
            }, {
              "type": "IDLE",
              "params": {
                "forTicksAmount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "type": {
                      "type": "LITERAL",
                      "value": "ARROW",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
              },
              "nodeType": "action",
            }, {
              "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                "type": "unitCountGreaterThan",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, { "nodes": [], "nodeType": "selector" }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [
                {
                  "nodes": [{
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MANGO",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
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
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "formationEquals",
                  "invert": false,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                    "rightFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [{
                "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                  "nodes": [{
                    "type": "CONVERT",
                    "params": {
                      "unit": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentArcherWithinMangoMinimumRange",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "nodes": [
                      {
                        "nodes": [
                          {
                            "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                              "type": "tickCountEquals",
                              "invert": true,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "LITERAL",
                                  "value": 37,
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                },
                              },
                              "nodeType": "condition",
                            }],
                            "nodeType": "sequence",
                          },
                          { "nodes": [], "nodeType": "sequence" },
                          { "nodes": [], "nodeType": "sequence" },
                          { "nodes": [], "nodeType": "selector" },
                          {
                            "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                              "type": "tickCountLessThan",
                              "invert": false,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "ARROW",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                              },
                              "nodeType": "condition",
                            }],
                            "nodeType": "sequence",
                          },
                        ],
                        "nodeType": "selector",
                      },
                      { "nodes": [], "nodeType": "selector" },
                      { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" },
                    ],
                    "nodeType": "selector",
                  }],
                  "nodeType": "selector",
                }, {
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "ONE",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "tickCountLessThan",
                  "invert": true,
                  "params": {
                    "leftTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                    "rightTicks": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "sequence",
              }, {
                "type": "MOVE_UNITS",
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
              }, { "nodes": [], "nodeType": "selector" }],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
            "type": "groupIndexGreaterThan",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "movingUnit": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByType",
                      },
                      "positionInTicksAmount": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "selector",
              },
              { "nodes": [], "nodeType": "sequence" },
              { "nodes": [], "nodeType": "sequence" },
              {
                "type": "tickCountEquals",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 29, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              },
              { "nodes": [], "nodeType": "selector" },
              {
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "boolean",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupHasAnyReloading",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
                "rightUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
              },
              "nodeType": "condition",
            }, { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
            "nodeType": "sequence",
          }, {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "ATTACK_GROUND",
              "params": {
                "attackGroundPosition": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAveragePosition",
                },
              },
              "nodeType": "action",
            }, {
              "type": "groupIndexEquals",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingPositionByType",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            }, {
              "type": "PATROL",
              "params": {
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
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            }],
            "nodeType": "selector",
          }, {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
              "nodes": [],
              "nodeType": "selector",
            }, {
              "nodes": [
                {
                  "type": "IDLE",
                  "params": {
                    "forTicksAmount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                  },
                  "nodeType": "action",
                },
                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "sequence" },
                {
                  "type": "vectorDistanceBetweenLessThan",
                  "invert": false,
                  "params": {
                    "pointA": {
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
                    "pointB": {
                      "type": "BLACKBOARD",
                      "params": {
                        "movingUnit": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "ARCHER",
                              "dataType": "unitType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentMedoidUnitByType",
                        },
                        "positionInTicksAmount": {
                          "type": "BLACKBOARD",
                          "params": {
                            "type": {
                              "type": "LITERAL",
                              "value": "MANGO_ROCK",
                              "dataType": "projectileType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "tickCount",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentUnitMovementTowardsVector",
                    },
                    "distance": {
                      "type": "LITERAL",
                      "value": 288,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "unitCountEquals",
                  "invert": true,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeGroupCount",
                    },
                    "rightUnitCount": {
                      "type": "LITERAL",
                      "value": 3,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                {
                  "type": "groupIndexEquals",
                  "invert": true,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "sequence",
            }, {
              "type": "IDLE",
              "params": {
                "forTicksAmount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "type": {
                      "type": "LITERAL",
                      "value": "ARROW",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
              },
              "nodeType": "action",
            }, {
              "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                "type": "unitCountGreaterThan",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, { "nodes": [], "nodeType": "selector" }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [
                {
                  "nodes": [{
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MANGO",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
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
                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "sequence" },
                {
                  "type": "formationEquals",
                  "invert": false,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                    "rightFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [
                {
                  "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                    "nodes": [{
                      "type": "CONVERT",
                      "params": {
                        "unit": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentArcherWithinMangoMinimumRange",
                        },
                      },
                      "nodeType": "action",
                    }, {
                      "nodes": [
                        {
                          "nodes": [
                            {
                              "nodes": [
                                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
                                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
                                {
                                  "type": "tickCountEquals",
                                  "invert": true,
                                  "params": {
                                    "leftTicks": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "type": {
                                          "type": "LITERAL",
                                          "value": "MANGO_ROCK",
                                          "dataType": "projectileType",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "dataType": "tickCount",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                    },
                                    "rightTicks": {
                                      "type": "LITERAL",
                                      "value": 37,
                                      "dataType": "tickCount",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "nodeType": "condition",
                                },
                              ],
                              "nodeType": "sequence",
                            },
                            {
                              "nodes": [{
                                "type": "unitCountGreaterThan",
                                "invert": false,
                                "params": {
                                  "leftUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentUnitCountByType",
                                  },
                                  "rightUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                                  },
                                },
                                "nodeType": "condition",
                              }],
                              "nodeType": "sequence",
                            },
                            {
                              "nodes": [{
                                "type": "SPLIT_GROUP",
                                "params": {
                                  "splitGroupInto": {
                                    "type": "LITERAL",
                                    "value": "HALF",
                                    "dataType": "groupSize",
                                    "nodeType": "dataValue",
                                  },
                                },
                                "nodeType": "action",
                              }],
                              "nodeType": "sequence",
                            },
                            { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
                            { "nodes": [], "nodeType": "selector" },
                            {
                              "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                                "nodes": [{
                                  "type": "CONVERT",
                                  "params": {
                                    "unit": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "unitType": {
                                          "type": "LITERAL",
                                          "value": "ARCHER",
                                          "dataType": "unitType",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "dataType": "unitId",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "opponentMedoidUnitByType",
                                    },
                                  },
                                  "nodeType": "action",
                                }, {
                                  "type": "groupIndexGreaterThan",
                                  "invert": true,
                                  "params": {
                                    "groupIndexLeft": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                    "groupIndexRight": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                  },
                                  "nodeType": "condition",
                                }],
                                "nodeType": "selector",
                              }, {
                                "type": "tickCountLessThan",
                                "invert": false,
                                "params": {
                                  "leftTicks": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "type": {
                                        "type": "LITERAL",
                                        "value": "MANGO_ROCK",
                                        "dataType": "projectileType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "tickCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                  },
                                  "rightTicks": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "type": {
                                        "type": "LITERAL",
                                        "value": "ARROW",
                                        "dataType": "projectileType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "tickCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                  },
                                },
                                "nodeType": "condition",
                              }],
                              "nodeType": "sequence",
                            },
                          ],
                          "nodeType": "selector",
                        },
                        { "nodes": [], "nodeType": "selector" },
                        { "nodes": [], "nodeType": "selector" },
                        { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" },
                      ],
                      "nodeType": "selector",
                    }],
                    "nodeType": "selector",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "tickCountLessThan",
                    "invert": true,
                    "params": {
                      "leftTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                      "rightTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "condition",
                  }],
                  "nodeType": "sequence",
                },
                {
                  "type": "MOVE_UNITS",
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
                },
                { "nodes": [], "nodeType": "selector" },
                { "nodes": [], "nodeType": "selector" },
              ],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
            "nodes": [{
              "nodes": [{ "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            }],
            "nodeType": "selector",
          }, {
            "type": "groupIndexGreaterThan",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "movingUnit": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByType",
                      },
                      "positionInTicksAmount": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "MANGO_ROCK",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "selector",
              },
              { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" },
              { "nodes": [], "nodeType": "sequence" },
              {
                "type": "tickCountEquals",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 29, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              },
              { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
              {
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "boolean",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupHasAnyReloading",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "MANGO",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
                "rightUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }, {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "ATTACK_GROUND",
              "params": {
                "attackGroundPosition": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAveragePosition",
                },
              },
              "nodeType": "action",
            }, {
              "type": "groupIndexEquals",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingPositionByType",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            }, {
              "type": "PATROL",
              "params": {
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
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            }],
            "nodeType": "selector",
          }, {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
              "nodes": [],
              "nodeType": "selector",
            }, {
              "nodes": [
                {
                  "type": "IDLE",
                  "params": {
                    "forTicksAmount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                  },
                  "nodeType": "action",
                },
                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "sequence" },
                {
                  "type": "vectorDistanceBetweenLessThan",
                  "invert": false,
                  "params": {
                    "pointA": {
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
                    "pointB": {
                      "type": "BLACKBOARD",
                      "params": {
                        "movingUnit": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "ARCHER",
                              "dataType": "unitType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentMedoidUnitByType",
                        },
                        "positionInTicksAmount": {
                          "type": "BLACKBOARD",
                          "params": {
                            "type": {
                              "type": "LITERAL",
                              "value": "MANGO_ROCK",
                              "dataType": "projectileType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "tickCount",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentUnitMovementTowardsVector",
                    },
                    "distance": {
                      "type": "LITERAL",
                      "value": 288,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "unitCountEquals",
                  "invert": true,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeGroupCount",
                    },
                    "rightUnitCount": {
                      "type": "LITERAL",
                      "value": 3,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                {
                  "type": "groupIndexEquals",
                  "invert": true,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "sequence",
            }, {
              "type": "IDLE",
              "params": {
                "forTicksAmount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "type": {
                      "type": "LITERAL",
                      "value": "ARROW",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
              },
              "nodeType": "action",
            }, {
              "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                "type": "unitCountGreaterThan",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, { "nodes": [], "nodeType": "selector" }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [
                {
                  "nodes": [{
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "HALF",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "MOVE_UNITS",
                    "params": {
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "MANGO",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
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
                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "sequence" },
                {
                  "type": "formationEquals",
                  "invert": false,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                    "rightFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [
                {
                  "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                    "nodes": [{
                      "type": "CONVERT",
                      "params": {
                        "unit": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentArcherWithinMangoMinimumRange",
                        },
                      },
                      "nodeType": "action",
                    }, {
                      "nodes": [
                        {
                          "nodes": [
                            {
                              "nodes": [
                                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
                                {
                                  "nodes": [{
                                    "nodes": [{
                                      "type": "tickCountLessThan",
                                      "invert": true,
                                      "params": {
                                        "leftTicks": {
                                          "type": "BLACKBOARD",
                                          "params": {
                                            "type": {
                                              "type": "LITERAL",
                                              "value": "ARROW",
                                              "dataType": "projectileType",
                                              "nodeType": "dataValue",
                                            },
                                          },
                                          "dataType": "tickCount",
                                          "nodeType": "dataValue",
                                          "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                        },
                                        "rightTicks": {
                                          "type": "LITERAL",
                                          "value": 71,
                                          "dataType": "tickCount",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "nodeType": "condition",
                                    }, { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" }],
                                    "nodeType": "selector",
                                  }],
                                  "nodeType": "selector",
                                },
                                {
                                  "type": "tickCountEquals",
                                  "invert": false,
                                  "params": {
                                    "leftTicks": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "type": {
                                          "type": "LITERAL",
                                          "value": "MANGO_ROCK",
                                          "dataType": "projectileType",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "dataType": "tickCount",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                    },
                                    "rightTicks": {
                                      "type": "LITERAL",
                                      "value": 37,
                                      "dataType": "tickCount",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "nodeType": "condition",
                                },
                              ],
                              "nodeType": "sequence",
                            },
                            {
                              "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                                "type": "unitCountGreaterThan",
                                "invert": false,
                                "params": {
                                  "leftUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentUnitCountByType",
                                  },
                                  "rightUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                                  },
                                },
                                "nodeType": "condition",
                              }],
                              "nodeType": "sequence",
                            },
                            {
                              "nodes": [{
                                "type": "SPLIT_GROUP",
                                "params": {
                                  "splitGroupInto": {
                                    "type": "LITERAL",
                                    "value": "HALF",
                                    "dataType": "groupSize",
                                    "nodeType": "dataValue",
                                  },
                                },
                                "nodeType": "action",
                              }],
                              "nodeType": "sequence",
                            },
                            { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
                            { "nodes": [], "nodeType": "selector" },
                            {
                              "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                                "nodes": [
                                  {
                                    "type": "CONVERT",
                                    "params": {
                                      "unit": {
                                        "type": "BLACKBOARD",
                                        "params": {
                                          "unitType": {
                                            "type": "LITERAL",
                                            "value": "ARCHER",
                                            "dataType": "unitType",
                                            "nodeType": "dataValue",
                                          },
                                        },
                                        "dataType": "unitId",
                                        "nodeType": "dataValue",
                                        "blackboardKey": "opponentMedoidUnitByType",
                                      },
                                    },
                                    "nodeType": "action",
                                  },
                                  { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "selector" },
                                  {
                                    "type": "groupIndexGreaterThan",
                                    "invert": true,
                                    "params": {
                                      "groupIndexLeft": {
                                        "type": "BLACKBOARD",
                                        "params": {},
                                        "dataType": "groupIndex",
                                        "nodeType": "dataValue",
                                        "blackboardKey": "groupMetaUnitTypeIndex",
                                      },
                                      "groupIndexRight": {
                                        "type": "BLACKBOARD",
                                        "params": {},
                                        "dataType": "groupIndex",
                                        "nodeType": "dataValue",
                                        "blackboardKey": "groupMetaUnitTypeIndex",
                                      },
                                    },
                                    "nodeType": "condition",
                                  },
                                ],
                                "nodeType": "selector",
                              }, {
                                "type": "tickCountLessThan",
                                "invert": false,
                                "params": {
                                  "leftTicks": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "type": {
                                        "type": "LITERAL",
                                        "value": "MANGO_ROCK",
                                        "dataType": "projectileType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "tickCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                  },
                                  "rightTicks": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "type": {
                                        "type": "LITERAL",
                                        "value": "ARROW",
                                        "dataType": "projectileType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "tickCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                  },
                                },
                                "nodeType": "condition",
                              }],
                              "nodeType": "sequence",
                            },
                          ],
                          "nodeType": "selector",
                        },
                        { "nodes": [], "nodeType": "selector" },
                        { "nodes": [], "nodeType": "selector" },
                        { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" },
                      ],
                      "nodeType": "selector",
                    }],
                    "nodeType": "selector",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "tickCountLessThan",
                    "invert": true,
                    "params": {
                      "leftTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                      "rightTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "condition",
                  }],
                  "nodeType": "sequence",
                },
                {
                  "type": "MOVE_UNITS",
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
                },
                { "nodes": [], "nodeType": "selector" },
                { "nodes": [], "nodeType": "selector" },
              ],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
            "nodes": [{
              "nodes": [{ "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            }],
            "nodeType": "selector",
          }, {
            "type": "groupIndexGreaterThan",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "movingUnit": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByType",
                      },
                      "positionInTicksAmount": {
                        "type": "LITERAL",
                        "value": 45,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "selector",
              },
              {
                "nodes": [{
                  "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
                  "nodeType": "sequence",
                }],
                "nodeType": "sequence",
              },
              { "nodes": [], "nodeType": "sequence" },
              {
                "type": "tickCountEquals",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 29, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              },
              {
                "nodes": [{
                  "nodes": [{
                    "nodes": [{
                      "nodes": [{
                        "type": "unitCountGreaterThan",
                        "invert": true,
                        "params": {
                          "leftUnitCount": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "MANGO",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentUnitCountByType",
                          },
                          "rightUnitCount": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "MANGO",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentUnitCountByType",
                          },
                        },
                        "nodeType": "condition",
                      }],
                      "nodeType": "sequence",
                    }, {
                      "nodes": [{
                        "type": "tickCountEquals",
                        "invert": false,
                        "params": {
                          "leftTicks": {
                            "type": "BLACKBOARD",
                            "params": {
                              "type": {
                                "type": "LITERAL",
                                "value": "ARROW",
                                "dataType": "projectileType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "tickCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                          },
                          "rightTicks": {
                            "type": "LITERAL",
                            "value": 69,
                            "dataType": "tickCount",
                            "nodeType": "dataValue",
                          },
                        },
                        "nodeType": "condition",
                      }, {
                        "type": "tickCountLessThan",
                        "invert": true,
                        "params": {
                          "leftTicks": {
                            "type": "BLACKBOARD",
                            "params": {
                              "type": {
                                "type": "LITERAL",
                                "value": "MANGO_ROCK",
                                "dataType": "projectileType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "tickCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                          },
                          "rightTicks": {
                            "type": "LITERAL",
                            "value": 14,
                            "dataType": "tickCount",
                            "nodeType": "dataValue",
                          },
                        },
                        "nodeType": "condition",
                      }],
                      "nodeType": "sequence",
                    }],
                    "nodeType": "selector",
                  }],
                  "nodeType": "selector",
                }],
                "nodeType": "selector",
              },
              {
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "boolean",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupHasAnyReloading",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          }, {
            "nodes": [{ "nodes": [], "nodeType": "selector" }, {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "MANGO",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
                "rightUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }, {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "ATTACK_GROUND",
              "params": {
                "attackGroundPosition": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAveragePosition",
                },
              },
              "nodeType": "action",
            }, {
              "type": "groupIndexEquals",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingPositionByType",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            }, {
              "type": "PATROL",
              "params": {
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
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            }],
            "nodeType": "selector",
          }, {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
              "nodes": [],
              "nodeType": "selector",
            }, {
              "nodes": [
                {
                  "type": "IDLE",
                  "params": {
                    "forTicksAmount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                    },
                  },
                  "nodeType": "action",
                },
                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "sequence" },
                {
                  "type": "vectorDistanceBetweenLessThan",
                  "invert": false,
                  "params": {
                    "pointA": {
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
                    "pointB": {
                      "type": "BLACKBOARD",
                      "params": {
                        "movingUnit": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "ARCHER",
                              "dataType": "unitType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentMedoidUnitByType",
                        },
                        "positionInTicksAmount": {
                          "type": "BLACKBOARD",
                          "params": {
                            "type": {
                              "type": "LITERAL",
                              "value": "MANGO_ROCK",
                              "dataType": "projectileType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "tickCount",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentUnitMovementTowardsVector",
                    },
                    "distance": {
                      "type": "LITERAL",
                      "value": 288,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "unitCountEquals",
                  "invert": true,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeGroupCount",
                    },
                    "rightUnitCount": {
                      "type": "LITERAL",
                      "value": 3,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                {
                  "type": "groupIndexEquals",
                  "invert": true,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "sequence",
            }, {
              "type": "IDLE",
              "params": {
                "forTicksAmount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "type": {
                      "type": "LITERAL",
                      "value": "ARROW",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
              },
              "nodeType": "action",
            }, {
              "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                "type": "unitCountGreaterThan",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, {
            "nodes": [{ "nodes": [], "nodeType": "sequence" }, { "nodes": [], "nodeType": "selector" }],
            "nodeType": "selector",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [{
                "nodes": [{
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "HALF",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "HALF",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentAverageUnitPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "sequence",
              }, {
                "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                  "nodes": [{ "type": "DELETE_GROUP", "params": {}, "nodeType": "action" }],
                  "nodeType": "selector",
                }],
                "nodeType": "sequence",
              }, {
                "type": "formationEquals",
                "invert": false,
                "params": {
                  "leftFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                  "rightFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [
                {
                  "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                    "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                      "type": "CONVERT",
                      "params": {
                        "unit": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentArcherWithinMangoMinimumRange",
                        },
                      },
                      "nodeType": "action",
                    }, {
                      "nodes": [
                        {
                          "nodes": [
                            {
                              "nodes": [
                                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
                                {
                                  "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                                    "nodes": [
                                      {
                                        "type": "tickCountLessThan",
                                        "invert": true,
                                        "params": {
                                          "leftTicks": {
                                            "type": "BLACKBOARD",
                                            "params": {
                                              "type": {
                                                "type": "LITERAL",
                                                "value": "ARROW",
                                                "dataType": "projectileType",
                                                "nodeType": "dataValue",
                                              },
                                            },
                                            "dataType": "tickCount",
                                            "nodeType": "dataValue",
                                            "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                          },
                                          "rightTicks": {
                                            "type": "LITERAL",
                                            "value": 71,
                                            "dataType": "tickCount",
                                            "nodeType": "dataValue",
                                          },
                                        },
                                        "nodeType": "condition",
                                      },
                                      { "type": "DELETE_GROUP", "params": {}, "nodeType": "action" },
                                      { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
                                    ],
                                    "nodeType": "selector",
                                  }],
                                  "nodeType": "selector",
                                },
                                {
                                  "type": "tickCountEquals",
                                  "invert": false,
                                  "params": {
                                    "leftTicks": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "type": {
                                          "type": "LITERAL",
                                          "value": "MANGO_ROCK",
                                          "dataType": "projectileType",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "dataType": "tickCount",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                    },
                                    "rightTicks": {
                                      "type": "LITERAL",
                                      "value": 37,
                                      "dataType": "tickCount",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "nodeType": "condition",
                                },
                              ],
                              "nodeType": "sequence",
                            },
                            {
                              "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                                "type": "unitCountGreaterThan",
                                "invert": false,
                                "params": {
                                  "leftUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentUnitCountByType",
                                  },
                                  "rightUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                                  },
                                },
                                "nodeType": "condition",
                              }],
                              "nodeType": "sequence",
                            },
                            {
                              "nodes": [{
                                "type": "SPLIT_GROUP",
                                "params": {
                                  "splitGroupInto": {
                                    "type": "LITERAL",
                                    "value": "HALF",
                                    "dataType": "groupSize",
                                    "nodeType": "dataValue",
                                  },
                                },
                                "nodeType": "action",
                              }],
                              "nodeType": "sequence",
                            },
                            { "nodes": [], "nodeType": "selector" },
                            { "nodes": [], "nodeType": "selector" },
                            {
                              "nodes": [
                                { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" },
                                {
                                  "type": "groupIndexGreaterThan",
                                  "invert": false,
                                  "params": {
                                    "groupIndexLeft": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                    "groupIndexRight": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                  },
                                  "nodeType": "condition",
                                },
                                {
                                  "nodes": [
                                    {
                                      "type": "CONVERT",
                                      "params": {
                                        "unit": {
                                          "type": "BLACKBOARD",
                                          "params": {
                                            "unitType": {
                                              "type": "LITERAL",
                                              "value": "ARCHER",
                                              "dataType": "unitType",
                                              "nodeType": "dataValue",
                                            },
                                          },
                                          "dataType": "unitId",
                                          "nodeType": "dataValue",
                                          "blackboardKey": "opponentMedoidUnitByType",
                                        },
                                      },
                                      "nodeType": "action",
                                    },
                                    { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "selector" },
                                    {
                                      "type": "groupIndexGreaterThan",
                                      "invert": true,
                                      "params": {
                                        "groupIndexLeft": {
                                          "type": "BLACKBOARD",
                                          "params": {},
                                          "dataType": "groupIndex",
                                          "nodeType": "dataValue",
                                          "blackboardKey": "groupMetaUnitTypeIndex",
                                        },
                                        "groupIndexRight": {
                                          "type": "BLACKBOARD",
                                          "params": {},
                                          "dataType": "groupIndex",
                                          "nodeType": "dataValue",
                                          "blackboardKey": "groupMetaUnitTypeIndex",
                                        },
                                      },
                                      "nodeType": "condition",
                                    },
                                  ],
                                  "nodeType": "selector",
                                },
                                {
                                  "type": "tickCountLessThan",
                                  "invert": false,
                                  "params": {
                                    "leftTicks": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "type": {
                                          "type": "LITERAL",
                                          "value": "MANGO_ROCK",
                                          "dataType": "projectileType",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "dataType": "tickCount",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                    },
                                    "rightTicks": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "type": {
                                          "type": "LITERAL",
                                          "value": "ARROW",
                                          "dataType": "projectileType",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "dataType": "tickCount",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                    },
                                  },
                                  "nodeType": "condition",
                                },
                              ],
                              "nodeType": "sequence",
                            },
                          ],
                          "nodeType": "selector",
                        },
                        { "nodes": [], "nodeType": "selector" },
                        { "nodes": [], "nodeType": "selector" },
                      ],
                      "nodeType": "selector",
                    }],
                    "nodeType": "selector",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "tickCountLessThan",
                    "invert": true,
                    "params": {
                      "leftTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                      "rightTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "condition",
                  }],
                  "nodeType": "sequence",
                },
                {
                  "type": "MOVE_UNITS",
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
                },
                { "nodes": [], "nodeType": "selector" },
                { "nodes": [], "nodeType": "selector" },
              ],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
            "nodes": [{
              "nodes": [{ "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            }],
            "nodeType": "selector",
          }, {
            "type": "groupIndexGreaterThan",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "movingUnit": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByType",
                      },
                      "positionInTicksAmount": {
                        "type": "LITERAL",
                        "value": 45,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "selector",
              },
              {
                "nodes": [{
                  "type": "PATROL",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": { "type": "LITERAL", "value": 54, "dataType": "vectorAngle", "nodeType": "dataValue" },
                        "direction": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "vector",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentAveragePosition",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
                  "nodeType": "sequence",
                }],
                "nodeType": "sequence",
              },
              { "nodes": [], "nodeType": "sequence" },
              {
                "type": "tickCountEquals",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 29, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              },
              { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
              {
                "nodes": [{
                  "nodes": [{
                    "nodes": [{
                      "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                        "type": "unitCountGreaterThan",
                        "invert": true,
                        "params": {
                          "leftUnitCount": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "MANGO",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentUnitCountByType",
                          },
                          "rightUnitCount": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "MANGO",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentUnitCountByType",
                          },
                        },
                        "nodeType": "condition",
                      }],
                      "nodeType": "sequence",
                    }, {
                      "nodes": [
                        {
                          "type": "tickCountEquals",
                          "invert": false,
                          "params": {
                            "leftTicks": {
                              "type": "BLACKBOARD",
                              "params": {
                                "type": {
                                  "type": "LITERAL",
                                  "value": "ARROW",
                                  "dataType": "projectileType",
                                  "nodeType": "dataValue",
                                },
                              },
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                              "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                            },
                            "rightTicks": {
                              "type": "LITERAL",
                              "value": 69,
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                            },
                          },
                          "nodeType": "condition",
                        },
                        { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" },
                        {
                          "type": "tickCountLessThan",
                          "invert": true,
                          "params": {
                            "leftTicks": {
                              "type": "BLACKBOARD",
                              "params": {
                                "type": {
                                  "type": "LITERAL",
                                  "value": "MANGO_ROCK",
                                  "dataType": "projectileType",
                                  "nodeType": "dataValue",
                                },
                              },
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                              "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                            },
                            "rightTicks": {
                              "type": "LITERAL",
                              "value": 14,
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                            },
                          },
                          "nodeType": "condition",
                        },
                      ],
                      "nodeType": "sequence",
                    }],
                    "nodeType": "selector",
                  }],
                  "nodeType": "selector",
                }],
                "nodeType": "selector",
              },
              {
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "boolean",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupHasAnyReloading",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          }, {
            "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "MANGO",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
                "rightUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }, {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": { "type": "LITERAL", "value": 1, "dataType": "groupIndex", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "ATTACK_GROUND",
              "params": {
                "attackGroundPosition": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAveragePosition",
                },
              },
              "nodeType": "action",
            }, {
              "type": "groupIndexEquals",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingPositionByType",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            }, {
              "type": "PATROL",
              "params": {
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
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "ONE",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            }, { "nodes": [], "nodeType": "sequence" }],
            "nodeType": "selector",
          }, {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
              "type": "formationEquals",
              "invert": false,
              "params": {
                "leftFormation": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "formation",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentFormationByType",
                },
                "rightFormation": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "formation",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupFormation",
                },
              },
              "nodeType": "condition",
            }, {
              "type": "vectorDistanceBetweenLessThan",
              "invert": false,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "movingUnit": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MONK",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "unitId",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentClosestUnitByType",
                    },
                    "positionInTicksAmount": {
                      "type": "LITERAL",
                      "value": 82,
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitMovementTowardsVector",
                },
                "pointB": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 61, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupAveragePosition",
                    },
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 200,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitVectorFacingDirection",
                },
                "distance": { "type": "LITERAL", "value": 159, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
                "type": "vectorDistanceBetweenLessThan",
                "invert": false,
                "params": {
                  "pointA": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentAveragePosition",
                  },
                  "distance": {
                    "type": "LITERAL",
                    "value": 65,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "selector",
            }, {
              "nodes": [
                {
                  "type": "IDLE",
                  "params": {
                    "forTicksAmount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
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
                    "pointB": {
                      "type": "BLACKBOARD",
                      "params": {
                        "movingUnit": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "ARCHER",
                              "dataType": "unitType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentMedoidUnitByType",
                        },
                        "positionInTicksAmount": {
                          "type": "BLACKBOARD",
                          "params": {
                            "type": {
                              "type": "LITERAL",
                              "value": "MANGO_ROCK",
                              "dataType": "projectileType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "tickCount",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentUnitMovementTowardsVector",
                    },
                    "distance": {
                      "type": "LITERAL",
                      "value": 288,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "unitCountEquals",
                  "invert": true,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeGroupCount",
                    },
                    "rightUnitCount": {
                      "type": "LITERAL",
                      "value": 3,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "groupIndexEquals",
                  "invert": true,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "sequence",
            }, {
              "type": "IDLE",
              "params": {
                "forTicksAmount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "type": {
                      "type": "LITERAL",
                      "value": "ARROW",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
              },
              "nodeType": "action",
            }, {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "ONE",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            }, {
              "nodes": [
                {
                  "type": "formationEquals",
                  "invert": true,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "ARCHER",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentFormationByType",
                    },
                    "rightFormation": {
                      "type": "LITERAL",
                      "value": "LINE",
                      "dataType": "formation",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "unitCountGreaterThan",
                  "invert": false,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MONK",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "globalOwnedUnitsOfTypeCount",
                    },
                    "rightUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "ARCHER",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "globalOwnedUnitsOfTypeCount",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "sequence",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, {
            "nodes": [{ "nodes": [], "nodeType": "sequence" }, { "nodes": [], "nodeType": "selector" }],
            "nodeType": "selector",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [{
                "nodes": [{
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "HALF",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "HALF",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentAverageUnitPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "sequence",
              }, {
                "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                  "nodes": [{ "type": "DELETE_GROUP", "params": {}, "nodeType": "action" }],
                  "nodeType": "selector",
                }],
                "nodeType": "sequence",
              }, {
                "type": "formationEquals",
                "invert": false,
                "params": {
                  "leftFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                  "rightFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [
                {
                  "nodes": [{
                    "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                      "type": "CONVERT",
                      "params": {
                        "unit": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentArcherWithinMangoMinimumRange",
                        },
                      },
                      "nodeType": "action",
                    }, {
                      "nodes": [{
                        "nodes": [
                          {
                            "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
                              "type": "tickCountLessThan",
                              "invert": false,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "ARROW",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                              },
                              "nodeType": "condition",
                            }, {
                              "type": "tickCountEquals",
                              "invert": true,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "LITERAL",
                                  "value": 37,
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                },
                              },
                              "nodeType": "condition",
                            }],
                            "nodeType": "sequence",
                          },
                          {
                            "nodes": [
                              { "nodes": [], "nodeType": "sequence" },
                              { "nodes": [], "nodeType": "selector" },
                              {
                                "type": "unitCountGreaterThan",
                                "invert": false,
                                "params": {
                                  "leftUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentUnitCountByType",
                                  },
                                  "rightUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                                  },
                                },
                                "nodeType": "condition",
                              },
                            ],
                            "nodeType": "sequence",
                          },
                          {
                            "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
                              "type": "SPLIT_GROUP",
                              "params": {
                                "splitGroupInto": {
                                  "type": "LITERAL",
                                  "value": "HALF",
                                  "dataType": "groupSize",
                                  "nodeType": "dataValue",
                                },
                              },
                              "nodeType": "action",
                            }],
                            "nodeType": "sequence",
                          },
                          { "nodes": [], "nodeType": "selector" },
                          { "nodes": [], "nodeType": "selector" },
                          {
                            "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" }, {
                              "type": "groupIndexGreaterThan",
                              "invert": false,
                              "params": {
                                "groupIndexLeft": {
                                  "type": "BLACKBOARD",
                                  "params": {},
                                  "dataType": "groupIndex",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "groupMetaUnitTypeIndex",
                                },
                                "groupIndexRight": {
                                  "type": "BLACKBOARD",
                                  "params": {},
                                  "dataType": "groupIndex",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "groupMetaUnitTypeIndex",
                                },
                              },
                              "nodeType": "condition",
                            }, {
                              "nodes": [
                                { "nodes": [], "nodeType": "sequence" },
                                {
                                  "type": "CONVERT",
                                  "params": {
                                    "unit": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "unitType": {
                                          "type": "LITERAL",
                                          "value": "ARCHER",
                                          "dataType": "unitType",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "dataType": "unitId",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "opponentMedoidUnitByType",
                                    },
                                  },
                                  "nodeType": "action",
                                },
                                { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "selector" },
                                {
                                  "type": "groupIndexGreaterThan",
                                  "invert": true,
                                  "params": {
                                    "groupIndexLeft": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                    "groupIndexRight": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                  },
                                  "nodeType": "condition",
                                },
                              ],
                              "nodeType": "selector",
                            }, {
                              "type": "tickCountLessThan",
                              "invert": false,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                              },
                              "nodeType": "condition",
                            }],
                            "nodeType": "sequence",
                          },
                        ],
                        "nodeType": "selector",
                      }, {
                        "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                          "type": "unitCountEquals",
                          "invert": true,
                          "params": {
                            "leftUnitCount": {
                              "type": "BLACKBOARD",
                              "params": {},
                              "dataType": "unitCount",
                              "nodeType": "dataValue",
                              "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                        }],
                        "nodeType": "selector",
                      }, { "nodes": [], "nodeType": "selector" }],
                      "nodeType": "selector",
                    }],
                    "nodeType": "selector",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "tickCountLessThan",
                    "invert": true,
                    "params": {
                      "leftTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                      "rightTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "condition",
                  }],
                  "nodeType": "sequence",
                },
                {
                  "type": "MOVE_UNITS",
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
                },
                { "nodes": [], "nodeType": "selector" },
                {
                  "nodes": [{
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }],
                  "nodeType": "selector",
                },
              ],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
            "nodes": [{
              "nodes": [{ "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" }],
              "nodeType": "sequence",
            }],
            "nodeType": "selector",
          }, {
            "type": "groupIndexGreaterThan",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "movingUnit": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByType",
                      },
                      "positionInTicksAmount": {
                        "type": "LITERAL",
                        "value": 45,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "selector",
              },
              {
                "nodes": [{
                  "type": "PATROL",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": { "type": "LITERAL", "value": 54, "dataType": "vectorAngle", "nodeType": "dataValue" },
                        "direction": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "vector",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentAveragePosition",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
                  "nodeType": "sequence",
                }],
                "nodeType": "sequence",
              },
              { "nodes": [], "nodeType": "sequence" },
              {
                "type": "tickCountEquals",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 29, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              },
              { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
              {
                "nodes": [{
                  "nodes": [{
                    "nodes": [{
                      "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                        "type": "unitCountGreaterThan",
                        "invert": true,
                        "params": {
                          "leftUnitCount": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "MANGO",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentUnitCountByType",
                          },
                          "rightUnitCount": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "MANGO",
                                "dataType": "unitType",
                                "nodeType": "dataValue",
                              },
                            },
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "opponentUnitCountByType",
                          },
                        },
                        "nodeType": "condition",
                      }],
                      "nodeType": "sequence",
                    }, {
                      "nodes": [
                        {
                          "type": "tickCountEquals",
                          "invert": false,
                          "params": {
                            "leftTicks": {
                              "type": "BLACKBOARD",
                              "params": {
                                "type": {
                                  "type": "LITERAL",
                                  "value": "ARROW",
                                  "dataType": "projectileType",
                                  "nodeType": "dataValue",
                                },
                              },
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                              "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                            },
                            "rightTicks": {
                              "type": "LITERAL",
                              "value": 69,
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                            },
                          },
                          "nodeType": "condition",
                        },
                        { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" },
                        {
                          "type": "tickCountLessThan",
                          "invert": true,
                          "params": {
                            "leftTicks": {
                              "type": "BLACKBOARD",
                              "params": {
                                "type": {
                                  "type": "LITERAL",
                                  "value": "MANGO_ROCK",
                                  "dataType": "projectileType",
                                  "nodeType": "dataValue",
                                },
                              },
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                              "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                            },
                            "rightTicks": {
                              "type": "LITERAL",
                              "value": 14,
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                            },
                          },
                          "nodeType": "condition",
                        },
                      ],
                      "nodeType": "sequence",
                    }],
                    "nodeType": "selector",
                  }],
                  "nodeType": "selector",
                }],
                "nodeType": "selector",
              },
              {
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "boolean",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupHasAnyReloading",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          }, {
            "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "MANGO",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
                "rightUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }, {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": { "type": "LITERAL", "value": 1, "dataType": "groupIndex", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "ATTACK_GROUND",
              "params": {
                "attackGroundPosition": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAveragePosition",
                },
              },
              "nodeType": "action",
            }, {
              "type": "groupIndexEquals",
              "invert": true,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 2, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
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
              }, {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            }, {
              "type": "PATROL",
              "params": {
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
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "nodes": [
              {
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              },
              { "nodes": [], "nodeType": "sequence" },
              {
                "nodes": [{
                  "type": "vectorDistanceBetweenLessThan",
                  "invert": false,
                  "params": {
                    "pointA": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": { "type": "LITERAL", "value": 93, "dataType": "vectorAngle", "nodeType": "dataValue" },
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
                          "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                    "pointB": {
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
                      "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                    },
                    "distance": {
                      "type": "LITERAL",
                      "value": 265,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }, { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" }],
                "nodeType": "sequence",
              },
            ],
            "nodeType": "selector",
          }, {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
              "type": "formationEquals",
              "invert": false,
              "params": {
                "leftFormation": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "formation",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentFormationByType",
                },
                "rightFormation": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "formation",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupFormation",
                },
              },
              "nodeType": "condition",
            }, {
              "type": "vectorDistanceBetweenLessThan",
              "invert": false,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "movingUnit": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MONK",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "unitId",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentClosestUnitByType",
                    },
                    "positionInTicksAmount": {
                      "type": "LITERAL",
                      "value": 82,
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitMovementTowardsVector",
                },
                "pointB": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 177, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupAveragePosition",
                    },
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 200,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitVectorFacingDirection",
                },
                "distance": { "type": "LITERAL", "value": 159, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
                "type": "unitCountEquals",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitCountByType",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitCountByType",
                  },
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
                    "blackboardKey": "groupAveragePosition",
                  },
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentAveragePosition",
                  },
                  "distance": {
                    "type": "LITERAL",
                    "value": 65,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "selector",
            }, {
              "nodes": [
                {
                  "type": "IDLE",
                  "params": {
                    "forTicksAmount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
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
                    "pointB": {
                      "type": "BLACKBOARD",
                      "params": {
                        "movingUnit": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "ARCHER",
                              "dataType": "unitType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentMedoidUnitByType",
                        },
                        "positionInTicksAmount": {
                          "type": "BLACKBOARD",
                          "params": {
                            "type": {
                              "type": "LITERAL",
                              "value": "MANGO_ROCK",
                              "dataType": "projectileType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "tickCount",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentUnitMovementTowardsVector",
                    },
                    "distance": {
                      "type": "LITERAL",
                      "value": 252,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "unitCountEquals",
                  "invert": true,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeGroupCount",
                    },
                    "rightUnitCount": {
                      "type": "LITERAL",
                      "value": 3,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                {
                  "nodes": [{
                    "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }],
                    "nodeType": "sequence",
                  }, { "nodes": [], "nodeType": "selector" }],
                  "nodeType": "sequence",
                },
                {
                  "type": "groupIndexEquals",
                  "invert": true,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "sequence",
            }, {
              "type": "IDLE",
              "params": {
                "forTicksAmount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "type": {
                      "type": "LITERAL",
                      "value": "ARROW",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
              },
              "nodeType": "action",
            }, {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            }, {
              "nodes": [{
                "type": "formationEquals",
                "invert": true,
                "params": {
                  "leftFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                  "rightFormation": {
                    "type": "LITERAL",
                    "value": "LINE",
                    "dataType": "formation",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }, {
                "nodes": [{
                  "type": "groupIndexEquals",
                  "invert": false,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "sequence",
              }, {
                "type": "tickCountLessThan",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "ARROW",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                },
                "nodeType": "condition",
              }, {
                "type": "unitCountGreaterThan",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, {
            "nodes": [{ "nodes": [], "nodeType": "sequence" }, { "nodes": [], "nodeType": "selector" }],
            "nodeType": "selector",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [{
                "nodes": [{
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "HALF",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "HALF",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentAverageUnitPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "sequence",
              }, {
                "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                  "nodes": [{ "type": "DELETE_GROUP", "params": {}, "nodeType": "action" }],
                  "nodeType": "selector",
                }],
                "nodeType": "sequence",
              }, {
                "type": "formationEquals",
                "invert": false,
                "params": {
                  "leftFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                  "rightFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [
                {
                  "nodes": [{
                    "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                      "type": "CONVERT",
                      "params": {
                        "unit": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentArcherWithinMangoMinimumRange",
                        },
                      },
                      "nodeType": "action",
                    }, {
                      "nodes": [{
                        "nodes": [
                          {
                            "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
                              "type": "tickCountLessThan",
                              "invert": false,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "ARROW",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                              },
                              "nodeType": "condition",
                            }, {
                              "type": "tickCountEquals",
                              "invert": true,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "LITERAL",
                                  "value": 37,
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                },
                              },
                              "nodeType": "condition",
                            }],
                            "nodeType": "sequence",
                          },
                          {
                            "nodes": [
                              { "nodes": [], "nodeType": "sequence" },
                              { "nodes": [], "nodeType": "selector" },
                              {
                                "type": "unitCountGreaterThan",
                                "invert": false,
                                "params": {
                                  "leftUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentUnitCountByType",
                                  },
                                  "rightUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                                  },
                                },
                                "nodeType": "condition",
                              },
                            ],
                            "nodeType": "sequence",
                          },
                          {
                            "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
                              "type": "SPLIT_GROUP",
                              "params": {
                                "splitGroupInto": {
                                  "type": "LITERAL",
                                  "value": "HALF",
                                  "dataType": "groupSize",
                                  "nodeType": "dataValue",
                                },
                              },
                              "nodeType": "action",
                            }],
                            "nodeType": "sequence",
                          },
                          { "nodes": [], "nodeType": "selector" },
                          { "nodes": [], "nodeType": "selector" },
                          {
                            "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" }, {
                              "type": "groupIndexGreaterThan",
                              "invert": false,
                              "params": {
                                "groupIndexLeft": {
                                  "type": "BLACKBOARD",
                                  "params": {},
                                  "dataType": "groupIndex",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "groupMetaUnitTypeIndex",
                                },
                                "groupIndexRight": {
                                  "type": "BLACKBOARD",
                                  "params": {},
                                  "dataType": "groupIndex",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "groupMetaUnitTypeIndex",
                                },
                              },
                              "nodeType": "condition",
                            }, {
                              "nodes": [
                                { "nodes": [], "nodeType": "sequence" },
                                {
                                  "type": "CONVERT",
                                  "params": {
                                    "unit": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "unitType": {
                                          "type": "LITERAL",
                                          "value": "ARCHER",
                                          "dataType": "unitType",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "dataType": "unitId",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "opponentMedoidUnitByType",
                                    },
                                  },
                                  "nodeType": "action",
                                },
                                { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "selector" },
                                {
                                  "type": "groupIndexGreaterThan",
                                  "invert": true,
                                  "params": {
                                    "groupIndexLeft": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                    "groupIndexRight": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                  },
                                  "nodeType": "condition",
                                },
                              ],
                              "nodeType": "selector",
                            }, {
                              "type": "tickCountLessThan",
                              "invert": false,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                              },
                              "nodeType": "condition",
                            }],
                            "nodeType": "sequence",
                          },
                        ],
                        "nodeType": "selector",
                      }, {
                        "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                          "type": "unitCountEquals",
                          "invert": true,
                          "params": {
                            "leftUnitCount": {
                              "type": "BLACKBOARD",
                              "params": {},
                              "dataType": "unitCount",
                              "nodeType": "dataValue",
                              "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                        }],
                        "nodeType": "selector",
                      }, { "nodes": [], "nodeType": "selector" }],
                      "nodeType": "selector",
                    }],
                    "nodeType": "selector",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "tickCountLessThan",
                    "invert": true,
                    "params": {
                      "leftTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                      "rightTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "condition",
                  }],
                  "nodeType": "sequence",
                },
                {
                  "type": "MOVE_UNITS",
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
                },
                { "nodes": [], "nodeType": "selector" },
                {
                  "nodes": [{
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }],
                  "nodeType": "selector",
                },
              ],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" }, {
            "type": "FORMATION_LINE",
            "params": {},
            "nodeType": "action",
          }, {
            "nodes": [{
              "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
                "type": "FORMATION_SPLIT",
                "params": {},
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            }],
            "nodeType": "selector",
          }, {
            "type": "groupIndexGreaterThan",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [
              {
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "movingUnit": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByType",
                      },
                      "positionInTicksAmount": {
                        "type": "LITERAL",
                        "value": 45,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                },
                "nodeType": "action",
              },
              {
                "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "selector",
              },
              {
                "nodes": [{
                  "type": "PATROL",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": { "type": "LITERAL", "value": 54, "dataType": "vectorAngle", "nodeType": "dataValue" },
                        "direction": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "vector",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentAveragePosition",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
                  "nodeType": "sequence",
                }],
                "nodeType": "sequence",
              },
              {
                "nodes": [{
                  "type": "groupIndexEquals",
                  "invert": false,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "sequence",
              },
              {
                "type": "tickCountEquals",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": { "type": "LITERAL", "value": 29, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              },
              { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
              {
                "nodes": [{
                  "nodes": [{
                    "nodes": [{
                      "nodes": [{
                        "nodes": [{
                          "type": "vectorDistanceBetweenLessThan",
                          "invert": true,
                          "params": {
                            "pointA": {
                              "type": "BLACKBOARD",
                              "params": {
                                "unitType": {
                                  "type": "LITERAL",
                                  "value": "MANGO",
                                  "dataType": "unitType",
                                  "nodeType": "dataValue",
                                },
                              },
                              "dataType": "vector",
                              "nodeType": "dataValue",
                              "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                            },
                            "pointB": {
                              "type": "BLACKBOARD",
                              "params": {
                                "angle": {
                                  "type": "LITERAL",
                                  "value": 211,
                                  "dataType": "vectorAngle",
                                  "nodeType": "dataValue",
                                },
                                "direction": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "angle": {
                                      "type": "LITERAL",
                                      "value": 64,
                                      "dataType": "vectorAngle",
                                      "nodeType": "dataValue",
                                    },
                                    "direction": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "unitWithPosition": {
                                          "type": "BLACKBOARD",
                                          "params": {},
                                          "dataType": "unitId",
                                          "nodeType": "dataValue",
                                          "blackboardKey": "opponentArcherWithinMangoMinimumRange",
                                        },
                                      },
                                      "dataType": "vector",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "unitPosition",
                                    },
                                  },
                                  "dataType": "vector",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "groupVectorFacingDirection",
                                },
                                "magnitude": {
                                  "type": "LITERAL",
                                  "value": 130,
                                  "dataType": "vectorMagnitude",
                                  "nodeType": "dataValue",
                                },
                              },
                              "dataType": "vector",
                              "nodeType": "dataValue",
                              "blackboardKey": "groupUnitVectorFacingDirection",
                            },
                            "distance": {
                              "type": "LITERAL",
                              "value": 160,
                              "dataType": "vectorMagnitude",
                              "nodeType": "dataValue",
                            },
                          },
                          "nodeType": "condition",
                        }, {
                          "nodes": [{
                            "type": "MOVE_UNITS",
                            "params": {
                              "direction": {
                                "type": "BLACKBOARD",
                                "params": {
                                  "angle": {
                                    "type": "LITERAL",
                                    "value": 166,
                                    "dataType": "vectorAngle",
                                    "nodeType": "dataValue",
                                  },
                                  "direction": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "MONK",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "vector",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                                  },
                                  "magnitude": {
                                    "type": "LITERAL",
                                    "value": 189,
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
                          }, {
                            "type": "groupIndexGreaterThan",
                            "invert": true,
                            "params": {
                              "groupIndexLeft": {
                                "type": "BLACKBOARD",
                                "params": {},
                                "dataType": "groupIndex",
                                "nodeType": "dataValue",
                                "blackboardKey": "groupMetaUnitTypeIndex",
                              },
                              "groupIndexRight": {
                                "type": "LITERAL",
                                "value": 3,
                                "dataType": "groupIndex",
                                "nodeType": "dataValue",
                              },
                            },
                            "nodeType": "condition",
                          }],
                          "nodeType": "sequence",
                        }, { "nodes": [], "nodeType": "sequence" }],
                        "nodeType": "selector",
                      }],
                      "nodeType": "sequence",
                    }, {
                      "nodes": [
                        {
                          "type": "tickCountEquals",
                          "invert": false,
                          "params": {
                            "leftTicks": {
                              "type": "BLACKBOARD",
                              "params": {
                                "type": {
                                  "type": "LITERAL",
                                  "value": "ARROW",
                                  "dataType": "projectileType",
                                  "nodeType": "dataValue",
                                },
                              },
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                              "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                            },
                            "rightTicks": {
                              "type": "LITERAL",
                              "value": 69,
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                            },
                          },
                          "nodeType": "condition",
                        },
                        { "type": "MERGE_GROUP", "params": {}, "nodeType": "action" },
                        {
                          "type": "tickCountLessThan",
                          "invert": true,
                          "params": {
                            "leftTicks": {
                              "type": "BLACKBOARD",
                              "params": {
                                "type": {
                                  "type": "LITERAL",
                                  "value": "MANGO_ROCK",
                                  "dataType": "projectileType",
                                  "nodeType": "dataValue",
                                },
                              },
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                              "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                            },
                            "rightTicks": {
                              "type": "LITERAL",
                              "value": 14,
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                            },
                          },
                          "nodeType": "condition",
                        },
                      ],
                      "nodeType": "sequence",
                    }],
                    "nodeType": "selector",
                  }],
                  "nodeType": "selector",
                }],
                "nodeType": "selector",
              },
              {
                "type": "booleanIsTrue",
                "invert": false,
                "params": {
                  "subject": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "boolean",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupHasAnyReloading",
                  },
                },
                "nodeType": "condition",
              },
            ],
            "nodeType": "sequence",
          }, {
            "nodes": [{
              "nodes": [{ "nodes": [], "nodeType": "selector" }, { "nodes": [], "nodeType": "selector" }, {
                "nodes": [{
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "ONE",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "selector",
              }],
              "nodeType": "selector",
            }, {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "MANGO",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
                "rightUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }, {
            "type": "groupIndexEquals",
            "invert": true,
            "params": {
              "groupIndexLeft": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "groupIndex",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeIndex",
              },
              "groupIndexRight": { "type": "LITERAL", "value": 1, "dataType": "groupIndex", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{
            "nodes": [{
              "type": "ATTACK_GROUND",
              "params": {
                "attackGroundPosition": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentAveragePosition",
                },
              },
              "nodeType": "action",
            }, {
              "type": "groupIndexEquals",
              "invert": true,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 2, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
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
              }, {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "ATTACK_GROUND",
                "params": {
                  "attackGroundPosition": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
                        "type": "BLACKBOARD",
                        "params": {
                          "unitType": {
                            "type": "LITERAL",
                            "value": "ARCHER",
                            "dataType": "unitType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "unitId",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "sequence",
            }, {
              "type": "PATROL",
              "params": {
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
              },
              "nodeType": "action",
            }],
            "nodeType": "sequence",
          }, {
            "nodes": [
              {
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              },
              { "nodes": [], "nodeType": "sequence" },
              {
                "nodes": [{
                  "type": "vectorDistanceBetweenLessThan",
                  "invert": false,
                  "params": {
                    "pointA": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": { "type": "LITERAL", "value": 93, "dataType": "vectorAngle", "nodeType": "dataValue" },
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
                          "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                    "pointB": {
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
                      "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                    },
                    "distance": {
                      "type": "LITERAL",
                      "value": 265,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }, { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" }],
                "nodeType": "sequence",
              },
            ],
            "nodeType": "selector",
          }, {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentUnitCountByType",
              },
            },
            "nodeType": "condition",
          }, {
            "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
              "type": "formationEquals",
              "invert": false,
              "params": {
                "leftFormation": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": {
                      "type": "LITERAL",
                      "value": "ARCHER",
                      "dataType": "unitType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "formation",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentFormationByType",
                },
                "rightFormation": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "formation",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupFormation",
                },
              },
              "nodeType": "condition",
            }, {
              "type": "vectorDistanceBetweenLessThan",
              "invert": false,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "movingUnit": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MONK",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "unitId",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentClosestUnitByType",
                    },
                    "positionInTicksAmount": {
                      "type": "LITERAL",
                      "value": 82,
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitMovementTowardsVector",
                },
                "pointB": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 177, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupAveragePosition",
                    },
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 200,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitVectorFacingDirection",
                },
                "distance": { "type": "LITERAL", "value": 159, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }, {
              "nodes": [{
                "type": "unitCountEquals",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitCountByType",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitCountByType",
                  },
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
                    "blackboardKey": "groupAveragePosition",
                  },
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentAveragePosition",
                  },
                  "distance": {
                    "type": "LITERAL",
                    "value": 65,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "selector",
            }, {
              "nodes": [
                {
                  "type": "IDLE",
                  "params": {
                    "forTicksAmount": {
                      "type": "BLACKBOARD",
                      "params": {
                        "type": {
                          "type": "LITERAL",
                          "value": "ARROW",
                          "dataType": "projectileType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "tickCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
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
                    "pointB": {
                      "type": "BLACKBOARD",
                      "params": {
                        "movingUnit": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "ARCHER",
                              "dataType": "unitType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentMedoidUnitByType",
                        },
                        "positionInTicksAmount": {
                          "type": "BLACKBOARD",
                          "params": {
                            "type": {
                              "type": "LITERAL",
                              "value": "MANGO_ROCK",
                              "dataType": "projectileType",
                              "nodeType": "dataValue",
                            },
                          },
                          "dataType": "tickCount",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentUnitMovementTowardsVector",
                    },
                    "distance": {
                      "type": "LITERAL",
                      "value": 252,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                { "nodes": [], "nodeType": "sequence" },
                {
                  "type": "unitCountEquals",
                  "invert": true,
                  "params": {
                    "leftUnitCount": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeGroupCount",
                    },
                    "rightUnitCount": {
                      "type": "LITERAL",
                      "value": 3,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
                {
                  "nodes": [{
                    "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }],
                    "nodeType": "sequence",
                  }, { "nodes": [], "nodeType": "selector" }],
                  "nodeType": "sequence",
                },
                {
                  "type": "groupIndexEquals",
                  "invert": true,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                },
              ],
              "nodeType": "sequence",
            }, {
              "type": "IDLE",
              "params": {
                "forTicksAmount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "type": {
                      "type": "LITERAL",
                      "value": "ARROW",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
              },
              "nodeType": "action",
            }, {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            }, {
              "nodes": [{
                "type": "formationEquals",
                "invert": true,
                "params": {
                  "leftFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                  "rightFormation": {
                    "type": "LITERAL",
                    "value": "LINE",
                    "dataType": "formation",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }, {
                "nodes": [{
                  "type": "groupIndexEquals",
                  "invert": false,
                  "params": {
                    "groupIndexLeft": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                    "groupIndexRight": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "groupIndex",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupMetaUnitTypeIndex",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "sequence",
              }, {
                "type": "tickCountLessThan",
                "invert": false,
                "params": {
                  "leftTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "ARROW",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                  "rightTicks": {
                    "type": "BLACKBOARD",
                    "params": {
                      "type": {
                        "type": "LITERAL",
                        "value": "MANGO_ROCK",
                        "dataType": "projectileType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "tickCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                  },
                },
                "nodeType": "condition",
              }, {
                "type": "unitCountGreaterThan",
                "invert": false,
                "params": {
                  "leftUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MONK",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                  "rightUnitCount": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "ARCHER",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "unitCount",
                    "nodeType": "dataValue",
                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "sequence",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "IDLE",
            "params": {
              "forTicksAmount": { "type": "LITERAL", "value": 40, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "action",
          }, {
            "nodes": [{ "nodes": [], "nodeType": "sequence" }, { "nodes": [], "nodeType": "selector" }],
            "nodeType": "selector",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "SPLIT_GROUP",
              "params": {
                "splitGroupInto": {
                  "type": "LITERAL",
                  "value": "HALF",
                  "dataType": "groupSize",
                  "nodeType": "dataValue",
                },
              },
              "nodeType": "action",
            },
            {
              "nodes": [{
                "nodes": [{
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "HALF",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "SPLIT_GROUP",
                  "params": {
                    "splitGroupInto": {
                      "type": "LITERAL",
                      "value": "HALF",
                      "dataType": "groupSize",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "MOVE_UNITS",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "unitType": {
                          "type": "LITERAL",
                          "value": "MANGO",
                          "dataType": "unitType",
                          "nodeType": "dataValue",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "opponentAverageUnitPositionByType",
                    },
                  },
                  "nodeType": "action",
                }],
                "nodeType": "sequence",
              }, {
                "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                  "nodes": [{ "type": "DELETE_GROUP", "params": {}, "nodeType": "action" }],
                  "nodeType": "selector",
                }],
                "nodeType": "sequence",
              }, {
                "type": "formationEquals",
                "invert": false,
                "params": {
                  "leftFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                  "rightFormation": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitType": {
                        "type": "LITERAL",
                        "value": "MANGO",
                        "dataType": "unitType",
                        "nodeType": "dataValue",
                      },
                    },
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentFormationByType",
                  },
                },
                "nodeType": "condition",
              }],
              "nodeType": "selector",
            },
            {
              "type": "booleanIsTrue",
              "invert": false,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupHasAnyReloading",
                },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "type": "SPLIT_GROUP",
                "params": {
                  "splitGroupInto": {
                    "type": "LITERAL",
                    "value": "ONE",
                    "dataType": "groupSize",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "action",
              }, {
                "type": "MOVE_UNITS",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupAveragePosition",
                  },
                },
                "nodeType": "action",
              }],
              "nodeType": "selector",
            },
            {
              "nodes": [
                {
                  "nodes": [{
                    "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                      "type": "CONVERT",
                      "params": {
                        "unit": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "unitId",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentArcherWithinMangoMinimumRange",
                        },
                      },
                      "nodeType": "action",
                    }, {
                      "nodes": [{
                        "nodes": [
                          {
                            "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
                              "type": "tickCountLessThan",
                              "invert": false,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "ARROW",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                              },
                              "nodeType": "condition",
                            }, {
                              "type": "tickCountEquals",
                              "invert": true,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "LITERAL",
                                  "value": 37,
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                },
                              },
                              "nodeType": "condition",
                            }],
                            "nodeType": "sequence",
                          },
                          {
                            "nodes": [
                              { "nodes": [], "nodeType": "sequence" },
                              { "nodes": [], "nodeType": "selector" },
                              {
                                "type": "unitCountGreaterThan",
                                "invert": false,
                                "params": {
                                  "leftUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "opponentUnitCountByType",
                                  },
                                  "rightUnitCount": {
                                    "type": "BLACKBOARD",
                                    "params": {
                                      "unitType": {
                                        "type": "LITERAL",
                                        "value": "ARCHER",
                                        "dataType": "unitType",
                                        "nodeType": "dataValue",
                                      },
                                    },
                                    "dataType": "unitCount",
                                    "nodeType": "dataValue",
                                    "blackboardKey": "globalOwnedUnitsOfTypeCount",
                                  },
                                },
                                "nodeType": "condition",
                              },
                            ],
                            "nodeType": "sequence",
                          },
                          {
                            "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
                              "type": "SPLIT_GROUP",
                              "params": {
                                "splitGroupInto": {
                                  "type": "LITERAL",
                                  "value": "HALF",
                                  "dataType": "groupSize",
                                  "nodeType": "dataValue",
                                },
                              },
                              "nodeType": "action",
                            }],
                            "nodeType": "sequence",
                          },
                          { "nodes": [], "nodeType": "selector" },
                          { "nodes": [], "nodeType": "selector" },
                          {
                            "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" }, {
                              "type": "groupIndexGreaterThan",
                              "invert": false,
                              "params": {
                                "groupIndexLeft": {
                                  "type": "BLACKBOARD",
                                  "params": {},
                                  "dataType": "groupIndex",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "groupMetaUnitTypeIndex",
                                },
                                "groupIndexRight": {
                                  "type": "BLACKBOARD",
                                  "params": {},
                                  "dataType": "groupIndex",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "groupMetaUnitTypeIndex",
                                },
                              },
                              "nodeType": "condition",
                            }, {
                              "nodes": [
                                { "nodes": [], "nodeType": "sequence" },
                                {
                                  "type": "CONVERT",
                                  "params": {
                                    "unit": {
                                      "type": "BLACKBOARD",
                                      "params": {
                                        "unitType": {
                                          "type": "LITERAL",
                                          "value": "ARCHER",
                                          "dataType": "unitType",
                                          "nodeType": "dataValue",
                                        },
                                      },
                                      "dataType": "unitId",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "opponentMedoidUnitByType",
                                    },
                                  },
                                  "nodeType": "action",
                                },
                                { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "selector" },
                                {
                                  "type": "groupIndexGreaterThan",
                                  "invert": true,
                                  "params": {
                                    "groupIndexLeft": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                    "groupIndexRight": {
                                      "type": "BLACKBOARD",
                                      "params": {},
                                      "dataType": "groupIndex",
                                      "nodeType": "dataValue",
                                      "blackboardKey": "groupMetaUnitTypeIndex",
                                    },
                                  },
                                  "nodeType": "condition",
                                },
                              ],
                              "nodeType": "selector",
                            }, {
                              "type": "tickCountLessThan",
                              "invert": false,
                              "params": {
                                "leftTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                                "rightTicks": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "type": {
                                      "type": "LITERAL",
                                      "value": "MANGO_ROCK",
                                      "dataType": "projectileType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "tickCount",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                                },
                              },
                              "nodeType": "condition",
                            }],
                            "nodeType": "sequence",
                          },
                        ],
                        "nodeType": "selector",
                      }, {
                        "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                          "type": "unitCountEquals",
                          "invert": true,
                          "params": {
                            "leftUnitCount": {
                              "type": "BLACKBOARD",
                              "params": {},
                              "dataType": "unitCount",
                              "nodeType": "dataValue",
                              "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                        }],
                        "nodeType": "selector",
                      }, { "nodes": [], "nodeType": "selector" }],
                      "nodeType": "selector",
                    }],
                    "nodeType": "selector",
                  }, {
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }, {
                    "type": "tickCountLessThan",
                    "invert": true,
                    "params": {
                      "leftTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                      "rightTicks": {
                        "type": "BLACKBOARD",
                        "params": {
                          "type": {
                            "type": "LITERAL",
                            "value": "MANGO_ROCK",
                            "dataType": "projectileType",
                            "nodeType": "dataValue",
                          },
                        },
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                      },
                    },
                    "nodeType": "condition",
                  }],
                  "nodeType": "sequence",
                },
                {
                  "type": "MOVE_UNITS",
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
                },
                { "nodes": [], "nodeType": "selector" },
                {
                  "nodes": [{
                    "type": "SPLIT_GROUP",
                    "params": {
                      "splitGroupInto": {
                        "type": "LITERAL",
                        "value": "ONE",
                        "dataType": "groupSize",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }],
                  "nodeType": "selector",
                },
              ],
              "nodeType": "selector",
            },
            {
              "type": "groupIndexGreaterThan",
              "invert": false,
              "params": {
                "groupIndexLeft": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "groupIndex",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupMetaUnitTypeIndex",
                },
                "groupIndexRight": { "type": "LITERAL", "value": 0, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
    },
  },
];

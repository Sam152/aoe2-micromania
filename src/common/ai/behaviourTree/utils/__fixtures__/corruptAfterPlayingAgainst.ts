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
      "0": { "nodes": [], "nodeType": "selector" },
      "1": {
        "nodes": [{
          "nodes": [{
            "type": "unitCountGreaterThan",
            "invert": false,
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
              "rightUnitCount": { "type": "LITERAL", "value": 20, "dataType": "unitCount", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }, {
          "nodes": [{
            "type": "PATROL",
            "params": {
              "direction": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentAverageUnitPositionByType",
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
                    "value": "ARROW",
                    "dataType": "projectileType",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "tickCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
              },
              "rightTicks": { "type": "LITERAL", "value": 17, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, { "nodes": [], "nodeType": "sequence" }],
          "nodeType": "selector",
        }, { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [{ "type": "FORMATION_LINE", "params": {}, "nodeType": "action" }, {
            "nodes": [{ "nodes": [], "nodeType": "selector" }, {
              "type": "FORMATION_SPREAD",
              "params": {},
              "nodeType": "action",
            }],
            "nodeType": "selector",
          }, { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "FORMATION_SPREAD",
            "params": {},
            "nodeType": "action",
          }, {
            "type": "unitCountGreaterThan",
            "invert": false,
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
              "rightUnitCount": { "type": "LITERAL", "value": 20, "dataType": "unitCount", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }, {
          "nodes": [{
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
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitCount",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                  "angle": { "type": "LITERAL", "value": 191, "dataType": "vectorAngle", "nodeType": "dataValue" },
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
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
                        "blackboardKey": "opponentMedoidUnitByType",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 163,
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
                  "angle": { "type": "LITERAL", "value": 30, "dataType": "vectorAngle", "nodeType": "dataValue" },
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
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 210,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitVectorFacingDirection",
              },
              "distance": { "type": "LITERAL", "value": 19, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }, {
            "type": "PATROL",
            "params": {
              "direction": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentAverageUnitPositionByType",
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
                    "value": "ARROW",
                    "dataType": "projectileType",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "tickCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
              },
              "rightTicks": { "type": "LITERAL", "value": 99, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "nodes": [{
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
                "rightTicks": { "type": "LITERAL", "value": 35, "dataType": "tickCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [{
            "type": "MOVE_UNITS",
            "params": {
              "direction": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "MANGO", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentAverageUnitPositionByType",
              },
            },
            "nodeType": "action",
          }, {
            "nodes": [{
              "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                "type": "formationEquals",
                "invert": false,
                "params": {
                  "leftFormation": {
                    "type": "BLACKBOARD",
                    "params": {},
                    "dataType": "formation",
                    "nodeType": "dataValue",
                    "blackboardKey": "groupFormation",
                  },
                  "rightFormation": {
                    "type": "LITERAL",
                    "value": "LINE",
                    "dataType": "formation",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }, { "nodes": [], "nodeType": "sequence" }],
              "nodeType": "sequence",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [
            {
              "type": "unitCountEquals",
              "invert": false,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 34, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
            {
              "type": "booleanIsTrue",
              "invert": true,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupIsMostlyReloading",
                },
              },
              "nodeType": "condition",
            },
            {
              "nodes": [{
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
                      "type": "LITERAL",
                      "value": 17,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
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
                "nodes": [
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
                  { "nodes": [], "nodeType": "selector" },
                  {
                    "nodes": [{
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
                    }],
                    "nodeType": "sequence",
                  },
                ],
                "nodeType": "sequence",
              }, { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" }],
              "nodeType": "selector",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "type": "FORMATION_SPREAD",
            "params": {},
            "nodeType": "action",
          }, {
            "type": "unitCountGreaterThan",
            "invert": false,
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
              "rightUnitCount": { "type": "LITERAL", "value": 20, "dataType": "unitCount", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "sequence",
        }, {
          "nodes": [{
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
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitCount",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                  "angle": { "type": "LITERAL", "value": 191, "dataType": "vectorAngle", "nodeType": "dataValue" },
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
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
                        "blackboardKey": "opponentMedoidUnitByType",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 163,
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
                  "angle": { "type": "LITERAL", "value": 30, "dataType": "vectorAngle", "nodeType": "dataValue" },
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
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 210,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitVectorFacingDirection",
              },
              "distance": { "type": "LITERAL", "value": 19, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }, {
            "type": "PATROL",
            "params": {
              "direction": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentAverageUnitPositionByType",
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
                    "value": "ARROW",
                    "dataType": "projectileType",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "tickCount",
                "nodeType": "dataValue",
                "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
              },
              "rightTicks": { "type": "LITERAL", "value": 99, "dataType": "tickCount", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "nodes": [{
              "type": "vectorDistanceBetweenLessThan",
              "invert": false,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 86, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": {
                          "type": "LITERAL",
                          "value": 260,
                          "dataType": "vectorAngle",
                          "nodeType": "dataValue",
                        },
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
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupVectorFacingDirection",
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
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitMovementTowardsVector",
                },
                "distance": { "type": "LITERAL", "value": 50, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
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
                "rightTicks": { "type": "LITERAL", "value": 35, "dataType": "tickCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
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
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{ "nodes": [], "nodeType": "selector" }, {
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
                  "rightTicks": { "type": "LITERAL", "value": 56, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
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
                      "type": "LITERAL",
                      "value": "LINE",
                      "dataType": "formation",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "selector",
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
                            "value": "MANGO",
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
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": { "type": "LITERAL", "value": 59, "dataType": "vectorAngle", "nodeType": "dataValue" },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 77,
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
                    "value": 300,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }, {
                "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                  "type": "formationEquals",
                  "invert": true,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupFormation",
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
                  "nodes": [{ "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" }, {
                    "nodes": [],
                    "nodeType": "selector",
                  }],
                  "nodeType": "sequence",
                }],
                "nodeType": "sequence",
              }],
              "nodeType": "sequence",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [
            {
              "type": "unitCountEquals",
              "invert": false,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 34, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
            {
              "type": "booleanIsTrue",
              "invert": true,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupIsMostlyReloading",
                },
              },
              "nodeType": "condition",
            },
            {
              "nodes": [{
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
                      "type": "LITERAL",
                      "value": 17,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
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
                "nodes": [
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
                  { "nodes": [], "nodeType": "selector" },
                  {
                    "nodes": [{
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
                    }],
                    "nodeType": "sequence",
                  },
                ],
                "nodeType": "sequence",
              }, { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" }],
              "nodeType": "selector",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [
            {
              "nodes": [{
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
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": { "type": "LITERAL", "value": 31, "dataType": "vectorAngle", "nodeType": "dataValue" },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 62,
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
              }, { "nodes": [], "nodeType": "sequence" }],
              "nodeType": "selector",
            },
            { "nodes": [], "nodeType": "selector" },
            { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
            {
              "type": "unitCountGreaterThan",
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
                "rightUnitCount": { "type": "LITERAL", "value": 20, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "sequence",
        }, {
          "nodes": [{
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
              "groupIndexRight": { "type": "LITERAL", "value": 1, "dataType": "groupIndex", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }, {
            "type": "unitCountEquals",
            "invert": true,
            "params": {
              "leftUnitCount": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitCount",
              },
              "rightUnitCount": {
                "type": "BLACKBOARD",
                "params": {},
                "dataType": "unitCount",
                "nodeType": "dataValue",
                "blackboardKey": "groupMetaUnitTypeGroupCount",
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
                  "angle": { "type": "LITERAL", "value": 191, "dataType": "vectorAngle", "nodeType": "dataValue" },
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "unitWithPosition": {
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
                        "blackboardKey": "opponentMedoidUnitByType",
                      },
                    },
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "unitPosition",
                  },
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 163,
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
                  "angle": { "type": "LITERAL", "value": 30, "dataType": "vectorAngle", "nodeType": "dataValue" },
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
                  "magnitude": {
                    "type": "LITERAL",
                    "value": 72,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "groupUnitVectorFacingDirection",
              },
              "distance": { "type": "LITERAL", "value": 457, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
            },
            "nodeType": "condition",
          }, {
            "type": "PATROL",
            "params": {
              "direction": {
                "type": "BLACKBOARD",
                "params": {
                  "unitType": { "type": "LITERAL", "value": "ARCHER", "dataType": "unitType", "nodeType": "dataValue" },
                },
                "dataType": "vector",
                "nodeType": "dataValue",
                "blackboardKey": "opponentAverageUnitPositionByType",
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
          }],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "nodes": [{
              "type": "vectorDistanceBetweenLessThan",
              "invert": false,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 86, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": {
                          "type": "LITERAL",
                          "value": 260,
                          "dataType": "vectorAngle",
                          "nodeType": "dataValue",
                        },
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
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupVectorFacingDirection",
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
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitMovementTowardsVector",
                },
                "distance": { "type": "LITERAL", "value": 50, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
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
                "rightTicks": { "type": "LITERAL", "value": 35, "dataType": "tickCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
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
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{ "nodes": [], "nodeType": "selector" }, {
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
                  "rightTicks": { "type": "LITERAL", "value": 56, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
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
                      "type": "LITERAL",
                      "value": "LINE",
                      "dataType": "formation",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "selector",
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
                            "value": "MANGO",
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
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": { "type": "LITERAL", "value": 59, "dataType": "vectorAngle", "nodeType": "dataValue" },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 77,
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
                    "value": 300,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }, {
                "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                  "type": "formationEquals",
                  "invert": true,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupFormation",
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
                  "nodes": [{ "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" }, {
                    "nodes": [],
                    "nodeType": "selector",
                  }],
                  "nodeType": "sequence",
                }],
                "nodeType": "sequence",
              }],
              "nodeType": "sequence",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [
            {
              "type": "PATROL",
              "params": {
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
              "nodeType": "action",
            },
            {
              "type": "unitCountEquals",
              "invert": false,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 34, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
            {
              "type": "booleanIsTrue",
              "invert": true,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupIsMostlyReloading",
                },
              },
              "nodeType": "condition",
            },
            {
              "nodes": [{
                "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
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
                    "rightUnitCount": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }, {
                  "nodes": [{
                    "type": "unitCountGreaterThan",
                    "invert": false,
                    "params": {
                      "leftUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupUnitCount",
                      },
                      "rightUnitCount": {
                        "type": "LITERAL",
                        "value": 16,
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
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
                }],
                "nodeType": "selector",
              }, {
                "nodes": [{
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
                }, { "nodes": [], "nodeType": "selector" }],
                "nodeType": "sequence",
              }, { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" }],
              "nodeType": "selector",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [
            {
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
                {
                  "type": "PATROL",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": { "type": "LITERAL", "value": 31, "dataType": "vectorAngle", "nodeType": "dataValue" },
                        "direction": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "vector",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentAveragePosition",
                        },
                        "magnitude": {
                          "type": "LITERAL",
                          "value": 283,
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
                { "nodes": [], "nodeType": "selector" },
                {
                  "nodes": [{ "nodes": [], "nodeType": "selector" }, {
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
                  }],
                  "nodeType": "sequence",
                },
              ],
              "nodeType": "selector",
            },
            { "nodes": [], "nodeType": "selector" },
            { "nodes": [], "nodeType": "selector" },
            { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
            {
              "type": "unitCountGreaterThan",
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
                "rightUnitCount": { "type": "LITERAL", "value": 20, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "sequence",
        }, {
          "nodes": [
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
                "groupIndexRight": { "type": "LITERAL", "value": 1, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitCount",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 4, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "nodes": [], "nodeType": "sequence" },
            {
              "type": "vectorDistanceBetweenLessThan",
              "invert": false,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 191, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
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
                          "blackboardKey": "opponentClosestUnitByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "unitPosition",
                    },
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 163,
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
                    "angle": { "type": "LITERAL", "value": 30, "dataType": "vectorAngle", "nodeType": "dataValue" },
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
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 72,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitVectorFacingDirection",
                },
                "distance": { "type": "LITERAL", "value": 497, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            {
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
                      "value": "ARROW",
                      "dataType": "projectileType",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "tickCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentNextProjectileLandingInTicksTimeByType",
                },
                "rightTicks": { "type": "LITERAL", "value": 10, "dataType": "tickCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "nodes": [{
              "type": "vectorDistanceBetweenLessThan",
              "invert": true,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 86, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": {
                          "type": "LITERAL",
                          "value": 260,
                          "dataType": "vectorAngle",
                          "nodeType": "dataValue",
                        },
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
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupVectorFacingDirection",
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
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitMovementTowardsVector",
                },
                "distance": { "type": "LITERAL", "value": 50, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "MOVE_UNITS",
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
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "nodes": [{
                  "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "type": "LITERAL",
                        "value": 19,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }],
                  "nodeType": "selector",
                }],
                "nodeType": "selector",
              }, {
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
                  "rightTicks": { "type": "LITERAL", "value": 56, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
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
                      "type": "LITERAL",
                      "value": "LINE",
                      "dataType": "formation",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "selector",
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
                            "value": "MANGO",
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
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": { "type": "LITERAL", "value": 59, "dataType": "vectorAngle", "nodeType": "dataValue" },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 77,
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
                    "value": 300,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }, {
                "nodes": [{
                  "nodes": [{
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
                  "type": "formationEquals",
                  "invert": true,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupFormation",
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
                          "value": 0,
                          "dataType": "groupIndex",
                          "nodeType": "dataValue",
                        },
                      },
                      "nodeType": "condition",
                    },
                    { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
                    { "nodes": [], "nodeType": "sequence" },
                    {
                      "type": "CONVERT",
                      "params": {
                        "unit": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "MANGO",
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
                    { "nodes": [], "nodeType": "selector" },
                  ],
                  "nodeType": "sequence",
                }],
                "nodeType": "sequence",
              }],
              "nodeType": "sequence",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [
            {
              "type": "PATROL",
              "params": {
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
              "nodeType": "action",
            },
            {
              "type": "unitCountEquals",
              "invert": false,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 34, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
            {
              "type": "booleanIsTrue",
              "invert": true,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupIsMostlyReloading",
                },
              },
              "nodeType": "condition",
            },
            {
              "nodes": [{
                "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" }, {
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
                    "rightUnitCount": {
                      "type": "LITERAL",
                      "value": 2,
                      "dataType": "unitCount",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }, {
                  "nodes": [{
                    "type": "unitCountGreaterThan",
                    "invert": false,
                    "params": {
                      "leftUnitCount": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupUnitCount",
                      },
                      "rightUnitCount": {
                        "type": "LITERAL",
                        "value": 16,
                        "dataType": "unitCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
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
                }],
                "nodeType": "selector",
              }, {
                "nodes": [{
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
                }, { "nodes": [], "nodeType": "selector" }],
                "nodeType": "sequence",
              }, { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" }],
              "nodeType": "selector",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [
            {
              "nodes": [{
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
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": { "type": "LITERAL", "value": 31, "dataType": "vectorAngle", "nodeType": "dataValue" },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 283,
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
                "nodes": [{ "nodes": [], "nodeType": "selector" }, {
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
                }],
                "nodeType": "selector",
              }, {
                "nodes": [{
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
                  "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                    "type": "ATTACK_GROUND",
                    "params": {
                      "attackGroundPosition": {
                        "type": "BLACKBOARD",
                        "params": {
                          "angle": {
                            "type": "LITERAL",
                            "value": 187,
                            "dataType": "vectorAngle",
                            "nodeType": "dataValue",
                          },
                          "direction": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitWithPosition": {
                                "type": "BLACKBOARD",
                                "params": {
                                  "unitType": {
                                    "type": "LITERAL",
                                    "value": "MANGO",
                                    "dataType": "unitType",
                                    "nodeType": "dataValue",
                                  },
                                },
                                "dataType": "unitId",
                                "nodeType": "dataValue",
                                "blackboardKey": "opponentClosestUnitByType",
                              },
                            },
                            "dataType": "vector",
                            "nodeType": "dataValue",
                            "blackboardKey": "unitPosition",
                          },
                          "magnitude": {
                            "type": "LITERAL",
                            "value": 331,
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
                  }],
                  "nodeType": "selector",
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
                }],
                "nodeType": "sequence",
              }],
              "nodeType": "selector",
            },
            { "nodes": [], "nodeType": "selector" },
            { "nodes": [], "nodeType": "selector" },
            { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
            {
              "type": "unitCountGreaterThan",
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
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 20, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "sequence",
        }, {
          "nodes": [
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
                "groupIndexRight": { "type": "LITERAL", "value": 1, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitCount",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 4, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "sequence" },
            {
              "type": "vectorDistanceBetweenLessThan",
              "invert": false,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 191, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
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
                          "blackboardKey": "opponentClosestUnitByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "unitPosition",
                    },
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 163,
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
                    "angle": { "type": "LITERAL", "value": 30, "dataType": "vectorAngle", "nodeType": "dataValue" },
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
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 72,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitVectorFacingDirection",
                },
                "distance": { "type": "LITERAL", "value": 497, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            {
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
            },
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
                "rightTicks": { "type": "LITERAL", "value": 10, "dataType": "tickCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
            "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
              "type": "vectorDistanceBetweenLessThan",
              "invert": true,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 86, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": {
                          "type": "LITERAL",
                          "value": 260,
                          "dataType": "vectorAngle",
                          "nodeType": "dataValue",
                        },
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
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupVectorFacingDirection",
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
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitMovementTowardsVector",
                },
                "distance": { "type": "LITERAL", "value": 50, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "MOVE_UNITS",
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
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
                "nodeType": "selector",
              }, {
                "nodes": [{
                  "nodes": [{
                    "nodes": [{
                      "nodes": [{
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "type": "BLACKBOARD",
                            "params": {
                              "angle": {
                                "type": "LITERAL",
                                "value": 287,
                                "dataType": "vectorAngle",
                                "nodeType": "dataValue",
                              },
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
                                "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                              },
                            },
                            "dataType": "vector",
                            "nodeType": "dataValue",
                            "blackboardKey": "groupVectorFacingDirection",
                          },
                        },
                        "nodeType": "action",
                      }],
                      "nodeType": "selector",
                    }],
                    "nodeType": "selector",
                  }, {
                    "type": "IDLE",
                    "params": {
                      "forTicksAmount": {
                        "type": "LITERAL",
                        "value": 19,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "action",
                  }],
                  "nodeType": "selector",
                }],
                "nodeType": "selector",
              }, {
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
                  "rightTicks": { "type": "LITERAL", "value": 56, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              }, {
                "nodes": [{
                  "type": "CONVERT",
                  "params": {
                    "unit": {
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
                      "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "formationEquals",
                  "invert": true,
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
                      "type": "LITERAL",
                      "value": "LINE",
                      "dataType": "formation",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "selector",
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
                            "value": "MANGO",
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
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": { "type": "LITERAL", "value": 59, "dataType": "vectorAngle", "nodeType": "dataValue" },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 77,
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
                    "value": 300,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }, {
                "nodes": [{
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
                  "type": "formationEquals",
                  "invert": true,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupFormation",
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
                    { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
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
                          "type": "LITERAL",
                          "value": 0,
                          "dataType": "groupIndex",
                          "nodeType": "dataValue",
                        },
                      },
                      "nodeType": "condition",
                    },
                    { "nodes": [], "nodeType": "sequence" },
                    { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
                    { "nodes": [], "nodeType": "sequence" },
                    {
                      "type": "CONVERT",
                      "params": {
                        "unit": {
                          "type": "BLACKBOARD",
                          "params": {
                            "unitType": {
                              "type": "LITERAL",
                              "value": "MANGO",
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
                    { "nodes": [], "nodeType": "selector" },
                  ],
                  "nodeType": "sequence",
                }],
                "nodeType": "sequence",
              }],
              "nodeType": "sequence",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
          "nodes": [
            {
              "type": "PATROL",
              "params": {
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
              "nodeType": "action",
            },
            {
              "type": "unitCountEquals",
              "invert": false,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 34, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
            {
              "type": "booleanIsTrue",
              "invert": true,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupIsMostlyReloading",
                },
              },
              "nodeType": "condition",
            },
            {
              "nodes": [{
                "nodes": [
                  {
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
                  },
                  { "nodes": [], "nodeType": "selector" },
                  {
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
                  },
                  {
                    "nodes": [{
                      "type": "unitCountGreaterThan",
                      "invert": false,
                      "params": {
                        "leftUnitCount": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "unitCount",
                          "nodeType": "dataValue",
                          "blackboardKey": "groupUnitCount",
                        },
                        "rightUnitCount": {
                          "type": "LITERAL",
                          "value": 16,
                          "dataType": "unitCount",
                          "nodeType": "dataValue",
                        },
                      },
                      "nodeType": "condition",
                    }],
                    "nodeType": "selector",
                  },
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
                        "type": "LITERAL",
                        "value": 2,
                        "dataType": "groupIndex",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                ],
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
                "nodes": [
                  { "nodes": [], "nodeType": "selector" },
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
                  { "nodes": [], "nodeType": "selector" },
                  {
                    "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                      "type": "PATROL",
                      "params": {
                        "direction": {
                          "type": "BLACKBOARD",
                          "params": {
                            "angle": {
                              "type": "LITERAL",
                              "value": 283,
                              "dataType": "vectorAngle",
                              "nodeType": "dataValue",
                            },
                            "direction": {
                              "type": "BLACKBOARD",
                              "params": {},
                              "dataType": "vector",
                              "nodeType": "dataValue",
                              "blackboardKey": "groupAveragePosition",
                            },
                          },
                          "dataType": "vector",
                          "nodeType": "dataValue",
                          "blackboardKey": "groupVectorFacingDirection",
                        },
                      },
                      "nodeType": "action",
                    }],
                    "nodeType": "selector",
                  },
                ],
                "nodeType": "sequence",
              }, { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" }],
              "nodeType": "selector",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [
            {
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
                {
                  "type": "PATROL",
                  "params": {
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": {
                          "type": "LITERAL",
                          "value": 318,
                          "dataType": "vectorAngle",
                          "nodeType": "dataValue",
                        },
                        "direction": {
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "vector",
                          "nodeType": "dataValue",
                          "blackboardKey": "opponentAveragePosition",
                        },
                        "magnitude": {
                          "type": "LITERAL",
                          "value": 283,
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
                {
                  "nodes": [{ "nodes": [], "nodeType": "sequence" }, { "nodes": [], "nodeType": "selector" }, {
                    "nodes": [{ "nodes": [], "nodeType": "sequence" }],
                    "nodeType": "selector",
                  }, {
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
                  }],
                  "nodeType": "selector",
                },
                { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" },
                {
                  "nodes": [{
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
                    "nodes": [{ "nodes": [], "nodeType": "selector" }, { "nodes": [], "nodeType": "selector" }, {
                      "type": "ATTACK_GROUND",
                      "params": {
                        "attackGroundPosition": {
                          "type": "BLACKBOARD",
                          "params": {
                            "angle": {
                              "type": "LITERAL",
                              "value": 187,
                              "dataType": "vectorAngle",
                              "nodeType": "dataValue",
                            },
                            "direction": {
                              "type": "BLACKBOARD",
                              "params": {
                                "unitWithPosition": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "unitType": {
                                      "type": "LITERAL",
                                      "value": "MANGO",
                                      "dataType": "unitType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "unitId",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentClosestUnitByType",
                                },
                              },
                              "dataType": "vector",
                              "nodeType": "dataValue",
                              "blackboardKey": "unitPosition",
                            },
                            "magnitude": {
                              "type": "LITERAL",
                              "value": 331,
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
                    }],
                    "nodeType": "selector",
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
                  }],
                  "nodeType": "sequence",
                },
              ],
              "nodeType": "selector",
            },
            { "nodes": [], "nodeType": "selector" },
            { "nodes": [], "nodeType": "selector" },
            { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
            {
              "type": "unitCountGreaterThan",
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
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 20, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "sequence",
        }, {
          "nodes": [
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
                "groupIndexRight": { "type": "LITERAL", "value": 1, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitCount",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 4, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "nodes": [], "nodeType": "sequence" },
            {
              "type": "vectorDistanceBetweenLessThan",
              "invert": false,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 191, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
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
                          "blackboardKey": "opponentClosestUnitByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "unitPosition",
                    },
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 163,
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
                    "angle": { "type": "LITERAL", "value": 30, "dataType": "vectorAngle", "nodeType": "dataValue" },
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
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 72,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitVectorFacingDirection",
                },
                "distance": { "type": "LITERAL", "value": 497, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            {
              "type": "PATROL",
              "params": {
                "direction": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 311, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": {
                          "type": "LITERAL",
                          "value": 335,
                          "dataType": "vectorAngle",
                          "nodeType": "dataValue",
                        },
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
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 337,
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
                "rightTicks": { "type": "LITERAL", "value": 10, "dataType": "tickCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
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
              "groupIndexRight": { "type": "LITERAL", "value": 3, "dataType": "groupIndex", "nodeType": "dataValue" },
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
                    "angle": { "type": "LITERAL", "value": 86, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": {
                          "type": "LITERAL",
                          "value": 260,
                          "dataType": "vectorAngle",
                          "nodeType": "dataValue",
                        },
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
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupVectorFacingDirection",
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
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitMovementTowardsVector",
                },
                "distance": { "type": "LITERAL", "value": 50, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "MOVE_UNITS",
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
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            {
              "nodes": [{
                "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
                "nodeType": "selector",
              }, {
                "nodes": [{
                  "nodes": [{
                    "nodes": [{ "nodes": [], "nodeType": "sequence" }, {
                      "nodes": [{
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "type": "BLACKBOARD",
                            "params": {
                              "angle": {
                                "type": "LITERAL",
                                "value": 287,
                                "dataType": "vectorAngle",
                                "nodeType": "dataValue",
                              },
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
                                "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                              },
                            },
                            "dataType": "vector",
                            "nodeType": "dataValue",
                            "blackboardKey": "groupVectorFacingDirection",
                          },
                        },
                        "nodeType": "action",
                      }],
                      "nodeType": "selector",
                    }],
                    "nodeType": "selector",
                  }],
                  "nodeType": "selector",
                }],
                "nodeType": "selector",
              }, {
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
                  "rightTicks": { "type": "LITERAL", "value": 56, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
              }, {
                "nodes": [{
                  "type": "CONVERT",
                  "params": {
                    "unit": {
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
                      "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                    },
                  },
                  "nodeType": "action",
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
                  "nodeType": "selector",
                }, {
                  "type": "formationEquals",
                  "invert": true,
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
                      "type": "LITERAL",
                      "value": "LINE",
                      "dataType": "formation",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "selector",
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
                        "blackboardKey": "opponentMedoidUnitByType",
                      },
                      "positionInTicksAmount": {
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
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": { "type": "LITERAL", "value": 59, "dataType": "vectorAngle", "nodeType": "dataValue" },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 77,
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
                    "value": 300,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }, {
                "nodes": [
                  {
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
                  },
                  { "nodes": [], "nodeType": "selector" },
                  {
                    "type": "formationEquals",
                    "invert": true,
                    "params": {
                      "leftFormation": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "formation",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupFormation",
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
                  {
                    "nodes": [
                      {
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
                        }],
                        "nodeType": "selector",
                      },
                      { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
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
                            "type": "LITERAL",
                            "value": 0,
                            "dataType": "groupIndex",
                            "nodeType": "dataValue",
                          },
                        },
                        "nodeType": "condition",
                      },
                      { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" },
                      { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
                      {
                        "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "sequence" }],
                        "nodeType": "sequence",
                      },
                      {
                        "type": "CONVERT",
                        "params": {
                          "unit": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "MANGO",
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
                      { "nodes": [], "nodeType": "selector" },
                    ],
                    "nodeType": "sequence",
                  },
                ],
                "nodeType": "sequence",
              }],
              "nodeType": "sequence",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
    },
  },
  {
    "tree": {
      "0": {
        "nodes": [{
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
                          "value": "MONK",
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
              },
              "nodeType": "action",
            },
            {
              "type": "unitCountEquals",
              "invert": false,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {
                    "unitType": { "type": "LITERAL", "value": "MONK", "dataType": "unitType", "nodeType": "dataValue" },
                  },
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitCountByType",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 34, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "type": "FORMATION_LINE", "params": {}, "nodeType": "action" },
            {
              "type": "booleanIsTrue",
              "invert": true,
              "params": {
                "subject": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "boolean",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupIsMostlyReloading",
                },
              },
              "nodeType": "condition",
            },
            {
              "nodes": [
                {
                  "nodes": [
                    {
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
                    },
                    { "nodes": [], "nodeType": "selector" },
                    {
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
                    },
                    {
                      "nodes": [{
                        "type": "unitCountGreaterThan",
                        "invert": false,
                        "params": {
                          "leftUnitCount": {
                            "type": "BLACKBOARD",
                            "params": {},
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                            "blackboardKey": "groupUnitCount",
                          },
                          "rightUnitCount": {
                            "type": "LITERAL",
                            "value": 16,
                            "dataType": "unitCount",
                            "nodeType": "dataValue",
                          },
                        },
                        "nodeType": "condition",
                      }],
                      "nodeType": "selector",
                    },
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
                          "type": "LITERAL",
                          "value": 2,
                          "dataType": "groupIndex",
                          "nodeType": "dataValue",
                        },
                      },
                      "nodeType": "condition",
                    },
                  ],
                  "nodeType": "selector",
                },
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
                {
                  "nodes": [
                    {
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
                          "type": "BLACKBOARD",
                          "params": {},
                          "dataType": "unitCount",
                          "nodeType": "dataValue",
                          "blackboardKey": "groupMetaUnitTypeGroupCount",
                        },
                      },
                      "nodeType": "condition",
                    },
                    { "type": "DELETE_GROUP", "params": {}, "nodeType": "action" },
                    { "nodes": [], "nodeType": "selector" },
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
                    { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
                    {
                      "nodes": [{
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
                              "value": 53,
                              "dataType": "tickCount",
                              "nodeType": "dataValue",
                            },
                          },
                          "nodeType": "condition",
                        }],
                        "nodeType": "selector",
                      }, { "nodes": [], "nodeType": "sequence" }],
                      "nodeType": "selector",
                    },
                  ],
                  "nodeType": "sequence",
                },
                { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
                { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
              ],
              "nodeType": "selector",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
      "1": {
        "nodes": [{
          "nodes": [
            {
              "nodes": [{
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
                "type": "PATROL",
                "params": {
                  "direction": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": { "type": "LITERAL", "value": 318, "dataType": "vectorAngle", "nodeType": "dataValue" },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "opponentAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 283,
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
                "nodes": [
                  { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "sequence" },
                  { "nodes": [], "nodeType": "selector" },
                  { "nodes": [], "nodeType": "selector" },
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
                ],
                "nodeType": "selector",
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
                    "rightTicks": { "type": "LITERAL", "value": 15, "dataType": "tickCount", "nodeType": "dataValue" },
                  },
                  "nodeType": "condition",
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
                }, { "nodes": [], "nodeType": "sequence" }],
                "nodeType": "sequence",
              }, {
                "nodes": [
                  {
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
                        "type": "LITERAL",
                        "value": 44,
                        "dataType": "tickCount",
                        "nodeType": "dataValue",
                      },
                    },
                    "nodeType": "condition",
                  },
                  { "nodes": [], "nodeType": "selector" },
                  {
                    "nodes": [{ "nodes": [], "nodeType": "selector" }, {
                      "nodes": [{ "nodes": [], "nodeType": "sequence" }],
                      "nodeType": "selector",
                    }, {
                      "type": "ATTACK_GROUND",
                      "params": {
                        "attackGroundPosition": {
                          "type": "BLACKBOARD",
                          "params": {
                            "angle": {
                              "type": "LITERAL",
                              "value": 187,
                              "dataType": "vectorAngle",
                              "nodeType": "dataValue",
                            },
                            "direction": {
                              "type": "BLACKBOARD",
                              "params": {
                                "unitWithPosition": {
                                  "type": "BLACKBOARD",
                                  "params": {
                                    "unitType": {
                                      "type": "LITERAL",
                                      "value": "MANGO",
                                      "dataType": "unitType",
                                      "nodeType": "dataValue",
                                    },
                                  },
                                  "dataType": "unitId",
                                  "nodeType": "dataValue",
                                  "blackboardKey": "opponentClosestUnitByType",
                                },
                              },
                              "dataType": "vector",
                              "nodeType": "dataValue",
                              "blackboardKey": "unitPosition",
                            },
                            "magnitude": {
                              "type": "LITERAL",
                              "value": 222,
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
                    }],
                    "nodeType": "selector",
                  },
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
                ],
                "nodeType": "sequence",
              }],
              "nodeType": "selector",
            },
            { "nodes": [], "nodeType": "selector" },
            { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
            {
              "type": "unitCountGreaterThan",
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
                  "blackboardKey": "globalOwnedUnitsOfTypeCount",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 20, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
          ],
          "nodeType": "sequence",
        }, {
          "nodes": [
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
                "groupIndexRight": { "type": "LITERAL", "value": 1, "dataType": "groupIndex", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            {
              "type": "unitCountEquals",
              "invert": true,
              "params": {
                "leftUnitCount": {
                  "type": "BLACKBOARD",
                  "params": {},
                  "dataType": "unitCount",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitCount",
                },
                "rightUnitCount": { "type": "LITERAL", "value": 4, "dataType": "unitCount", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            { "nodes": [], "nodeType": "sequence" },
            {
              "type": "vectorDistanceBetweenLessThan",
              "invert": false,
              "params": {
                "pointA": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 191, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
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
                          "blackboardKey": "opponentClosestUnitByType",
                        },
                      },
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "unitPosition",
                    },
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 163,
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
                    "angle": { "type": "LITERAL", "value": 30, "dataType": "vectorAngle", "nodeType": "dataValue" },
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
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 72,
                      "dataType": "vectorMagnitude",
                      "nodeType": "dataValue",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupUnitVectorFacingDirection",
                },
                "distance": { "type": "LITERAL", "value": 497, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            },
            {
              "type": "PATROL",
              "params": {
                "direction": {
                  "type": "BLACKBOARD",
                  "params": {
                    "angle": { "type": "LITERAL", "value": 311, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": {
                          "type": "LITERAL",
                          "value": 335,
                          "dataType": "vectorAngle",
                          "nodeType": "dataValue",
                        },
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
                    "magnitude": {
                      "type": "LITERAL",
                      "value": 337,
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
          "nodeType": "selector",
        }],
        "nodeType": "selector",
      },
      "2": {
        "nodes": [{
          "nodes": [{ "nodes": [], "nodeType": "selector" }, {
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
              "groupIndexRight": { "type": "LITERAL", "value": 3, "dataType": "groupIndex", "nodeType": "dataValue" },
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
                    "angle": { "type": "LITERAL", "value": 86, "dataType": "vectorAngle", "nodeType": "dataValue" },
                    "direction": {
                      "type": "BLACKBOARD",
                      "params": {
                        "angle": {
                          "type": "LITERAL",
                          "value": 260,
                          "dataType": "vectorAngle",
                          "nodeType": "dataValue",
                        },
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
                      "dataType": "vector",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupVectorFacingDirection",
                    },
                  },
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "groupVectorFacingDirection",
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
                  "dataType": "vector",
                  "nodeType": "dataValue",
                  "blackboardKey": "opponentUnitMovementTowardsVector",
                },
                "distance": { "type": "LITERAL", "value": 50, "dataType": "vectorMagnitude", "nodeType": "dataValue" },
              },
              "nodeType": "condition",
            }],
            "nodeType": "sequence",
          }],
          "nodeType": "selector",
        }, {
          "nodes": [
            {
              "type": "MOVE_UNITS",
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
            },
            { "type": "FORMATION_SPLIT", "params": {}, "nodeType": "action" },
            { "nodes": [], "nodeType": "selector" },
            {
              "nodes": [{
                "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }],
                "nodeType": "selector",
              }, {
                "nodes": [{
                  "nodes": [{
                    "nodes": [{ "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "sequence" }, {
                      "nodes": [{
                        "type": "MOVE_UNITS",
                        "params": {
                          "direction": {
                            "type": "BLACKBOARD",
                            "params": {
                              "angle": {
                                "type": "LITERAL",
                                "value": 287,
                                "dataType": "vectorAngle",
                                "nodeType": "dataValue",
                              },
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
                                "blackboardKey": "globalNonGroupUnitsOfTypeAveragePosition",
                              },
                            },
                            "dataType": "vector",
                            "nodeType": "dataValue",
                            "blackboardKey": "groupVectorFacingDirection",
                          },
                        },
                        "nodeType": "action",
                      }],
                      "nodeType": "selector",
                    }],
                    "nodeType": "selector",
                  }],
                  "nodeType": "selector",
                }],
                "nodeType": "selector",
              }, {
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
                  "rightTicks": { "type": "LITERAL", "value": 57, "dataType": "tickCount", "nodeType": "dataValue" },
                },
                "nodeType": "condition",
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
                      "type": "LITERAL",
                      "value": "SPREAD",
                      "dataType": "formation",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }, {
                  "type": "CONVERT",
                  "params": {
                    "unit": {
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
                      "blackboardKey": "opponentClosestUnitByTypeNotInMinRange",
                    },
                  },
                  "nodeType": "action",
                }, {
                  "type": "formationEquals",
                  "invert": true,
                  "params": {
                    "leftFormation": {
                      "type": "BLACKBOARD",
                      "params": {},
                      "dataType": "formation",
                      "nodeType": "dataValue",
                      "blackboardKey": "groupFormation",
                    },
                    "rightFormation": {
                      "type": "LITERAL",
                      "value": "SPREAD",
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
                  "nodeType": "selector",
                }, {
                  "type": "formationEquals",
                  "invert": true,
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
                      "type": "LITERAL",
                      "value": "LINE",
                      "dataType": "formation",
                      "nodeType": "dataValue",
                    },
                  },
                  "nodeType": "condition",
                }],
                "nodeType": "selector",
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
                        "blackboardKey": "opponentMedoidUnitByType",
                      },
                      "positionInTicksAmount": {
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
                    "dataType": "vector",
                    "nodeType": "dataValue",
                    "blackboardKey": "opponentUnitMovementTowardsVector",
                  },
                  "pointB": {
                    "type": "BLACKBOARD",
                    "params": {
                      "angle": { "type": "LITERAL", "value": 59, "dataType": "vectorAngle", "nodeType": "dataValue" },
                      "direction": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "vector",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupAveragePosition",
                      },
                      "magnitude": {
                        "type": "LITERAL",
                        "value": 77,
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
                    "value": 300,
                    "dataType": "vectorMagnitude",
                    "nodeType": "dataValue",
                  },
                },
                "nodeType": "condition",
              }, {
                "nodes": [
                  {
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
                  },
                  { "nodes": [{ "nodes": [], "nodeType": "selector" }], "nodeType": "selector" },
                  {
                    "type": "formationEquals",
                    "invert": true,
                    "params": {
                      "leftFormation": {
                        "type": "BLACKBOARD",
                        "params": {},
                        "dataType": "formation",
                        "nodeType": "dataValue",
                        "blackboardKey": "groupFormation",
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
                  {
                    "nodes": [
                      {
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
                        }],
                        "nodeType": "selector",
                      },
                      { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
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
                            "type": "LITERAL",
                            "value": 0,
                            "dataType": "groupIndex",
                            "nodeType": "dataValue",
                          },
                        },
                        "nodeType": "condition",
                      },
                      {
                        "nodes": [{ "type": "MERGE_GROUP", "params": {}, "nodeType": "action" }, {
                          "nodes": [],
                          "nodeType": "sequence",
                        }],
                        "nodeType": "sequence",
                      },
                      { "type": "FORMATION_SPREAD", "params": {}, "nodeType": "action" },
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
                          "nodes": [{
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
                                "value": 38,
                                "dataType": "tickCount",
                                "nodeType": "dataValue",
                              },
                            },
                            "nodeType": "condition",
                          }, { "nodes": [{ "nodes": [], "nodeType": "sequence" }], "nodeType": "selector" }],
                          "nodeType": "sequence",
                        }],
                        "nodeType": "sequence",
                      },
                      {
                        "type": "CONVERT",
                        "params": {
                          "unit": {
                            "type": "BLACKBOARD",
                            "params": {
                              "unitType": {
                                "type": "LITERAL",
                                "value": "MANGO",
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
                      { "nodes": [], "nodeType": "selector" },
                    ],
                    "nodeType": "sequence",
                  },
                ],
                "nodeType": "sequence",
              }],
              "nodeType": "sequence",
            },
          ],
          "nodeType": "sequence",
        }],
        "nodeType": "selector",
      },
    },
  },
];

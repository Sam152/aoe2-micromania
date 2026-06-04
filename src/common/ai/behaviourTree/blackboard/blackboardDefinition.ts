import { BlackboardDefinitionShape } from "./types/BlackboardDefinitionShape.ts";

export const blackboardDefinition = {
  /**
   * Counts the number of groups, for the group type being acted on.
   */
  groupMetaUnitTypeGroupCount: {
    dataType: "number",
    params: {},
  },
  /**
   * An index identifying an index for a group of a particular type.
   */
  groupMetaUnitTypeIndex: {
    dataType: "number",
    params: {},
  },
  /**
   * The total number of units in a given group.
   */
  groupUnitCount: {
    dataType: "number",
    params: {},
  },
  /**
   * The total number of units in a given group.
   */
  groupAveragePosition: {
    dataType: "vector",
    params: {},
  },
  /**
   * The total number of units owned by the player of a given type.
   */
  globalUnitsOfTypeCount: {
    dataType: "count",
    params: {
      unitType: {
        dataType: "unitType",
        default: "ARCHER",
      },
    },
  },
  /**
   * The average vector of all opponent units.
   */
  opponentAveragePosition: {
    dataType: "vector",
    params: {},
  },
  /**
   * Closest units of a given type.
   */
  opponentClosestUnitByType: {
    dataType: "unitId",
    params: {
      unitType: {
        dataType: "unitType",
        default: "ARCHER",
      },
    },
  },
  opponentAverageUnitPositionByType: {
    dataType: "vector",
    params: {
      unitType: {
        dataType: "unitType",
        default: "ARCHER",
      },
    },
  },
  /**
   * Positional computation.
   */
  groupUnitVectorFacingDirection: {
    dataType: "vector",
    params: {
      direction: {
        dataType: "vector",
        default: { x: 0, y: 0 },
      },
      angle: {
        dataType: "vectorAngle",
        default: 0,
      },
      magnitude: {
        dataType: "vectorMagnitude",
        default: 100,
      },
    },
  },
} as const satisfies BlackboardDefinitionShape;

export type BlackboardDefinition = typeof blackboardDefinition;
export type BlackboardKey = keyof BlackboardDefinition;

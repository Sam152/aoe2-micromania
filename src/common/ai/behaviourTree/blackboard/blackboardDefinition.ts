import { BlackboardDefinitionShape } from "./types/BlackboardDefinitionShape.ts";

export const blackboardDefinition = {
  /**
   * Counts the number of groups, for the group type being acted on.
   */
  groupMetaUnitTypeGroupCount: {
    dataType: "number",
    params: {},
    mutationRequirements: {
      min: 1,
      max: 5,
      step: 1,
    },
  },
  /**
   * An index identifying an index for a group of a particular type.
   */
  groupMetaUnitTypeIndex: {
    dataType: "number",
    params: {},
    mutationRequirements: {
      min: 1,
      max: 5,
      step: 1,
    },
  },
  /**
   * The total number of units in a given group.
   */
  groupUnitCount: {
    dataType: "number",
    params: {},
    mutationRequirements: {
      min: 1,
      max: 40,
      step: 1,
    },
  },
  /**
   * The total number of units owned by the player of a given type.
   */
  globalUnitsOfTypeCount: {
    dataType: "number",
    params: {
      unitType: {
        dataType: "unitType",
        default: "ARCHER",
        mutationRequirements: undefined,
      },
    },
    mutationRequirements: {
      min: 1,
      max: 40,
      step: 1,
    },
  },
  /**
   * The average vector of all opponent units.
   */
  opponentAveragePosition: {
    dataType: "vector",
    mutationRequirements: {
      min: 1,
      max: 40,
      step: 1,
    },
    params: {},
  },
  opponentClosestMonk: {
    dataType: "unitId",
    mutationRequirements: undefined,
    params: {},
  },
  opponentClosestArcher: {
    dataType: "unitId",
    mutationRequirements: undefined,
    params: {},
  },
  opponentClosestMango: {
    dataType: "unitId",
    mutationRequirements: undefined,
    params: {},
  },
} as const satisfies BlackboardDefinitionShape;

export type BlackboardDefinition = typeof blackboardDefinition;
export type BlackboardKey = keyof BlackboardDefinition;

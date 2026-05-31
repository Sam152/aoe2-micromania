import { BlackboardDefinitionShape, BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";

export const blackboardDefinition = {
  /**
   * Counts the number of groups, for the group type being acted on.
   */
  groupsForUnitTypeCount: {
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
  unitTypeGroupIndex: {
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
  unitsInGroupCount: {
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
  unitsOfTypeGlobalCount: {
    dataType: "number",
    params: {},
    mutationRequirements: {
      min: 1,
      max: 40,
      step: 1,
    },
  },
  /**
   * The average vector of all opponent units.
   */
  perceptionAverageVectorOpponents: {
    dataType: "vector",
    mutationRequirements: {
      min: 1,
      max: 40,
      step: 1,
    },
    params: {
      vectorOffset: {
        dataType: "vector",
        default: { x: 0, y: 0 },
        mutationRequirements: {
          min: 1,
          max: 40,
          step: 1,
        },
      },
    },
  },
} as const satisfies BlackboardDefinitionShape;

export type BlackboardDefinition = typeof blackboardDefinition;
export type BlackboardKey = keyof BlackboardDefinition;

export type Blackboard = BlackboardValuesFromDefinition<BlackboardDefinition>;

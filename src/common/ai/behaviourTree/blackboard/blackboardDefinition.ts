import { BlackboardDefinitionShape, BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";

export const blackboardDefinition = {
  /**
   * Counts the number of groups, for the group type being acted on.
   */
  numberOfGroupsForGroupUnitType: {
    dataType: "number",
    mutationRequirements: {
      min: 1,
      max: 5,
      step: 1,
    },
  },
  distanceToClosestOpponent: {
    dataType: "number",
    mutationRequirements: {
      min: 1,
      max: 500,
      step: 1,
    },
  },
  ticksSinceLastAction: {
    dataType: "number",
    mutationRequirements: {
      min: 1,
      max: 100,
      step: 5,
    },
  },
} as const satisfies BlackboardDefinitionShape;

export type BlackboardDefinition = typeof blackboardDefinition;

export type Blackboard = BlackboardValuesFromDefinition<BlackboardDefinition>;

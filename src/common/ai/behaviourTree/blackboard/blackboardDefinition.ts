import { BlackboardDefinitionShape, BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";

export const blackboardDefinition = {
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

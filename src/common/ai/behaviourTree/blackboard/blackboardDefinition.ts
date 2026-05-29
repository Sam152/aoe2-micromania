import { BlackboardDefinitionShape, BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";

const blackboard = {
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

export type BlackboardDefinition = typeof blackboard;

export type Blackboard = BlackboardValuesFromDefinition<BlackboardDefinition>;

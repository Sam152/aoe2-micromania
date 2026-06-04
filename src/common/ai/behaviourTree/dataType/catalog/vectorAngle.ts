import { DataTypeDefinition } from "../DataTypeDefinition.ts";

/**
 * ...in degrees, cause diving a circle up in to 360 integers is easier than
 * dividing 2pi into... something?
 */
export const vectorAngle = {
  id: "vectorAngle",
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
} satisfies DataTypeDefinition<number>;

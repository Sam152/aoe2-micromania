import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export type ProjectileType = "MANGO_ROCK" | "ARROW";

export const projectileType: DataTypeDefinition<ProjectileType> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: "MANGO_ROCK",
};

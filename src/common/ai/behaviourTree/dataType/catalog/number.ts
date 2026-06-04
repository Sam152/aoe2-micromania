import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const number = {
  id: "number",
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
} satisfies DataTypeDefinition<number>;

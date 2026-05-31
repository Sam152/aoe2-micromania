import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const boolean = {
  id: "boolean",
  defaultValue: false,
} satisfies DataTypeDefinition<boolean, undefined>;

import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export type GroupSize = "ONE" | "HALF";

export const groupSize: DataTypeDefinition<GroupSize> = {
  allowedValueTypes: ["LITERAL"],
  defaultValue: "HALF",
};

import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export type Formation = "SPREAD" | "LINE" | "SPLIT";

export const formation: DataTypeDefinition<Formation> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: "LINE",
};

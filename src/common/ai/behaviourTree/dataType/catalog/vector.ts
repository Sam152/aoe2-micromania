import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type Vector = { x: number; y: number };

export const vector = {
  id: "vector",
  allowedValueTypes: ["BLACKBOARD", "PRIMITIVE"],
  defaultValue: { x: 0, y: 0 },
} satisfies DataTypeDefinition<Vector, {
  scalarMultiple: number;
}>;

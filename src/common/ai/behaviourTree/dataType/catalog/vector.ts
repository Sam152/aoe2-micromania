import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type Vector = { x: number; y: number };

export const vector = {
  id: "vector",
  comparitors: {},
} satisfies DataTypeDefinition<Vector, {
  scalarMultiple: number;
}>;

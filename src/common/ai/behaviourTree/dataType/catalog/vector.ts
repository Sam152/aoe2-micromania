import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type Vector = { x: number; y: number };

export const vector = {
  id: "vector",
  comparitors: {
    MAG_GT: (a, b) => false,
  },
} satisfies DataTypeDefinition<Vector, {
  scalarMultiple: number;
}>;

import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type Vector = { x: number; y: number };

export const vector: DataTypeDefinition<Vector> = {
  /**
   * Does any part of our system think a literal vector is a good idea?
   * None that I can think of.
   */
  allowedValueTypes: ["BLACKBOARD"],
  defaultValue: { x: 0, y: 0 },
};

import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const boolean = {
  id: "boolean",
  comparitors: {
    EQ: (node: boolean, blackboard: boolean) => node === blackboard,
    NEQ: (node: boolean, blackboard: boolean) => node !== blackboard,
  },
} satisfies DataTypeDefinition<boolean, undefined>;

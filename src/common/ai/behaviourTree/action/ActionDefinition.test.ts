import { ActionNode } from "./ActionDefinition.ts";

Deno.test("type safety", () => {
  const _valid: ActionNode = {
    nodeType: "action",
    type: "IDLE",
    params: {
      forTicksAmount: 1,
    },
  };
  const _invalid1: ActionNode = {
    nodeType: "action",
    type: "IDLE",
    params: {
      // @ts-expect-error - string instead of number
      forTicksAmount: "bar",
    },
  };
  const _invalid2: ActionNode = {
    nodeType: "action",
    type: "IDLE",
    params: {
      // @ts-expect-error - bad property
      badProp: 1,
    },
  };
});

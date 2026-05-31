import { ActionNode } from "./ActionDefinition.ts";

Deno.test("type safety", () => {
  const _valid: ActionNode = {
    nodeType: "action",
    type: "IDLE",
    params: {
      forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
    },
  };
  // @ts-expect-error - string instead of number
  const _invalid1: ActionNode = {
    nodeType: "action",
    type: "IDLE",
    params: {
      forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: "bar" },
    },
  };
  const _invalid2: ActionNode = {
    nodeType: "action",
    type: "IDLE",
    params: {
      forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
      // @ts-expect-error - bad property
      badProp: 1,
    },
  };
});

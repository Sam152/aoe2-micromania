import { ConditionNode } from "./Condition.ts";

Deno.test("type safety", () => {
  const _valid: ConditionNode = {
    nodeType: "condition",
    type: "numberEquals",
    invert: false,
    params: {
      left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
      right: {
        nodeType: "dataValue",
        dataType: "number",
        type: "BLACKBOARD",
        blackboardKey: "unitsInGroupCount",
        params: {},
      },
    },
  };
  const _invalid1: ConditionNode = {
    nodeType: "condition",
    type: "numberEquals",
    invert: false,
    params: {
      left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
      right: {
        nodeType: "dataValue",
        dataType: "number",
        type: "BLACKBOARD",
        // @ts-expect-error - bad blackboard key
        blackboardKey: "badPropName",
        params: {},
      },
    },
  };
  const _invalid2: ConditionNode = {
    nodeType: "condition",
    type: "numberEquals",
    invert: false,
    // @ts-expect-error - empty params does not satisfy the required param shape
    params: {},
  };
  const _invalid3: ConditionNode = {
    nodeType: "condition",
    type: "numberEquals",
    invert: false,
    params: {
      left: {
        nodeType: "dataValue",
        dataType: "number",
        type: "PRIMITIVE",
        // @ts-expect-error - bad value type
        value: "fooString",
      },
      right: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 },
    },
  };
});

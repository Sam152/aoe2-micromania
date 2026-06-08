import { ConditionNode } from "./Condition.ts";

Deno.test("type safety", () => {
  const _valid: ConditionNode = {
    nodeType: "condition",
    type: "groupIndexEquals",
    invert: false,
    params: {
      left: { nodeType: "dataValue", dataType: "groupIndex", type: "LITERAL", value: 1 },
      right: {
        nodeType: "dataValue",
        dataType: "groupIndex",
        type: "BLACKBOARD",
        blackboardKey: "groupMetaUnitTypeIndex",
        params: {},
      },
    },
  };
  const _invalid1: ConditionNode = {
    nodeType: "condition",
    type: "groupIndexEquals",
    invert: false,
    params: {
      left: { nodeType: "dataValue", dataType: "groupIndex", type: "LITERAL", value: 1 },
      right: {
        nodeType: "dataValue",
        dataType: "groupIndex",
        type: "BLACKBOARD",
        // @ts-expect-error - bad blackboard key
        blackboardKey: "badPropName",
        params: {},
      },
    },
  };
  const _invalid2: ConditionNode = {
    nodeType: "condition",
    type: "groupIndexEquals",
    invert: false,
    // @ts-expect-error - empty params does not satisfy the required param shape
    params: {},
  };
  const _invalid3: ConditionNode = {
    nodeType: "condition",
    type: "groupIndexEquals",
    invert: false,
    params: {
      left: {
        nodeType: "dataValue",
        dataType: "groupIndex",
        type: "LITERAL",
        // @ts-expect-error - bad value type
        value: "fooString",
      },
      right: { nodeType: "dataValue", dataType: "groupIndex", type: "LITERAL", value: 2 },
    },
  };
});

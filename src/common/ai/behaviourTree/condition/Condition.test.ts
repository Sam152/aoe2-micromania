import { Condition } from "./Condition.ts";

Deno.test("type safety", () => {
  const _valid: Condition = {
    nodeType: "condition",
    dataType: "number",
    leftValue: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
    comparatorType: "GT",
    rightValue: {
      nodeType: "dataValue",
      dataType: "number",
      type: "BLACKBOARD",
      blackboardKey: "unitsInGroupCount",
      paramValues: {},
    },
  };
  const _invalid1: Condition = {
    nodeType: "condition",
    dataType: "number",
    leftValue: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
    comparatorType: "GT",
    rightValue: {
      nodeType: "dataValue",
      dataType: "number",
      type: "BLACKBOARD",
      // @ts-expect-error - bad blackboard key
      blackboardKey: "badPropName",
      paramValues: {},
    },
  };
  const _invalid2: Condition = {
    nodeType: "condition",
    dataType: "number",
    leftValue: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
    // @ts-expect-error - bad comparitor
    comparatorType: "WAT",
    rightValue: {
      nodeType: "dataValue",
      dataType: "number",
      type: "BLACKBOARD",
      blackboardKey: "unitsInGroupCount",
      paramValues: {},
    },
  };
  const _invalid3: Condition = {
    nodeType: "condition",
    dataType: "number",
    leftValue: {
      nodeType: "dataValue",
      dataType: "number",
      type: "PRIMITIVE",
      // @ts-expect-error - bad value type
      value: "fooString",
    },
    comparatorType: "GT",
    rightValue: {
      nodeType: "dataValue",
      dataType: "number",
      type: "BLACKBOARD",
      blackboardKey: "unitsInGroupCount",
      paramValues: {},
    },
  };
});

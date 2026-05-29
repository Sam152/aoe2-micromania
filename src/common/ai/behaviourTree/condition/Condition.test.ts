import { Condition } from "./Condition.ts";

Deno.test("type safety", () => {
  const _valid: Condition = {
    nodeType: "condition",
    propertyName: "distanceToClosestOpponent",
    comparatorType: "GT",
    value: 1,
  };
  const _invalid1: Condition = {
    nodeType: "condition",
    // @ts-expect-error - bad prop name
    propertyName: "badPropName",
    comparatorType: "GT",
    value: 1,
  };
  const _invalid2: Condition = {
    nodeType: "condition",
    propertyName: "distanceToClosestOpponent",
    // @ts-expect-error - bad comparitor
    comparatorType: "WAT",
    value: 1,
  };
  const _invalid3: Condition = {
    nodeType: "condition",
    propertyName: "distanceToClosestOpponent",
    comparatorType: "WAT",
    // @ts-expect-error - bad value type
    value: "fooString",
  };
});

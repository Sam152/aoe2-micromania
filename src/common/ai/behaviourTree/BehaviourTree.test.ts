import { BehaviourTreeNode } from "./BehaviourTree.ts";

Deno.test("behaviour tree type safety", () => {
  const _condBadComparator: BehaviourTreeNode = {
    nodeType: "condition",
    dataType: "number",
    leftValue: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
    // @ts-expect-error - MAG_GT is a vector comparator, not valid for number
    comparatorType: "MAG_GT",
    rightValue: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 },
  };

  const _condBadValueType: BehaviourTreeNode = {
    nodeType: "condition",
    dataType: "number",
    // @ts-expect-error - value dataType "vector" does not match condition dataType "number"
    leftValue: { nodeType: "dataValue", dataType: "vector", type: "PRIMITIVE", value: { x: 0, y: 0 } },
    comparatorType: "GT",
    rightValue: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 },
  };

  const _condBadBlackboardKey: BehaviourTreeNode = {
    nodeType: "condition",
    dataType: "number",
    leftValue: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
    comparatorType: "EQ",
    rightValue: {
      nodeType: "dataValue",
      dataType: "number",
      type: "BLACKBOARD",
      // @ts-expect-error - not a blackboard key
      blackboardKey: "notARealKey",
      params: {},
    },
  };

  const _actionBadParamType: BehaviourTreeNode = {
    nodeType: "action",
    type: "IDLE",
    // @ts-expect-error - forTicksAmount must be a number data value, not vector
    params: { forTicksAmount: { nodeType: "dataValue", dataType: "vector", type: "PRIMITIVE", value: { x: 0, y: 0 } } },
  };

  const _actionBadParamType2: BehaviourTreeNode = {
    nodeType: "action",
    type: "PATROL",
    // @ts-expect-error - direction must be a vector data value, not number
    params: { direction: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 } },
  };

  const _actionBadType: BehaviourTreeNode = {
    nodeType: "action",
    // @ts-expect-error - not a registered action type
    type: "NOT_AN_ACTION",
    params: {},
  };

  const _actionBadParamKey: BehaviourTreeNode = {
    nodeType: "action",
    type: "IDLE",
    params: {
      forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
      // @ts-expect-error - IDLE has no such param
      notAParam: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
    },
  };
});

import { BehaviourTreeNode } from "./BehaviourTree.ts";

Deno.test("behaviour tree type safety", () => {
  const _condMissingParams: BehaviourTreeNode = {
    nodeType: "condition",
    type: "numberEquals",
    // @ts-expect-error - params must satisfy the condition's required shape
    params: {},
  };

  const _condBadParamType: BehaviourTreeNode = {
    nodeType: "condition",
    type: "numberEquals",
    params: {
      // @ts-expect-error - vector not valid for number param
      left: { nodeType: "dataValue", dataType: "vector", type: "LITERAL", value: { x: 0, y: 0 } },
      right: { nodeType: "dataValue", dataType: "number", type: "LITERAL", value: 2 },
    },
  };

  const _condBadBlackboardKey: BehaviourTreeNode = {
    nodeType: "condition",
    type: "numberEquals",
    params: {
      left: { nodeType: "dataValue", dataType: "number", type: "LITERAL", value: 1 },
      right: {
        nodeType: "dataValue",
        dataType: "number",
        type: "BLACKBOARD",
        // @ts-expect-error - not a blackboard key
        blackboardKey: "notARealKey",
        params: {},
      },
    },
  };

  const _actionBadParamType: BehaviourTreeNode = {
    nodeType: "action",
    type: "IDLE",
    // @ts-expect-error - forTicksAmount must be a number data value, not vector
    params: { forTicksAmount: { nodeType: "dataValue", dataType: "vector", type: "LITERAL", value: { x: 0, y: 0 } } },
  };

  const _actionBadParamType2: BehaviourTreeNode = {
    nodeType: "action",
    type: "PATROL",
    // @ts-expect-error - direction must be a vector data value, not number
    params: { direction: { nodeType: "dataValue", dataType: "number", type: "LITERAL", value: 1 } },
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
      forTicksAmount: { nodeType: "dataValue", dataType: "tickCount", type: "LITERAL", value: 1 },
      // @ts-expect-error - IDLE has no such param
      notAParam: { nodeType: "dataValue", dataType: "number", type: "LITERAL", value: 1 },
    },
  };
});

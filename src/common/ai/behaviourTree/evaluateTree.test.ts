import { evaluateTreeNode } from "./evaluateTreeNode.ts";
import { Blackboard } from "./blackboard/blackboardDefinition.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";

const blackboard: Blackboard = {
  distanceToClosestOpponent: 10,
  ticksSinceLastAction: 10,
};

describe("simple tree evaluation", () => {
  it("evaluates a set of true conditions", () => {
    assertEquals(
      evaluateTreeNode({
        actionNodes: [],
        blackboard,
        node: {
          nodeType: "selector",
          nodes: [
            { nodeType: "condition", propertyName: "distanceToClosestOpponent", comparatorType: "GT", value: 1 },
            { nodeType: "condition", propertyName: "distanceToClosestOpponent", comparatorType: "LT", value: 15 },
            { nodeType: "condition", propertyName: "distanceToClosestOpponent", comparatorType: "LT", value: 15 },
            {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: 1 },
            },
          ],
        },
      }),
      {
        result: true,
        actionNodes: [{
          nodeType: "action",
          type: "IDLE",
          params: { forTicksAmount: 1 },
        }],
      },
    );
  });

  it("selects the correct branch from some sequences", () => {
    assertEquals(
      evaluateTreeNode({
        actionNodes: [],
        blackboard,
        node: {
          nodeType: "selector",
          nodes: [
            {
              nodeType: "sequence",
              nodes: [
                { nodeType: "condition", propertyName: "distanceToClosestOpponent", comparatorType: "GT", value: 100 },
                { nodeType: "action", type: "IDLE", params: { forTicksAmount: 1 } },
              ],
            },
            {
              nodeType: "sequence",
              nodes: [
                { nodeType: "condition", propertyName: "distanceToClosestOpponent", comparatorType: "GT", value: 5 },
                { nodeType: "action", type: "IDLE", params: { forTicksAmount: 2 } },
              ],
            },
            {
              nodeType: "sequence",
              nodes: [
                { nodeType: "condition", propertyName: "distanceToClosestOpponent", comparatorType: "GT", value: 3 },
                { nodeType: "action", type: "IDLE", params: { forTicksAmount: 3 } },
              ],
            },
          ],
        },
      }),
      {
        result: true,
        actionNodes: [{ nodeType: "action", type: "IDLE", params: { forTicksAmount: 2 } }],
      },
    );
  });
});

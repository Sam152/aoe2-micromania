import { evaluateTreeNode } from "./evaluateTreeNode.ts";
import { Blackboard } from "./blackboard/blackboardDefinition.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";

const blackboard: Blackboard = {
  distanceToClosestOpponent: 10,
  ticksSinceLastAction: 10,
};

describe("tree evaluation", () => {
  it("runs a selector until it finds true", () => {
    assertEquals(
      evaluateTreeNode({
        actionNodes: [],
        blackboard,
        node: {
          nodeType: "selector",
          nodes: [
            { nodeType: "condition", value: 1, comparatorType: "GT", propertyName: "distanceToClosestOpponent" },
            { nodeType: "condition", value: 15, comparatorType: "LT", propertyName: "distanceToClosestOpponent" },
            { nodeType: "condition", value: 15, comparatorType: "LT", propertyName: "distanceToClosestOpponent" },
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
                { nodeType: "condition", value: 5, comparatorType: "GT", propertyName: "distanceToClosestOpponent" },
                { nodeType: "action", type: "IDLE", params: { forTicksAmount: 1 } },
              ],
            },
            {
              nodeType: "sequence",
              nodes: [
                { nodeType: "condition", value: 15, comparatorType: "GT", propertyName: "distanceToClosestOpponent" },
                { nodeType: "action", type: "IDLE", params: { forTicksAmount: 2 } },
              ],
            },
            {
              nodeType: "sequence",
              nodes: [
                { nodeType: "condition", value: 20, comparatorType: "GT", propertyName: "distanceToClosestOpponent" },
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

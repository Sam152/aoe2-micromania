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

  it("can gather multiple actions from a sequence", () => {
    assertEquals(
      evaluateTreeNode({
        actionNodes: [],
        blackboard,
        node: {
          nodeType: "sequence",
          nodes: [
            {
              nodeType: "sequence",
              nodes: [
                { nodeType: "condition", value: 15, comparatorType: "GT", propertyName: "distanceToClosestOpponent" },
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
            { nodeType: "action", type: "IDLE", params: { forTicksAmount: 3 } },
          ],
        },
      }),
      {
        result: true,
        actionNodes: [
          { nodeType: "action", type: "IDLE", params: { forTicksAmount: 1 } },
          { nodeType: "action", type: "IDLE", params: { forTicksAmount: 2 } },
          { nodeType: "action", type: "IDLE", params: { forTicksAmount: 3 } },
        ],
      },
    );
  });

  it("evalues sequences that encounter actions as truthy, even if later conditions are false", () => {
    // If any actions were found along the way in the sequence, consider this a success and
    // returned the gathered actions, even if subsequent conditions evaluated to false. This
    // keeps more representations of the tree meaningful - sequences organized like this are
    // essentially selectors with two child sequences. An example:
    // - sequence
    //   - cond 1 true
    //   - action 1
    //   - cond 2 false
    //   - action 2
    // => returns success, action 1
    //
    // ...which is the same configuration as:
    //
    // - selector
    //  - cond 2 false
    //    - action 2
    //  - cond 1 true
    //    - action 1
    // => returns success, action 1
    //
    // This should allow random mutations produce less accidentally useless branches.
    assertEquals(
      evaluateTreeNode({
        actionNodes: [],
        blackboard,
        node: {
          nodeType: "sequence",
          nodes: [
            { nodeType: "condition", value: 15, comparatorType: "GT", propertyName: "distanceToClosestOpponent" },
            { nodeType: "action", type: "IDLE", params: { forTicksAmount: 1 } },
            { nodeType: "condition", value: 5, comparatorType: "GT", propertyName: "distanceToClosestOpponent" },
            { nodeType: "action", type: "IDLE", params: { forTicksAmount: 2 } },
          ],
        },
      }),
      {
        result: true,
        actionNodes: [],
      },
    );
  });
});

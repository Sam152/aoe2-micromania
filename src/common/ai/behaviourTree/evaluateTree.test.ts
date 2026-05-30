import { evaluateTreeNode } from "./evaluateTreeNode.ts";
import { Blackboard } from "./blackboard/blackboardDefinition.ts";
import { ActionNode } from "./action/ActionDefinition.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";

const blackboard: Blackboard = {
  distanceToClosestOpponent: 10,
  ticksSinceLastAction: 10,
};

const patrolAction: ActionNode = {
  nodeType: "action",
  type: "PATROL",
  params: { direction: "TOWARDS" },
};

describe("evaluateTree", () => {
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
            patrolAction,
          ],
        },
      }),
      {
        result: true,
        actionNodes: [patrolAction],
      },
    );
  });
});

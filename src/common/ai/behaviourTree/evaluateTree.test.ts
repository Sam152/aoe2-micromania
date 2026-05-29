import { evaluateTree } from "./evaluateTree.ts";

Deno.test("tree is evaluated", () => {
  evaluateTree({
    blackboard: {
      distanceToClosestOpponent: 100,
      ticksSinceLastAction: 10,
    },
    tree: {
      nodeType: "selector",
      nodes: [
        {
          nodeType: "sequence",
          nodes: [
            { nodeType: "condition", propertyName: "distanceToClosestOpponent", comparatorType: "GT", value: 1 },
            {
              nodeType: "action",
              type: "PATROL",
              params: {
                direction: "TOWARDS",
              },
            },
            {
              nodeType: "selector",
              nodes: [
                { nodeType: "condition", propertyName: "distanceToClosestOpponent", comparatorType: "GT", value: 1 },
                {
                  nodeType: "action",
                  type: "PATROL",
                  params: {
                    direction: "TOWARDS",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  });
});

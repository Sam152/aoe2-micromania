import { Condition } from "./condition/Condition.ts";
import { Action } from "./action/actionsList.ts";

type Node = Sequence | Selector | Condition | Action;

/**
 * Resolve first success node, else fail.
 */
type Selector = {
  nodeType: "selector";
  nodes: Node[];
};

/**
 * Resolve all as success, else fail.
 */
type Sequence = {
  nodeType: "sequence";
  nodes: Node[];
};

export const fooTree: Selector = {
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
          nodeType: "action",
          type: "IDLE",
          params: {
            forTicksAmount: 100,
          },
        },
      ],
    },
  ],
};

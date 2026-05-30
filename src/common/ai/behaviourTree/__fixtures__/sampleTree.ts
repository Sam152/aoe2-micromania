import { BehaviourTreeNode } from "../BehaviourTree.ts";

export const sampleTree: BehaviourTreeNode = {
  nodeType: "sequence",
  nodes: [
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
};

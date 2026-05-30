import { Blackboard, blackboardDefinition } from "./blackboard/blackboardDefinition.ts";
import { ActionNode } from "./action/ActionDefinition.ts";
import { BehaviourTreeNode } from "./BehaviourTree.ts";
import { dataTypes } from "./dataType/dataTypes.ts";

export function evaluateTreeNode(
  { blackboard, node, actionNodes }: { blackboard: Blackboard; node: BehaviourTreeNode; actionNodes: ActionNode[] },
): { result: boolean; actionNodes: ActionNode[] } {
  if (node.nodeType === "condition") {
    const definition = blackboardDefinition[node.propertyName];
    const dataTypeDefinition = dataTypes[definition.dataType];
    const comparitor = dataTypeDefinition.comparitors[node.comparatorType];
    return { result: comparitor(node.value, blackboard[node.propertyName]), actionNodes };
  }

  if (node.nodeType === "action") {
    return {
      result: true,
      actionNodes: [...actionNodes, node],
    };
  }

  if (node.nodeType === "selector") {
    for (const selectorNode of node.nodes) {
      const result = evaluateTreeNode({ blackboard, node: selectorNode, actionNodes });
      if (result.result) {
        return {
          result: true,
          actionNodes: result.actionNodes,
        };
      }
    }
    return {
      result: false,
      actionNodes,
    };
  }

  if (node.nodeType === "sequence") {
    const sequenceActionNodes = [];

    for (const sequenceNode of node.nodes) {
      const result = evaluateTreeNode({ blackboard, node: sequenceNode, actionNodes });
      if (!result.result) {
        return {
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
          result: sequenceActionNodes.length > 0,
          actionNodes: sequenceActionNodes,
        };
      }
      sequenceActionNodes.push(...result.actionNodes);
    }

    return {
      result: true,
      actionNodes: sequenceActionNodes,
    };
  }

  throw new Error();
}

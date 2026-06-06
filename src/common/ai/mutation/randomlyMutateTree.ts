import { BehaviourTreeNode } from "../behaviourTree/BehaviourTree.ts";
import { arrayOfSize } from "../../util/arrayOfSize.ts";
import { buildMutationCandidates } from "./utils/buildMutationCandidates.ts";
import { flattenTree } from "./utils/flattenTree.ts";
import { randomArray } from "../../util/randomArray.ts";
import { DataValue } from "../behaviourTree/dataValue/DataValue.ts";
import { randomNode } from "./factories/randomNode.ts";
import { randomDataValue } from "./factories/randomDataValue.ts";
import { randomLiteral } from "./factories/randomLiteral.ts";

export function randomlyMutateTree({ count, tree }: { count: number; tree: BehaviourTreeNode }): BehaviourTreeNode {
  const newTree = structuredClone(tree);

  arrayOfSize(count).forEach(() => {
    const candidates = buildMutationCandidates(flattenTree(newTree));
    const mutation = randomArray(candidates);

    if (mutation.type === "INVERT_CONDITION") {
      mutation.condition.invert = !mutation.condition.invert;
    }

    if (mutation.type === "REPLACE_PARAM_DATA_VALUE") {
      const params = mutation.node.params as Record<string, DataValue>;
      const currentValue = params[mutation.paramName];
      (mutation.node.params as Record<string, unknown>)[mutation.paramName] = randomDataValue(
        currentValue.dataType,
        mutation.paramName,
        mutation.node,
      );
    }

    if (mutation.type === "CHANGE_LITERAL_DATA_VALUE") {
      const param = (mutation.parentNode.params as Record<string, DataValue & { value: unknown }>)[mutation.paramName];
      param.value = randomLiteral(param.dataType);
    }

    if (mutation.type === "REMOVE_NODE_FROM_LIST") {
      mutation.listNode.nodes.splice(Math.floor(Math.random() * mutation.listNode.nodes.length), 1);
    }

    if (mutation.type === "ADD_NODE_TO_LIST") {
      mutation.listNode.nodes.splice(
        Math.floor(Math.random() * mutation.listNode.nodes.length),
        0,
        randomNode(),
      );
    }
  });

  return newTree;
}

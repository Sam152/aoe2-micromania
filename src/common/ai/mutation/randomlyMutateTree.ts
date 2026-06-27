import { BehaviourTreeNode, BehaviourTreeNodeType } from "../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { arrayOfSize } from "../../util/arrayOfSize.ts";
import { buildMutationCandidates } from "./utils/buildMutationCandidates.ts";
import { flattenTree } from "./utils/flattenTree.ts";
import { randomArray } from "../../util/randomArray.ts";
import { withProbability } from "../training/utils/withProbability.ts";
import { DataValue } from "../behaviourTree/dataValue/DataValue.ts";
import { randomNode } from "./factories/randomNode.ts";
import { randomDataValue } from "./factories/randomDataValue.ts";
import { randomLiteral } from "./factories/randomLiteral.ts";
import { isNever } from "../../util/isNever.ts";
import { Bot } from "../training/infra/repo/utils/botRowToBot.ts";
import { borrowGeneticTrait } from "./utils/borrowGeneticTrait.ts";
import { insertNodeAtRandomIndex } from "./utils/insertNodeAtRandomIndex.ts";

export function randomlyMutateTree(
  { count, tree, unitType, borrowBots }: {
    count: number;
    tree: BehaviourTreeNode;
    unitType: UnitType;
    borrowBots: Pick<Bot, "tree" | "generation">[];
  },
): BehaviourTreeNode {
  const newTree = structuredClone(tree);

  arrayOfSize(count).forEach(() => {
    const candidates = buildMutationCandidates(flattenTree(newTree));
    const mutation = withProbability(candidates);

    if (mutation.type === "INVERT_CONDITION") {
      mutation.condition.invert = !mutation.condition.invert;
      return;
    }

    if (mutation.type === "REPLACE_PARAM_DATA_VALUE") {
      const params = mutation.node.params as Record<string, DataValue>;
      const currentValue = params[mutation.paramName];
      (mutation.node.params as Record<string, unknown>)[mutation.paramName] = randomDataValue(
        currentValue.dataType,
        mutation.paramName,
        mutation.node,
      );
      return;
    }

    if (mutation.type === "CHANGE_LITERAL_DATA_VALUE") {
      const param = (mutation.parentNode.params as Record<string, DataValue & { value: unknown }>)[mutation.paramName];
      param.value = randomLiteral(param.dataType);
      return;
    }

    if (mutation.type === "REMOVE_NODE_FROM_LIST") {
      mutation.listNode.nodes.splice(Math.floor(Math.random() * mutation.listNode.nodes.length), 1);
      return;
    }

    if (mutation.type === "ADD_NODE_TO_LIST") {
      const type: BehaviourTreeNodeType = randomArray([
        "condition",
        "action",
      ]);
      insertNodeAtRandomIndex(mutation.listNode, randomNode(unitType, type));
      return;
    }

    if (mutation.type === "ADD_SEQ_OR_SEL_NODE_TO_LIST") {
      const type: BehaviourTreeNodeType = randomArray([
        "sequence",
        "selector",
      ]);
      insertNodeAtRandomIndex(mutation.listNode, randomNode(unitType, type));
      return;
    }

    if (mutation.type === "BORROW_GENETIC_NODE_INTO_LIST") {
      const borrowedNode = borrowGeneticTrait({ unitType, borrowBots: borrowBots, types: ["action", "condition"] });
      if (!borrowedNode) {
        return;
      }
      insertNodeAtRandomIndex(mutation.listNode, borrowedNode);
      return;
    }

    if (mutation.type === "BORROW_GENETIC_SEQ_OR_SEL_INTO_LIST") {
      const borrowedNode = borrowGeneticTrait({ unitType, borrowBots: borrowBots, types: ["selector", "sequence"] });
      if (!borrowedNode) {
        return;
      }
      insertNodeAtRandomIndex(mutation.listNode, borrowedNode);
      return;
    }

    return isNever(mutation);
  });

  return newTree;
}

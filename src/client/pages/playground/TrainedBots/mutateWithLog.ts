import { UnitType } from "../../../../common/units/UnitType.ts";
import {
  BehaviourTreeNode,
  BehaviourTreeNodeType,
  UnitAwareBehaviourTree,
} from "../../../../common/ai/behaviourTree/BehaviourTree.ts";
import { BlackboardDataValue, DataValue } from "../../../../common/ai/behaviourTree/dataValue/DataValue.ts";
import { ConditionNode } from "../../../../common/ai/behaviourTree/condition/Condition.ts";
import { ActionNode } from "../../../../common/ai/behaviourTree/action/ActionDefinition.ts";
import { flattenTree } from "../../../../common/ai/mutation/utils/flattenTree.ts";
import {
  buildMutationCandidates,
  MutationCandidate,
} from "../../../../common/ai/mutation/utils/buildMutationCandidates.ts";
import { withProbability } from "../../../../common/ai/training/utils/withProbability.ts";
import { randomNode } from "../../../../common/ai/mutation/factories/randomNode.ts";
import { randomDataValue } from "../../../../common/ai/mutation/factories/randomDataValue.ts";
import { randomLiteral } from "../../../../common/ai/mutation/factories/randomLiteral.ts";
import { borrowGeneticTrait } from "../../../../common/ai/mutation/utils/borrowGeneticTrait.ts";
import { insertNodeAtRandomIndex } from "../../../../common/ai/mutation/utils/insertNodeAtRandomIndex.ts";
import { arrayOfSize } from "../../../../common/util/arrayOfSize.ts";
import { randomArray } from "../../../../common/util/randomArray.ts";
import { Bot } from "../../../../common/ai/training/infra/repo/utils/botRowToBot.ts";

// The tree-tile category a mutation relates to, used to colour its log row the
// same way the corresponding tile is coloured.
export type MutationKind = "composite" | "condition" | "action" | "value";

// One rolled mutation, captured for the log panel. `json` is the full mutation
// object serialised at roll time (before it's applied), shown when expanded.
// `node` is the live tree node the mutation acts on, used to highlight the
// matching tile — it points into the tree returned by this roll.
export type MutationLogEntry = {
  unitType: UnitType;
  description: string;
  json: string;
  node: object;
  kind: MutationKind;
};

// A playground-only reimplementation of the core all-units mutation, calling
// the same core functions in the same sequence but capturing each rolled
// mutation into a log before it's applied to the tree. Nothing here mutates the
// AI core; it only orchestrates the exported core functions.
export function mutateAllUnitsWithLog(
  { tree, count, borrowBots }: { tree: UnitAwareBehaviourTree; count: number; borrowBots: Bot[] },
): { tree: UnitAwareBehaviourTree; log: MutationLogEntry[] } {
  const log: MutationLogEntry[] = [];
  const mutated: UnitAwareBehaviourTree = {
    [UnitType.Archer]: mutateTreeWithLog(tree[UnitType.Archer], UnitType.Archer, count, borrowBots, log),
    [UnitType.Mangonel]: mutateTreeWithLog(tree[UnitType.Mangonel], UnitType.Mangonel, count, borrowBots, log),
    [UnitType.Monk]: mutateTreeWithLog(tree[UnitType.Monk], UnitType.Monk, count, borrowBots, log),
  };
  return { tree: mutated, log };
}

function mutateTreeWithLog(
  tree: BehaviourTreeNode,
  unitType: UnitType,
  count: number,
  borrowBots: Bot[],
  log: MutationLogEntry[],
): BehaviourTreeNode {
  const newTree = structuredClone(tree);

  arrayOfSize(count).forEach(() => {
    const candidates = buildMutationCandidates(flattenTree(newTree), borrowBots.length > 0);
    const mutation = withProbability(candidates);

    // Log the rolled mutation before it's applied to the tree.
    log.push({
      unitType,
      description: describeMutation(mutation),
      json: JSON.stringify(mutation, null, 2),
      node: mutationNode(mutation),
      kind: mutationKind(mutation),
    });

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

    if (mutation.type === "ADD_CONDITION_TO_LIST") {
      insertNodeAtRandomIndex(mutation.listNode, randomNode(unitType, "condition"));
      return;
    }

    if (mutation.type === "ADD_ACTION_TO_LIST") {
      insertNodeAtRandomIndex(mutation.listNode, randomNode(unitType, "action"));
      return;
    }

    if (mutation.type === "ADD_SEQ_OR_SEL_NODE_TO_LIST") {
      const type: BehaviourTreeNodeType = randomArray(["sequence", "selector"]);
      insertNodeAtRandomIndex(mutation.listNode, randomNode(unitType, type));
      return;
    }

    if (mutation.type === "BORROW_GENETIC_NODE_INTO_LIST") {
      const borrowedNode = borrowGeneticTrait({ unitType, borrowBots, types: ["action", "condition"] });
      if (!borrowedNode) {
        return;
      }
      insertNodeAtRandomIndex(mutation.listNode, borrowedNode);
      return;
    }

    if (mutation.type === "BORROW_GENETIC_SEQ_OR_SEL_INTO_LIST") {
      const borrowedNode = borrowGeneticTrait({ unitType, borrowBots, types: ["selector", "sequence"] });
      if (!borrowedNode) {
        return;
      }
      insertNodeAtRandomIndex(mutation.listNode, borrowedNode);
    }
  });

  return newTree;
}

// The tree node a mutation acts on, used to highlight its tile. Returned as a
// plain object since it's only ever compared by identity.
function mutationNode(mutation: MutationCandidate): object {
  switch (mutation.type) {
    case "INVERT_CONDITION":
      return mutation.condition;
    case "REPLACE_PARAM_DATA_VALUE":
      return mutation.node;
    case "CHANGE_LITERAL_DATA_VALUE":
      return mutation.parentNode;
    default:
      return mutation.listNode;
  }
}

// The tree-tile category a mutation relates to, so its log row matches the
// colour of the affected node: conditions blue, actions red, data values green,
// and structural list operations (add composite / borrow / remove) grey.
function mutationKind(mutation: MutationCandidate): MutationKind {
  switch (mutation.type) {
    case "INVERT_CONDITION":
    case "ADD_CONDITION_TO_LIST":
      return "condition";
    case "ADD_ACTION_TO_LIST":
      return "action";
    case "REPLACE_PARAM_DATA_VALUE":
    case "CHANGE_LITERAL_DATA_VALUE":
      return "value";
    default:
      return "composite";
  }
}

// A human-readable one-liner describing the rolled mutation for the log.
function describeMutation(mutation: MutationCandidate): string {
  switch (mutation.type) {
    case "INVERT_CONDITION":
      return `Invert condition ${mutation.condition.type}`;
    case "REPLACE_PARAM_DATA_VALUE":
      return `Replace param "${mutation.paramName}" on ${nodeName(mutation.node)}`;
    case "CHANGE_LITERAL_DATA_VALUE":
      return `Change literal "${mutation.paramName}"`;
    case "ADD_ACTION_TO_LIST":
      return `Add action to ${mutation.listNode.nodeType}`;
    case "ADD_CONDITION_TO_LIST":
      return `Add condition to ${mutation.listNode.nodeType}`;
    case "ADD_SEQ_OR_SEL_NODE_TO_LIST":
      return `Add sequence/selector to ${mutation.listNode.nodeType}`;
    case "BORROW_GENETIC_NODE_INTO_LIST":
      return `Borrow action/condition into ${mutation.listNode.nodeType}`;
    case "BORROW_GENETIC_SEQ_OR_SEL_INTO_LIST":
      return `Borrow sequence/selector into ${mutation.listNode.nodeType}`;
    case "REMOVE_NODE_FROM_LIST":
      return `Remove a child from ${mutation.listNode.nodeType}`;
  }
}

function nodeName(node: ConditionNode | ActionNode | BlackboardDataValue): string {
  if (node.nodeType === "condition" || node.nodeType === "action") {
    return node.type;
  }
  return node.blackboardKey;
}

import { evaluateTreeNode } from "./evaluateTreeNode.ts";
import { defaultState } from "../../state/gameState.ts";
import { BotState, BotUnitGroup, createUnitTypeActivations } from "../integration/createBot.ts";
import { UnitType } from "../../units/UnitType.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { BlackboardComputer } from "./blackboard/types/BlackboardComputer.ts";

const state = defaultState();

const group: BotUnitGroup = {
  unitType: UnitType.Archer,
  actionQueue: [],
  includedUnits: [],
};

const botState: BotState = {
  playingAs: 0,
  playerId: "bot",
  lastActionType: "IDLE",
  lastActionTick: 0,
  isEligibleForDecision: true,
  unitGroups: [group],
  activations: createUnitTypeActivations(),
};

const blackboardComputer: BlackboardComputer = {
  groupUnitCount: () => 10,
  groupMetaUnitTypeGroupCount: () => 10,
  groupMetaUnitTypeIndex: () => 10,
  globalUnitsOfTypeCount: () => 10,
  opponentAveragePosition: () => ({ x: 0, y: 0 }),
} as unknown as BlackboardComputer;

const params = { state, botState, group, blackboardComputer };

const trueCond = {
  nodeType: "condition" as const,
  type: "numberGreaterThan" as const,
  invert: false,
  params: {
    left: { nodeType: "dataValue" as const, dataType: "number" as const, type: "LITERAL" as const, value: 15 },
    right: { nodeType: "dataValue" as const, dataType: "number" as const, type: "LITERAL" as const, value: 5 },
  },
};

const falseCond = {
  nodeType: "condition" as const,
  type: "numberGreaterThan" as const,
  invert: false,
  params: {
    left: { nodeType: "dataValue" as const, dataType: "number" as const, type: "LITERAL" as const, value: 5 },
    right: { nodeType: "dataValue" as const, dataType: "number" as const, type: "LITERAL" as const, value: 15 },
  },
};

const action = {
  nodeType: "action" as const,
  type: "IDLE" as const,
  params: {
    forTicksAmount: { nodeType: "dataValue" as const, dataType: "number" as const, type: "LITERAL" as const, value: 1 },
  },
};

describe("activations", () => {
  it("adds path for a condition that evaluates true", () => {
    const activations = new Set<string>();
    evaluateTreeNode({ ...params, node: trueCond, activations });
    assertEquals(activations, new Set([""]));
  });

  it("does not add path for a condition that evaluates false", () => {
    const activations = new Set<string>();
    evaluateTreeNode({ ...params, node: falseCond, activations });
    assertEquals(activations, new Set());
  });

  it("adds path for an action with resolvable params", () => {
    const activations = new Set<string>();
    evaluateTreeNode({ ...params, node: action, activations });
    assertEquals(activations, new Set([""]));
  });

  it("does not add path for an action with unresolvable params", () => {
    const unresolvableComputer = {
      ...blackboardComputer,
      groupUnitCount: () => undefined,
    } as unknown as BlackboardComputer;

    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      blackboardComputer: unresolvableComputer,
      activations,
      node: {
        nodeType: "action",
        type: "IDLE",
        params: {
          forTicksAmount: {
            nodeType: "dataValue",
            dataType: "number",
            type: "BLACKBOARD",
            blackboardKey: "groupUnitCount",
            params: {},
          },
        },
      },
    });
    assertEquals(activations, new Set());
  });

  it("adds the selector's path and the matched child's path on success", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: {
        nodeType: "selector",
        nodes: [trueCond],
      },
    });
    // selector root + the condition child at index 0
    assertEquals(activations, new Set(["", ".nodes[0]"]));
  });

  it("does not add any path for a selector where all children fail", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: {
        nodeType: "selector",
        nodes: [falseCond, falseCond],
      },
    });
    assertEquals(activations, new Set());
  });

  it("only activates the first successful selector branch, not subsequent ones", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: {
        nodeType: "selector",
        nodes: [falseCond, trueCond, trueCond],
      },
    });
    // selector root + second child (index 1) — third child never evaluated
    assertEquals(activations, new Set(["", ".nodes[1]"]));
  });

  it("tracks correct paths in a nested selector", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: {
        nodeType: "selector",
        nodes: [
          falseCond,
          {
            nodeType: "selector",
            nodes: [falseCond, trueCond],
          },
        ],
      },
    });
    // root selector + inner selector at [1] + inner condition at [1].nodes[1]
    assertEquals(activations, new Set(["", ".nodes[1]", ".nodes[1].nodes[1]"]));
  });

  it("sequence: all nodes pass activates root and each child", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: { nodeType: "sequence", nodes: [trueCond, action] },
    });
    assertEquals(activations, new Set(["", ".nodes[0]", ".nodes[1]"]));
  });

  it("sequence: fails before any action leaves nothing activated", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: { nodeType: "sequence", nodes: [falseCond, action] },
    });
    assertEquals(activations, new Set());
  });

  it("sequence: condition passes then condition fails with no action — only passing condition activates", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: { nodeType: "sequence", nodes: [trueCond, falseCond] },
    });
    // trueCond evaluated true so it marks itself, but no action was gathered so sequence root does not activate
    assertEquals(activations, new Set([".nodes[0]"]));
  });

  it("sequence: action then failing condition — partial activation includes root", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: { nodeType: "sequence", nodes: [action, falseCond] },
    });
    // action activated, then falseCond blocked — sequence had an action so root also activates
    assertEquals(activations, new Set(["", ".nodes[0]"]));
  });

  it("selector of sequences: first sequence fails silently, second succeeds", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: {
        nodeType: "selector",
        nodes: [
          { nodeType: "sequence", nodes: [falseCond, action] },
          { nodeType: "sequence", nodes: [trueCond, action] },
        ],
      },
    });
    // first sequence never activates; second sequence fully activates; selector root activates
    assertEquals(
      activations,
      new Set(["", ".nodes[1]", ".nodes[1].nodes[0]", ".nodes[1].nodes[1]"]),
    );
  });

  it("selector of sequences: trueCond in dead first sequence still marks itself, second sequence activates", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: {
        nodeType: "selector",
        nodes: [
          { nodeType: "sequence", nodes: [trueCond, falseCond] },
          { nodeType: "sequence", nodes: [trueCond, action] },
        ],
      },
    });
    // first sequence: trueCond marks .nodes[0].nodes[0], falseCond kills it before any action so .nodes[0] never activates
    // second sequence: both children activate, sequence root activates, then selector root activates
    assertEquals(
      activations,
      new Set(["", ".nodes[0].nodes[0]", ".nodes[1]", ".nodes[1].nodes[0]", ".nodes[1].nodes[1]"]),
    );
  });

  it("sequence containing selector: selector short-circuits then sequence completes", () => {
    const activations = new Set<string>();
    evaluateTreeNode({
      ...params,
      activations,
      node: {
        nodeType: "sequence",
        nodes: [
          { nodeType: "selector", nodes: [falseCond, trueCond] },
          action,
        ],
      },
    });
    // selector: falseCond skipped, trueCond at .nodes[0].nodes[1] activates, selector root .nodes[0] activates
    // action at .nodes[1] activates; sequence root activates
    assertEquals(
      activations,
      new Set(["", ".nodes[0]", ".nodes[0].nodes[1]", ".nodes[1]"]),
    );
  });
});

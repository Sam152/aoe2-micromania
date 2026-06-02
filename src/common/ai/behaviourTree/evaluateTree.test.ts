import { evaluateTreeNode } from "./evaluateTreeNode.ts";
import { BlackboardComputer } from "./blackboard/computeBlackboard.ts";
import { defaultState } from "../../state/gameState.ts";
import { BotState, BotUnitGroup } from "../integration/createBot.ts";
import { UnitType } from "../../units/UnitType.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";

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
};

// Resolves to the same values the old `blackboard` fixture held, so the existing assertions hold.
const blackboardComputer: BlackboardComputer = {
  groupsForUnitTypeCount: () => 10,
  unitTypeGroupIndex: () => 10,
  unitsInGroupCount: () => 10,
  unitsOfTypeGlobalCount: () => 10,
  opponentAveragePosition: () => ({ x: 0, y: 0 }),
} as unknown as BlackboardComputer;

const params = { state, botState, group, blackboardComputer };

describe("tree evaluation", () => {
  it("runs a selector until it finds true", () => {
    assertEquals(
      evaluateTreeNode({
        actionNodes: [],
        ...params,
        node: {
          nodeType: "selector",
          nodes: [
            {
              nodeType: "condition",
              type: "numberGreaterThan",
              invert: false,
              params: {
                left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
                right: {
                  nodeType: "dataValue",
                  dataType: "number",
                  type: "BLACKBOARD",
                  blackboardKey: "unitsInGroupCount",
                  params: {},
                },
              },
            },
            {
              // 10 > 15 = false (was: 15 LT 10)
              nodeType: "condition",
              type: "numberGreaterThan",
              invert: false,
              params: {
                left: {
                  nodeType: "dataValue",
                  dataType: "number",
                  type: "BLACKBOARD",
                  blackboardKey: "unitsInGroupCount",
                  params: {},
                },
                right: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 15 },
              },
            },
            {
              // 10 > 15 = false (was: 15 LT 10)
              nodeType: "condition",
              type: "numberGreaterThan",
              invert: false,
              params: {
                left: {
                  nodeType: "dataValue",
                  dataType: "number",
                  type: "BLACKBOARD",
                  blackboardKey: "unitsInGroupCount",
                  params: {},
                },
                right: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 15 },
              },
            },
            {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 } },
            },
          ],
        },
      }),
      {
        result: true,
        actionNodes: [{
          actionNode: {
            nodeType: "action",
            type: "IDLE",
            params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 } },
          },
          resolvedParams: {
            forTicksAmount: 1,
          },
        }],
      },
    );
  });

  it("selects the correct branch from some sequences", () => {
    assertEquals(
      evaluateTreeNode({
        actionNodes: [],
        ...params,
        node: {
          nodeType: "selector",
          nodes: [
            {
              nodeType: "sequence",
              nodes: [
                {
                  nodeType: "condition",
                  type: "numberGreaterThan",
                  invert: false,
                  params: {
                    left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 5 },
                    right: {
                      nodeType: "dataValue",
                      dataType: "number",
                      type: "BLACKBOARD",
                      blackboardKey: "unitsInGroupCount",
                      params: {},
                    },
                  },
                },
                {
                  nodeType: "action",
                  type: "IDLE",
                  params: {
                    forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
                  },
                },
              ],
            },
            {
              nodeType: "sequence",
              nodes: [
                {
                  nodeType: "condition",
                  type: "numberGreaterThan",
                  invert: false,
                  params: {
                    left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 15 },
                    right: {
                      nodeType: "dataValue",
                      dataType: "number",
                      type: "BLACKBOARD",
                      blackboardKey: "unitsInGroupCount",
                      params: {},
                    },
                  },
                },
                {
                  nodeType: "action",
                  type: "IDLE",
                  params: {
                    forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 },
                  },
                },
              ],
            },
            {
              nodeType: "sequence",
              nodes: [
                {
                  nodeType: "condition",
                  type: "numberGreaterThan",
                  invert: false,
                  params: {
                    left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 20 },
                    right: {
                      nodeType: "dataValue",
                      dataType: "number",
                      type: "BLACKBOARD",
                      blackboardKey: "unitsInGroupCount",
                      params: {},
                    },
                  },
                },
                {
                  nodeType: "action",
                  type: "IDLE",
                  params: {
                    forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 3 },
                  },
                },
              ],
            },
          ],
        },
      }),
      {
        result: true,
        actionNodes: [{
          actionNode: {
            nodeType: "action",
            type: "IDLE",
            params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 } },
          },
          resolvedParams: { forTicksAmount: 2 },
        }],
      },
    );
  });

  it("can gather multiple actions from a sequence", () => {
    assertEquals(
      evaluateTreeNode({
        actionNodes: [],
        ...params,
        node: {
          nodeType: "sequence",
          nodes: [
            {
              nodeType: "sequence",
              nodes: [
                {
                  nodeType: "condition",
                  type: "numberGreaterThan",
                  invert: false,
                  params: {
                    left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 15 },
                    right: {
                      nodeType: "dataValue",
                      dataType: "number",
                      type: "BLACKBOARD",
                      blackboardKey: "unitsInGroupCount",
                      params: {},
                    },
                  },
                },
                {
                  nodeType: "action",
                  type: "IDLE",
                  params: {
                    forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
                  },
                },
              ],
            },
            {
              nodeType: "sequence",
              nodes: [
                {
                  nodeType: "condition",
                  type: "numberGreaterThan",
                  invert: false,
                  params: {
                    left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 15 },
                    right: {
                      nodeType: "dataValue",
                      dataType: "number",
                      type: "BLACKBOARD",
                      blackboardKey: "unitsInGroupCount",
                      params: {},
                    },
                  },
                },
                {
                  nodeType: "action",
                  type: "IDLE",
                  params: {
                    forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 },
                  },
                },
              ],
            },
            {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 3 } },
            },
          ],
        },
      }),
      {
        result: true,
        actionNodes: [
          {
            actionNode: {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 } },
            },
            resolvedParams: { forTicksAmount: 1 },
          },
          {
            actionNode: {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 } },
            },
            resolvedParams: { forTicksAmount: 2 },
          },
          {
            actionNode: {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 3 } },
            },
            resolvedParams: { forTicksAmount: 3 },
          },
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
        ...params,
        node: {
          nodeType: "sequence",
          nodes: [
            {
              nodeType: "condition",
              type: "numberGreaterThan",
              invert: false,
              params: {
                left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 15 },
                right: {
                  nodeType: "dataValue",
                  dataType: "number",
                  type: "BLACKBOARD",
                  blackboardKey: "unitsInGroupCount",
                  params: {},
                },
              },
            },
            {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 } },
            },
            {
              nodeType: "condition",
              type: "numberGreaterThan",
              invert: false,
              params: {
                left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 5 },
                right: {
                  nodeType: "dataValue",
                  dataType: "number",
                  type: "BLACKBOARD",
                  blackboardKey: "unitsInGroupCount",
                  params: {},
                },
              },
            },
            {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 } },
            },
          ],
        },
      }),
      {
        result: true,
        actionNodes: [
          {
            actionNode: {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 } },
            },
            resolvedParams: { forTicksAmount: 1 },
          },
        ],
      },
    );
  });

  it("can gather up actions from a deeply nested structure", () => {
    assertEquals(
      evaluateTreeNode({
        actionNodes: [],
        ...params,
        node: {
          nodeType: "sequence",
          nodes: [
            {
              nodeType: "sequence",
              nodes: [
                {
                  nodeType: "sequence",
                  nodes: [
                    {
                      nodeType: "action",
                      type: "IDLE",
                      params: {
                        forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 },
                      },
                    },
                  ],
                },
                {
                  nodeType: "action",
                  type: "IDLE",
                  params: {
                    forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 },
                  },
                },
                {
                  nodeType: "selector",
                  nodes: [
                    {
                      nodeType: "condition",
                      type: "numberGreaterThan",
                      invert: false,
                      params: {
                        left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 5 },
                        right: {
                          nodeType: "dataValue",
                          dataType: "number",
                          type: "BLACKBOARD",
                          blackboardKey: "unitsInGroupCount",
                          params: {},
                        },
                      },
                    },
                    {
                      nodeType: "selector",
                      nodes: [
                        {
                          nodeType: "condition",
                          type: "numberGreaterThan",
                          invert: false,
                          params: {
                            left: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 5 },
                            right: {
                              nodeType: "dataValue",
                              dataType: "number",
                              type: "BLACKBOARD",
                              blackboardKey: "unitsInGroupCount",
                              params: {},
                            },
                          },
                        },
                        {
                          nodeType: "sequence",
                          nodes: [
                            {
                              nodeType: "action",
                              type: "IDLE",
                              params: {
                                forTicksAmount: {
                                  nodeType: "dataValue",
                                  dataType: "number",
                                  type: "PRIMITIVE",
                                  value: 3,
                                },
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 4 } },
            },
          ],
        },
      }),
      {
        result: true,
        actionNodes: [
          {
            actionNode: {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 1 } },
            },
            resolvedParams: { forTicksAmount: 1 },
          },
          {
            actionNode: {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 2 } },
            },
            resolvedParams: { forTicksAmount: 2 },
          },
          {
            actionNode: {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 3 } },
            },
            resolvedParams: { forTicksAmount: 3 },
          },
          {
            actionNode: {
              nodeType: "action",
              type: "IDLE",
              params: { forTicksAmount: { nodeType: "dataValue", dataType: "number", type: "PRIMITIVE", value: 4 } },
            },
            resolvedParams: { forTicksAmount: 4 },
          },
        ],
      },
    );
  });
});

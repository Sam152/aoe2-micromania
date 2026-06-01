import { resolveDataValueToPrimitive, resolveParamDataValues } from "./resolveDataValue.ts";
import { DataValue } from "./DataValue.ts";
import { BlackboardComputer } from "../blackboard/computeBlackboard.ts";
import { GameState } from "../../../../types.ts";
import { BotState, BotUnitGroup } from "../../integration/createBot.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";

// The resolver only passes these through to the computer, so empty stubs are sufficient here.
const state = {} as GameState;
const botState = {} as BotState;
const group = {} as BotUnitGroup;

// A stub computer: number keys return fixed values; the vector key echoes its resolved param so
// we can assert that nested params were resolved to primitives before the computer was invoked.
const blackboardComputer: BlackboardComputer = {
  groupsForUnitTypeCount: () => 1,
  unitTypeGroupIndex: () => 2,
  unitsInGroupCount: () => 7,
  unitsOfTypeGlobalCount: () => 4,
  opponentAveragePosition: ({ params }) => params.vectorOffset,
};

const resolve = (dataValue: DataValue) =>
  resolveDataValueToPrimitive({ dataValue, state, botState, group, blackboardComputer });

const resolveParams = <const TParams extends Record<string, DataValue>>(params: TParams) =>
  resolveParamDataValues(params, { state, botState, group, blackboardComputer });

describe("resolveDataValueToPrimitive", () => {
  it("returns the value of a primitive data value", () => {
    assertEquals(
      resolve({ nodeType: "dataValue", type: "PRIMITIVE", dataType: "number", value: 42 }),
      42,
    );
  });

  it("resolves a blackboard data value with no params via the computer", () => {
    assertEquals(
      resolve({
        nodeType: "dataValue",
        type: "BLACKBOARD",
        dataType: "number",
        blackboardKey: "unitsInGroupCount",
        params: {},
      }),
      7,
    );
  });

  it("resolves nested param data values to primitives before invoking the computer", () => {
    assertEquals(
      resolve({
        nodeType: "dataValue",
        type: "BLACKBOARD",
        dataType: "vector",
        blackboardKey: "opponentAveragePosition",
        params: {
          vectorOffset: { nodeType: "dataValue", type: "PRIMITIVE", dataType: "vector", value: { x: 3, y: 4 } },
        },
      }),
      { x: 3, y: 4 },
    );
  });

  it("recursively resolves a blackboard param whose value is itself a blackboard data value", () => {
    assertEquals(
      resolve({
        nodeType: "dataValue",
        type: "BLACKBOARD",
        dataType: "vector",
        blackboardKey: "opponentAveragePosition",
        params: {
          vectorOffset: {
            nodeType: "dataValue",
            type: "BLACKBOARD",
            dataType: "vector",
            blackboardKey: "opponentAveragePosition",
            params: {
              vectorOffset: { nodeType: "dataValue", type: "PRIMITIVE", dataType: "vector", value: { x: 5, y: 6 } },
            },
          },
        },
      }),
      { x: 5, y: 6 },
    );
  });
});

describe("resolveParamDataValues", () => {
  it("returns an empty object for empty params", () => {
    assertEquals(resolveParams({}), {});
  });

  it("resolves each param to its primitive, keyed by param name", () => {
    assertEquals(
      resolveParams({
        a: { nodeType: "dataValue", type: "PRIMITIVE", dataType: "number", value: 1 },
        b: { nodeType: "dataValue", type: "PRIMITIVE", dataType: "vector", value: { x: 2, y: 3 } },
        c: {
          nodeType: "dataValue",
          type: "BLACKBOARD",
          dataType: "number",
          blackboardKey: "unitsInGroupCount",
          params: {},
        },
      }),
      { a: 1, b: { x: 2, y: 3 }, c: 7 },
    );
  });
});

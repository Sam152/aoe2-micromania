import { resolveDataValueToPrimitive, resolveParamDataValues } from "./resolveDataValue.ts";
import { DataValue } from "./DataValue.ts";
import { GameState } from "../../../../types.ts";
import { BotState, BotUnitGroup } from "../../integration/createBot.ts";
import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { BlackboardComputer } from "../blackboard/types/BlackboardComputer.ts";

// The resolver only passes these through to the computer, so empty stubs are sufficient here.
const state = {} as GameState;
const botState = {} as BotState;
const group = {} as BotUnitGroup;

// A stub computer: number keys return fixed values; globalUnitsOfTypeCount returns a count
// based on the resolved unitType param so we can assert params are resolved before the computer
// is invoked; opponentClosestUnitByType always returns undefined to exercise that code path.
const blackboardComputer: Pick<
  BlackboardComputer,
  | "groupMetaUnitTypeGroupCount"
  | "groupMetaUnitTypeIndex"
  | "groupUnitCount"
  | "globalUnitsOfTypeCount"
  | "opponentClosestUnitByType"
> = {
  groupMetaUnitTypeGroupCount: () => 1,
  groupMetaUnitTypeIndex: () => 2,
  groupUnitCount: () => 7,
  globalUnitsOfTypeCount: ({ params }) => params.unitType === "ARCHER" ? 5 : 3,
  opponentClosestUnitByType: () => undefined,
};

const resolve = (dataValue: DataValue) =>
  resolveDataValueToPrimitive({
    dataValue,
    state,
    botState,
    group,
    blackboardComputer: blackboardComputer as unknown as BlackboardComputer,
  });

const resolveParams = <const TParams extends Record<string, DataValue>>(params: TParams) =>
  resolveParamDataValues(params, {
    state,
    botState,
    group,
    blackboardComputer: blackboardComputer as unknown as BlackboardComputer,
  });

describe("resolveDataValueToPrimitive", () => {
  it("returns the value of a primitive data value", () => {
    assertEquals(
      resolve({ nodeType: "dataValue", type: "LITERAL", dataType: "number", value: 42 }),
      42,
    );
  });

  it("resolves a blackboard data value with no params via the computer", () => {
    assertEquals(
      resolve({
        nodeType: "dataValue",
        type: "BLACKBOARD",
        dataType: "number",
        blackboardKey: "groupUnitCount",
        params: {},
      }),
      7,
    );
  });

  it("resolves param data values to primitives before invoking the computer", () => {
    assertEquals(
      resolve({
        nodeType: "dataValue",
        type: "BLACKBOARD",
        dataType: "count",
        blackboardKey: "globalUnitsOfTypeCount",
        params: {
          unitType: { nodeType: "dataValue", type: "LITERAL", dataType: "unitType", value: "ARCHER" },
        },
      }),
      5,
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
        a: { nodeType: "dataValue", type: "LITERAL", dataType: "number", value: 1 },
        b: { nodeType: "dataValue", type: "LITERAL", dataType: "vector", value: { x: 2, y: 3 } },
        c: {
          nodeType: "dataValue",
          type: "BLACKBOARD",
          dataType: "number",
          blackboardKey: "groupUnitCount",
          params: {},
        },
      }),
      { a: 1, b: { x: 2, y: 3 }, c: 7 },
    );
  });

  it("recursively resolves a param that is itself a blackboard value with params", () => {
    assertEquals(
      resolveParams({
        archerCount: {
          nodeType: "dataValue",
          type: "BLACKBOARD",
          dataType: "count",
          blackboardKey: "globalUnitsOfTypeCount",
          params: {
            unitType: { nodeType: "dataValue", type: "LITERAL", dataType: "unitType", value: "ARCHER" },
          },
        },
      }),
      { archerCount: 5 },
    );
  });

  it("resolves the whole object as undefined, if any params are undefined", () => {
    assertEquals(
      resolveParams({
        a: { nodeType: "dataValue", type: "LITERAL", dataType: "number", value: 1 },
        // This param will resolve undefined.
        c: {
          nodeType: "dataValue",
          type: "BLACKBOARD",
          dataType: "unitId",
          blackboardKey: "opponentClosestUnitByType",
          params: {
            unitType: { nodeType: "dataValue", type: "LITERAL", dataType: "unitType", value: "ARCHER" },
          },
        },
      }),
      undefined,
    );
  });
});

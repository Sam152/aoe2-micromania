import { DataValue } from "./DataValue.ts";

Deno.test("type safety", () => {
  // All members of the unitType union are valid literal values, not just the default ("ARCHER")
  const _archer: DataValue = {
    nodeType: "dataValue",
    dataType: "unitType",
    type: "LITERAL",
    value: "ARCHER",
  };
  const _mango: DataValue = {
    nodeType: "dataValue",
    dataType: "unitType",
    type: "LITERAL",
    value: "MANGO",
  };
  const _monk: DataValue = {
    nodeType: "dataValue",
    dataType: "unitType",
    type: "LITERAL",
    value: "MONK",
  };
  const _invalidUnitType: DataValue = {
    nodeType: "dataValue",
    dataType: "unitType",
    type: "LITERAL",
    // @ts-expect-error - value not in the unitType union
    value: "KNIGHT",
  };
  const _invalidNumber: DataValue = {
    nodeType: "dataValue",
    dataType: "groupIndex",
    type: "LITERAL",
    // @ts-expect-error - string where number is required
    value: "not-a-number",
  };
  // Non-default unitType values are valid in blackboard params too
  const _blackboardParam: DataValue = {
    nodeType: "dataValue",
    dataType: "unitCount",
    type: "BLACKBOARD",
    blackboardKey: "globalOwnedUnitsOfTypeCount",
    params: {
      unitType: {
        nodeType: "dataValue",
        dataType: "unitType",
        type: "LITERAL",
        value: "MANGO",
      },
    },
  };
  const _invalidBlackboardParam: DataValue = {
    nodeType: "dataValue",
    dataType: "unitCount",
    type: "BLACKBOARD",
    blackboardKey: "globalOwnedUnitsOfTypeCount",
    params: {
      unitType: {
        nodeType: "dataValue",
        dataType: "unitType",
        type: "LITERAL",
        // @ts-expect-error - value not in the unitType union
        value: "KNIGHT",
      },
    },
  };
});

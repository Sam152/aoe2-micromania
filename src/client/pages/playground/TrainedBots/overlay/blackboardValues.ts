import {
  blackboardDefinition,
  BlackboardKey,
} from "../../../../../common/ai/behaviourTree/blackboard/blackboardDefinition.ts";
import { createCachedBlackboardComputer } from "../../../../../common/ai/behaviourTree/blackboard/utils/createCachedBlackboardComputer.ts";
import { GameState } from "../../../../../types.ts";
import { BotInstance } from "../../../../../common/ai/integration/createBot.ts";
import { ENUM_VALUES } from "./overlayConfig.ts";

// Generic helpers over the blackboard data model — no per-value specifics live
// here (those are in overlayConfig.ts).

export type BlackboardComputer = ReturnType<typeof createCachedBlackboardComputer>;
export type BotState = BotInstance["botState"];
export type BotUnitGroup = BotState["unitGroups"][number];

// How a resolved value is drawn, from its declared data type. Unknown data types
// fall back to a text readout.
export function category(dataType: string): "vector" | "unitId" | "scalar" {
  if (dataType === "vector") { return "vector"; }
  if (dataType === "unitId") { return "unitId"; }
  return "scalar";
}

// Group-scoped values (key prefixed "group") are anchored to their group;
// everything else is rendered once. Only affects scalar readouts.
export function isGroupKey(key: BlackboardKey): boolean {
  return key.startsWith("group");
}

// Each definition's params carry a `default` we can feed straight in. Params the
// overlay can't represent with their default are replaced via overlayConfig.
export function defaultParams(key: BlackboardKey): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [name, param] of Object.entries(blackboardDefinition[key].params)) {
    out[name] = (param as { default: unknown }).default;
  }
  return out;
}

// "By type" values take an enum param (unitType / projectileType) — produce one
// readout per value, expanding the cartesian product if there are several.
export function paramVariants(key: BlackboardKey): { params: Record<string, unknown>; suffix: string }[] {
  const enumParams = Object.entries(blackboardDefinition[key].params)
    .map(([name, param]) => ({ name, values: ENUM_VALUES[(param as { dataType: string }).dataType] }))
    .filter((param): param is { name: string; values: readonly string[] } => param.values !== undefined);

  let variants = [{ params: defaultParams(key), suffix: "" }];
  for (const { name, values } of enumParams) {
    variants = variants.flatMap((variant) =>
      values.map((value) => ({
        params: { ...variant.params, [name]: value },
        suffix: `${variant.suffix}[${value}]`,
      }))
    );
  }
  return variants;
}

// Resolve a single blackboard value for a group. Returns undefined on any
// failure (the resolvers return undefined / throw when their inputs are absent).
export function resolveValue(
  computer: BlackboardComputer,
  key: BlackboardKey,
  state: GameState,
  botState: BotState,
  group: BotUnitGroup,
  params: Record<string, unknown>,
): unknown {
  try {
    return (computer[key] as (p: unknown) => unknown)({ state, botState, group, params });
  } catch {
    return undefined;
  }
}

export function formatScalar(value: unknown): string {
  if (typeof value === "boolean") { return value ? "true" : "false"; }
  if (typeof value === "number") { return Number.isInteger(value) ? String(value) : value.toFixed(1); }
  return String(value);
}

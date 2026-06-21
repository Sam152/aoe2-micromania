import {
  blackboardDefinition,
  BlackboardKey,
} from "../../../../../common/ai/behaviourTree/blackboard/blackboardDefinition.ts";
import { UnitInstance } from "../../../../../types.ts";

/*
 * Declarative overlay config
 * ==========================
 * The overlay renders every blackboard value generically from its declared
 * `dataType`: vectors become arrows, unit ids become boxes, everything else
 * becomes a text readout. That generic path needs two things it can't infer
 * from the blackboard definition alone, so they live here as data:
 *
 *   1. params — a value's params carry declared defaults, but some of those
 *      defaults are placeholders the overlay can't visualise: a `vector` default
 *      of {0,0}, or a `unitId` default of -1 (no unit). A real bot would author
 *      these. A ParamSource says how to fill such a param — by resolving another
 *      blackboard value (e.g. the opponents' medoid archer), or by a smoothly
 *      swinging facing input. If a source can't resolve, the value is skipped
 *      for that frame.
 *
 *   2. vectorOrigin — an arrow is drawn from an origin to the resolved point.
 *      Most vectors are absolute world positions, so the origin defaults to the
 *      group's average position. But some vectors describe a *specific unit*
 *      (e.g. opponentUnitMovementTowardsVector is that unit's predicted future
 *      position), so the arrow should start at that unit instead.
 *
 * `validateOverlayConfig()` runs on import and throws if a value needs config it
 * doesn't have, or if an entry references params/types that don't fit — so new
 * blackboard values fail loudly here rather than silently rendering nonsense.
 * Anything not covered falls back to the generic defaults.
 */

// Enumerable data types and all of their values — mirrors the data type catalog.
// Params of these types get one readout per value (see paramVariants).
export const ENUM_VALUES: Record<string, readonly string[]> = {
  unitType: ["ARCHER", "MANGO", "MONK"],
  projectileType: ["MANGO_ROCK", "ARROW"],
};

// Facing inputs that swing smoothly over time: angle eases between -30 and 30
// degrees, magnitude between 100 and 200.
function currentFacing(): { angle: number; magnitude: number } {
  const t = Date.now() / 1000;
  return {
    angle: Math.sin(t * 1.5) * 30,
    magnitude: 150 + Math.sin(t * 1.0) * 50,
  };
}

// How to fill a param the overlay can't take from its declared default.
export type ParamSource =
  | { fromBlackboard: BlackboardKey; params?: Record<string, unknown> } // resolve another value for this group
  | { swing: "angle" | "magnitude" }; // a time-varying facing input

// Where a vector value's arrow starts.
export type VectorOrigin =
  | { kind: "groupCentroid" } // the group's average position (default)
  | { kind: "unitParam"; param: string }; // the position of the unit named by this unitId param

export type OverlayValueConfig = {
  params?: Record<string, ParamSource>;
  vectorOrigin?: VectorOrigin;
};

export const overlayConfig: Partial<Record<BlackboardKey, OverlayValueConfig>> = {
  // Facing arrows: point at the opponents, with the angle/magnitude swinging.
  groupUnitVectorFacingDirection: {
    params: {
      direction: { fromBlackboard: "opponentAveragePosition" },
      angle: { swing: "angle" },
      magnitude: { swing: "magnitude" },
    },
  },
  groupVectorFacingDirection: {
    params: {
      direction: { fromBlackboard: "opponentAveragePosition" },
      angle: { swing: "angle" },
    },
  },
  // Needs a concrete unit; use the opponents' medoid archer as the reference.
  unitPosition: {
    params: {
      unitWithPosition: { fromBlackboard: "opponentMedoidUnitByType", params: { unitType: "ARCHER" } },
    },
  },
  // Describes one unit's movement, so draw the arrow from that unit's position.
  opponentUnitMovementTowardsVector: {
    params: {
      movingUnit: { fromBlackboard: "opponentMedoidUnitByType", params: { unitType: "ARCHER" } },
    },
    vectorOrigin: { kind: "unitParam", param: "movingUnit" },
  },
};

export type ResolveValue = (key: BlackboardKey, params: Record<string, unknown>) => unknown;

// Merge configured param sources over the declared defaults. Returns null if any
// source can't resolve, signalling the value should be skipped this frame.
export function resolveConfiguredParams(
  config: OverlayValueConfig | undefined,
  defaults: Record<string, unknown>,
  resolve: ResolveValue,
): Record<string, unknown> | null {
  if (!config?.params) { return defaults; }
  const params = { ...defaults };
  for (const [name, source] of Object.entries(config.params)) {
    if ("swing" in source) {
      params[name] = currentFacing()[source.swing];
    } else {
      const value = resolve(source.fromBlackboard, source.params ?? {});
      if (value === undefined || value === null) { return null; }
      params[name] = value;
    }
  }
  return params;
}

// World-space origin for a vector value's arrow, or null to skip (the named unit
// is gone). Defaults to the group's average position.
export function resolveVectorOrigin(
  config: OverlayValueConfig | undefined,
  params: Record<string, unknown>,
  groupCentroid: { x: number; y: number },
  unitsById: Record<number, UnitInstance>,
): { x: number; y: number } | null {
  const origin = config?.vectorOrigin ?? { kind: "groupCentroid" };
  if (origin.kind === "groupCentroid") { return groupCentroid; }
  const unit = unitsById[params[origin.param] as number];
  return unit ? unit.position : null;
}

// Fail loudly at import time if the config and the blackboard definition
// disagree, so misconfigured or newly-added values surface immediately.
export function validateOverlayConfig(): void {
  for (const key of Object.keys(blackboardDefinition) as BlackboardKey[]) {
    const def = blackboardDefinition[key];
    const defParams = def.params as Record<string, { dataType: string }>;
    const config = overlayConfig[key];

    // Params with no default the overlay can use must be supplied by config.
    for (const [name, param] of Object.entries(defParams)) {
      if ((param.dataType === "vector" || param.dataType === "unitId") && !config?.params?.[name]) {
        throw new Error(
          `Blackboard overlay: "${key}.${name}" is a ${param.dataType} param the overlay can't fill from its default — add a params source in overlayConfig.`,
        );
      }
    }

    if (!config) { continue; }
    for (const name of Object.keys(config.params ?? {})) {
      if (!(name in defParams)) {
        throw new Error(`Blackboard overlay: overlayConfig["${key}"] configures unknown param "${name}".`);
      }
    }
    if (config.vectorOrigin) {
      if (def.dataType !== "vector") {
        throw new Error(`Blackboard overlay: overlayConfig["${key}"] sets vectorOrigin but "${key}" is not a vector.`);
      }
      if (config.vectorOrigin.kind === "unitParam" && defParams[config.vectorOrigin.param]?.dataType !== "unitId") {
        throw new Error(
          `Blackboard overlay: overlayConfig["${key}"].vectorOrigin references "${config.vectorOrigin.param}", which is not a unitId param.`,
        );
      }
    }
  }
}

validateOverlayConfig();

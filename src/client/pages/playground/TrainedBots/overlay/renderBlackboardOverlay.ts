import type { ClientState, GameState } from "../../../../../types.ts";
import type { BotInstance } from "../../../../../common/ai/integration/createBot.ts";
import type { ComputedTickState } from "../../../../../common/state/computed/createComputedTickState.ts";
import {
  blackboardDefinition,
  BlackboardKey,
} from "../../../../../common/ai/behaviourTree/blackboard/blackboardDefinition.ts";
import { createCachedBlackboardComputer } from "../../../../../common/ai/behaviourTree/blackboard/utils/createCachedBlackboardComputer.ts";
import { unitMetadataFactory } from "../../../../../common/units/unitMetadataFactory.ts";
import { UnitType } from "../../../../../common/units/UnitType.ts";
import { category, formatScalar, isGroupKey, paramVariants, resolveValue } from "./blackboardValues.ts";
import { overlayConfig, resolveConfiguredParams, resolveVectorOrigin } from "./overlayConfig.ts";
import { drawArrow, drawGroupLabels, drawPanel, drawUnitBox, PanelLine, PLAYER_COLORS } from "./drawPrimitives.ts";

// Draws every (visible) blackboard value for the red player on top of the game.
// Render style and placement come from the value's data type and key; the
// specifics that can't be inferred from the definition live in overlayConfig.
export function renderBlackboardOverlay({
  ctx,
  gameState,
  clientState,
  botInstances,
  computed,
  visibleKeys,
}: {
  ctx: CanvasRenderingContext2D;
  gameState: GameState;
  clientState: ClientState;
  botInstances: BotInstance[];
  computed: ComputedTickState;
  // Keys to render. When empty, every value is shown.
  visibleKeys: Set<string>;
}): void {
  const isVisible = (key: BlackboardKey) => visibleKeys.size === 0 || visibleKeys.has(key);
  const camera = clientState.camera;
  // FRAME_RENDERING_ENDED fires after the renderer resets to the identity
  // transform, so we re-apply the camera offset ourselves. World units map 1:1
  // to canvas-internal pixels (the camera is a pure translate).
  const sx = (x: number) => x - camera.x;
  const sy = (y: number) => y - camera.y;
  const scale = ctx.canvas.width / globalThis.innerWidth || 1;
  const unitsById = computed.unitsById();

  ctx.save();
  ctx.lineWidth = Math.max(1, scale);
  ctx.textBaseline = "alphabetic";

  const panel: PanelLine[] = [];
  const groupLabels: { cx: number; cy: number; header: string; lines: string[] }[] = [];
  const keys = Object.keys(blackboardDefinition) as BlackboardKey[];

  for (const { botState } of botInstances) {
    // Only the red player (away / player 2) is overlaid.
    if (botState.playingAs !== 2) { continue; }
    const color = PLAYER_COLORS[botState.playingAs] ?? "#ffffff";

    const groups = botState.unitGroups
      .map((group, groupIndex) => {
        const groupUnits = group.includedUnits.map((id) => unitsById[id]).filter(Boolean);
        return { group, groupIndex, groupUnits };
      })
      .filter(({ groupUnits }) => groupUnits.length > 0);

    if (groups.length === 0) { continue; }

    // Global / opponent scalars don't depend on the group, so resolve them once
    // (using the first group as context) into the bottom-left panel.
    panel.push({ text: `P${botState.playingAs} global / opponent`, header: true });
    const sharedComputer = createCachedBlackboardComputer({ computed });
    const firstGroup = groups[0].group;
    for (const key of keys) {
      if (!isVisible(key) || isGroupKey(key) || category(blackboardDefinition[key].dataType) !== "scalar") {
        continue;
      }
      const config = overlayConfig[key];
      for (const variant of paramVariants(key)) {
        const params = resolveConfiguredParams(
          config,
          variant.params,
          (k, p) => resolveValue(sharedComputer, k, gameState, botState, firstGroup, p),
        );
        if (params === null) { continue; }
        const value = resolveValue(sharedComputer, key, gameState, botState, firstGroup, params);
        if (value === undefined || value === null) { continue; }
        panel.push({ text: `${key}${variant.suffix}: ${formatScalar(value)}` });
      }
    }

    // Per group: arrows for vectors, boxes for unit ids, and a black label of
    // the group-scoped scalars anchored to the group's average position.
    for (const { group, groupIndex, groupUnits } of groups) {
      const centroid = {
        x: groupUnits.reduce((sum, u) => sum + u.position.x, 0) / groupUnits.length,
        y: groupUnits.reduce((sum, u) => sum + u.position.y, 0) / groupUnits.length,
      };

      // A fresh computer per group: its cache keys ignore the group, so reusing
      // one across groups would return the first group's cached results.
      const computer = createCachedBlackboardComputer({ computed });
      const groupLabelLines: string[] = [];

      for (const key of keys) {
        if (!isVisible(key)) { continue; }
        const cat = category(blackboardDefinition[key].dataType);
        const config = overlayConfig[key];

        for (const variant of paramVariants(key)) {
          const params = resolveConfiguredParams(
            config,
            variant.params,
            (k, p) => resolveValue(computer, k, gameState, botState, group, p),
          );
          if (params === null) { continue; }

          const value = resolveValue(computer, key, gameState, botState, group, params);
          if (value === undefined || value === null) { continue; }

          const label = `${key}${variant.suffix}`;
          if (cat === "vector") {
            const origin = resolveVectorOrigin(config, params, centroid, unitsById);
            if (!origin) { continue; }
            const v = value as { x: number; y: number };
            drawArrow(ctx, sx(origin.x), sy(origin.y), sx(v.x), sy(v.y), color, scale, label);
          } else if (cat === "unitId") {
            if (value === -1) { continue; }
            const unit = unitsById[value as number];
            if (!unit) { continue; }
            const radius = unitMetadataFactory.getUnit(unit.unitType).selectionRadius;
            drawUnitBox(ctx, sx(unit.position.x), sy(unit.position.y), radius, scale, label);
          } else if (isGroupKey(key)) {
            groupLabelLines.push(`${label}: ${formatScalar(value)}`);
          }
        }
      }

      if (groupLabelLines.length > 0) {
        groupLabels.push({
          cx: sx(centroid.x),
          cy: sy(centroid.y),
          header: `${UnitType[group.unitType]} #${groupIndex}`,
          lines: groupLabelLines,
        });
      }
    }
  }

  drawGroupLabels(ctx, groupLabels, scale);
  drawPanel(ctx, panel, scale);
  ctx.restore();
}

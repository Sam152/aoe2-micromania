import { Quadtree } from "d3-quadtree";
import { GameState, UnitInstance } from "../../../types.ts";
import { createUnitQuadtree } from "../../util/buildQuadTree.ts";
import { Grid } from "../../terrain/Grid.ts";
import { memo } from "../../util/memo.ts";

/**
 * After every action, the state of the game changes. There are certain computation
 * heavy things that can be computed as a function of the game state. Things like
 * quad trees of unit positions.
 *
 * It may be that listeners require this computed state (like the AI for example needing
 * the closest enemy unit), but it may also required by the subsequent action, like a
 * tick auto firing on units.
 *
 * Thus the lifecycle of a tick is a little awkard in that we:
 *
 *  - Tick
 *  - computedState = ...
 *  - listeners(computedState)
 *  - Tick(computedState)
 *
 *  ...and so on.
 *
 *  Each property is memoized, allowing us to have a lot of interesting computations,
 *  which are computed a maximum of one time per changing game state.
 */
export type ComputedFrameState = {
  playerUnitQuadTrees: () => Record<number, Quadtree<UnitInstance>>;
  grid: () => Grid;
  unitIndex: () => Record<number, UnitInstance>;
};

export function createComputedFrameState(state: GameState): ComputedFrameState {
  return {
    playerUnitQuadTrees: memo(() =>
      state.units.reduce(
        (trees: Record<number, Quadtree<UnitInstance>>, unit: UnitInstance) => {
          if (!trees[unit.ownedByPlayer]) {
            trees[unit.ownedByPlayer] = createUnitQuadtree();
          }
          trees[unit.ownedByPlayer].add(unit);
          return trees;
        },
        {} as Record<number, Quadtree<UnitInstance>>,
      )
    ),
    grid: memo(() => new Grid(state.mapSize)),
    unitIndex: memo(() => createUnitIndex(state.units)),
  };
}

function createUnitIndex(units: UnitInstance[]): Record<number, UnitInstance> {
  return units.reduce(
    (acc, unit) => {
      acc[unit.id] = unit;
      return acc;
    },
    {} as Record<number, UnitInstance>,
  );
}

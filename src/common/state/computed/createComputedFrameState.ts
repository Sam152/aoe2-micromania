import { Quadtree } from "d3-quadtree";
import { GameState, UnitInstance } from "../../../types.ts";
import { createUnitQuadtree } from "../../util/buildQuadTree.ts";
import { Grid } from "../../terrain/Grid.ts";
import { memo } from "../../util/memo.ts";

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

import { Quadtree } from "d3-quadtree";
import { GameState, UnitInstance } from "../../../types";
import { createUnitQuadtree } from "../../util/buildQuadTree";
import Grid from "../../terrain/Grid";

export type ComputedFrameState = {
  quadTreeAllUnits: Quadtree<UnitInstance>;
  playerUnitQuadTrees: Record<number, Quadtree<UnitInstance>>;
  grid: Grid;
  unitIndex: Record<number, UnitInstance>;
};

export function createComputedFrameState(state: GameState): ComputedFrameState {
  return {
    quadTreeAllUnits: createUnitQuadtree().addAll(state.units),
    playerUnitQuadTrees: state.units.reduce(
      (trees: Record<number, Quadtree<UnitInstance>>, unit: UnitInstance) => {
        if (!trees[unit.ownedByPlayer]) {
          trees[unit.ownedByPlayer] = createUnitQuadtree();
        }
        trees[unit.ownedByPlayer].add(unit);

        return trees;
      },
      {} as Record<number, Quadtree<UnitInstance>>,
    ),
    grid: new Grid(state.mapSize),
    unitIndex: createUnitIndex(state.units),
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

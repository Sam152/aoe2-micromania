import { Quadtree } from "d3-quadtree";
import { GameState, UnitInstance } from "../../../types";
import { createUnitQuadtree } from "../../util/buildQuadTree";

export type ComputedFrameState = {
  quadTreeAllUnits: Quadtree<UnitInstance>;
  playerUnitQuadTrees: Record<number, Quadtree<UnitInstance>>;
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
  };
}

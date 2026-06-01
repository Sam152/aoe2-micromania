import { Grid } from "../../../terrain/Grid.ts";
import { spawnUnit } from "../initiated/spawnUnit.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { GameState, UnitInstance } from "../../../../types.ts";
import { ComputedFrameState } from "../../computed/createComputedFrameState.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { formationManager } from "../../../units/formations/FormationManager.ts";
import { FormationType } from "../../../units/formations/FormationType.ts";
import { compassDirectionCalculator } from "../../../units/compassDirectionCalculator.ts";

export function spawnStartingUnits(state: GameState, newPlayerNumber: number, computed: ComputedFrameState) {
  const location = getBestSpawnLocation(state, computed);
  const facingMiddle = location.clone().sub(computed.grid.middleOfGrid()).normalize();
  const buffered = location.clone().sub(facingMiddle.multiplyScalar(5));

  const units: UnitInstance[] = [];

  units.push(
    spawnUnit(state, {
      forPlayer: newPlayerNumber,
      unitType: UnitType.Mangonel,
      position: location,
    }),
  );
  units.push(
    spawnUnit(state, {
      forPlayer: newPlayerNumber,
      unitType: UnitType.Monk,
      position: location,
    }),
  );
  units.push(
    spawnUnit(state, {
      forPlayer: newPlayerNumber,
      unitType: UnitType.Monk,
      position: location,
    }),
  );
  for (let x = 0; x < 24; x++) {
    units.push(
      spawnUnit(state, {
        forPlayer: newPlayerNumber,
        unitType: UnitType.Archer,
        position: location,
      }),
    );
  }
  formationManager
    .get(FormationType.Line)
    .form(units, buffered)
    .map((position, idx) => {
      units[idx].position = position;
      units[idx].direction = compassDirectionCalculator.getDirection(position, computed.grid.middleOfGrid());
    });
}

export function getBestSpawnLocation(state: GameState, computed: ComputedFrameState): Vector2 {
  const distanceToNearest = (v: Vector2): number => {
    const nearest = computed.quadTreeAllUnits.find(v.x, v.y);
    return nearest ? nearest.position.distanceTo(v) : Infinity;
  };

  return getStartingSpawnCandidates(state).reduce((best, candidate) =>
    distanceToNearest(candidate) > distanceToNearest(best) ? candidate : best
  );
}

export function getStartingSpawnCandidates(
  state: GameState,
): [Vector2, Vector2, Vector2, Vector2, Vector2, Vector2, Vector2, Vector2] {
  const buffer = 4;
  const grid = new Grid(state.mapSize);
  // Clock face positions, see debug renderer.
  return [
    { x: buffer, y: buffer },
    { x: Math.ceil(state.mapSize / 2), y: buffer },
    { x: state.mapSize - buffer, y: buffer },
    { x: state.mapSize - buffer, y: Math.ceil(state.mapSize / 2) },
    { x: state.mapSize - buffer, y: state.mapSize - buffer },
    { x: Math.ceil(state.mapSize / 2), y: state.mapSize - buffer },
    { x: buffer, y: state.mapSize - buffer },
    { x: buffer, y: Math.ceil(state.mapSize / 2) },
  ].map((position) => grid.middleOfTile(position.x, position.y)) as [
    Vector2,
    Vector2,
    Vector2,
    Vector2,
    Vector2,
    Vector2,
    Vector2,
    Vector2,
  ];
}

import Grid from "../../../terrain/Grid";
import spawnUnit from "../initiated/spawnUnit";
import Unit from "../../../units/Unit";
import { GameState } from "../../../../types";
import { ComputedFrameState } from "../../computed/createComputedFrameState";
import { Vector2 } from "three/src/math/Vector2";

export function spawnStartingUnits(state: GameState, newPlayerNumber: number, computed: ComputedFrameState) {
  const grid = new Grid(state.mapSize);
  const location = getBestSpawnLocation(state, computed);

  spawnUnit(state, {
    forPlayer: newPlayerNumber,
    unitType: Unit.Mangonel,
    position: location,
  });
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      spawnUnit(state, {
        forPlayer: newPlayerNumber,
        unitType: Unit.Archer,
        position: location,
      });
    }
  }
}

export function getBestSpawnLocation(state: GameState, computed: ComputedFrameState): Vector2 {
  const candidates = getStartingSpawnCandidates(state);

  let startingLocation: Vector2;
  let largestDistance: number;
  for (const candidate of candidates) {
    const nearestUnit = computed.quadTreeAllUnits.find(candidate.x, candidate.y);
    if (!nearestUnit) {
      startingLocation = candidate;
      break;
    }
    const nearestUnitDistance = computed.quadTreeAllUnits.find(candidate.x, candidate.y).position.distanceTo(candidate);
    if (!largestDistance) {
      largestDistance = nearestUnitDistance;
      startingLocation = candidate;
      break;
    }
    if (nearestUnitDistance > largestDistance) {
      largestDistance = nearestUnitDistance;
      startingLocation = candidate;
    }
  }

  return startingLocation;
}

export function getStartingSpawnCandidates(state: GameState): Vector2[] {
  const buffer = 3;
  const grid = new Grid(state.mapSize);
  return [
    { x: buffer, y: buffer },
    { x: Math.ceil(state.mapSize / 2), y: buffer },
    { x: state.mapSize - buffer, y: buffer },
    { x: state.mapSize - buffer, y: Math.ceil(state.mapSize / 2) },
    { x: state.mapSize - buffer, y: state.mapSize - buffer },
    { x: Math.ceil(state.mapSize / 2), y: state.mapSize - buffer },
    { x: buffer, y: state.mapSize - buffer },
    { x: buffer, y: Math.ceil(state.mapSize / 2) },
  ].map((position) => grid.middleOfTile(position.x, position.y));
}

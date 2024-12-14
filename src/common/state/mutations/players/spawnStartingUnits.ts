import Grid from "../../../terrain/Grid";
import spawnUnit from "../initiated/spawnUnit";
import Unit from "../../../units/Unit";
import { GameState, UnitInstance } from "../../../../types";
import { ComputedFrameState } from "../../computed/createComputedFrameState";
import { Vector2 } from "three/src/math/Vector2";
import formationManager from "../../../units/formations/FormationManager";
import FormationType from "../../../units/formations/FormationType";
import compassDirectionCalculator from "../../../units/compassDirectionCalculator";

export function spawnStartingUnits(state: GameState, newPlayerNumber: number, computed: ComputedFrameState) {
  const location = getBestSpawnLocation(state, computed);
  const facingMiddle = location.clone().sub(computed.grid.middleOfGrid()).normalize();
  const buffered = location.clone().sub(facingMiddle.multiplyScalar(5));

  const units: UnitInstance[] = [];

  units.push(
    spawnUnit(state, {
      forPlayer: newPlayerNumber,
      unitType: Unit.Mangonel,
      position: location,
    }),
  );
  units.push(
    spawnUnit(state, {
      forPlayer: newPlayerNumber,
      unitType: Unit.Monk,
      position: location,
    }),
  );
  units.push(
    spawnUnit(state, {
      forPlayer: newPlayerNumber,
      unitType: Unit.Monk,
      position: location,
    }),
  );
  for (let x = 0; x < 24; x++) {
    units.push(
      spawnUnit(state, {
        forPlayer: newPlayerNumber,
        unitType: Unit.Archer,
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
  const candidates = getStartingSpawnCandidates(state);

  let startingLocation: Vector2;
  let largestDistance: number;
  for (const candidate of candidates) {
    const nearestUnit = computed.quadTreeAllUnits.find(candidate.x, candidate.y);
    if (!nearestUnit) {
      startingLocation = candidate;
      continue;
    }
    const nearestUnitDistance = computed.quadTreeAllUnits.find(candidate.x, candidate.y).position.distanceTo(candidate);
    if (!largestDistance) {
      largestDistance = nearestUnitDistance;
      startingLocation = candidate;
      continue;
    }
    if (nearestUnitDistance > largestDistance) {
      largestDistance = nearestUnitDistance;
      startingLocation = candidate;
    }
  }

  return startingLocation;
}

export function getStartingSpawnCandidates(state: GameState): Vector2[] {
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
  ].map((position) => grid.middleOfTile(position.x, position.y));
}

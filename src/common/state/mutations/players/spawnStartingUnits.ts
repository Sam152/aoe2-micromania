import Grid from "../../../terrain/Grid";
import spawnUnit from "../initiated/spawnUnit";
import Unit from "../../../units/Unit";
import { GameState } from "../../../../types";

export function spawnStartingUnits(state: GameState, newPlayerNumber: number) {
  const grid = new Grid(state.mapSize);

  spawnUnit(state, {
    forPlayer: newPlayerNumber,
    unitType: Unit.Mangonel,
    position: grid.middleOfTile(7, 2),
  });
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      spawnUnit(state, {
        forPlayer: newPlayerNumber,
        unitType: Unit.Archer,
        position: grid.middleOfTile(x, y),
      });
    }
  }
}

export function getStartingSpawnCandidates(state: GameState): { x: number; y: number }[] {
  const grid = new Grid(state.mapSize);
  const buffer = 3;
  return [
    { x: buffer, y: buffer },
    { x: Math.ceil(state.mapSize / 2), y: buffer },
    { x: state.mapSize - buffer, y: buffer },
    { x: state.mapSize - buffer, y: Math.ceil(state.mapSize / 2) },
    { x: state.mapSize - buffer, y: state.mapSize - buffer },
    { x: Math.ceil(state.mapSize / 2), y: state.mapSize - buffer },
    { x: buffer, y: state.mapSize - buffer },
    { x: buffer, y: Math.ceil(state.mapSize / 2) },
  ];
}

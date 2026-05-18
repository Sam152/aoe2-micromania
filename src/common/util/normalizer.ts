import { FallenUnitInstance, GameState, GameStateAction, ProjectileInstance, UnitInstance } from "../../types.d.ts";
import { Vector2 } from "three/src/math/Vector2.js";

export function normalizeGameStateAction(action: GameStateAction): GameStateAction {
  const vectorKeys = ["position"];
  vectorKeys.map((key) => {
    if (key in action) {
      // @ts-ignore: GameStateAction doesn't have an index signature but key is always present
      action[key] = new Vector2(action[key].x, action[key].y);
    }
  });
  return action;
}

export function normalizeGameStateObject(state: GameState): GameState {
  // In the absence of a more sophisticated normalizer, points need to be converted back
  // into three.js vectors when state is transmitted from the server.
  state.units = state.units.map((unit: UnitInstance) => ({
    ...unit,
    position: new Vector2(unit.position.x, unit.position.y),
    targetingPosition: unit.targetingPosition
      ? new Vector2(unit.targetingPosition.x, unit.targetingPosition.y)
      : undefined,
    movingDirection: unit.movingDirection ? new Vector2(unit.movingDirection.x, unit.movingDirection.y) : undefined,
    waypoints: unit.waypoints.map((waypoint) => new Vector2(waypoint.x, waypoint.y)),
    reformingTo: unit.reformingTo ? new Vector2(unit.reformingTo.x, unit.reformingTo.y) : undefined,
    patrollingTo: unit.patrollingTo ? new Vector2(unit.patrollingTo.x, unit.patrollingTo.y) : undefined,
    patrollingToReturn: unit.patrollingToReturn
      ? new Vector2(unit.patrollingToReturn.x, unit.patrollingToReturn.y)
      : undefined,
  }));
  state.fallenUnits = state.fallenUnits.map((unit: FallenUnitInstance) => ({
    ...unit,
    position: new Vector2(unit.position.x, unit.position.y),
  }));
  state.projectiles = state.projectiles.map((projectile: ProjectileInstance) => ({
    ...projectile,
    startingPoint: new Vector2(projectile.startingPoint.x, projectile.startingPoint.y),
    destination: new Vector2(projectile.destination.x, projectile.destination.y),
    pathVector: new Vector2(projectile.pathVector.x, projectile.pathVector.y),
  }));
  return state;
}

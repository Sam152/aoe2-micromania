import { Vector2 } from "three/src/math/Vector2.js";
import { closestUnitNotOwnedBy } from "./autoAttack.ts";
import { createComputedFrameState } from "../../computed/createComputedFrameState.ts";
import { GameState, UnitInstance } from "../../../../types.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { UnitState } from "../../../units/UnitState.ts";
import { CompassDirection } from "../../../units/CompassDirection.ts";
import { getAttackRange } from "../../../util/inAttackRange.ts";

function makeUnit(id: number, player: number, x: number, y: number): UnitInstance {
  return {
    id,
    ownedByPlayer: player,
    unitType: UnitType.Archer,
    unitState: UnitState.Idle,
    unitStateStartedAt: 0,
    direction: CompassDirection.Start,
    reloadsAt: 0,
    waypoints: [],
    clickedWaypoints: [],
    position: new Vector2(x, y),
  } as unknown as UnitInstance;
}

function makeState(unitsPerPlayer: number, playerCount = 2): GameState {
  const mapSize = 100;
  const units: UnitInstance[] = [];
  let id = 0;
  for (let p = 1; p <= playerCount; p++) {
    for (let i = 0; i < unitsPerPlayer; i++) {
      units.push(makeUnit(id++, p, Math.random() * mapSize, Math.random() * mapSize));
    }
  }
  return { units, mapSize } as unknown as GameState;
}

export function closestUnitNotOwnedByBruteForce(
  notOwnedBy: number,
  attackingUnit: UnitInstance,
  units: UnitInstance[],
): UnitInstance | undefined {
  const range = getAttackRange(attackingUnit);
  return units
    .filter((u) => u.ownedByPlayer !== notOwnedBy)
    .reduce(
      (best: UnitInstance | undefined, u) => {
        const d = u.position.distanceTo(attackingUnit.position);
        if (d > range) { return best; }
        if (!best) { return u; }
        return d < best.position.distanceTo(attackingUnit.position) ? u : best;
      },
      undefined,
    );
}

for (const unitsPerPlayer of [50, 250, 1000]) {
  const state = makeState(unitsPerPlayer);
  const computed = createComputedFrameState(state);

  Deno.bench(`quadtree   — ${unitsPerPlayer}u/player, all units`, () => {
    for (const unit of state.units) {
      closestUnitNotOwnedBy(unit.ownedByPlayer, unit, computed);
    }
  });

  Deno.bench(`bruteforce — ${unitsPerPlayer}u/player, all units`, () => {
    for (const unit of state.units) {
      closestUnitNotOwnedByBruteForce(unit.ownedByPlayer, unit, state.units);
    }
  });
}

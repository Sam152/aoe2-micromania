import { ClientState, GameState, ProjectileInstance, UnitInstance } from "../../types.ts";
import { selectedTypesFromClientState } from "../util/selectedTypesFromClientState.ts";
import { UnitType } from "../units/UnitType.ts";
import { Sound } from "./Sound.ts";
import { ProjectileType } from "../units/ProjectileType.ts";

class SoundManager {
  attacking(state: ClientState) {
    if (selectedTypesFromClientState(state).includes(UnitType.Archer)) {
      state.soundQueue.push(Sound.SoldierAttack);
    }
  }

  moving(state: ClientState) {
    if (selectedTypesFromClientState(state).includes(UnitType.Archer)) {
      state.soundQueue.push(Sound.SoldierMoved);
    }
    if (selectedTypesFromClientState(state).includes(UnitType.Mangonel)) {
      state.soundQueue.push(Sound.MangonelMoved);
    }
  }

  projectileLaunched(state: GameState, type: ProjectileType) {
    state.soundQueue.push(type === ProjectileType.Rock ? Sound.MangonelFired : Sound.ArrowFired);
  }

  projectileLanded(state: GameState, projectile: ProjectileInstance) {
    if (projectile.type === ProjectileType.Rock) {
      state.soundQueue.push(Sound.RocksLanded);
    }
  }

  unitFallen(state: GameState, unit: UnitInstance) {
    if (unit.unitType === UnitType.Mangonel) {
      state.soundQueue.push(Sound.MangonelDestroyed);
    }
    if (unit.unitType === UnitType.Archer) {
      state.soundQueue.push(Sound.SoldierFallen);
    }
  }
}

export const soundManager = new SoundManager();

import { ClientState, GameState, ProjectileInstance, UnitInstance } from "../../types.d.ts";
import selectedTypesFromClientState from "../util/selectedTypesFromClientState.ts";
import Unit from "../units/Unit.ts";
import Sound from "./Sound.ts";
import ProjectileType from "../units/ProjectileType.ts";

class SoundManager {
  attacking(state: ClientState) {
    if (selectedTypesFromClientState(state).includes(Unit.Archer)) {
      state.soundQueue.push(Sound.SoldierAttack);
    }
  }

  moving(state: ClientState) {
    if (selectedTypesFromClientState(state).includes(Unit.Archer)) {
      state.soundQueue.push(Sound.SoldierMoved);
    }
    if (selectedTypesFromClientState(state).includes(Unit.Mangonel)) {
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
    if (unit.unitType === Unit.Mangonel) {
      state.soundQueue.push(Sound.MangonelDestroyed);
    }
    if (unit.unitType === Unit.Archer) {
      state.soundQueue.push(Sound.SoldierFallen);
    }
  }
}

const soundManager = new SoundManager();
export default soundManager;

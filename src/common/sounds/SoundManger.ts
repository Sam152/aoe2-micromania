import {ClientState, GameState, UnitInstance} from "../../types";
import selectedTypesFromClientState from "../util/selectedTypesFromClientState";
import Unit from "../units/Unit";
import Sound from "./Sound";
import ProjectileType from "../units/ProjectileType";

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

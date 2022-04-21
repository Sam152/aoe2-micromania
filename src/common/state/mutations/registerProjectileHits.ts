import {GameState} from "../../../types";

export default function registerProjectileHits(state: GameState) {
    const landedProjectiles = state.projectiles.filter(({arrivingTick}) => arrivingTick === state.ticks);

    landedProjectiles.forEach(projectile => {
        console.log('HANDLE HIT');
    });

    // Remove landed projectiles from the game state.
    state.projectiles = state.projectiles.filter(({id}) => !landedProjectiles.map(({id}) => id).includes(id));
}

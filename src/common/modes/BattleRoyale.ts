import {GameMode, GameStateAction, StateManagerInterface} from '../../types';
import Grid from '../terrain/Grid';

const grid = new Grid(30);

/**
 * Game modes may: respond to state or actions by dispatching more actions,
 * but never modify state directly.
 */
export default class BattleRoyale implements GameMode {
    start(manager: StateManagerInterface): void {
        manager.dispatchGame({
            n: 'MAP_PARAMETERS_SET',
            size: grid.size,
            terrain: 'terrain/15008-grass-2',
        });
    }

    onTick(manager: StateManagerInterface, action: GameStateAction): void {
        if (action.n === 'CLIENT_LOADED_WITH_ID') {
            console.log("SPAWNING!!!");
            // spawnStartingUnits(manager);
        }
        if (action.n === 'CLIENT_DISCONNECTED_WITH_ID') {
            console.log("DESPAWNING!!");
        }
    }
}

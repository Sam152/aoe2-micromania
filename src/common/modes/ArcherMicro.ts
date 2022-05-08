import {GameDispatcher, GameMode, GameState} from '../../types';
import Unit from '../units/Unit';
import Grid from '../terrain/Grid';

export default class ArcherMicro implements GameMode {
    start(gameDispatcher: GameDispatcher, gameState: GameState): void {
        const grid = Grid.fromGameState(gameState);

        gameDispatcher({
            n: 'SPAWN_UNIT',
            forPlayer: 1,
            unitType: Unit.Mangonel,
            position: grid.middleOfTile(7, 2),
        });
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                gameDispatcher({
                    n: 'SPAWN_UNIT',
                    forPlayer: 1,
                    unitType: Unit.Archer,
                    position: grid.middleOfTile(x, y),
                });
            }
        }

        for (let x = gameState.mapSize - 1; x > gameState.mapSize - 6; x--) {
            for (let y = gameState.mapSize - 1; y > gameState.mapSize - 6; y--) {
                gameDispatcher({
                    n: 'SPAWN_UNIT',
                    forPlayer: 2,
                    unitType: Unit.Archer,
                    position: grid.middleOfTile(x, y),
                });
            }
        }
        gameDispatcher({
            n: 'SPAWN_UNIT',
            forPlayer: 2,
            unitType: Unit.Mangonel,
            position: grid.middleOfTile(gameState.mapSize - 7, gameState.mapSize - 3),
        });
    }
}

import {GameDispatcher, GameMode, GameState, GameStateAction} from '../../types';
import Unit from '../units/Unit';
import Grid from '../terrain/Grid';

export default class ArcherMicro implements GameMode {
    start(gameDispatcher: GameDispatcher, gameState: GameState): void {

        const grid = new Grid(13);

        gameDispatcher({
            n: 'MAP_PARAMETERS_SET',
            size: grid.size,
            terrain: 'terrain/sandy',
        });

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

    onTick(state: GameState, action: GameStateAction, dispatcher: GameDispatcher): void {
        if (state.ticks % 10 !== 0) {
            return;
        }

        const playerOneUnits = state.units.filter(({ownedByPlayer}) => ownedByPlayer === 1).length;
        const playerTwoUnits = state.units.filter(({ownedByPlayer}) => ownedByPlayer === 2).length;

        if (playerOneUnits === 0) {
            dispatcher({n: 'GAME_ENDED', winner: 2});
        } else if (playerTwoUnits === 0) {
            dispatcher({n: 'GAME_ENDED', winner: 1});
        }
    }
}

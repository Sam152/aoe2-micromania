import {GameDispatcher, GameMode} from '../../types';

export default class SpawnUnits implements GameMode {
    start(gameDispatcher: GameDispatcher): void {
        Array.from(Array(100).keys()).map((item, index) => {
            gameDispatcher({
                name: 'SPAWN_UNIT',
                position: {
                    x: Math.floor(Math.random() * 1000),
                    y: Math.floor(Math.random() * 1000)
                }
            });
            gameDispatcher({
                name: 'MOVE_UNIT_TO',
                position: {
                    x: 500,
                    y: 300
                },
                id: index
            });
        });
    }
}

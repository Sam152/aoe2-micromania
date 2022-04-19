import {GameDispatcher, GameMode, GameState} from '../../types';
import Unit from '../units/Unit';
import {Vector2} from "three";
import Grid from "../terrain/Grid";

export default class ArcherMicro implements GameMode {
    start(gameDispatcher: GameDispatcher, gameState: GameState): void {
        const grid = Grid.fromGameState(gameState);

        gameDispatcher({
            name: 'SPAWN_UNIT',
            forPlayer: 1,
            unitType: Unit.Mangonel,
            position: grid.middleOfTile(7, 2),
        });
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                gameDispatcher({
                    name: 'SPAWN_UNIT',
                    forPlayer: 1,
                    unitType: Unit.Archer,
                    position: grid.middleOfTile(x, y),
                });
            }
        }


        // Array.from(Array(20).keys()).map((item, index) => {
        //     gameDispatcher({
        //         name: 'SPAWN_UNIT',
        //         forPlayer: 2,
        //         unitType: Unit.Archer,
        //         direction: randomEnum(CompassDirection),
        //         position: new Vector2(Math.floor(Math.random() * 500) + 500, Math.floor(Math.random() * 500) + 500),
        //     });
        // });
    }
}

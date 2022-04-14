import {GameDispatcher, GameMode} from '../../types';
import Unit from '../game/Unit';
import randomEnum from '../util/randomEnum';
import CompassDirection from '../game/CompassDirection';
import {Vector2} from "three";

export default class ArcherMicro implements GameMode {
    start(gameDispatcher: GameDispatcher): void {
        Array.from(Array(20).keys()).map((item, index) => {
            gameDispatcher({
                name: 'SPAWN_UNIT',
                forPlayer: 1,
                unitType: Unit.Archer,
                position: new Vector2(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)),
            });
        });

        Array.from(Array(20).keys()).map((item, index) => {
            gameDispatcher({
                name: 'SPAWN_UNIT',
                forPlayer: 2,
                unitType: Unit.Archer,
                direction: randomEnum(CompassDirection),
                position: new Vector2(Math.floor(Math.random() * 500) + 500, Math.floor(Math.random() * 500) + 500),
            });
        });
    }
}

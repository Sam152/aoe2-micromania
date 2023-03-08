import Unit from "../game/Unit";
import randomEnum from "../util/randomEnum";
import CompassDirection from "../game/CompassDirection";
var ArcherMicro = (function () {
    function ArcherMicro() {
    }
    ArcherMicro.prototype.start = function (gameDispatcher) {
        Array.from(Array(10).keys()).map(function (item, index) {
            gameDispatcher({
                name: 'SPAWN_UNIT',
                forPlayer: 1,
                unitType: Unit.Archer,
                position: {
                    x: Math.floor(Math.random() * 500),
                    y: Math.floor(Math.random() * 500)
                }
            });
        });
        Array.from(Array(10).keys()).map(function (item, index) {
            gameDispatcher({
                name: 'SPAWN_UNIT',
                forPlayer: 2,
                unitType: Unit.Archer,
                direction: randomEnum(CompassDirection),
                position: {
                    x: Math.floor(Math.random() * 500) + 500,
                    y: Math.floor(Math.random() * 500) + 500
                }
            });
        });
    };
    return ArcherMicro;
}());
export default ArcherMicro;
//# sourceMappingURL=ArcherMicro.js.map
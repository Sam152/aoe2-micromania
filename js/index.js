import { LocalStateManager } from "./StateManager";
import CanvasRenderer from "./drawing/CanvasRenderer";
var state = new LocalStateManager();
state.dispatchGame({ name: "SPAWN_UNIT", position: { x: 300, y: 200 } });
state.dispatchGame({ name: "SPAWN_UNIT", position: { x: 150, y: 200 } });
state.dispatchGame({ name: "MOVE_UNIT_TO", position: { x: 500, y: 300 }, id: 0 });
setInterval(function () { return state.dispatchGame({ name: "TICK" }); }, 33);
var renderer = new CanvasRenderer(document.getElementById('canvas'));
setInterval(function () { return renderer.render(state.getGameState(), state.getClientState()); }, 30);
setInterval(function () { return console.log(state.getGameState()); }, 1000);
//# sourceMappingURL=index.js.map
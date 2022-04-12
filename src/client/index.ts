import {LocalStateManager, NetworkedStateManager} from "../common/StateManager";
import CanvasRenderer from "./drawing/CanvasRenderer";
import { io } from "socket.io-client";



// const state = new LocalStateManager();
//
// state.dispatchGame({name: "SPAWN_UNIT", position: {x: 300, y: 200}});
// state.dispatchGame({name: "SPAWN_UNIT", position: {x: 150, y: 200}});
// state.dispatchGame({name: "MOVE_UNIT_TO", position: {x: 500, y: 300}, id: 0});
//
// setInterval(() => state.dispatchGame({name: "TICK"}), 33);
//
// const renderer = new CanvasRenderer(document.getElementById('canvas') as HTMLCanvasElement);
//
// const render = () => {
//     renderer.render(state.getGameState(), state.getClientState());
//     window.requestAnimationFrame(render);
// }
// render();
//
// setInterval(() => console.log(state.getGameState()), 1000);

const state = new NetworkedStateManager(io());
state.init();

// const state = new LocalStateManager();
// state.init();

state.dispatchGame({name: "SPAWN_UNIT", position: {x: 300, y: 200}});
state.dispatchGame({name: "SPAWN_UNIT", position: {x: 150, y: 200}});
state.dispatchGame({name: "MOVE_UNIT_TO", position: {x: 500, y: 300}, id: 0});

const renderer = new CanvasRenderer(document.getElementById('canvas') as HTMLCanvasElement);
const render = () => {
    renderer.render(state.getGameState(), state.getClientState());
    window.requestAnimationFrame(render);
}
render();

setInterval(() => console.log(state.getGameState()), 1000);

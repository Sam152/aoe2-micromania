import {LocalStateManager} from "./StateManager";
import CanvasRenderer from "./client/CanvasRenderer";

const state = new LocalStateManager();

state.dispatchGame({name: "SPAWN_UNIT", position: {x: 1, y: 1}});
setInterval(() => state.dispatchGame({name: "TICK"}), 100);

const renderer = new CanvasRenderer(document.getElementById('canvas') as HTMLCanvasElement);
setInterval(() => renderer.render(state.getGameState(), state.getClientState()), 100);

setInterval(() => console.log(state.getGameState()), 1000);

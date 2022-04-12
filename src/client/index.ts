import {LocalStateManager, NetworkedStateManager} from "../common/state/StateManager";
import CanvasRenderer from "./drawing/CanvasRenderer";
import { io } from "socket.io-client";
import SpawnUnits from "../common/modes/SpawnUnits";


// const state = new NetworkedStateManager(io());
// state.init();

const state = new LocalStateManager();
state.init();
(new SpawnUnits()).start(state.dispatchGame.bind(state));

const renderer = new CanvasRenderer(document.getElementById('canvas') as HTMLCanvasElement);
const render = () => {
    renderer.render(state.getGameState(), state.getClientState());
    window.requestAnimationFrame(render);
}
render();

setInterval(() => console.log(state.getGameState()), 1000);

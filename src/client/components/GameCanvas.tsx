import {createRef, useEffect} from 'react';
import CanvasRenderer from '../../common/drawing/CanvasRenderer';
import {StateManagerInterface} from '../../types';
import SlpManager from '../../common/drawing/SlpManager';
import InputManager from "../../common/input/InputManager";
import {Simulate} from "react-dom/test-utils";
import {clientStateTransmitter} from "../../common/state/clientState";

export default function GameCanvas({stateManager}: {stateManager: StateManagerInterface}) {
    const ref = createRef<HTMLCanvasElement>();

    useEffect(() => {

        const slpManager = new SlpManager('/assets');
        const inputManager = new InputManager(ref.current, stateManager, clientStateTransmitter);

        slpManager.downloadPreRenderAll().then(() => {
            const renderer = new CanvasRenderer(ref.current, slpManager);
            const render = () => {
                stateManager.dispatchClient({name: "FRAME_RENDERING_STARTED"});

                renderer.render(stateManager.getGameState(), stateManager.getClientState(), stateManager.dispatchClient.bind(stateManager));
                inputManager.dispatchInput();

                inputManager.clearInput();

                window.requestAnimationFrame(render);
            };
            render();
        });

    }, []);

    return (
        <canvas ref={ref} />
    );
}

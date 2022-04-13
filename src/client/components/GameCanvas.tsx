import {createRef, useEffect} from 'react';
import CanvasRenderer from '../../common/drawing/CanvasRenderer';
import {StateManagerInterface} from '../../types';
import SlpManager from "../../common/drawing/SlpManager";

export default function GameCanvas({stateManager}: {stateManager: StateManagerInterface}) {
    const ref = createRef<HTMLCanvasElement>();

    useEffect(() => {
        const slpManager = new SlpManager('/assets');
        slpManager.downloadPreRenderAll().then(() => {
            const renderer = new CanvasRenderer(ref.current, slpManager);
            const render = () => {
                renderer.render(stateManager.getGameState(), stateManager.getClientState());
                window.requestAnimationFrame(render);
            };
            render();
        });
    }, []);

    return (
        <canvas ref={ref} />
    );
}

import {createRef, useEffect} from 'react';
import CanvasRenderer from '../../common/drawing/CanvasRenderer';
import {StateManagerInterface} from '../../types';

export default function GameCanvas({stateManager}: {stateManager: StateManagerInterface}) {
    const ref = createRef<HTMLCanvasElement>();

    useEffect(() => {
        const renderer = new CanvasRenderer(ref.current);
        const render = () => {
            renderer.render(stateManager.getGameState(), stateManager.getClientState());
            window.requestAnimationFrame(render);
        };
        render();
    }, []);

    return (
        <canvas ref={ref} />
    );
}

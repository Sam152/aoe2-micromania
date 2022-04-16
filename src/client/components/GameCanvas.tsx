import {createRef, useEffect} from 'react';
import {StateManagerInterface} from '../../types';
import RenderLoopManager from "../../common/state/managers/RenderLoopManager";

export default function GameCanvas({stateManager}: {stateManager: StateManagerInterface}) {
    const ref = createRef<HTMLCanvasElement>();

    useEffect(() => {
        const renderLoop = new RenderLoopManager(stateManager, ref.current);
        renderLoop.start();
    }, []);

    return (
        <canvas ref={ref} />
    );
}

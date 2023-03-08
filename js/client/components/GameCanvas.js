import { jsx as _jsx } from "react/jsx-runtime";
import { createRef, useEffect } from 'react';
import CanvasRenderer from '../../common/drawing/CanvasRenderer';
import SlpManager from "../../common/drawing/SlpManager";
export default function GameCanvas(_a) {
    var stateManager = _a.stateManager;
    var ref = createRef();
    useEffect(function () {
        var slpManager = new SlpManager('/assets');
        slpManager.downloadPreRenderAll().then(function () {
            var renderer = new CanvasRenderer(ref.current, slpManager);
            var render = function () {
                renderer.render(stateManager.getGameState(), stateManager.getClientState());
                window.requestAnimationFrame(render);
            };
            render();
        });
    }, []);
    return (_jsx("canvas", { ref: ref }));
}
//# sourceMappingURL=GameCanvas.js.map
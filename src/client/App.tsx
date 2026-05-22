import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TopBar } from "./components/TopBar.tsx";
import { Hotkeys } from "./pages/Hotkeys.tsx";
import { config } from "../common/config.ts";
import { GameScreen } from "./pages/GameScreen.tsx";
import { Servers } from "./pages/Servers.tsx";
import { ConnectedStateProvider } from "./hooks/useConnectedState.tsx";
import { FormationDebugging } from "./pages/playground/FormationDebugging.tsx";
import { ArrowFramesPlayground } from "./pages/playground/ArrowFramesPlayground.tsx";
import { RockFramesPlayground } from "./pages/playground/RockFramesPlayground.tsx";

import { SpectateGame } from "./pages/SpectateGame.tsx";
import { PlaygroundList } from "./pages/playground/PlaygroundList.tsx";

export function App() {
  return (
    <ConnectedStateProvider>
      <BrowserRouter basename={config.assetBaseUrl}>
        <TopBar />
        <Routes>
          <Route path="/" element={<GameScreen />} />
          <Route path="/spectate" element={<SpectateGame />} />
          <Route path="/hotkeys" element={<Hotkeys />} />
          <Route path="/servers" element={<Servers />} />

          <Route path="/playground" element={<PlaygroundList />} />
          <Route path="/playground/formations" element={<FormationDebugging />} />
          <Route path="/playground/arrow-frames" element={<ArrowFramesPlayground />} />
          <Route path="/playground/rock-frames" element={<RockFramesPlayground />} />
        </Routes>
      </BrowserRouter>
    </ConnectedStateProvider>
  );
}

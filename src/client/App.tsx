import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import TopBar from "./components/TopBar";
import Hotkeys from "./pages/Hotkeys";
import config from "../common/config";
import { GameScreen } from "./pages/GameScreen";
import Servers from "./pages/Servers";
import { ConnectedStateProvider } from "./hooks/useConnectedState";

export default function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <ConnectedStateProvider>
        <BrowserRouter basename={config.assetBaseUrl}>
          <TopBar />
          <Routes>
            <Route path="/" element={<GameScreen />} />
            <Route path="/hotkeys" element={<Hotkeys />} />
            <Route path="/servers" element={<Servers />} />
          </Routes>
        </BrowserRouter>
      </ConnectedStateProvider>
    </ChakraProvider>
  );
}

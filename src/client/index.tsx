import { createRoot } from "react-dom/client";

globalThis.addEventListener("error", (event) => {
  console.error("Caught global error:", event.message);
  globalThis.location.reload();
});

globalThis.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  globalThis.location.reload();
});

import { App } from "./App.tsx";

const root = createRoot(document.getElementById("ui")!);
root.render(<App />);

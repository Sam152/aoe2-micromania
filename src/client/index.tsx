import { createRoot } from "react-dom/client";

globalThis.addEventListener("error", (event) => {
  console.error("Caught global error:", event.message);
  globalThis.location.reload();
});

const ignoredRejections = [
  /Pointer lock/,
];

globalThis.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);

  if (!ignoredRejections.find((reason) => reason.test(event.reason))) {
    globalThis.location.reload();
  }
});

import { App } from "./App.tsx";

const root = createRoot(document.getElementById("ui")!);
root.render(<App />);

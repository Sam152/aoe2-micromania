import { createRef, useEffect } from "react";

/**
 * A playground takes elements from game and renders out specific scenarios or debugging tools, that
 * might otherwise be hard to observe when the game is running at full speed, or with the tools available.
 *
 * All playgrounds should get a corresponding entry in App.tsx, in the form of: <Route path="/playground/some-name" ... />
 *
 * Playground links should be added to PlaygroundList.tsx.
 *
 * This file is a template, it should be copied and named appropriately.
 */
export function ExamplePlayground() {
  const ref = createRef<HTMLCanvasElement>();

  useEffect(() => {
  }, []);

  return (
    <canvas
      style={{ width: "100vw", height: "calc(100vh - 52px)", display: "block", backgroundColor: "black" }}
      ref={ref}
    />
  );
}

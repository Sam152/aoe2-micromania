import { createTimer } from "./createTimer.ts";

const ROW_SIZE = 50;

// Format numbers with a `_` thousands separator, e.g. 10000 -> "10_000".
export function formatNumber(n: number): string {
  return n.toLocaleString("en-US").replaceAll(",", "_");
}

// Deno.stdout.writeSync may perform a partial write (returning fewer bytes than
// requested) when stdout is non-blocking and its buffer is full — e.g. right
// after the worker-pool spawn burst at the start of each tournament. Loop until
// the whole buffer is flushed so no characters are silently dropped.
function writeSync(text: string): void {
  let buffer = new TextEncoder().encode(text);
  while (buffer.length > 0) {
    const written = Deno.stdout.writeSync(buffer);
    buffer = buffer.subarray(written);
  }
}

export function createProgressFormatter(
  { totalIterations, scaleFactor = 1 }: { totalIterations?: number; scaleFactor?: number } = {},
): { advance: () => void } {
  let completed = 0;
  let timer = createTimer(false);

  return {
    advance: () => {
      completed++;

      const isLast = completed === totalIterations;
      const isDot = completed % scaleFactor === 0;
      if (isDot) {
        writeSync(".");
      }

      // Break the row every ROW_SIZE dots (i.e. ROW_SIZE * scaleFactor advances), or at the very end.
      if ((isDot && completed % (ROW_SIZE * scaleFactor) === 0) || isLast) {
        writeSync(
          totalIterations !== undefined
            ? ` (${formatNumber(completed)}/${formatNumber(totalIterations)})`
            : ` (${formatNumber(completed)})`,
        );
        writeSync(` ${timer()}`);
        timer = createTimer(false);

        writeSync("\n");
      }
    },
  };
}

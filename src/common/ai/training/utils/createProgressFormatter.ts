const ROW_SIZE = 50;

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

export function createProgressFormatter({ totalIterations }: { totalIterations: number }): { advance: () => void } {
  let completed = 0;

  return {
    advance: () => {
      completed++;
      writeSync(".");

      if (completed % ROW_SIZE === 0 || completed === totalIterations) {
        writeSync(` (${completed}/${totalIterations})\n`);
      }
    },
  };
}

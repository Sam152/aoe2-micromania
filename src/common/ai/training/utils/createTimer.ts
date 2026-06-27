export function createTimer(): () => number {
  const start = performance.now();

  return () => {
    const elapsed = performance.now() - start;
    const pretty = formatDuration(elapsed);
    console.log(`Took ${pretty}`);
    return elapsed;
  };
}

function formatDuration(ms: number): string {
  if (ms < 1000) {
    return `${Math.round(ms)}ms`;
  }

  const totalSeconds = ms / 1000;

  if (totalSeconds < 60) {
    return `${Number(totalSeconds.toFixed(1))}s`;
  }

  const totalMinutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);

  if (totalMinutes < 60) {
    return `${totalMinutes}m${seconds}s`;
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h${minutes}m${seconds}s`;
}

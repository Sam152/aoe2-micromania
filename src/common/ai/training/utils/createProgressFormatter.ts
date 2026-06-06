const ROW_SIZE = 50;

export function createProgressFormatter({ totalIterations }: { totalIterations: number }): { advance: () => void } {
  let completed = 0;

  return {
    advance: () => {
      completed++;
      Deno.stdout.writeSync(new TextEncoder().encode("."));

      if (completed % ROW_SIZE === 0) {
        Deno.stdout.writeSync(new TextEncoder().encode(` (${completed}/${totalIterations})\n`));
      }
    },
  };
}

import { Bot } from "../infra/repo/getActiveBotsByElo.ts";
import { GameResult } from "../utils/determineWinner.ts";

type PendingJob = {
  p1: Bot;
  p2: Bot;
  resolve: (result: GameResult) => void;
};

type GameWorkerPool = { runInPool: (p1: Bot, p2: Bot) => Promise<GameResult>; terminatePool: () => void };

export function createGameWorkerPool(
  workerCount: number,
): GameWorkerPool {
  const available: Worker[] = Array.from(
    { length: workerCount },
    () => new Worker(new URL("./worker.ts", import.meta.url), { type: "module" }),
  );
  const queue: PendingJob[] = [];

  function workQueue() {
    if (queue.length === 0 || available.length === 0) {
      return;
    }
    const worker = available.pop()!;
    const { p1, p2, resolve } = queue.shift()!;

    worker.onmessage = (e: MessageEvent<GameResult>) => {
      resolve(e.data);
      available.push(worker);
      workQueue();
    };
    worker.postMessage({ p1, p2 });
  }

  return {
    runInPool: (p1: Bot, p2: Bot): Promise<GameResult> =>
      new Promise((resolve) => {
        queue.push({ p1, p2, resolve });
        workQueue();
      }),
    terminatePool: () => available.forEach((w) => w.terminate()),
  };
}

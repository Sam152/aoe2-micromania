import { Bot } from "../infra/repo/getAllBots.ts";
import { GameResult } from "../utils/determineWinner.ts";

type PendingJob = {
  p1: Bot;
  p2: Bot;
  resolve: (result: GameResult) => void;
};

export function createGameWorkerPool(workerCount: number): (p1: Bot, p2: Bot) => Promise<GameResult> {
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

  return (p1: Bot, p2: Bot): Promise<GameResult> =>
    new Promise((resolve) => {
      queue.push({ p1, p2, resolve });
      workQueue();
    });
}

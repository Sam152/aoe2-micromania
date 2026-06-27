import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { GameResult } from "../utils/determineWinner.ts";

type Trees = { 1: UnitAwareBehaviourTree; 2: UnitAwareBehaviourTree };

type PendingJob = {
  trees: Trees;
  resolve: (result: GameResult) => void;
};

export type GameWorkerPool = { runInPool: (trees: Trees) => Promise<GameResult>; terminatePool: () => void };

export function createGameWorkerPool(workerCount: number): GameWorkerPool {
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
    const { trees, resolve } = queue.shift()!;

    worker.onmessage = (e: MessageEvent<GameResult>) => {
      resolve(e.data);
      available.push(worker);
      workQueue();
    };
    worker.postMessage(trees);
  }

  return {
    runInPool: (trees: Trees): Promise<GameResult> =>
      new Promise((resolve) => {
        queue.push({ trees, resolve });
        workQueue();
      }),
    terminatePool: () => available.forEach((w) => w.terminate()),
  };
}

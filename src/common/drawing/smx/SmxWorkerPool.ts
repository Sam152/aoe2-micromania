import type { WorkerError, WorkerResponse } from "./renderSmxWorker.ts";
import type { Pallet } from "./parsePallet.ts";
import type { Frame } from "./renderSmx.ts";

interface Task {
  resolve: (value: WorkerResponse) => void;
  reject: (reason: unknown) => void;
  payload: unknown;
  transfer: Transferable[];
}

export function createSmxWorkerPool(concurrency: number) {
  const workers = Array.from(
    { length: concurrency },
    () => new Worker("/renderSmxWorker.js", { type: "module" }),
  );
  const idle = [...workers];
  const queue: Task[] = [];

  function drain(): void {
    while (idle.length > 0 && queue.length > 0) {
      const worker = idle.pop()!;
      const task = queue.shift()!;

      worker.onmessage = (e: MessageEvent<WorkerResponse | WorkerError>) => {
        idle.push(worker);
        if (e.data.ok) {
          task.resolve(e.data);
        } else {
          task.reject(new Error(e.data.error));
        }
        drain();
      };

      worker.onerror = (e: ErrorEvent) => {
        idle.push(worker);
        task.reject(e.error ?? new Error(e.message));
        drain();
      };

      worker.postMessage(task.payload, task.transfer);
    }
  }

  function dispatch(payload: unknown, transfer: Transferable[]): Promise<WorkerResponse> {
    return new Promise((resolve, reject) => {
      queue.push({ resolve, reject, payload, transfer });
      drain();
    });
  }

  async function render(
    data: ArrayBuffer,
    palettes: Record<number, Pallet>,
    playersToRender: number[],
  ): Promise<Frame[]> {
    const { frameMetadata, bitmaps } = await dispatch({ data, palettes, playersToRender }, [data]);

    return frameMetadata.map((meta) => ({
      shadow: meta.shadowIdx >= 0 ? bitmaps[meta.shadowIdx] : null,
      shadowCenterX: meta.shadowCenterX,
      shadowCenterY: meta.shadowCenterY,
      renders: Object.fromEntries(
        playersToRender.map((player) => [player, bitmaps[meta.playerIndices[player]]]),
      ),
      width: meta.width,
      height: meta.height,
      centerX: meta.centerX,
      centerY: meta.centerY,
    }));
  }

  function terminate(): void {
    for (const worker of workers) { worker.terminate(); }
  }

  return { render, terminate };
}

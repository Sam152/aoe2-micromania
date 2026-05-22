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

  return {
    render: (data: ArrayBufferLike, palettes: Record<number, Pallet>, playersToRender: number[]) =>
      render(idle, queue, data, palettes, playersToRender),
    terminate: () => terminate(workers),
  };
}

async function render(
  idle: Worker[],
  queue: Task[],
  data: ArrayBufferLike,
  palettes: Record<number, Pallet>,
  playersToRender: number[],
): Promise<Frame[]> {
  const { frameMetadata, bitmaps } = await dispatch(idle, queue, { data, palettes, playersToRender }, [data]);

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

function dispatch(idle: Worker[], queue: Task[], payload: unknown, transfer: Transferable[]): Promise<WorkerResponse> {
  return new Promise((resolve, reject) => {
    queue.push({ resolve, reject, payload, transfer });
    drain(idle, queue);
  });
}

function drain(idle: Worker[], queue: Task[]): void {
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
      drain(idle, queue);
    };

    worker.onerror = (e: ErrorEvent) => {
      idle.push(worker);
      task.reject(e.error ?? new Error(e.message));
      drain(idle, queue);
    };

    worker.postMessage(task.payload, task.transfer);
  }
}

function terminate(workers: Worker[]): void {
  workers.forEach((w) => w.terminate());
}

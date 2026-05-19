import type { WorkerError, WorkerResponse } from "./renderSmxWorker.ts";
import type { Pallet } from "./parsePallet.ts";
import type { Frame } from "./renderSmx.ts";

interface Task {
  resolve: (value: WorkerResponse) => void;
  reject: (reason: unknown) => void;
  payload: unknown;
  transfer: Transferable[];
}

export class SmxWorkerPool {
  private readonly workers: Worker[];
  private readonly idle: Worker[];
  private readonly queue: Task[] = [];

  constructor(concurrency: number) {
    this.workers = Array.from(
      { length: concurrency },
      () => new Worker("/renderSmxWorker.js", { type: "module" }),
    );
    this.idle = [...this.workers];
  }

  async render(
    data: ArrayBuffer,
    palettes: Record<number, Pallet>,
    playersToRender: number[],
  ): Promise<Frame[]> {
    const { frameMetadata, bitmaps } = await this.dispatch(
      { data, palettes, playersToRender },
      [data],
    );

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

  private dispatch(payload: unknown, transfer: Transferable[]): Promise<WorkerResponse> {
    return new Promise((resolve, reject) => {
      this.queue.push({ resolve, reject, payload, transfer });
      this.drain();
    });
  }

  private drain(): void {
    while (this.idle.length > 0 && this.queue.length > 0) {
      const worker = this.idle.pop()!;
      const task = this.queue.shift()!;

      worker.onmessage = (e: MessageEvent<WorkerResponse | WorkerError>) => {
        this.idle.push(worker);
        if (e.data.ok) {
          task.resolve(e.data);
        } else {
          task.reject(new Error(e.data.error));
        }
        this.drain();
      };

      worker.onerror = (e: ErrorEvent) => {
        this.idle.push(worker);
        task.reject(e.error ?? new Error(e.message));
        this.drain();
      };

      worker.postMessage(task.payload, task.transfer);
    }
  }

  terminate(): void {
    for (const worker of this.workers) { worker.terminate(); }
  }
}

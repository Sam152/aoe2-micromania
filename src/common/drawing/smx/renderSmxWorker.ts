/// <reference lib="webworker" />

import { renderSmx } from "./renderSmx.ts";
import type { Pallet } from "./parsePallet.ts";
import { Buffer } from "buffer";

interface WorkerRequest {
  data: ArrayBuffer;
  palettes: Record<number, Pallet>;
  playersToRender: number[];
}

export interface FrameMeta {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  shadowCenterX: number;
  shadowCenterY: number;
  shadowIdx: number; // index into bitmaps[], -1 if no shadow
  playerIndices: Record<number, number>; // player id → index into bitmaps[]
}

export interface WorkerResponse {
  ok: true;
  frameMetadata: FrameMeta[];
  bitmaps: ImageBitmap[];
}

export interface WorkerError {
  ok: false;
  error: string;
}

self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  const { data, palettes, playersToRender } = e.data;
  try {
    const frames = await renderSmx({
      data: Buffer.from(data),
      palettes,
      playersToRender,
    });

    const bitmaps: ImageBitmap[] = [];
    const frameMetadata: FrameMeta[] = frames.map((frame) => {
      const shadowIdx = frame.shadow !== null ? bitmaps.push(frame.shadow) - 1 : -1;
      const playerIndices: Record<number, number> = {};
      for (const player of playersToRender) {
        playerIndices[player] = bitmaps.push(frame.renders[player]) - 1;
      }
      return {
        width: frame.width,
        height: frame.height,
        centerX: frame.centerX,
        centerY: frame.centerY,
        shadowCenterX: frame.shadowCenterX,
        shadowCenterY: frame.shadowCenterY,
        shadowIdx,
        playerIndices,
      };
    });

    self.postMessage({ ok: true, frameMetadata, bitmaps }, { transfer: bitmaps });
  } catch (err) {
    self.postMessage({ ok: false, error: String(err) });
  }
};

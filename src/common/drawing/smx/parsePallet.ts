import { Buffer } from "buffer";
export type Pallet = { version: string; numColors: number; colors: [number, number, number][] };

export function parsePallet(file: Buffer): Pallet {
  const lines = file.toString("ascii").split(/\r?\n/);
  const version = lines[1];
  const numColors = parseInt(lines[2], 10);
  const colors = Array.from({ length: numColors }, (_, i) => {
    const [r, g, b] = lines[i + 3].split(" ").map(Number);
    return [r, g, b] as [number, number, number];
  });
  return { version, numColors, colors };
}

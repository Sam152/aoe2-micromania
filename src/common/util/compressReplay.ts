import { GameStateAction } from "../../types.ts";

type CompressedT = { n: "COMPRESSED_T"; amount: number };
type CompressedEntry = GameStateAction | CompressedT;
export type CompressedReplay = CompressedEntry[];

export function compressReplay(actions: GameStateAction[]): CompressedReplay {
  const result: CompressedReplay = [];
  for (const action of actions) {
    const last = result.at(-1);
    if (action.n === "T" && last?.n === "COMPRESSED_T") {
      last.amount++;
    } else if (action.n === "T") {
      result.push({ n: "COMPRESSED_T", amount: 1 });
    } else {
      result.push(action);
    }
  }
  return result;
}

export function decompressReplay(compressed: CompressedReplay): GameStateAction[] {
  let tick = 0;
  return compressed.flatMap((entry) => {
    if (entry.n !== "COMPRESSED_T") {
      if (entry.n === "T") { tick = entry.t; }
      return [entry];
    }
    return Array.from({ length: entry.amount }, () => ({ n: "T" as const, t: ++tick }));
  });
}

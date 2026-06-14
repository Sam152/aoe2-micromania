export type Coinflip = "HEADS" | "TAILS";

export function coinflip(): Coinflip {
  return Math.random() < 0.5 ? "HEADS" : "TAILS";
}

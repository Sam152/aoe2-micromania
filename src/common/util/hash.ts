export function hash(n: number): number {
  return (n * 2654435761) >>> 0;
}

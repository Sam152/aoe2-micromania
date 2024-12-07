export async function inSequence<T extends unknown>(tasks: Promise<T>[]): Promise<T[]> {
  const results: T[] = [];
  for (const task of tasks) {
    results.push(await task);
  }
  return results;
}

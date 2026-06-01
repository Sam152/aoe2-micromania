export function memo<T>(func: () => T): () => T {
  let cached: T;
  return () => {
    if (typeof cached !== "undefined") {
      return cached;
    }
    cached = func();
    return cached;
  };
}

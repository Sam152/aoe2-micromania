type CachedLookup<T> = (key: string, computer: () => T) => T;

export function createMemoryCache<T>(): CachedLookup<T> {
  const cache: Map<string, T> = new Map();

  return (key: string, computer) => {
    if (cache.has(key)) {
      return cache.get(key) as T;
    }

    const value = computer();
    cache.set(key, value);
    return value;
  };
}

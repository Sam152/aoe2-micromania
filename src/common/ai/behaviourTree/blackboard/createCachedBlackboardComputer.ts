import { BlackboardComputer, blackboardComputer } from "./computeBlackboard.ts";
import { BlackboardKey } from "./blackboardDefinition.ts";

type AnyResolver = (params: any) => unknown;

export function createCachedBlackboardComputer(): BlackboardComputer {
  const cache = new Map<string, unknown>();

  const cachedEntries = (Object.keys(blackboardComputer) as BlackboardKey[]).map((key) => {
    const resolver = blackboardComputer[key] as AnyResolver;
    const cachedResolver: AnyResolver = (params) => {
      const cacheKey = `${key}:${JSON.stringify(params.params)}`;
      if (!cache.has(cacheKey)) {
        cache.set(cacheKey, resolver(params));
      }
      return cache.get(cacheKey);
    };
    return [key, cachedResolver];
  });

  return Object.fromEntries(cachedEntries) as BlackboardComputer;
}

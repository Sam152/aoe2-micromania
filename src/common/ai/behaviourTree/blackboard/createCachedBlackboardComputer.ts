import { BlackboardComputer, createBlackboardComputer } from "./computeBlackboard.ts";
import { BlackboardKey } from "./blackboardDefinition.ts";
import { ComputedTickState } from "../../../state/computed/createComputedTickState.ts";

type AnyResolver = (params: any) => unknown;

export function createCachedBlackboardComputer({ computed }: { computed: ComputedTickState }): BlackboardComputer {
  const cache = new Map<string, unknown>();
  const blackboardComputer = createBlackboardComputer({ computed });

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

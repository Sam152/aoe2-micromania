import { BlackboardDefinition, blackboardDefinition, BlackboardKey } from "../blackboardDefinition.ts";
import { ComputedTickState } from "../../../../state/computed/createComputedTickState.ts";
import { BlackboardValueResolverParams } from "../types/BlackboardDefinitionShape.ts";
import { TypeFromDataType } from "../../dataType/dataTypes.ts";

type AnyResolver = (params: any) => unknown;

export type BlackboardComputer = {
  [TKey in BlackboardKey]: (
    params: Omit<BlackboardValueResolverParams<BlackboardDefinition[TKey]["params"]>, "computed">,
  ) => TypeFromDataType<BlackboardDefinition[TKey]["dataType"]> | undefined;
};

export function createCachedBlackboardComputer({ computed }: { computed: ComputedTickState }): BlackboardComputer {
  const cache = new Map<string, unknown>();

  const cachedEntries = (Object.keys(blackboardDefinition) as BlackboardKey[]).map((key) => {
    const resolver = blackboardDefinition[key].resolve as AnyResolver;

    const cachedResolver: AnyResolver = (params) => {
      // Computed does not form part of the key, since this does not change over the course of a tick.
      const cacheKey = `${key}:${JSON.stringify(params.params)}`;
      if (!cache.has(cacheKey)) {
        cache.set(cacheKey, resolver({ ...params, computed }));
      }
      return cache.get(cacheKey);
    };
    return [key, cachedResolver];
  });

  return Object.fromEntries(cachedEntries) as BlackboardComputer;
}

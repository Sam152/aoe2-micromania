import { useEffect, useState } from "react";

type UseMemoAsyncState<T> = {
  value: T | null;
  error: Error | null;
  loading: boolean;
};

export function useMemoAsync<T>(
  asyncFunction: () => Promise<T>,
  defaultValue: T,
  dependencies: unknown[],
): [T, Error | null, boolean] {
  const [state, setState] = useState<UseMemoAsyncState<T>>({
    value: defaultValue,
    error: null,
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;
    setState({ value: defaultValue, error: null, loading: true });

    asyncFunction()
      .then((value) => {
        if (isMounted) setState({ value, error: null, loading: false });
      })
      .catch((error: Error) => {
        if (isMounted) setState({ value: defaultValue, error, loading: false });
      });

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return [state.value, state.error, state.loading];
}

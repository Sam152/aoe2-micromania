import { useMemo } from "react";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../server/trpc/router.ts";

export function useTrpc() {
  return useMemo(
    () =>
      createTRPCClient<AppRouter>({
        links: [
          httpBatchLink({ url: `/trpc` }),
        ],
      }),
    [],
  );
}

import { logger } from "../../server/logger.ts";

const DUMP_EVERY = 100;

/**
 * Sum up the total time between start and end.
 */
export type FrameBudgetCalculator = {
  start: () => void;
  end: () => void;
};

export function frameBudgetCalculator(): FrameBudgetCalculator {
  let totalRecordedTime = 0;
  let invocations = 0;
  let startedAt = 0;

  return {
    start: () => {
      invocations++;
      startedAt = performance.now();
    },
    end: () => {
      totalRecordedTime += performance.now() - startedAt;

      if (invocations % DUMP_EVERY === 0) {
        logger.info({
          message: "Frame budget computed",
          averageTickDuration: totalRecordedTime / DUMP_EVERY,
        });
        totalRecordedTime = 0;
      }
    },
  };
}

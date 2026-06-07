export const prodTrainingParams = {
  CPU_WORKER_COUNT: 4,
  TARGET_TOTAL_BOTS_IN_POOL: 500,
  ROUND_ROBIN_TOURNEY_SIZE: 50,
  // The percentage of bots that should be retired, making room for
  // the next generation.
  NEXT_GENERATION_CHURN_PERCENTAGE: 80,
  NEXT_GENERATION_RANDOM_MUTATIONS: 50,
};

export const testTrainingParams = {
  ...prodTrainingParams,
  TARGET_TOTAL_BOTS_IN_POOL: 25,
  ROUND_ROBIN_TOURNEY_SIZE: 5,
};

// export const trainingParams = prodTrainingParams;
export const trainingParams = testTrainingParams;

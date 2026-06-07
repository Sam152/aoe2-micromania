export const prod = {
  /**
   * How many workers should be fired up.
   */
  CPU_WORKER_COUNT: 4,
  /**
   * How many bots we should aim to keep in the active player pool.
   */
  TARGET_TOTAL_BOTS_IN_POOL: 500,
  /**
   * The number of bots that are entered into a round-robin tournament
   * according to their ELO.
   */
  TOURNEY_ROUND_ROBIN_SIZE: 50,
  /**
   * The number of passes through the tourney script which will be run, for
   * each evolution and pruning.
   */
  TOURNEY_MIN_TOURNEY_COUNT: 3,
  /**
   * The percentage of bots that should be retired when making room for
   * the next generation.
   */
  NEXT_GENERATION_CHURN_PERCENTAGE: 80,
  /**
   * How many mutations should be applied, when training a next
   * generation.
   */
  NEXT_GENERATION_RANDOM_MUTATIONS: 50,
  /**
   * The minimum number of games the active player pool need to have
   * played, before we can evolve a new generation.
   */
  NEXT_GENERATION_MINIMUM_GAMES_PLAYED: 30,
  /**
   * The number of games a bot must play, before it is eligible for
   * tree pruning. This should be enough games to exercise its full
   * tree.
   */
  PRUNING_MINIMUM_GAMES_COUNT: 30,
};

type Params = typeof prod;

/**
 * Scaled down params, so we can effectively test the harness.
 */
export const dev: Params = {
  CPU_WORKER_COUNT: 4,
  TARGET_TOTAL_BOTS_IN_POOL: 10,
  TOURNEY_ROUND_ROBIN_SIZE: 5,
  TOURNEY_MIN_TOURNEY_COUNT: 3,
  NEXT_GENERATION_CHURN_PERCENTAGE: 60,
  NEXT_GENERATION_RANDOM_MUTATIONS: 50,
  NEXT_GENERATION_MINIMUM_GAMES_PLAYED: 50,
  PRUNING_MINIMUM_GAMES_COUNT: 10,
};

export const params = prod;
// export const params: Params = dev;

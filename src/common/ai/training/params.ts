export const params = {
  /**
   * How many workers should be fired up.
   */
  CPU_WORKER_COUNT: 10,
  /**
   * Amount of HP a candidate tree must survive with against a champion to enter the pool.
   */
  CANDIDATE_TREE_REQUIRED_HP_AGAINST_CHAMPION: 30 * 10,
  /**
   * The maximum duration of a game in minutes.
   */
  MAX_GAME_TIME_MINUTES: 5,
  /**
   * How many mutations should be applied, when training a next
   * generation.
   */
  NEXT_GENERATION_RANDOM_MUTATIONS: 20,
  /**
   * How many iterations we should run before saying a hill has been climbed.
   */
  NEXT_GENERATION_MAXIMUM_ITERATIONS_UNTIL_QUIT: 1_500_000,
  /**
   * How many iterations before we start randomizing higher.
   */
  NEXT_GENERATION_RANDOM_MUTATIONS_ITERATION_COUNT_INCREASE_THRESHOLD: 50_000,
  /**
   * The minimum number of groups we should have, before attempting to borrow traits.
   * This is a lever to generate some amount of diversity in the pools, before building
   * more convergent trees.
   */
  TRAIT_BORROWING_MINIMUM_NUMBER_GROUPS: 10,
  /**
   * The N highest rated bots to borrow traits from.
   */
  TRAIT_BORROWING_HIGHEST_N_BOTS_TO_BORROW_FROM: 20,
  /**
   * Computer too strong microing 40 groups.
   */
  WHEEL_CLAMP_MAXIMUM_GROUP_SIZE_PER_UNIT_TYPE: 4,
};

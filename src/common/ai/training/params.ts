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
  NEXT_GENERATION_MAXIMUM_ITERATIONS_UNTIL_QUIT: 1000,
  /**
   * How many iterations before we start randomizing higher.
   */
  NEXT_GENERATION_RANDOM_MUTATIONS_ITERATION_COUNT_INCREASE_THRESHOLD: 50_000,
  /**
   * The number of round robins a generation will play, before a champion is crowned.
   */
  TOURNEY_ROUND_ROBIN_COUNT: 4,
  /**
   * How many iterations before looking at a prior generation.
   */
  BOT_SELECTION_ITERATION_BEFORE_LOOKING_AT_PRIOR_GENERATION: 100_000,
  /**
   * How many bots from prior generations to consider mutating from.
   */
  BOT_SELECTION_BOTS_PER_GENERATION_TO_CONSIDER: 3,
  /**
   * How many of the last n generations to borrow traits from.
   */
  TRAIT_BORROWING_FROM_LAST_N_GENERATIONS: 5,
  /**
   * Computer too strong microing 40 groups.
   */
  WHEEL_CLAMP_MAXIUM_GROUP_SIZE_PER_UNIT_TYPE: 4,
};

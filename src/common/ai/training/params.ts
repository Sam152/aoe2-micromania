export const params = {
  /**
   * How many workers should be fired up.
   */
  CPU_WORKER_COUNT: 10,
  /**
   * How many bots we should aim to keep in the active player pool.
   */
  TOTAL_BOTS_PER_GENERATION: 50,
  /**
   * The maximum duration of a game in minutes.
   */
  MAX_GAME_TIME_MINUTES: 3,
  /**
   * How many mutations should be applied, when training a next
   * generation.
   */
  NEXT_GENERATION_RANDOM_MUTATIONS: 4,
  /**
   * How many games must be played, before we increase the number of random mutations.
   */
  NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT: 5_000,
  /**
   * The number of round robins a generation will play, before a champion is crowned.
   */
  TOURNEY_ROUND_ROBIN_COUNT: 5,
};

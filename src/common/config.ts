const tileWidth = 96;
const tileHeight = 48;

export const config = {
  /**
   * If the game should render debug information.
   */
  debug: false,
  /**
   * A constant used in some calculations for converting unit/game stats into real-time.
   */
  gameSpeed: 1.7,
  /**
   * The number of ticks per second that should be executed to advance the game state.
   */
  ticksPerSecond: 20,
  /**
   * A constant, multiplied by unit speed statistics to make them feel correct.
   */
  unitSpeedFactor: 4.25,
  /**
   * A constant, multiplied by unit range statistics to make them feel correct.
   */
  unitRangeFactor: 1.5,
  /**
   * The factory by which units may travel faster than their actual speed, in order to get into formation.
   */
  maximumReformSpeedFactor: 1.75,
  /**
   * When moving, how much of the journey it should take to reform units.
   */
  movingReformDistance: 100,
  /**
   * Tile dimensions.
   */
  tileWidth: 96,
  tileHeight: 48,
  tileGameStatsLength: Math.hypot(tileWidth / 2, tileHeight / 2),
  /**
   * How much of the isometric vertical squash to correct for when measuring the ground.
   * 1 corrects it fully, so a tile measures the same in every direction; 0 not at all, so
   * distances are raw screen pixels. A tile step measures the same at any setting, so this
   * only trades reach and pace between the vertical and horizontal, never overall.
   */
  perspectiveCorrection: 0.3,
  /**
   * How fast the camera should pan.
   */
  cameraPanSpeed: 10,
  /**
   * Asset base URL.
   */
  assetBaseUrl: "",
};

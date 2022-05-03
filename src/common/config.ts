const config = {
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
    unitSpeedFactor: 5,
    /**
     * The factory by which units may travel faster than their actual speed, in order to get into formation.
     */
    maximumReformSpeedFactor: 1.5,
    /**
     * When moving, how much of the journey it should take to reform units.
     */
    movingReformDistance: 150,
    /**
     * Tile dimensions.
     */
    tileWidth: 98,
    tileHeight: 48,
    /**
     * The length of a single tile as far as the game statistics are concerned.
     */
    tileGameStatsLength: 99,
    /**
     * How fast the camera should pan.
     */
    cameraPanSpeed: 3,
};

export default config;

/**
 * Compass directions.
 *
 * These correlate to the location of the frames in SLP assets that represent a unit
 * looking in a specific direction. When a value is negative, it must be flipped on
 * the horizontal axis and rendered as with its absolute counterpart.
 */
enum CompassDirection {
    South = 0,
    SouthWest = 1,
    West = 2,
    NorthWest = 3,
    North = 4,

    SouthEast = -1,
    East = -2,
    NorthEast = -3,
}

export default CompassDirection;

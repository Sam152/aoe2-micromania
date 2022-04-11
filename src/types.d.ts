interface GamePosition {
    x: number;
    y: number;
}

interface ScreenPosition {
    x: number;
    y: number;
}

interface Unit {
    position: GamePosition;
    movingTo: GamePosition | null;
}

interface Projectile {

}

interface Player {

}

interface GameState {
    units: Unit[];
    projectiles: Projectile[];
    players: Player[];
}

type GameStateAction = {
    name: "TICK";
} | {
    name: "SPAWN_UNIT";
    position: GamePosition;
};

interface ClientState {

}

type ClientStateAction = {
    name: "DRAG_START",
    position: ScreenPosition,
} | {
    name: "DRAG_END",
    position: ScreenPosition,
};

interface StateManagerInterface {
    dispatchGame(action: GameStateAction): void;
    dispatchClient(action: ClientStateAction): void;
    getGameState(): GameState;
    getClientState(): ClientState;
}

export {
    GameState,
    GameStateAction,
    ClientState,
    ClientStateAction,
    StateManagerInterface,
}

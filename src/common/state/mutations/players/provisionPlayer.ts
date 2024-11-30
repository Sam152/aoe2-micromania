import {GameState, GameStateAction} from "../../../../types";
import spawnUnit from "../initiated/spawnUnit";
import Unit from "../../../units/Unit";
import Grid from "../../../terrain/Grid";

export default function provisionPlayer(state: GameState, action: Extract<GameStateAction, {
    n: 'CLIENT_LOADED_WITH_ID'
}>) {
    if (state.activePlayers[action.playerId]) {
        return;
    }

    const newPlayerNumber = getPlayerNumber(state.activePlayers);
    state.activePlayers[action.playerId] = newPlayerNumber;

    const grid = new Grid(state.mapSize);
    spawnUnit(state, {
        forPlayer: newPlayerNumber,
        unitType: Unit.Mangonel,
        position: grid.middleOfTile(7, 2),
    });
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            spawnUnit(state, {
                forPlayer: newPlayerNumber,
                unitType: Unit.Archer,
                position: grid.middleOfTile(x, y),
            });
        }
    }

}

function getPlayerNumber(activePlayers: Record<string, number>): number {
    const usedNumbers = Object.values(activePlayers);
    for (let i = 1; i <= 8; i++) {
        if (!usedNumbers.includes(i)) {
            return i;
        }
    }
    throw new Error('Could not assign a player number');
}
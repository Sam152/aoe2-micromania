import {GameStateAction} from '../../types';
import * as fs from 'fs';
import generateId from '../../common/util/generateId';

export default class RecordedGame {
    private players: Array<string>;
    private actions: Array<GameStateAction>;
    private startTime: number;
    private endTime: number;

    constructor(players: Array<string>) {
        this.players = players;
        this.startTime = (new Date()).getTime();
        this.actions = [];
    }

    pushAction(action: GameStateAction) {
        this.actions.push(action);
    }

    completeRecording() {
        this.endTime = (new Date()).getTime();

        const metadata = {
            engineVersion: 1,
            id: `${this.endTime}-${generateId(6)}`,
            players: this.players,
            start: this.startTime,
            end: this.endTime,
        };

        const rec = {
            ...metadata,
            actions: this.actions,
        };

        fs.writeFile(
            `${process.env.RECORDED_GAMES_DIRECTORY || '../game-recs'}/${metadata.id}.json`,
            JSON.stringify(rec),
            (err) => err && console.log(err),
        );
        fs.writeFile(
            `${process.env.RECORDED_GAMES_DIRECTORY || '../game-recs'}/${metadata.id}.metadata.json`,
            JSON.stringify(metadata),
            (err) => err && console.log(err),
        );
    }
}

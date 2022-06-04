import Sound from "./Sound";
import randomArray from "../util/randomArray";
import {Howl, Howler} from 'howler';

type SoundMap = {
    [key: string]: {
        canOverlap: boolean;
        maxFromOneTick?: number;
        files: Array<string>;
    }
};

class SoundPlayer {

    private audio: { [key: string]: Howl };

    private soundMap: SoundMap = {
        [Sound.ArrowFired]: {
            canOverlap: true,
            maxFromOneTick: 4,
            files: [
                'de/355890077',
                'de/144052104',
                'de/198714463',
                'de/911617070',
                'de/299825583',
                'de/1017455268',
            ],
        },
        [Sound.SoldierMoved]: {
            canOverlap: false,
            files: [
                'hd/6275',
                'hd/6276',
                'hd/6277',
            ]
        },
        [Sound.SoldierSelected]: {
            canOverlap: false,
            files: [
                'hd/6278',
                'hd/6279',
                'hd/6280',
            ],
        },
        [Sound.SoldierAttack]: {
            canOverlap: false,
            files: [
                'hd/6271',
                'hd/6272',
                'hd/6273',
                'hd/6274',
            ],
        },
        [Sound.SoldierFallen]: {
            canOverlap: true,
            maxFromOneTick: 6,
            files: [
                'hd/5309',
                'hd/5310',
                'hd/5311',
                'hd/5312',
                'hd/5313',
                'hd/5314',
            ],
        },

        [Sound.MangonelFired]: {
            canOverlap: true,
            maxFromOneTick: 4,
            files: [
                'de/1042749072',
                'de/1030796533',
                'de/37765250',
            ],
        },
        [Sound.MangonelMoved]: {
            canOverlap: false,
            files: [
                'de/949628994',
                'de/450918993',
            ],
        },
        [Sound.MangonelDestroyed]: {
            canOverlap: true,
            files: [
                'de/576386269',
            ],
        },

        [Sound.RocksLanded]: {
            canOverlap: true,
            files: [
                'de/1034594737',
                'de/270594082',
            ],
        },
    };
    private framePlayCounts: {[key: string]: number} = {};

    constructor() {
        this.audio = {};
        Object.keys(this.soundMap).forEach(soundType => {
            this.soundMap[soundType].files.forEach(soundFile => {
                const type = soundFile.indexOf('de/') !== -1 ? 'ogg' : 'wav';

                this.audio[soundFile] = new Howl({
                    src: `/sounds/${soundFile}.${type}`,
                    pool: 30,
                });
            });
        });
    }

    play(sound: Sound) {
        this.framePlayCounts[sound] = this.framePlayCounts[sound] ? this.framePlayCounts[sound] + 1 : 1;

        const soundMetadata = this.soundMap[sound];
        const soundFile = randomArray(soundMetadata.files);
        const audioElement = this.audio[soundFile];

        if (soundMetadata.canOverlap) {
            if (this.framePlayCounts[sound] < soundMetadata.maxFromOneTick || typeof soundMetadata.maxFromOneTick === 'undefined') {
                audioElement.play();
            }
        }
        else {
            soundMetadata.files.map(file => this.audio[file]).map(element => element.pause());
            audioElement.seek(0);
            audioElement.play();
        }
    }

    playSounds(sounds: Sound[]) {
        this.framePlayCounts = {};
        sounds.map(sound => this.play(sound));
    }

}

const soundPlayer = new SoundPlayer();
export default soundPlayer;

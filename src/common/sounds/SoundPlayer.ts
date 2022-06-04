import Sound from "./Sound";
import randomArray from "../util/randomArray";

type SoundMap = {
    [key: string]: {
        canOverlap: boolean;
        maxFromOneTick?: number;
        files: Array<string>;
    }
};

class SoundPlayer {

    private audio: { [key: string]: HTMLAudioElement };
    private playing: { [key: string]: HTMLAudioElement } = {};

    private soundMap: SoundMap = {
        [Sound.ArrowFired]: {
            canOverlap: true,
            maxFromOneTick: 3,
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
        [Sound.MangonelFired]: {
            canOverlap: true,
            maxFromOneTick: 2,
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
    };
    private framePlayCounts: {[key: string]: number} = {};

    constructor() {
        this.audio = {};
        Object.keys(this.soundMap).forEach(soundType => {
            this.soundMap[soundType].files.forEach(soundFile => {
                const type = soundFile.indexOf('de/') !== -1 ? 'ogg' : 'wav';
                this.audio[soundFile] = new Audio(`/sounds/${soundFile}.${type}`);
            });
        });
    }

    play(sound: Sound) {
        this.framePlayCounts[sound] = this.framePlayCounts[sound] ? this.framePlayCounts[sound] + 1 : 1;

        const soundMetadata = this.soundMap[sound];
        const soundFile = randomArray(soundMetadata.files);
        const audioElement = this.audio[soundFile];

        if (soundMetadata.canOverlap) {
            if (this.framePlayCounts[sound] < soundMetadata.maxFromOneTick) {
                (audioElement.cloneNode()  as HTMLAudioElement).play();
            }
        }
        else {
            soundMetadata.files.map(file => file in this.playing ? this.playing[file] : null).filter(elem => elem).map(element => element.pause());
            // Work around a bug in chrome, where .ogg files cannot be seeked and replayed.
            this.playing[soundFile] = audioElement.cloneNode() as HTMLAudioElement;
            this.playing[soundFile].play();
        }
    }

    playSounds(sounds: Sound[]) {
        this.framePlayCounts = {};
        sounds.map(sound => this.play(sound));
    }

}

const soundPlayer = new SoundPlayer();
export default soundPlayer;

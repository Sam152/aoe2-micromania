import Sound from "./Sound";

class SoundManager {

    private audio: {[key: string]: HTMLAudioElement};
    private soundMap: {[key: string]: Array<string>} = {
        [Sound.ArrowFired]: [
            'de/355890077',
            'de/144052104',
            'de/198714463',
            'de/911617070',
            'de/299825583',
            'de/1017455268',
        ],
        [Sound.ArcherMoved]: [
            'hd/6275',
            'hd/6276',
            'hd/6277',
        ],
        [Sound.ArcherSelected]: [
            'hd/6278',
            'hd/6279',
            'hd/6280',
        ],
        [Sound.ArcherAttack]: [
            'hd/6271',
            'hd/6272',
            'hd/6273',
            'hd/6274',
        ],

        [Sound.MangonelFired]: [
            'de/1042749072',
            'de/1030796533',
            'de/37765250',
        ],
        [Sound.MangonelMoved]: [
            'de/949628994',
            'de/450918993',
        ],
    };

    constructor() {
        this.audio = {};
        Object.keys(this.soundMap).forEach(soundType => {
            this.soundMap[soundType].forEach(soundFile => {
                const type = soundFile.indexOf('de/') !== -1 ? 'ogg' : 'wav';
                this.audio[soundFile] = new Audio(`/sounds/${soundFile}.${type}`);
            });
        });
    }

    play(sound: Sound) {
        const soundFile = this.soundMap[sound][Math.floor(Math.random()*this.soundMap[sound].length)];
        const audioElement = this.audio[soundFile];

        // @ts-ignore
        audioElement.cloneNode().play();
    }

    playSounds(sounds: Sound[]) {
        sounds.map(sound => this.play(sound));
    }

}

const soundManager = new SoundManager();
export default soundManager;

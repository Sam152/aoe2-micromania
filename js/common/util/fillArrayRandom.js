import arrayOfSize from './arrayOfSize';
export default function fillArrayRandom(start, end, length) {
    return arrayOfSize(length)
        .map(function () { return (Math.floor((Math.random() * (end - start + 1)) + start)); });
}
//# sourceMappingURL=fillArrayRandom.js.map
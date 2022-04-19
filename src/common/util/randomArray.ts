import arrayOfSize from "./arrayOfSize";

export default function randomArray(start: number, end: number, length: number): Array<number> {
    return arrayOfSize(length)
        .map(() => (
            Math.floor((Math.random() * (end - start + 1)) + start)
        ));
}

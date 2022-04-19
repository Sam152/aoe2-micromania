export default function arrayOfSize(size: number): Array<number> {
    return Array.from(
        Array.from(Array(Math.ceil(size))).keys(),
    );
}

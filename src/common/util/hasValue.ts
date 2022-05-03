export default function hasValue(input: any) {
    if (Array.isArray(input)) {
        return input.length !== 0;
    }
    return input !== null &&
        input !== undefined;
}

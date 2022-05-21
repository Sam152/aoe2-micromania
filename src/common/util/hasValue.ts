export default function hasValue(input: any): boolean {
    if (Array.isArray(input)) {
        return input.length !== 0;
    }
    return input !== null &&
        input !== undefined;
}

export function hasScalarValue(input: any): boolean {
    return input !== null &&
        input !== undefined;
}

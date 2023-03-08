export default function hasValue(input) {
    if (Array.isArray(input)) {
        return input.length !== 0;
    }
    return input !== null &&
        input !== undefined;
}
export function hasScalarValue(input) {
    return input !== null &&
        input !== undefined;
}
//# sourceMappingURL=hasValue.js.map
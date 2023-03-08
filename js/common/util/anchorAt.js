export default function anchorAt(hotspot, position, flipped) {
    if (flipped === void 0) { flipped = false; }
    return {
        x: position.x - (hotspot.x * (flipped ? -1 : 1)),
        y: position.y - hotspot.y
    };
}
//# sourceMappingURL=anchorAt.js.map
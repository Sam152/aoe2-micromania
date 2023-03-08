export default function pointInRect(rect, position) {
    return (position.x > rect.p1.x && position.x < rect.p2.x &&
        position.y > rect.p1.y && position.y < rect.p2.y);
}
//# sourceMappingURL=pointInRect.js.map
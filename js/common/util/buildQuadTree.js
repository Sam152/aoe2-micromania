import { quadtree } from 'd3-quadtree';
function accessX(unit) {
    return unit.position.x;
}
function accessY(unit) {
    return unit.position.y;
}
export default function buildQuadTree(units) {
    var tree = createUnitQuadtree();
    tree.addAll(units);
    return tree;
}
export function createUnitQuadtree() {
    var tree = quadtree();
    tree.x(accessX);
    tree.y(accessY);
    return tree;
}
//# sourceMappingURL=buildQuadTree.js.map
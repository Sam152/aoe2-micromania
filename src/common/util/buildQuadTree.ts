import {UnitInstance} from '../../types';
import {Quadtree, quadtree} from 'd3-quadtree';

function accessX(unit: UnitInstance) {
    return unit.position.x;
}
function accessY(unit: UnitInstance) {
    return unit.position.y;
}

export default function buildQuadTree(units: Array<UnitInstance>): Quadtree<UnitInstance> {
    const tree = createUnitQuadtree();
    tree.addAll(units);
    return tree;
}

export function createUnitQuadtree(): Quadtree<UnitInstance> {
    const tree = quadtree<UnitInstance>();
    tree.x(accessX);
    tree.y(accessY);
    return tree;
}

import {UnitInstance} from "../../types";
import {Quadtree, quadtree} from "d3-quadtree";

export default function buildQuadTree(units: Array<UnitInstance>): Quadtree<UnitInstance> {
    const tree = quadtree<UnitInstance>();
    tree.x((unit: UnitInstance) => unit.position.x);
    tree.y((unit: UnitInstance) => unit.position.y);
    tree.addAll(units);
    return tree;
}

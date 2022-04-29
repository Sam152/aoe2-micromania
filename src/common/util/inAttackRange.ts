import {Vector2} from "three";
import config from "../config";
import unitMetadataFactory from "../units/unitMetadataFactory";
import {UnitInstance} from "../../types";

export default function inAttackRange(unit: UnitInstance, position: Vector2) {
    const unitData = unitMetadataFactory.getUnit(unit.unitType);
    return unit.position.distanceTo(position) < unitData.attackRange * config.tileGameStatsLength;
}
import { Vector2 } from "three/src/math/Vector2";
import config from "../config";
import unitMetadataFactory from "../units/unitMetadataFactory";
import { UnitInstance } from "../../types";

export default function inAttackRange(unit: UnitInstance, position: Vector2): boolean {
  return unit.position.distanceTo(position) < getAttackRange(unit);
}

export function getAttackRange(unit: UnitInstance) {
  const unitData = unitMetadataFactory.getUnit(unit.unitType);
  return unitData.attackRange * config.tileGameStatsLength;
}

export function inMinimumRange(unit: UnitInstance, position: Vector2): boolean {
  const unitData = unitMetadataFactory.getUnit(unit.unitType);
  return unit.position.distanceTo(position) < unitData.attackMinRange * config.tileGameStatsLength;
}

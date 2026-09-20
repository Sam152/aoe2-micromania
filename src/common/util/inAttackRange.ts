import { Vector2 } from "three/src/math/Vector2.js";
import { config } from "../config.ts";
import { unitMetadataFactory } from "../units/unitMetadataFactory.ts";
import { UnitInstance } from "../../types.ts";
import { worldDistance } from "./worldDistance.ts";

export function inAttackRange(unit: UnitInstance, position: Vector2): boolean {
  return worldDistance(unit.position, position) < getAttackRange(unit);
}

export function getAttackRange(unit: UnitInstance) {
  const unitData = unitMetadataFactory.getUnit(unit.unitType);
  return unitData.attackRange * config.tileGameStatsLength * config.unitRangeFactor;
}

export function inMinimumRange(unit: UnitInstance, position: Vector2): boolean {
  const unitData = unitMetadataFactory.getUnit(unit.unitType);
  return worldDistance(unit.position, position) < unitData.attackMinRange * config.tileGameStatsLength;
}

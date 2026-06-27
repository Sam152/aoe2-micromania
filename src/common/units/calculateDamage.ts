import { UnitType } from "./UnitType.ts";
import { unitMetadataFactory } from "./unitMetadataFactory.ts";

export function calculateDamage(attacking: UnitType, receiving: UnitType) {
  const attackingMetadata = unitMetadataFactory.getUnit(attacking);
  const receivingMetadata = unitMetadataFactory.getUnit(receiving);

  const armour = receivingMetadata.armor[attackingMetadata.damageType];

  return Math.max(1, attackingMetadata.attackDamage - armour);
}

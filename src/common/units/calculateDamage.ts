import { Unit } from "./Unit.ts";
import { unitMetadataFactory } from "./unitMetadataFactory.ts";

export function calculateDamage(attacking: Unit, receiving: Unit) {
  const attackingMetadata = unitMetadataFactory.getUnit(attacking);
  const receivingMetadata = unitMetadataFactory.getUnit(receiving);

  const armour = receivingMetadata.armor[attackingMetadata.damageType];

  return Math.max(1, attackingMetadata.attackDamage - armour);
}

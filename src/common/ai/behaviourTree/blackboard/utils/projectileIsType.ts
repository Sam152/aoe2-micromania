import { ProjectileInstance } from "../../../../../types.ts";
import { ProjectileType as BlackboardProjectileType } from "../../dataType/catalog/projectileType.ts";
import { ProjectileType } from "../../../../units/ProjectileType.ts";

const map = {
  "MANGO_ROCK": ProjectileType.Rock,
  "ARROW": ProjectileType.Arrow,
};

export function projectileIsType(projectile: ProjectileInstance, type: BlackboardProjectileType): boolean {
  return projectile.type === map[type];
}

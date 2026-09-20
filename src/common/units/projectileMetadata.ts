import { ProjectileType } from "./ProjectileType.ts";

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export const projectileMetadata: PartialRecord<
  ProjectileType,
  {
    speedInTiles: number;
    asset: string;
    frames: Array<number>;
    damageIsAreaOfEffect: boolean;
  }
> = {
  [ProjectileType.Arrow]: {
    speedInTiles: 0.5,
    asset: "projectiles/p_arrow_x1",
    frames: [97],
    damageIsAreaOfEffect: false,
  },
  [ProjectileType.Rock]: {
    speedInTiles: 0.25,
    asset: "projectiles/p_mangonel_x1",
    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    damageIsAreaOfEffect: true,
  },
};

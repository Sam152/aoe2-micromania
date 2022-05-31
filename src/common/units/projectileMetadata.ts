import ProjectileType from './ProjectileType';

const projectileMetadata: {
    [key in ProjectileType]: {
        speed: number;
        asset: string;
        frames: Array<number>;
        damageIsAreaOfEffect: boolean;
    }
} = {
    [ProjectileType.Arrow]: {
        speed: 30,
        asset: 'projectiles/p_arrow_x1',
        frames: [98],
        damageIsAreaOfEffect: false,
    },
    [ProjectileType.Rock]: {
        speed: 15,
        asset: 'projectiles/p_mangonel_x1',
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        damageIsAreaOfEffect: true,
    },
};

export default projectileMetadata;

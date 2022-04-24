import ProjectileType from './ProjectileType';

const projectileMetadata: {
    [key in ProjectileType]: {
        speed: number;
        asset: string;
        frames: Array<number>;
    }
} = {
    [ProjectileType.Arrow]: {
        speed: 30,
        asset: 'projectiles/arrow',
        frames: [10],
    },
    [ProjectileType.Rock]: {
        speed: 15,
        asset: 'projectiles/rocks',
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
};

export default projectileMetadata;

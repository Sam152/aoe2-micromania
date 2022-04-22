import ProjectileType from "./ProjectileType";

const projectileMetadata: {
    [key in ProjectileType]: {
        speed: number;
        asset: string;
        frames: Array<number>;
    }
} = {
    [ProjectileType.Arrow]: {
        speed: 30,
        asset: 'arrow',
        frames: [10],
    },
    [ProjectileType.Rock]: {
        speed: 10,
        asset: 'rocks',
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
};

export default projectileMetadata;

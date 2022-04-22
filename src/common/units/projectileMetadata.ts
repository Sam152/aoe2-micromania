import ProjectileType from "./ProjectileType";

const projectileMetadata: {
    [key in ProjectileType]: {
        speed: number;
        asset: string;
    }
} = {
    [ProjectileType.Arrow]: {
        speed: 30,
        asset: 'arrow',
    },
    [ProjectileType.Rock]: {
        speed: 10,
        asset: 'rocks',
    },
};

export default projectileMetadata;

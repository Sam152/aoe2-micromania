import ProjectileType from "./ProjectileType";

const projectileMetadata: {
    [key in ProjectileType]: {
        speed: number;
    }
} = {
    [ProjectileType.Arrow]: {
        speed: 30,
    },
    [ProjectileType.Rock]: {
        speed: 10,
    },
};

export default projectileMetadata;

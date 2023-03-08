var _a;
import ProjectileType from './ProjectileType';
var projectileMetadata = (_a = {},
    _a[ProjectileType.Arrow] = {
        speed: 30,
        asset: 'projectiles/arrow',
        frames: [10],
        damageIsAreaOfEffect: false
    },
    _a[ProjectileType.Rock] = {
        speed: 15,
        asset: 'projectiles/rocks',
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        damageIsAreaOfEffect: true
    },
    _a);
export default projectileMetadata;
//# sourceMappingURL=projectileMetadata.js.map
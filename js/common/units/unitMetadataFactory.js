var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a, _b, _c;
import Unit from './Unit';
import UnitState from './UnitState';
import AnimationStyle from './AnimationStyle';
import ProjectileType from './ProjectileType';
import { Vector2 } from 'three/src/math/Vector2';
var unitDefinitions = (_a = {},
    _a[Unit.Archer] = {
        firesProjectileType: ProjectileType.Arrow,
        attackFrameDelay: 0.35,
        reloadTime: 2,
        movementRate: 0.96,
        hitPoints: 30,
        attackRange: 6,
        attackMinRange: 0,
        attackDamage: 4,
        areaOfEffect: null,
        firingAnchor: new Vector2(14, -24),
        selectionRadius: 15,
        hitBox: {
            p1: new Vector2(-10, -35),
            p2: new Vector2(10, 10)
        },
        hitPointsBarAnchor: -49,
        animations: (_b = {},
            _b[UnitState.Idle] = {
                slp: 'units/xbow-stand',
                animationDuration: 2,
                style: AnimationStyle.Loop
            },
            _b[UnitState.Firing] = {
                slp: 'units/xbow-firing',
                animationDuration: 0.7,
                style: AnimationStyle.Play
            },
            _b[UnitState.Moving] = {
                slp: 'units/xbow-moving',
                animationDuration: 1,
                style: AnimationStyle.Loop
            },
            _b[UnitState.Falling] = {
                slp: 'units/xbow-death',
                animationDuration: 1,
                style: AnimationStyle.Play
            },
            _b[UnitState.Decaying] = {
                slp: 'units/xbow-decay',
                animationDuration: 20,
                style: AnimationStyle.Play
            },
            _b)
    },
    _a[Unit.Mangonel] = {
        attackFrameDelay: 0,
        reloadTime: 6,
        movementRate: 0.6,
        hitPoints: 50,
        attackRange: 7,
        attackMinRange: 3,
        attackDamage: 40,
        areaOfEffect: [
            { distanceFromTarget: 30, percentageOfAttack: 1 },
            { distanceFromTarget: 100, percentageOfAttack: 0.5 },
        ],
        firesProjectileType: ProjectileType.Rock,
        firingAnchor: new Vector2(0, -30),
        selectionRadius: 50,
        hitBox: {
            p1: new Vector2(-30, -40),
            p2: new Vector2(30, 30)
        },
        hitPointsBarAnchor: -55,
        animations: (_c = {},
            _c[UnitState.Idle] = {
                slp: 'units/mangonel-stand',
                animationDuration: 2,
                style: AnimationStyle.Loop
            },
            _c[UnitState.Firing] = {
                slp: 'units/mangonel-firing',
                animationDuration: 1,
                style: AnimationStyle.Play
            },
            _c[UnitState.Moving] = {
                slp: 'units/mangonel-moving',
                underSlp: 'units/mangonel-stand',
                animationDuration: 1,
                style: AnimationStyle.Loop
            },
            _c[UnitState.Falling] = {
                slp: 'units/mangonel-death',
                animationDuration: 1,
                style: AnimationStyle.Play
            },
            _c[UnitState.Decaying] = {
                slp: 'units/mangonel-decay',
                animationDuration: 20,
                style: AnimationStyle.Play
            },
            _c)
    },
    _a);
var UnitMetadata = (function () {
    function UnitMetadata() {
        var _this = this;
        this.units = {};
        this.units = {};
        Object.keys(unitDefinitions).forEach(function (unit) {
            _this.units[unit] = __assign({}, unitDefinitions[unit]);
        });
    }
    UnitMetadata.prototype.getUnit = function (unit) {
        return this.units[unit];
    };
    return UnitMetadata;
}());
var unitMetadataFactory = new UnitMetadata();
export default unitMetadataFactory;
//# sourceMappingURL=unitMetadataFactory.js.map
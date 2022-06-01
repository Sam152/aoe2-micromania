import Unit from './Unit';
import UnitState from './UnitState';
import {UnitStats} from '../../types';
import AnimationStyle from './AnimationStyle';
import ProjectileType from './ProjectileType';
import {Vector2} from 'three/src/math/Vector2';
import DamageType from "./DamageType";

/**
 * Definitions of units, mapped from AOC JSON file:
 * @code
 * attackFrameDelay: parseFloat(aocData.ad),
 * reloadTime: parseFloat(aocData.fr),
 * movementRate: parseFloat(aocData.mr),
 * hitPoints: parseFloat(aocData.hp),
 * attackRange: parseFloat(aocData.ra),
 * attackDamage: parseFloat(aocData.at),
 * @endcode
 */
const unitDefinitions: {
    [key in Unit]: UnitStats
} = {
    [Unit.Archer]: {
        firesProjectileType: ProjectileType.Arrow,
        attackFrameDelay: 0.35,
        reloadTime: 2,
        movementRate: 0.96,
        hitPoints: 30,
        attackRange: 6,
        attackMinRange: 0,
        attackDamage: 4,
        damageType: DamageType.Pierce,
        armor: {
            [DamageType.Pierce]: 0,
            [DamageType.Melee]: 0,
        },
        areaOfEffect: null,
        firingAnchor: new Vector2(14, -24),
        selectionRadius: 15,
        hitBox: 10,
        hitPointsBarAnchor: -49,
        animations: {
            [UnitState.Idle]: {
                slp: 'units/u_arc_crossbowman_idleA_x1',
                animationDuration: 2,
                style: AnimationStyle.Loop,
            },
            [UnitState.Firing]: {
                slp: 'units/u_arc_crossbowman_attackA_x1',
                animationDuration: 0.7,
                style: AnimationStyle.Play,
            },
            [UnitState.Moving]: {
                slp: 'units/u_arc_crossbowman_walkA_x1',
                animationDuration: 1,
                style: AnimationStyle.Loop,
            },
            [UnitState.Falling]: {
                slp: 'units/u_arc_crossbowman_deathA_x1',
                animationDuration: 1,
                style: AnimationStyle.Play,
            },
            [UnitState.Decaying]: {
                slp: 'units/u_arc_crossbowman_decayA_x1',
                animationDuration: 60,
                style: AnimationStyle.Play,
            },
        },
    },
    [Unit.Mangonel]: {
        attackFrameDelay: 0,
        reloadTime: 6,
        movementRate: 0.6,
        hitPoints: 50,
        attackRange: 7,
        attackMinRange: 3,
        attackDamage: 40,
        damageType: DamageType.Pierce,
        armor: {
            [DamageType.Pierce]: 6,
            [DamageType.Melee]: 0,
        },
        areaOfEffect: [
            {distanceFromTarget: 30, percentageOfAttack: 1},
            {distanceFromTarget: 100, percentageOfAttack: 0.5},
        ],
        firesProjectileType: ProjectileType.Rock,
        firingAnchor: new Vector2(0, -30),
        selectionRadius: 50,
        hitBox: 30,
        hitPointsBarAnchor: -55,
        animations: {
            [UnitState.Idle]: {
                slp: 'units/u_sie_mangonel_idleA_x1',
                animationDuration: 2,
                style: AnimationStyle.Loop,
            },
            [UnitState.Firing]: {
                slp: 'units/u_sie_mangonel_attackA_x1',
                animationDuration: 1,
                style: AnimationStyle.Play,
            },
            [UnitState.Moving]: {
                slp: 'units/u_sie_mangonel_walkA_x1',
                animationDuration: 5,
                style: AnimationStyle.Loop,
            },
            [UnitState.Falling]: {
                slp: 'units/u_sie_mangonel_deathA_x1',
                animationDuration: 1,
                style: AnimationStyle.Play,
            },
            [UnitState.Decaying]: {
                slp: 'units/u_sie_mangonel_decayA_x1',
                animationDuration: 60,
                style: AnimationStyle.Play,
            },
        },
    },
};

class UnitMetadata {
    units: Partial<{
        [key in Unit]: UnitStats;
    }> = {};

    constructor() {
        this.units = {};
        (Object.keys(unitDefinitions) as unknown as Unit[]).forEach((unit) => {
            this.units[unit] = {
                // Compute any required properties.
                ...unitDefinitions[unit],
            };
        });
    }

    getUnit(unit: Unit): UnitStats {
        return this.units[unit];
    }
}

const unitMetadataFactory = new UnitMetadata();
export default unitMetadataFactory;

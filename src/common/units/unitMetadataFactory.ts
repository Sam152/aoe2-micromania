import Unit from './Unit';
import UnitState from './UnitState';
import {UnitStats} from '../../types';
import AnimationStyle from './AnimationStyle';
import ProjectileType from "./ProjectileType";
import {Vector2} from "three";

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
        attackDamage: 4,
        firingAnchor: new Vector2(14, -24),
        selectionRadius: 20,
        animations: {
            [UnitState.Idle]: {
                slp: 'units/xbow-stand',
                animationDuration: 2,
                style: AnimationStyle.Loop,
            },
            [UnitState.Firing]: {
                slp: 'units/xbow-firing',
                animationDuration: 0.7,
                style: AnimationStyle.Play,
            },
            [UnitState.Moving]: {
                slp: 'units/xbow-moving',
                animationDuration: 1,
                style: AnimationStyle.Loop,
            },
            [UnitState.Falling]: {
                slp: 'units/xbow-death',
                animationDuration: 1,
                style: AnimationStyle.Play,
            },
            [UnitState.Decaying]: {
                slp: 'units/xbow-decay',
                animationDuration: 20,
                style: AnimationStyle.Play,
            },
        },
    },
    [Unit.Mangonel]: {
        attackFrameDelay: 0,
        reloadTime: 6,
        movementRate: 0.6,
        hitPoints: 50,
        attackRange: 7, // minimum 3?
        attackDamage: 40,
        firesProjectileType: ProjectileType.Rock,
        firingAnchor: new Vector2(0, -30),
        selectionRadius: 50,
        animations: {
            [UnitState.Idle]: {
                slp: 'units/mangonel-stand',
                animationDuration: 2,
                style: AnimationStyle.Loop,
            },
            [UnitState.Firing]: {
                slp: 'units/mangonel-firing',
                animationDuration: 1,
                style: AnimationStyle.Play,
            },
            [UnitState.Moving]: {
                slp: 'units/mangonel-moving',
                underSlp: 'units/mangonel-stand',
                animationDuration: 1,
                style: AnimationStyle.Loop,
            },
            [UnitState.Falling]: {
                slp: 'units/mangonel-death',
                animationDuration: 1,
                style: AnimationStyle.Play,
            },
            [UnitState.Decaying]: {
                slp: 'units/mangonel-decay',
                animationDuration: 20,
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
        (Object.keys(unitDefinitions) as unknown as Unit[]).forEach(unit => {
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

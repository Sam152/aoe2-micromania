import Unit from './Unit';
import UnitState from './UnitState';
import {UnitStats} from '../../types';
import AnimationStyle from './AnimationStyle';

const aocUnitsData = require('./data/aoc_units.json');

const unitDefinitions: {
    [key in Unit]: {
        aocDataName: string;
        animations: {
            [key in UnitState]: {
                slp: string;
                underSlp?: string;
                animationDuration: number;
                style: AnimationStyle;
            }
        };
    }
} = {
    [Unit.Archer]: {
        aocDataName: 'Crossbowman',
        animations: {
            [UnitState.Idle]: {
                slp: 'xbow-stand',
                animationDuration: 2,
                style: AnimationStyle.Loop,
            },
            [UnitState.Firing]: {
                slp: 'xbow-firing',
                animationDuration: 0.7,
                style: AnimationStyle.Play,
            },
            [UnitState.Moving]: {
                slp: 'xbow-moving',
                animationDuration: 1,
                style: AnimationStyle.Loop,
            },
            [UnitState.Falling]: {
                slp: 'xbow-death',
                animationDuration: 1,
                style: AnimationStyle.Play,
            },
            [UnitState.Decaying]: {
                slp: 'xbow-decay',
                animationDuration: 20,
                style: AnimationStyle.Play,
            },
        },
    },
    [Unit.Mangonel]: {
        aocDataName: 'Mangonel',
        animations: {
            [UnitState.Idle]: {
                slp: 'mangonel-stand',
                animationDuration: 2,
                style: AnimationStyle.Loop,
            },
            [UnitState.Firing]: {
                slp: 'mangonel-firing',
                animationDuration: 1,
                style: AnimationStyle.Play,
            },
            [UnitState.Moving]: {
                slp: 'mangonel-moving',
                underSlp: 'mangonel-stand',
                animationDuration: 1,
                style: AnimationStyle.Loop,
            },
            [UnitState.Falling]: {
                slp: 'mangonel-death',
                animationDuration: 1,
                style: AnimationStyle.Play,
            },
            [UnitState.Decaying]: {
                slp: 'mangonel-decay',
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
        (Object.keys(unitDefinitions) as unknown as Unit[]).forEach((unit) => {
            const aocData = aocUnitsData.data.find((element: {
                [key: string]: any;
            }) => element.name === unitDefinitions[unit].aocDataName);

            this.units[unit] = {
                attackFrameDelay: parseFloat(aocData.ad),
                reloadTime: parseFloat(aocData.fr),
                movementRate: parseFloat(aocData.mr),
                hitPoints: parseFloat(aocData.hp),
                attackRange: parseFloat(aocData.ra),
                attackDamage: parseFloat(aocData.at),
                animations: unitDefinitions[unit].animations,
            };
        });
    }

    getUnit(unit: Unit): UnitStats {
        return this.units[unit];
    }
}

const unitMetadataFactory = new UnitMetadata();
export default unitMetadataFactory;

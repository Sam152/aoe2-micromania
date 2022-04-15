import Unit from './Unit';
import UnitState from './UnitState';
import {UnitStats} from '../../types';
import AnimationStyle from '../drawing/AnimationStyle';
const aocUnitsData = require('./data/aoc_units.json');

const unitDefinitions: {[key in Unit]: {
        aocDataName: string;
        animations: {
            [key in UnitState]: {
                slp: string;
                animationDuration: number;
                style: AnimationStyle;
            }
        };
    }} = {
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
                [UnitState.Patrolling]: {
                    slp: 'xbow-moving',
                    animationDuration: 1,
                    style: AnimationStyle.Loop,
                },
                [UnitState.Fallen]: {
                    slp: 'xbow-decay',
                    animationDuration: 3,
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
        (Object.keys(unitDefinitions) as unknown as Unit[]).forEach((unit) => {
            this.units = {};
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
            console.log(this.units[unit]);
        });
    }

    getUnit(unit: Unit): UnitStats {
        return this.units[unit];
    }
}

const unitMetadataFactory = new UnitMetadata();
export default unitMetadataFactory;

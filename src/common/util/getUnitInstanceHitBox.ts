import {Rectangle, UnitInstance} from '../../types';
import unitMetadataFactory from '../units/unitMetadataFactory';

export default function getUnitInstanceHitBox(unit: UnitInstance): Rectangle {
    const metadata = unitMetadataFactory.getUnit(unit.unitType);
    return {
        p1: unit.position.clone().add(metadata.hitBox.p1),
        p2: unit.position.clone().add(metadata.hitBox.p2),
    };
}

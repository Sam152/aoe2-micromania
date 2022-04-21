import UnitState from "../../units/UnitState";
import unitMetadataFactory from "../../units/unitMetadataFactory";
import config from "../../config";
import {GameState} from "../../../types";
import projectileMetadata from "../../units/projectileMetadataFactory";

let projectileIds = 0;

export default function fireProjectiles(state: GameState) {
    state.units
        .filter(({unitState}) => unitState === UnitState.Firing)
        .forEach((unit) => {
            const unitData = unitMetadataFactory.getUnit(unit.unitType);
            const firingFrame = Math.ceil(unitData.attackFrameDelay * config.ticksPerSecond);
            if (state.ticks - unit.unitStateStartedAt === Math.ceil(firingFrame)) {
                const targetingUnit = state.units.find(({id}) => id === unit.targetingUnit);
                const distance = unit.position.distanceTo(targetingUnit.position);

                state.projectiles.push({
                    id: projectileIds++,
                    ownedBy: unit.ownedByPlayer,
                    type: unitData.firesProjectileType,
                    startingPoint: unit.position.clone(),
                    destination: targetingUnit.position.clone(),
                    startingTick: state.ticks,
                    arrivingTick: Math.floor(state.ticks + (distance / projectileMetadata[unitData.firesProjectileType].speed)),
                    pathVector: targetingUnit.position.clone().sub(unit.position),
                    targeting: targetingUnit.id,
                });
            }
        });
}

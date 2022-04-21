import UnitState from "../../units/UnitState";
import unitMetadataFactory from "../../units/unitMetadataFactory";
import config from "../../config";
import {GameState} from "../../../types";
import projectileMetadata from "../../units/projectileMetadataFactory";
import hasValue from "../../util/hasValue";
import {setUnitMovementTowards} from "./moveTowardsCurrentWaypoint";
import calculateUnitMovementPerTick from "../../units/calculateUnitMovementPerTick";
import ticksForAnimation from "../../util/ticksForAnimation";

let projectileIds = 0;

export default function fireProjectiles(state: GameState) {

    // Check if a unit should be firing or moving towards it's target.
    state.units
        .filter(unit => hasValue(unit.targetingUnit) && unit.unitState !== UnitState.Firing)
        .forEach(unit => {
            const unitData = unitMetadataFactory.getUnit(unit.unitType);
            const targetUnit = state.units.find(({id}) => id === unit.targetingUnit);
            const unitInRange = unit.position.distanceTo(targetUnit.position) < unitData.attackRange * config.tileLength;

            if (unitInRange) {
                unit.movingDirection = null;

                if (unit.reloadsAt <= state.ticks) {
                    unit.unitStateStartedAt = state.ticks;
                    unit.unitState = UnitState.Firing;
                } else {
                    unit.unitState = UnitState.Idle;
                    unit.unitStateStartedAt = state.ticks;
                }

            } else {
                setUnitMovementTowards(unit, targetUnit.position);
                unit.position.add(calculateUnitMovementPerTick(unit));
            }
        });

    // Handle the firing component of the attacking phase.
    state.units
        .filter(({unitState}) => unitState === UnitState.Firing)
        .forEach((unit) => {
            const unitData = unitMetadataFactory.getUnit(unit.unitType);
            const firingFrame = Math.ceil(unitData.attackFrameDelay * config.ticksPerSecond);
            const idleFrame = ticksForAnimation(unitData.animations[UnitState.Firing].animationDuration);

            if (state.ticks - unit.unitStateStartedAt === firingFrame) {
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

                unit.reloadsAt = state.ticks + Math.ceil(unitData.reloadTime * config.ticksPerSecond);
            }

            if (state.ticks - unit.unitStateStartedAt === idleFrame) {
                unit.unitState = UnitState.Idle;
                unit.unitStateStartedAt = state.ticks;
            }
        });
}

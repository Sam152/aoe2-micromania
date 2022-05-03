import stopUnit from "./stopUnit";
import formationManager from "../../../units/formations/FormationManager";
import {setUnitMovementTowardsCurrentWaypoint} from "./setUnitMovementTowards";
import {GameState, UnitInstance} from "../../../../types";
import {Vector2} from "three/src/math/Vector2";

export default function moveTo(state: GameState, units: UnitInstance[], destination: Vector2) {
    units.forEach((unit) => stopUnit(unit));
    const positions = units.map((unit) => unit.position);

    formationManager.fromPopulation(units).form(positions, destination).forEach((formationPosition, index) => {
        units[index].waypoints = [formationPosition];
        setUnitMovementTowardsCurrentWaypoint(state, units[index]);
    });
}

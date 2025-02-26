import { GameState, UnitInstance, PlayerId } from "../../../../types";
import UnitState from "../../../units/UnitState";
import Unit from "../../../units/Unit";
import soundManager from "../../../sounds/SoundManger";
import spawnUnit from "../initiated/spawnUnit";
import averageVector from "../../../util/averageVector";
import { Vector2 } from "three/src/math/Vector2";

export default function registerUnitFallen(state: GameState, unit: UnitInstance, killedByPlayer?: PlayerId) {
  soundManager.unitFallen(state, unit);

  state.units = state.units.filter(({ id }) => unit.id !== id);
  state.units
    .filter(({ targetingUnit, convertingUnit }) => targetingUnit === unit.id || convertingUnit === unit.id)
    .forEach((unit) => {
      unit.targetingUnit = null;
      unit.movingDirection = null;
      unit.unitState = UnitState.Idle;
      unit.unitStateStartedAt = state.ticks;
    });
  
  // Track the player who caused the kill
  const fallenUnit = {
    id: unit.id,
    ownedByPlayer: unit.ownedByPlayer,
    unitType: unit.unitType,
    unitFallenAt: state.ticks,
    position: unit.position,
    direction: unit.direction,
    killedByPlayer,
  };
  
  state.fallenUnits.push(fallenUnit);
  
  // If a player killed this unit, update their kill count
  if (killedByPlayer && killedByPlayer !== unit.ownedByPlayer) {
    // Initialize the player's kill count if not already set
    if (!state.playerKills[killedByPlayer]) {
      state.playerKills[killedByPlayer] = 0;
    }
    
    // Increment the player's kill count
    state.playerKills[killedByPlayer]++;
    
    // Check if player has reached a kill milestone (every 5 kills)
    if (state.playerKills[killedByPlayer] % 5 === 0) {
      // Find all units owned by the player who made the kill
      const playerUnits = state.units.filter(unit => unit.ownedByPlayer === killedByPlayer);
      
      // Determine the spawn position - use average position of player's units
      let spawnPosition: Vector2;
      
      if (playerUnits.length > 0) {
        // Use the average position of all the player's units
        spawnPosition = averageVector(playerUnits.map(unit => unit.position));
      } else {
        // Fallback to the fallen unit's position if the player has no other units
        spawnPosition = unit.position;
      }
      
      // Spawn a monk at the calculated position
      spawnUnit(state, {
        position: spawnPosition,
        unitType: Unit.Monk,
        forPlayer: killedByPlayer,
      });
    }
  }
}

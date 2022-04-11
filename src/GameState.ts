import {Upgrades} from "./game/Upgrades.js";

export default function GameStateReducer(
    // action, previousState
) {
  return {
    // units: [],
    //
    // projectiles: [],

    players: [
      {
        upgrades: [
            Upgrades.Ballistics,
        ],
      },
      {
        upgrades: [
          Upgrades.Ballistics,
          Upgrades.Fletching,
        ],
      }
    ]
  };
}

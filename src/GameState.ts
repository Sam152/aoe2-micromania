import {Upgrades} from "./game/Upgrades";

export default function GameState(action, previousState) {
  return {
    units: [],

    projectiles: [],

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

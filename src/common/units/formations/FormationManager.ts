import { FormationType } from "./FormationType.ts";
import { LineFormation } from "./types/LineFormation.ts";
import { FormationInterface, UnitInstance } from "../../../types.d.ts";
import { SpreadFormation } from "./types/SpreadFormation.ts";
import { SplitFormation } from "./types/SplitFormation.ts";

class FormationManager {
  map: { [key: number]: FormationInterface };

  constructor() {
    this.map = {
      [FormationType.Line]: new LineFormation(),
      [FormationType.Spread]: new SpreadFormation(),
      [FormationType.Split]: new SplitFormation(),
    };
  }

  get(type: FormationType): FormationInterface {
    // @ts-ignore: FormationType enum values are used as numeric keys
    return this.map[type];
  }

  fromPopulation(units: UnitInstance[]): FormationInterface {
    if (units.length === 0) {
      return this.map[FormationType.Line];
    }

    const counts = units.reduce<{ [key: number]: FormationType }>((accumulator, unit) => {
      accumulator[unit.formation] = accumulator[unit.formation] ? accumulator[unit.formation] + 1 : 1;
      return accumulator;
    }, {});

    const populationFormation = Object.keys(counts).reduce((a, b) =>
      counts[a as unknown as number] > counts[a as unknown as number] ? a : b
    );
    // @ts-ignore: FormationType enum values are used as numeric keys
    return this.map[populationFormation];
  }
}

export const formationManager = new FormationManager();

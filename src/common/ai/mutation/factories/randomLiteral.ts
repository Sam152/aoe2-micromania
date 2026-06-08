import { DataType, TypeFromDataType } from "../../behaviourTree/dataType/dataTypes.ts";
import { randomArray } from "../../../util/randomArray.ts";

const literalGenerators: { [K in DataType]: () => TypeFromDataType<K> } = {
  boolean: () => Math.random() < 0.5,
  unitCount: () => Math.floor(Math.random() * 40),
  tickCount: () => Math.floor(Math.random() * 100),
  groupIndex: () => Math.floor(Math.random() * 4),
  unitType: () => randomArray(["ARCHER", "MANGO", "MONK"]),
  formation: () => randomArray(["SPREAD", "LINE", "SPLIT"]),
  vector: () => ({ x: Math.floor(Math.random() * 1000), y: Math.floor(Math.random() * 1000) }),
  vectorMagnitude: () => Math.floor(Math.random() * 500),
  vectorAngle: () => Math.floor(Math.random() * 360),
  unitId: () => {
    throw new Error("Generating random unit IDs does not make sense");
  },
};

export function randomLiteral<TDataType extends DataType>(dataType: TDataType): TypeFromDataType<TDataType> {
  return literalGenerators[dataType]();
}

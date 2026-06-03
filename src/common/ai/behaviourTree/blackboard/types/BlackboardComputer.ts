import { BlackboardDefinition, BlackboardKey } from "../blackboardDefinition.ts";
import { GameState } from "../../../../../types.ts";
import { BotState, BotUnitGroup } from "../../../integration/createBot.ts";
import { DataType, TypeFromDataType } from "../../dataType/dataTypes.ts";

type BlackboardValueResolverParams<TBlackboardKey extends BlackboardKey> = {
  state: GameState;
  botState: BotState;
  group: BotUnitGroup;
  params: {
    [TKey in keyof BlackboardDefinition[TBlackboardKey]["params"]]:
      BlackboardDefinition[TBlackboardKey]["params"][TKey] extends { dataType: infer D extends DataType }
        ? TypeFromDataType<D>
        : never;
  };
};

type BlackboardValueResolver<TDataType extends DataType, TBlackboardKey extends BlackboardKey> = (
  params: BlackboardValueResolverParams<TBlackboardKey>,
) => TypeFromDataType<TDataType> | undefined;

export type BlackboardComputer = {
  [TKey in BlackboardKey]: BlackboardValueResolver<BlackboardDefinition[TKey]["dataType"], TKey>;
};

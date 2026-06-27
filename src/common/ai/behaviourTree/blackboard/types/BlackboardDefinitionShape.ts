import { DataType, TypeFromDataType } from "../../dataType/dataTypes.ts";
import { GameState } from "../../../../../types.ts";
import { BotState, BotUnitGroup } from "../../../integration/createBot.ts";
import { ComputedTickState } from "../../../../state/computed/createComputedTickState.ts";

type BlackboardParams = Record<string, { [K in DataType]: BlackboardValueParam<K> }[DataType]>;

export type BlackboardValueResolverParams<
  TParams extends BlackboardParams,
> = {
  computed: ComputedTickState;
  state: GameState;
  botState: BotState;
  group: BotUnitGroup;
  params: {
    [TKey in keyof TParams]: TParams[TKey] extends { dataType: infer D extends DataType } ? TypeFromDataType<D>
      : never;
  };
};

export type BlackboardValueResolver<TDataType extends DataType, TParams extends BlackboardParams> = (
  params: BlackboardValueResolverParams<TParams>,
) => TypeFromDataType<TDataType> | undefined;

export type BlackboardValueParam<TDataType extends DataType> = {
  dataType: TDataType;
  default: TypeFromDataType<TDataType>;
};

export type BlackboardValueDefinition<
  TDataType extends DataType,
  TParams extends BlackboardParams,
> = {
  dataType: TDataType;
  params: TParams;
  resolve: BlackboardValueResolver<TDataType, TParams>;
};

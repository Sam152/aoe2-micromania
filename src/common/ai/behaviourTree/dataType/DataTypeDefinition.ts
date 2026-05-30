export type DataTypeDefinition<TDataType, TMutationRequirements> = {
  id: string;
  comparitors: Record<string, (a: TDataType, b: TDataType) => boolean>;
};

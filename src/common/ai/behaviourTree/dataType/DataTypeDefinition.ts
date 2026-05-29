export type DataTypeDefinition<TDataType, TMutationRequirements> = {
  id: string;
  conditions: Record<string, (a: TDataType, b: TDataType) => boolean>;
};

/**
 * TDataType requires use in the body of this type for inference elsewhere
 * to work.
 */
export type DataTypeDefinition<TDataType, TMutationRequirements> = {
  id: string;
  defaultValue: TDataType;
};

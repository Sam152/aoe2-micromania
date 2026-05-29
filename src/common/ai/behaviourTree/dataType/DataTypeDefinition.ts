export type DataTypeDefinition<TDataType> = {
  id: string;
  conditions: Record<string, (a: TDataType, b: TDataType) => boolean>;
};

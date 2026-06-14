import postgres from "postgres";
import { sql } from "../connection.ts";

export async function retireGeneration(
  generation: number,
  tx: postgres.Sql | postgres.TransactionSql = sql,
): Promise<void> {
  await tx`UPDATE bots SET is_active = FALSE WHERE generation = ${generation}`;
}

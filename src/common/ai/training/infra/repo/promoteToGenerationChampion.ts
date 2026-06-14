import postgres from "postgres";
import { sql } from "../connection.ts";

export async function promoteToGenerationChampion(
  botId: number,
  tx: postgres.Sql | postgres.TransactionSql = sql,
): Promise<void> {
  await tx`UPDATE bots SET generation_champion = TRUE WHERE id = ${botId}`;
}

import postgres from "postgres";
import { sql } from "../connection.ts";

export async function retireAllBots(
  tx: postgres.Sql | postgres.TransactionSql = sql,
): Promise<void> {
  await tx`UPDATE bots SET is_active = FALSE`;
}

if (import.meta.main) {
  retireAllBots().then(() => sql.end());
}

import postgres from "postgres";
import { sql } from "../connection.ts";

export async function truncateBotActivations(
  botId: number,
  tx: postgres.Sql | postgres.TransactionSql = sql,
): Promise<void> {
  await tx`DELETE FROM activations WHERE bot_id = ${botId}`;
}

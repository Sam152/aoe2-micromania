import postgres from "postgres";
import { sql } from "../connection.ts";
import { Bot, botRowToBot } from "./utils/botRowToBot.ts";

export async function promoteChampion(
  tx: postgres.Sql | postgres.TransactionSql = sql,
): Promise<Bot> {
  const [row] = await tx`
    UPDATE bots
    SET generation_champion = TRUE
    WHERE id = (SELECT id FROM bots WHERE is_active = TRUE ORDER BY elo DESC, id LIMIT 1)
    RETURNING *`;
  return botRowToBot(row);
}

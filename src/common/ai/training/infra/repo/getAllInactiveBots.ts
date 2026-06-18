import { sql } from "../connection.ts";
import { Bot, botRowToBot } from "./utils/botRowToBot.ts";

export type { Bot };

export async function getAllInactiveBots(): Promise<Bot[]> {
  const rows = await sql`
    SELECT *
    FROM bots
    WHERE is_active = false
    ORDER BY id DESC`;
  return rows.map(botRowToBot);
}

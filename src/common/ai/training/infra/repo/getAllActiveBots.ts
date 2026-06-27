import { sql } from "../connection.ts";
import { Bot, botRowToBot } from "./utils/botRowToBot.ts";

export async function getAllActiveBots(): Promise<Bot[]> {
  const rows = await sql`SELECT * FROM bots WHERE is_active = TRUE ORDER BY generation DESC`;
  return rows.map(botRowToBot);
}

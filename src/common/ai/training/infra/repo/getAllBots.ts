import { sql } from "../connection.ts";
import { Bot, botRowToBot } from "./utils/botRowToBot.ts";

export type { Bot };

export async function getAllBots(): Promise<Bot[]> {
  const rows = await sql`
      SELECT *
      FROM bots
      ORDER BY id DESC`;
  return rows.map(botRowToBot);
}

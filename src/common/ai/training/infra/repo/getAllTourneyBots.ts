import { sql } from "../connection.ts";
import { Bot, botRowToBot } from "./utils/botRowToBot.ts";

export type { Bot };

export async function getAllTourneyBots(): Promise<Bot[]> {
  const rows = await sql`
      SELECT *
      FROM bots
      WHERE generation > 0
      ORDER BY id DESC`;
  return rows.map(botRowToBot);
}

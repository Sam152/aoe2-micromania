import { sql } from "../connection.ts";
import { Bot, botRowToBot } from "./utils/botRowToBot.ts";

export async function getAllChampions(): Promise<Bot[]> {
  const rows = await sql`
      SELECT *
      FROM bots
      WHERE generation_champion = true
      ORDER BY generation DESC, id`;
  return rows.map(botRowToBot);
}

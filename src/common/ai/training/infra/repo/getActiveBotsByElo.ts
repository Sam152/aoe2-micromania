import { sql } from "../connection.ts";
import { Bot, botRowToBot } from "./utils/botRowToBot.ts";

export type { Bot };

export async function getActiveBotsByElo(): Promise<Bot[]> {
  const rows = await sql`
      SELECT *
      FROM bots
      WHERE is_active = true
      --  Order ELO, then bot_name, to distribute bots evenly amongst
      -- generations, when ELOs are reset.
      ORDER BY elo DESC, bot_name DESC, id`;
  return rows.map(botRowToBot);
}

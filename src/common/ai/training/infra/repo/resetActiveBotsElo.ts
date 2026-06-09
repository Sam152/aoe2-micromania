import { sql } from "../connection.ts";

export async function resetActiveBotsElo(): Promise<void> {
  await sql`UPDATE bots SET elo = DEFAULT WHERE is_active = true`;
}

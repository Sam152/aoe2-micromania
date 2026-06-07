import { sql } from "../connection.ts";

export async function getFewestNumberOfGamesPlayedByActiveBots(): Promise<number> {
  const [{ min }] = await sql<[{ min: number | null }]>`
    SELECT MIN(wins + losses + draws) as min FROM bots WHERE is_active = TRUE
  `;
  return min ?? 0;
}

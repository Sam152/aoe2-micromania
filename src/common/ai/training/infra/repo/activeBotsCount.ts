import { sql } from "../connection.ts";

export async function activeBotsCount(): Promise<number> {
  const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM bots WHERE is_active = TRUE`;
  return count;
}

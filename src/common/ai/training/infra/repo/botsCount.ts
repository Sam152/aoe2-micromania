import { sql } from "../connection.ts";

export async function botsCount(): Promise<number> {
  const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM bots`;
  return count;
}

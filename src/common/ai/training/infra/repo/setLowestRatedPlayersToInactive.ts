import { sql } from "../connection.ts";

export async function setLowestRatedPlayersToInactive(count: number): Promise<void> {
  await sql`
    UPDATE bots SET is_active = FALSE
    WHERE id IN (
      SELECT id FROM bots WHERE is_active = TRUE ORDER BY elo ASC LIMIT ${count}
    )
  `;
}

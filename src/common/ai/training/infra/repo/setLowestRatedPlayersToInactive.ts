import { sql } from "../connection.ts";

export async function setLowestRatedPlayersToInactive(count: number): Promise<void> {
  await sql`
    UPDATE bots
    SET is_active = FALSE
    WHERE id IN (SELECT id
                 FROM bots
                 WHERE
                   -- Always keep the seed bot for old times sake, see how it performs
                   id != 1
                   AND is_active = TRUE
                 ORDER BY elo ASC
                 LIMIT ${count})
  `;
}

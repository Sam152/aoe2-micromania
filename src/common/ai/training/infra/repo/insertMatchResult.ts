import { sql } from "../connection.ts";

interface InsertMatchResultParams {
  botId: number;
  opponentId: number;
  tickCount: number;
  wasWinner: boolean;
  matchElo: number;
  eloDelta: number;
}

export async function insertMatchResult(params: InsertMatchResultParams): Promise<number> {
  const [{ id }] = await sql`
    INSERT INTO match_results (bot_id, opponent_id, tick_count, was_winner, match_elo, elo_delta)
    VALUES (${params.botId}, ${params.opponentId}, ${params.tickCount}, ${params.wasWinner}, ${params.matchElo}, ${params.eloDelta})
    RETURNING id
  `;
  return id;
}

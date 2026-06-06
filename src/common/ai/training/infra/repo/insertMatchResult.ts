import { sql } from "../connection.ts";
import { GameState } from "../../../../../types.ts";
import { GameStateAction } from "../../../../../types.ts";

interface InsertMatchResultParams {
  player1BotId: number;
  player2BotId: number;
  actions: GameStateAction[];
  finalState: GameState;
  player1Hp: number;
  player2Hp: number;
  tickCount: number;
}

export async function insertMatchResult(params: InsertMatchResultParams): Promise<number> {
  const [{ id }] = await sql`
    INSERT INTO games (player_1, player_2, actions, final_state, player_1_hp, player_2_hp, tick_count)
    VALUES (
      ${params.player1BotId},
      ${params.player2BotId},
      ${sql.json(params.actions as any)},
      ${sql.json(params.finalState as any)},
      ${params.player1Hp},
      ${params.player2Hp},
      ${params.tickCount}
    )
    RETURNING id
  `;
  return id;
}

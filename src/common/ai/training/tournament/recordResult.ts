import { GameResult } from "../utils/determineWinner.ts";
import { Bot } from "../infra/repo/getActiveBotsByElo.ts";
import { computeEloChange } from "../utils/computeEloChange.ts";
import { sql } from "../infra/connection.ts";

// Draws might mean bots are just sat idle. Apply a penalty to both.
const DRAW_ELO_IMPACT = [-16, -16];

export async function recordResult({ players, result }: { players: [Bot, Bot]; result: GameResult }) {
  const [p1, p2] = players;
  const winner = result.winner === "DRAW" ? null : result.winner;
  const [elo1Delta, elo2Delta] = winner ? computeEloChange([p1.elo, p2.elo], winner) : DRAW_ELO_IMPACT;

  await sql.begin(async (tx) => {
    await tx`
      INSERT INTO games (player_1, player_2, actions, final_state, player_1_hp, player_2_hp, tick_count)
      VALUES (
        ${p1.id},
        ${p2.id},
        ${sql.json(result.actionLog as any)},
        ${sql.json(result.state as any)},
        ${result.hp[1]},
        ${result.hp[2]},
        ${result.state.ticks}
      )
    `;

    await tx`
      UPDATE bots SET
        elo = elo + ${elo1Delta},
        wins = wins + ${result.winner === 1 ? 1 : 0},
        losses = losses + ${result.winner === 2 ? 1 : 0}
      WHERE id = ${p1.id}
    `;

    await tx`
      UPDATE bots SET
        elo = elo + ${elo2Delta},
        wins = wins + ${result.winner === 2 ? 1 : 0},
        losses = losses + ${result.winner === 1 ? 1 : 0}
      WHERE id = ${p2.id}
    `;
  });
}

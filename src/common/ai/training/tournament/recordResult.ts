import { GameResult } from "../utils/determineWinner.ts";
import { Bot } from "../infra/repo/getActiveBotsByElo.ts";
import { computeEloChange } from "../utils/computeEloChange.ts";
import { sql } from "../infra/connection.ts";
import { upsertActivations } from "../infra/repo/upsertActivations.ts";

// Draws might mean bots are just sat idle. Apply a penalty to both.
const DRAW_ELO_IMPACT = [-16, -16];

export async function recordResult({ players, result }: { players: [Bot, Bot]; result: GameResult }) {
  const [p1, p2] = players;
  const winner = result.winner === "DRAW" ? null : result.winner;
  const [elo1Delta, elo2Delta] = winner ? computeEloChange([p1.elo, p2.elo], winner) : DRAW_ELO_IMPACT;

  await upsertActivations(p1.id, result.bots.player1.activations);
  await upsertActivations(p2.id, result.bots.player2.activations);

  await sql.begin(async (tx) => {
    await tx`
      INSERT INTO match_results (bot_id, opponent_id, tick_count, was_winner, match_elo, elo_delta)
      VALUES
        (${p1.id}, ${p2.id}, ${result.ticks}, ${winner === 1}, ${p1.elo}, ${elo1Delta}),
        (${p2.id}, ${p1.id}, ${result.ticks}, ${winner === 2}, ${p2.elo}, ${elo2Delta})
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

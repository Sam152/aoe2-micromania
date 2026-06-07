import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";

export type Bot = {
  id: number;
  botName: string;
  tree: UnitAwareBehaviourTree;
  elo: number;
  wins: number;
  losses: number;
  draws: number;
  gamesSinceLastPrune: number;
};

export async function getActiveBotsByElo(): Promise<Bot[]> {
  const rows = await sql`SELECT * FROM bots WHERE is_active = true ORDER BY elo DESC, id`;
  return rows.map((row) => ({
    id: row.id,
    botName: row.bot_name,
    tree: row.tree as UnitAwareBehaviourTree,
    elo: row.elo,
    wins: row.wins,
    losses: row.losses,
    draws: row.draws,
    gamesSinceLastPrune: row.games_since_last_prune,
  }));
}

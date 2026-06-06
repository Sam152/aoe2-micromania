import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";

export type Bot = {
  id: number;
  botName: string;
  tree: UnitAwareBehaviourTree;
  elo: number;
  wins: number;
  losses: number;
};

export async function getAllBotsByElo(): Promise<Bot[]> {
  const rows = await sql`SELECT * FROM bots ORDER BY elo, id`;
  return rows.map((row) => ({
    id: row.id,
    botName: row.bot_name,
    tree: row.tree as UnitAwareBehaviourTree,
    elo: row.elo,
    wins: row.wins,
    losses: row.losses,
  }));
}

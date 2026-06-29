import postgres from "postgres";
import { UnitAwareBehaviourTree } from "../../../../behaviourTree/BehaviourTree.ts";

export type Bot = {
  id: number;
  botName: string;
  tree: UnitAwareBehaviourTree;
  groupName: string;
  elo: number;
  wins: number;
  losses: number;
  draws: number;
  gamesSinceLastPrune: number;
  generation: number;
  isActive: boolean;
};

export function botRowToBot(row: postgres.Row): Bot {
  return {
    id: Number(row.id),
    botName: row.bot_name,
    tree: row.tree as UnitAwareBehaviourTree,
    elo: row.elo,
    wins: row.wins,
    losses: row.losses,
    draws: row.draws,
    gamesSinceLastPrune: row.games_since_last_prune,
    groupName: row.group_name,
    generation: row.generation,
    isActive: row.is_active,
  };
}

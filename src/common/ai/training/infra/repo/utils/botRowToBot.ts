import postgres from "postgres";
import { UnitAwareBehaviourTree } from "../../../../behaviourTree/BehaviourTree.ts";

export type Bot = {
  id: number;
  botName: string;
  tree: UnitAwareBehaviourTree;
  iterationCount: number;
  groupName: string;
  elo: number;
  wins: number;
  losses: number;
  draws: number;
  generation: number;
  isActive: boolean;
};

export function botRowToBot(row: postgres.Row): Bot {
  return {
    id: Number(row.id),
    botName: row.bot_name,
    tree: row.tree as UnitAwareBehaviourTree,
    iterationCount: row.iteration_count,
    elo: row.elo,
    wins: row.wins,
    losses: row.losses,
    draws: row.draws,
    groupName: row.group_name,
    generation: row.generation,
    isActive: row.is_active,
  };
}

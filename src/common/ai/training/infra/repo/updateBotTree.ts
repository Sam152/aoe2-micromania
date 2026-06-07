import postgres from "postgres";
import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";

export async function updateBotTree(
  botId: number,
  tree: UnitAwareBehaviourTree,
  tx: postgres.Sql | postgres.TransactionSql = sql,
): Promise<void> {
  await tx`UPDATE bots SET tree = ${tx.json(tree)}, games_since_last_prune = 0 WHERE id = ${botId}`;
}

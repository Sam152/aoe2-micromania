import postgres from "postgres";
import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";
import { generateName, left } from "@criblinc/docker-names";
import { randomArray } from "../../../../util/randomArray.ts";

export async function insertBot(
  tree: UnitAwareBehaviourTree,
  generation: number,
  groupName: string,
  tx: postgres.Sql | postgres.TransactionSql = sql,
): Promise<number> {
  const botName = `${randomArray(left)}-${generateName()}`;
  const [{ id }] = await tx`INSERT INTO bots (bot_name, tree, generation, group_name) VALUES (${botName}, ${
    tx.json(tree)
  }, ${generation}, ${groupName}) RETURNING id`;
  return id;
}

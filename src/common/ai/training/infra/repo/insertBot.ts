import { generateNameWithNumber } from "@criblinc/docker-names";
import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";

export async function insertBot(tree: UnitAwareBehaviourTree): Promise<number> {
  const botName = generateNameWithNumber();
  const [{ id }] = await sql`INSERT INTO bots (bot_name, tree) VALUES (${botName}, ${sql.json(tree)}) RETURNING id`;
  return id;
}

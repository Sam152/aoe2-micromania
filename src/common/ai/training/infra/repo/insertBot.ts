import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";
import { generateName } from "@criblinc/docker-names";

export async function insertBot(tree: UnitAwareBehaviourTree): Promise<number> {
  const botName = generateName();
  const [{ id }] = await sql`INSERT INTO bots (bot_name, tree) VALUES (${botName}, ${sql.json(tree)}) RETURNING id`;
  return id;
}

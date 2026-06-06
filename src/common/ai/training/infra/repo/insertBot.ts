import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";

export async function insertBot(tree: UnitAwareBehaviourTree): Promise<number> {
  const [{ id }] = await sql`INSERT INTO bots (tree) VALUES (${sql.json(tree)}) RETURNING id`;
  return id;
}

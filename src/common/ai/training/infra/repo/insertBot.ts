import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";
import { generateName, left } from "@criblinc/docker-names";
import { randomArray } from "../../../../util/randomArray.ts";

export async function insertBot(tree: UnitAwareBehaviourTree, generation: number): Promise<number> {
  const botName = `${randomArray(left)}-${generateName()}`;
  const [{ id }] = await sql`INSERT INTO bots (bot_name, tree, generation) VALUES (${botName}, ${
    sql.json(tree)
  }, ${generation}) RETURNING id`;
  return id;
}

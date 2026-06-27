import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";
import { generateName, left } from "@criblinc/docker-names";
import { randomArray } from "../../../../util/randomArray.ts";

export async function insertGenerationZero(tree: UnitAwareBehaviourTree): Promise<void> {
  const botName = `${randomArray(left)}-${generateName()}`;
  const groupName = generateName();
  await sql`
    INSERT INTO bots (bot_name, tree, generation, is_active, group_name)
    VALUES (${botName}, ${sql.json(tree)}, 0, TRUE, ${groupName})`;
}

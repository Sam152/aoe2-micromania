import { sql } from "../connection.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";
import { generateName, left } from "@criblinc/docker-names";
import { randomArray } from "../../../../util/randomArray.ts";

export async function insertGenerationZero(tree: UnitAwareBehaviourTree): Promise<void> {
  const botName = `${randomArray(left)}-${generateName()}`;
  await sql`
    INSERT INTO bots (bot_name, tree, generation, generation_champion, is_active)
    VALUES (${botName}, ${sql.json(tree)}, 0, TRUE, FALSE)`;
}

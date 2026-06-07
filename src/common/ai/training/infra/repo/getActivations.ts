import { sql } from "../connection.ts";
import { createUnitTypeActivations, UnitTypeActivations } from "../../../integration/createBot.ts";
import { UnitType } from "../../../../units/UnitType.ts";

export async function getActivations(botId: number): Promise<UnitTypeActivations> {
  const rows = await sql<{ path: string; unit_type: UnitType }[]>`
    SELECT path, unit_type FROM activations WHERE bot_id = ${botId}
  `;

  const result = createUnitTypeActivations();
  for (const { path, unit_type } of rows) {
    result[unit_type].add(path);
  }
  return result;
}

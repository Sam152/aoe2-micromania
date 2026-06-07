import { sql } from "../connection.ts";
import { UnitTypeActivations } from "../../../integration/createBot.ts";

export async function upsertActivations(botId: number, activations: UnitTypeActivations): Promise<void> {
  const rows = Object.entries(activations).flatMap(([unitType, paths]) =>
    [...paths].map((path) => ({ bot_id: botId, path, unit_type: Number(unitType) }))
  );
  if (rows.length === 0) {
    return;
  }
  await sql`
    INSERT INTO activations ${sql(rows, "bot_id", "path", "unit_type")}
    ON CONFLICT (bot_id, path, unit_type) DO NOTHING
  `;
}

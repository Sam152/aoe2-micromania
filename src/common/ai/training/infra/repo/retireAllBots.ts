import { sql } from "../connection.ts";

export async function retireAllBots(): Promise<void> {
  await sql`UPDATE bots SET is_active = FALSE`;
}

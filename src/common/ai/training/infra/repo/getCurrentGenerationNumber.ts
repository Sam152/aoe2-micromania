import { sql } from "../connection.ts";

export async function getCurrentGenerationNumber(): Promise<number> {
  const [{ max }] = await sql<[{ max: number | null }]>`SELECT MAX(generation) as max FROM bots`;
  return max ?? 0;
}

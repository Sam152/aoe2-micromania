import { sql } from "../connection.ts";
import { Bot, botRowToBot } from "./utils/botRowToBot.ts";
import { params } from "../../params.ts";

export type { Bot };

const { TRAIT_BORROWING_MINIMUM_NUMBER_GROUPS, TRAIT_BORROWING_HIGHEST_N_BOTS_TO_BORROW_FROM } = params;

/**
 * Get all bots that can be borrowed from, for the purposes of genetic mutation.
 */
export async function getAllBorrowBots(): Promise<Bot[]> {
  const rows = await sql`
    SELECT *
    FROM bots
    -- TODO
    WHERE 1 = 2
    ORDER BY id DESC`;
  return rows.map(botRowToBot);
}

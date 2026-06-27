import { sql } from "../connection.ts";
import { Bot, botRowToBot } from "./utils/botRowToBot.ts";
import { params } from "../../params.ts";

export type { Bot };

const { TRAIT_BORROWING_MINIMUM_NUMBER_GROUPS, TRAIT_BORROWING_HIGHEST_N_BOTS_TO_BORROW_FROM } = params;

export async function getAllBorrowBots(): Promise<Bot[]> {
  const rows = await sql`
    SELECT *
    FROM bots
    WHERE is_active = false
      AND (SELECT COUNT(DISTINCT group_name) FROM bots) >= ${TRAIT_BORROWING_MINIMUM_NUMBER_GROUPS}
    ORDER BY elo DESC
    LIMIT ${TRAIT_BORROWING_HIGHEST_N_BOTS_TO_BORROW_FROM}`;
  return rows.map(botRowToBot);
}

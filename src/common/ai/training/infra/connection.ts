import postgres from "postgres";

export const sql = postgres("postgres://postgres:postgres@localhost:8345/postgres");

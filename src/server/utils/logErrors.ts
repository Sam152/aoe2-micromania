import process from "node:process";
import { logger } from "../logger.ts";

export function logErrors() {
  process.on("unhandledRejection", logAndExit);
  process.on("uncaughtException", logAndExit);
}

function logAndExit(reason: unknown) {
  const errorMessage = reason instanceof Error ? `${reason.message}: ${reason.stack}` : JSON.stringify(reason);
  logger.error(`Unhandled error occurred: ${errorMessage}`);
  process.exit();
}

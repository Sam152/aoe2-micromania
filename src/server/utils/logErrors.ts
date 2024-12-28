export function logErrors() {
  process.on("unhandledRejection", logAndExit);
  process.on("uncaughtException", logAndExit);
}

function logAndExit(reason: unknown) {
  const errorMessage = reason instanceof Error ? reason.message : JSON.stringify(reason);
  console.error(`Unhandled error occurred: ${errorMessage}`);
  process.exit();
}

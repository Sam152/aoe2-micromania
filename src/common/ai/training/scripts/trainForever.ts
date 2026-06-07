import { trainingParams } from "../trainingParams.ts";

const { NEXT_GENERATION_CHURN_PERCENTAGE, TARGET_TOTAL_BOTS_IN_POOL, NEXT_GENERATION_MINIMUM_GAMES_PLAYED } =
  trainingParams;

async function trainForever() {
  // Start evolution.
  // Calculate how many games must be played to reach the evolve threshold.
  // Run the tournaments N times.
  // Run the pruner.
  // Repeat.
}

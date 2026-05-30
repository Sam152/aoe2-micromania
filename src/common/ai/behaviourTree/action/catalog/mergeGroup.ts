import { ActionDefinition } from "../ActionDefinition.ts";

/**
 * This is a meta action that acts on the bot state, not something that dispatches a game action.
 */
export const mergeGroup = {
  type: "MERGE_GROUP",
  params: {},
  execute: () => {},
} as const satisfies ActionDefinition;

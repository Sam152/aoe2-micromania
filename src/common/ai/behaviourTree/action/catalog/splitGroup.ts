import { defineAction } from "../ActionDefinition.ts";

/**
 * This is a meta action that acts on the bot state, not something that dispatches a game action.
 */
export const splitGroup = defineAction({
  type: "SPLIT_GROUP",
  params: {},
  execute: () => undefined,
});

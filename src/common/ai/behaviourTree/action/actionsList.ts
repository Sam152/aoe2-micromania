import { patrol } from "./patrol.ts";
import { idle } from "./idle.ts";
import { ActionDefinition } from "./ActionDefinition.ts";

export const actionsList = {
  PATROL: patrol,
  IDLE: idle,
} as const satisfies Record<string, ActionDefinition>;

export type ActionsList = typeof actionsList;

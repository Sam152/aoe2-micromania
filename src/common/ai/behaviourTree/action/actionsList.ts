import { patrol } from "./catalog/patrol.ts";
import { idle } from "./catalog/idle.ts";
import { ActionDefinition } from "./ActionDefinition.ts";

export const actionsList = {
  PATROL: patrol,
  IDLE: idle,
} as const satisfies Record<string, ActionDefinition>;

export type ActionsList = typeof actionsList;

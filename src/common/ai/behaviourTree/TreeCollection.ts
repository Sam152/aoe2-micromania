import { BehaviourTree } from "./BehaviourTree.ts";

export type BehaviourTreeType = "ARCHER_GROUP" | "MANGO" | "MONK";

type TreeCollection = Record<BehaviourTreeType, BehaviourTree>;

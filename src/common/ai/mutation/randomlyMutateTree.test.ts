import { describe, it } from "@std/testing/bdd";
import { randomlyMutateTree } from "./randomlyMutateTree.ts";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { BehaviourTreeNode, UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";

describe("randomlyMutateTree", () => {
  it("randomlyMutatedTree", () => {
    dumpTree("randomlyMutatedTree", {
      [UnitType.Archer]: randomlyMutateTree({ count: 5000, tree: sampleTree[UnitType.Archer] }),
      [UnitType.Mangonel]: randomlyMutateTree({ count: 5000, tree: sampleTree[UnitType.Mangonel] }),
      [UnitType.Monk]: randomlyMutateTree({ count: 5000, tree: sampleTree[UnitType.Monk] }),
    });
  });

  it("randomlyGeneratedTree", () => {
    const emptyTree: BehaviourTreeNode = { nodeType: "selector", nodes: [] };

    dumpTree("randomlyGeneratedTree", {
      [UnitType.Archer]: randomlyMutateTree({ count: 5000, tree: emptyTree }),
      [UnitType.Mangonel]: randomlyMutateTree({ count: 5000, tree: emptyTree }),
      [UnitType.Monk]: randomlyMutateTree({ count: 5000, tree: emptyTree }),
    });
  });
});

function dumpTree(name: string, trees: UnitAwareBehaviourTree) {
  const indent = (json: string) => json.replace(/\n/g, "\n  ");

  Deno.writeTextFileSync(
    new URL(`../behaviourTree/__fixtures__/${name}.ts`, import.meta.url),
    [
      `import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";`,
      `import { UnitType } from "../../../units/UnitType.ts";`,
      ``,
      `export const ${name}: UnitAwareBehaviourTree = {`,
      `  [UnitType.Archer]: ${indent(JSON.stringify(trees[UnitType.Archer], null, 2))},`,
      `  [UnitType.Mangonel]: ${indent(JSON.stringify(trees[UnitType.Mangonel], null, 2))},`,
      `  [UnitType.Monk]: ${indent(JSON.stringify(trees[UnitType.Monk], null, 2))},`,
      `};`,
      ``,
    ].join("\n"),
  );
}
